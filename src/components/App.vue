<style>
    .app {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #c3c3c3;
    }

</style>
<template>
    <div class="app">
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        ready(){
            //== 值相等，先自动进行类型转换再比较相等
            //=== 严格相等
            var a = '12'
            var b=12
            console.log(a == b);    //true
            console.log(a === b);   //false
        },

    }

</script>