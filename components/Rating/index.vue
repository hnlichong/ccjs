<style lang="less">
@import url('./index.less');
</style>

<template>
<div class="rating" :class="{'rating-hide': byebyeRating}">
    <div class="rating__icon" @mouseenter="onMouseEnter" :style="`cursor:${isFinish? 'default':'pointer'}`">
        <span v-if="isFinish">谢谢您的反馈！</span>
        <img src="../../assets/feedback.svg" alt="">
    </div>
    <div class="rating__main" :class="{'hide': isFinish || !showMain}" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="rating__overall-title">对微动效果是否满意？</div>
    <div class="rating__overall-rating">
        <div class="unsatisfied" :class="{'active': 1===overall}" @click="onClickOverallRating(1)">
            <i>
            <img src="../../assets/unsatisfied.png" alt="">
            <img src="../../assets/unsatisfied_hover.png" alt="">
            </i>
            不满意
            </div>
        <div class="just-so-so" :class="{'active': 2===overall}" @click="onClickOverallRating(2)">
            <i>
            <img src="../../assets/just_so_so.png" alt="">
            <img src="../../assets/just_so_so_hover.png" alt="">
            </i>
            一般
            </div>
        <div class="satisfied" :class="{'active': 3===overall}" @click="onClickOverallRating(3)">
            <i>
            <img src="../../assets/satisfied.png" alt="">
            <img src="../../assets/satisfied_hover.png" alt="">
            </i>
            满意
            </div>
    </div>
    <div class="rating__single" v-if="showSingle">
        <div class="rating__single-item" v-for="({name, value}, index) in single" :key="index">
            <span class="rating__single-name">{{name}}</span>
            <star-rating class="rating__single-rating" :initRating="value" @change="single[index].value = $event"></star-rating>
        </div>
    </div>
            <el-button v-if="showSingle" class="rating__submit" type="primary" size="mini"  @click="submit">提交</el-button>
    </div>
</div>
</template>
<script>
import StarRating from '../StarRating/index.vue'
import axios from 'axios'
import API from '../../constant/api'
import globalVar from '../../global_var'
import Tea from 'byted-tea-sdk';

export default {
    name: 'Rating',
    components: {
        StarRating
   },
   props: {
       vid: {
           type: String,
           default: ''
       },
       autoPopUp: {
           type: Object,
           default: null
       }
   },
    data() {
        return {
            globalVar,
            byebyeRating: false,
            // showSingle: false,
            showMain: false,
            isHover: false,
                isFinish: false,
                overall: 0,
                single: [
                    {
                        name: '成品效果',
                        value: 0,
                        key: 'quality'
                    },
                    {
                        name: '制作速度',
                        value: 0,
                        key: 'efficiency'
                    },
                    {
                        name: '商业价值',
                        value: 0,
                        key: 'value'
                    },
                ],
        }
    },
    computed: {
       showSingle() {
           return this.overall > 0
       }
    },
    mounted() {
        if (this.autoPopUp) {
            const {delay, duration} = this.autoPopUp
            setTimeout(()=>{
                // console.log('auto pop up');
               this.openMain()
               setTimeout(()=>{
                //    console.log('close pop up');
                    this.closeMain()
               },duration)
            }, delay)
        }
    },
    methods: {
        onMouseEnter() {
            this.isHover = true
            // console.log('onMouseEnter');
            this.openMain()
        },
        onMouseLeave() {
            // console.log('onMouseLeave');
            this.isHover = false
            this.closeMain()
        },
        openMain() {
            if (!this.isFinish) {
                this.showMain = true
            }
        },
        closeMain() {
            if (!this.isHover) {
                this.showMain = false
            }
        },
        onClickOverallRating(i) {
            console.log(`click overall: ${i}`);
            this.overall = i
        },
        submit() {
            this.isFinish = true
            const body = {
                type: 0, // 0: 微动
                evaluation_source_key: 'ai_weidong_' + this.vid,
                score: this.overall,
                customize_score: this.single,
            }
            console.log('rating: ');
            console.log(JSON.stringify(body));
            const {csrftoken ,advertiserId='', coreUserId='', caller=''} = this.globalVar
            axios.post(API.evaluation, body, {headers: {'X-csrftoken': csrftoken},})
            // .then(res=>console.log(res))
            // .catch(err=>console.log(err))

            const singScores = this.single.reduce((acc, item, )=>{
                const {key, value} = item
                acc[key] = value
                return acc
            }, {})
            const {quality, efficiency, commercial} = singScores
            Tea('ad_cc_weidong_evaluation', {
                overall_evaluation: this.overall,
                quality_score: quality,
                efficiency_score: efficiency,
                commercial_value_score: commercial,
                advertiser_id: advertiserId,
                core_user_id: coreUserId,
                caller: caller,
            })

            // 提交后3s自动关闭popup
            setTimeout(()=>{
                // this.closeMain()
                this.byebyeRating = true
            },3000)

        },
    }
}
</script>
