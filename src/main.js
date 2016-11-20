/**
 * Created by congcong on 9/7/16.
 */
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

import './test/css'

