<template>
  <div
    class="image-upload">
    <el-upload
      ref="upload"
      :action="Api.upload_image"
      :disabled="loading || disabled"
      :auto-upload="false"
      :on-change="handleChange"
      :file-list="fileList"
      :show-file-list="false"
      :on-success="handleUploadSuccess"
      :on-error="handleUploadError"
      name="Filedata"
      accept="image/png,image/jpeg">
      <el-button
        type="text"
        size="small"
        :loading="loading"
        :disabled="disabled"
      >上传图片</el-button>
    </el-upload>
  </div>
</template>
<script>
import Api from 'src/const/api.js';
import {
  fileToImage, imageToCanvas, compressImage, canvasToFile,
} from 'src/utils/canvas.js';

export default {
  name: 'image-upload',
  props: {
    disabled: {
      default: false,
    },
    // 尺寸限制
    dimensions: {
      default: null,
      // default() {
      //   return {
      //     min: {w: undefined, h: undefined},
      //     max: {w: undefined, h: undefined},
      //     ratio: undefined
      //   }
      // }
    },
    // 是否进行缩放
    scale: {
      default: null,
      // default() {
      //   return {
      //     // 'no-scale', 'stretch', 'cover', 'contain'
      //     mode: 'no-scale',
      //     position: 'center',
      //     // destination width, height
      //     dw: undefined,
      //     dh: undefined,
      //   }
      // }
    },
    // 文件体积限制
    size: {
      default: null,
      // default() {
      //   return {
      //     min: 0,
      //     max: 1024 * 1024,
      //   }
      // }
    },
    // 是否进行压缩
    compress: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      Api,
      loading: false,
      fileList: [],
    };
  },
  methods: {
    // 图片上传前的校验和预处理
    async handleChange(_file, fileList) {
      if (_file._processed) return;
      const {
        dimensions, scale, size, compress,
      } = this;

      let file = _file.raw;
      this.loading = true;

      const img = await fileToImage(file);
      let canvas = await imageToCanvas(img, {});
      const { width: sw, height: sh } = canvas;

      if (dimensions) {
        console.log('checkDimensions');
        // 检查尺寸
        const res = this.checkDimensions(sw, sh, dimensions);
        if (!res) {
          this.$emit('error', {
            code: 1,
            msg: '图片尺寸不符合要求！',
          });
          this.loading = false;
          return false;
        }
      }

      if (scale) {
        // 需要缩放
        console.log('doScale');
        canvas = await this.doScale(canvas, scale.mode, scale.position, scale.dw, scale.dh);
        file = await canvasToFile(canvas, { format: file.type });
      }

      if (size) {
        // 检查文件体积
        console.log('check size');
        if (file.size > size.max || file.size < size.min) {
          this.$emit('error', {
            code: 2,
            msg: '图片文件体积不符合要求！',
          });
          this.loading = false;
          return false;
        }
      }

      if (compress) {
        // 需要压缩
        console.log('doCompress');
        file = await this.doCompress(canvas, size.max || 1024 * 1024);
        if (!file) {
          this.$emit('error', {
            code: 3,
            msg: '图片压缩失败！',
          });
          this.loading = false;
          return false;
        }
      }


      // 图片校验和预处理完毕, 替换待上传的图片，准备上传
      const ff = new File([file], _file.raw.name, { type: _file.raw.type });
      ff.uid = _file.raw.uid;
      _file.raw = ff;
      _file.size = ff.size;
      _file._processed = true;
      // 更新图片列表，只保留一张
      this.fileList = [_file];

      console.log('ready to upload file: ');
      console.log(file);
      console.log('fileList');
      console.log(fileList);
      setTimeout(()=>{
        this.$refs.upload.submit();
      })
    },
    checkDimensions(sw, sh, dimensions) {
      const { min, max, ratio } = dimensions;
      if (min) {
        if (typeof min.w === 'number' && min.w > sw) return false;
        if (typeof min.h === 'number' && min.h > sh) return false;
      }
      if (max) {
        if (typeof max.w === 'number' && max.w < sw) return false;
        if (typeof max.h === 'number' && max.h < sh) return false;
      }
      if (ratio) {
        if ((sw / sh).toFixed(2) !== ratio.toFixed(2)) return false;
      }
      return true;
    },
    async doScale(canvas, mode, position, dw, dh) {
      const { width: sw, height: sh } = canvas;
      if (sw === dw && sh === dh) return canvas;
      canvas = await imageToCanvas(canvas, {
        scaleMode: mode, position, dw, dh,
      });
      return canvas;
    },
    async doCompress(canvas, maxSize) {
      let imgObj = null;
      let quality = 1;
      do {
        imgObj = await compressImage(canvas, {
          format: 'image/jpeg',
          quality,
          toBlob: true,
        });
        quality -= 0.1;
      } while (imgObj.blob.size > maxSize && quality > 0);
      if (imgObj.blob.size > maxSize) return false;
      return imgObj.blob;
    },
    handleUploadSuccess(resp, file) {
      console.log('upload success');
      console.log(resp);
      this.loading = false;
      this.$emit('success', resp.uri);
    },
    handleUploadError(resp) {
      this.loading = false;
      this.$emit('error', resp);
    },
  },
};
</script>
