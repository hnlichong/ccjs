<template>
    <div class="video-pop-up">
        <img src="../../assets/close.png" alt="" @click="$emit('close')">
        <video :src="url" autoplay loop controls></video>
    </div>
</template>

<script>
export default {
    name: 'VideoPupUp',
    props: {
        url: {
            type: String,
            default: ''
        }
    }

}
</script>

<style lang="less">
.video-pop-up {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    >img {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
    >video {
        height: 400px;
    }
}

</style>
