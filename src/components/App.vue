<template>
    <div class="app">
        <loading-circle class="loading-circle pa"
                        :percent="loadedPercent"></loading-circle>
    </div>
</template>
<style>
    .app{
        width:100%;
        height:100%;
        position: relative;
        background-color: #c3c3c3;
    }
    .loading-circle{
        left:50%;
        top:50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

</style>
<script>
    import LoadingCircle from './LoadingCircle.vue'
    export default{
        components:{
            'loading-circle': LoadingCircle
        },
        data(){
            return{
                loadedPercent:1,
            }
        },
        ready(){
//            var loading = ()=>{
//                console.log('percent = ' + this.loadedPercent)
//                this.loadedPercent ++ ;
//                if(this.loadedPercent>100){
//                    this.loadedPercent = 100;
//                    return;
//                }
//                setTimeout(loading,50);
//            };
//            loading();

        }

    }

</script>