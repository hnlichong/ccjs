/**
 * Created by congcong on 9/7/16.
 */
//App
import App from './components/App.vue';
//FastClick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
//Vue
new Vue({
    el: 'body',
    components: {
        'app': App
    }
});

//library
import _ from '../js/underscore'
import Util from '../utils/util'
import Css from '../utils/css'
export default {_,Util,Css}
//相当于：
// default._ = _;
// default.Util = Util;
// default.Css = Css;