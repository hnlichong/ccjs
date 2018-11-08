/** opts: Object 
 * 文档上传的参数
 * {
 *  files: File, 上传文件
 *  progress: Function, 进度回调函数
 *  error: Function, 失败回调函数
 *  success: Function, 成功回调函数
 * }
 * 
*/ 

import axios from 'axios';

const FileUpload = function(opts) {
    this.opts = Object.assign({}, opts)
    this.init();
};

FileUpload.prototype = {
    init() {
        this.file = this.opts.files;
        this.chunkSize = 10 * 1000 * 1000; // 10M 单次上传块的大小
        this.chunkCount = Math.floor(this.file.size / this.chunkSize);
        this.curChunk = 0;
        this.fileKey = '';
        this.uploadId = '';
        // 是否终止读文件
        this.enableRead = true;
        // 是否可以继续上传
        this.enableUpload = true;
        this.loading = false;
        this.blobBuffer = [];
        if (this.chunkCount === 0) {
            // 文件大小小于10M
            this.isLastChunk = true;
            this.readBlob();
        } else {
            // 首次上传判断是否为最后一块
            this.isLastChunk = this.curChunk === this.chunkCount - 1;
            this.curChunk >= this.chunkCount ? this.uploadDone() : this.readBlob();
        }
    },
    readBlob() {
        if (!this.enableRead) {
            return false;
        }
        let firstIndex = this.curChunk * this.chunkSize;
        let lastIndex = this.isLastChunk ? this.file.size : (this.curChunk + 1) * this.chunkSize;
        let blob = this.file.slice(firstIndex, lastIndex);
        this.loadSuccess(blob);
    },
    loadSuccess(blob) {
        let fileObj = {
            part_data: blob,
            part_number: this.curChunk,
            is_last: this.isLastChunk,
            file_key: this.fileKey,
            upload_id: this.upload_id
        };
        this.blobBuffer.push(fileObj);
        this.uploadFile();
        if (this.curChunk + 1 < this.chunkCount) {
            this.curChunk += 1;
            this.isLastChunk = this.curChunk + 1 === this.chunkCount;
            this.readBlob();
        }
    },
    uploadFile() {
        let _this = this;
        // 顺序上传分块文件
        function upload() {
            if (_this.loading) {
                return;
            }
            if (!_this.enableUpload) {
                return;
            }
            let fileObj = _this.blobBuffer.shift();
            if (!fileObj) {
                _this.loading = false;
                return;
            }
            _this.loading = true;
            fileObj.upload_id = _this.uploadId;
            fileObj.file_key = _this.fileKey;
            let data = new FormData();
            for (let i in fileObj) {
                data.append(i, fileObj[i]);
            }
            axios({
                url: '/v/api/resource/upload/',
                method: 'POST',
                processData: false,
                cache: false,
                contentType: false,
                data: data
            }).then(({data}) => {
                let resp = data
                let code = resp.code, vData = resp.data;
                if (code !== 0) {
                    _this.uploadError(resp.msg || '上传失败');
                    return;
                }
                if (!_this.fileKey) {
                    _this.uploadId = vData.upload_id;
                    _this.fileKey = vData.file_key;
                }
                if (fileObj.is_last) {
                    _this.uploadDone();
                } else {
                    _this.uploadProgress(fileObj.part_number + 1);
                }
                _this.loading = false;
                upload();
            }).catch(function (error) {
                _this.uploadError(error.msg || '上传失败');
                _this.enableRead = false;
            });
        }
        if (this.loading) {
            return;
        }
        if (!this.loading) {
            upload();
        }
    },
    uploadDone() {
        if (this.opts.success) {
            this.opts.success({
                name: this.opts.files.name,
                file_key: this.fileKey,
                uploadId: this.uploadId
            })
        }
    },
    uploadProgress(progress) {
        let percent = (progress / this.chunkCount).toFixed(2);
        if (this.opts.progress) {
            this.opts.progress({
                progress: percent,
                file_key: this.fileKey,
                uploadId: this.uploadId
            })
        }
        
    },
    uploadError(msg) {
        if (this.opts.error) {
            this.opts.error({
                msg: msg
            })
        }  
    },
    cancle() {
        // 取消上传
        this.enableUpload = false;
        this.enableRead = false;
    }
};


module.exports = {
    create: opts => {
        return new FileUpload(opts);
    }
};
