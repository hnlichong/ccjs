<template>
    <canvas v-el:canvas width="200" height="200"></canvas>

</template>
<style>

</style>
<script>
    export default{
        props:{
            percent:1,

        },
        data(){
            return {
                ctx:null,
            }
        },
        watch:{
            'percent':function(val){
                this.drawDynamicCricle(val);
            }

        },
        ready(){
            this.initCanvas();
            this.drawStaticCircle();
//            this.requestAnimation();
        },
        methods: {
            initCanvas(){
                this.ctx = this.$els.canvas.getContext('2d');
            },
            requestAnimation(){
                requestAnimationFrame(function () {
                    this.percent++;
                    this.drawDynamicCricle(this.percent);
                    if (this.percent < 100) {
                        this.requestAnimation();
                    }
                }.bind(this));
            },
            drawStaticCircle(){
                var ctx = this.ctx;
                //画容器环
                ctx.beginPath();      //开始路径
                //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
                ctx.arc(100, 100, 80, 0, Math.PI * 2);  //画圆弧路径
                ctx.strokeStyle ='#fefefe';
                ctx.lineWidth=8;
                ctx.stroke();
            },
            drawDynamicCricle(percent){
                var ctx = this.ctx;
                // 画进度环
                ctx.beginPath();
                ctx.arc(100, 100, 80, Math.PI * 1.5, Math.PI * (1.5 + 2 * percent / 100 ));
                ctx.strokeStyle = 'blue';
                ctx.lineWidth=10;
                ctx.lineCap="round";    //线条末端添加圆形线帽
                ctx.stroke();

                // 填充百分比文字
                ctx.clearRect(50,50,100,100);   //清除上一次的文字
                ctx.rect(50,50,100,100);
                ctx.font = "bold 32px Microsoft YaHei";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#fff';
                percent = Math.min(Math.max(0,percent),100); //[0,100]
                ctx.fillText(percent + '%', 100, 100);
            }


        }
    }

</script>