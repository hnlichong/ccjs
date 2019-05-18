<template>
    <div class="image-uploader"  @click="onClick">
        <input type="file" class="image-uploader__input"
        ref="input"
        accept="image/png, image/jpeg"
        @change="onChange"
        />
        <el-button class="image-uploader__btn" type="default" size="small">{{btnText}}</el-button>
    </div>
</template>

<script>
import axios from 'axios'
import {fileToCanvas, resizeCanvasUnder, canvasToFile} from '../util/canvas'
export default {
    name: 'ImageUploader',
    props: {
        btnText: {
            default: '点击上传'
        },
        action: {
            default: '/image/upload',
        },
        name: {
            default: 'Filedata'
        },
        headers: {
            default: null
        }
    },
    data() {
        return {
        // file: null,
        needProcess: true,
        processRatio: 0.5,
        uploadRatio: 0.5,
        processDone: false,
        }
    },
    methods: {
        onClick() {
            this.$refs.input.value = null
            this.$refs.input.click()
        },
        clickUpload() {
            this.$refs.input.value = null
            this.$refs.input.click()
        },
        async onChange(ev) {
            let file = ev.target.files[0]
            if (!file) return
            if (this.needProcess) {
                // process的进度只能mock
                this.onProcessProgress()
                file = await this.resizeImage(file)
                this.processDone = true
            }
            this.upload(file)
        },
        async resizeImage(file) {
            const canvas = await fileToCanvas(file)
            const canvasResized = await resizeCanvasUnder(canvas)
            const {width, height} = canvasResized
            return await canvasToFile(canvasResized)
        },
        onProcessProgress() {
            let current = 0
            let target = 1
          let speed = 0.05
          let k = 0.1
          let timeout = 5000
          let startTime = Date.now()
          const timer = setInterval(()=>{
            console.log(`setInterval, speed: ${speed}, current: ${current}`);
            // 减速运动
            speed = (target-current) * k
            current += speed
            // 停止检测
            if (this.processDone || current >=target || (Date.now()-startTime)>timeout) {
              current = target
              clearInterval(timer)
            }
            this.onProgress('process', current)
          }, 20)
        },
        onProgress(name, progress) {
            // process: 50%, upload: 50%
            if (this.needProcess) {
                if (name === 'process') return this.$emit('on-progress', progress * this.processRatio)
                if (name === 'upload') return this.$emit('on-progress', this.processRatio + progress*this.uploadRatio)
            }else return this.$emit('on-progress', progress)
        },
        upload(file) {
            const fd = new FormData()
            fd.append(this.name, file)
            axios.post(this.action, fd, {
                headers: this.headers || {},
                onUploadProgress: (progressEvent) => {
                    const {loaded, total} =progressEvent
                    let progress = loaded / total
                    // console.log(`axios onUploadProgress: ${progress}`);
                    this.onProgress('upload', progress)
            },
            })
            .then(({data})=>{
                this.$emit('on-success', data)
            })
            .catch(err=>{
                this.$emit('on-error', err)
            })
        }
    }
}
</script>

<style>
.image-uploader__input {
    display:none;
}

</style>
