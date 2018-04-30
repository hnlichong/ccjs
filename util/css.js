/**
 * Created by congcong on 2016/11/19.
 */
import _ from '../js/underscore'
import Util from './index'

//内部API，外部不可调用
function getStyleDom() {
    let styleDom = document.createElement('style');
    styleDom.rel = 'stylesheet';
    styleDom.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(styleDom);
    return styleDom;
}
function getTransformString(obj, ext) {
    if (_.has(obj, 'transform')) {
        return obj.transform;
    }
    let str = '';
    _.each(obj, function (v, k) {
        switch (k) {
            case 'x':
                str += ' translateX(' + getPostfixedValue(v, ext) + ')';
                break;
            case 'y':
                str += ' translateY(' + getPostfixedValue(v, ext) + ')';
                break;
            case 'rotate':
                str += ' rotate(' + getPostfixedValue(v, 'deg') + ')';
                break;
            case 'scale':
                str += ' scale(' + v + ')';
                break;
            case 'scaleX':
                str += ' scaleX(' + v + ')';
                break;
            case 'scaleY':
                str += ' scaleY(' + v + ')';
                break;
        }
    });
    return str;
}
function getPostfixedValue(val, ext = 'px') {
    if (_.isString(val)) {
        if (val.match(/px$|%$|rem$|em$|pt$|s$|ms$/)) {
            return val;
        }
    }
    return val + ext;
}
function getPrefixedCssObj(v, k) {
    let obj = {};
    if (!v) {
        return obj;
    }
    obj[k] = v;
    obj['-webkit-' + k] = v;
    obj['-moz-' + k] = v;
    obj['-ms-' + k] = v;
    return obj;
}

//对外暴露的对象（API，包括属性和方法），外部可以调用
let Css = {
    styleDom: getStyleDom(),
    /**
     * 将字符串写入内部样式表
     * @param cssString
     */
    writeCssString(cssString){
        let styleDom = this.styleDom;
        //IE
        if (styleDom.styleSheet) {
            styleDom.styleSheet.cssText = cssString
        } else {
            //W3C
            let text = document.createTextNode(cssString);
            styleDom.appendChild(text);
        }
    },
    /**
     * 将CSS对象转化成CSS样式类字符串
     * @param obj
     */
    cssObjToString(obj){
        let str = '';
        _.each(obj, function (v, k) {
            str += k + ':' + v + ';';
        });
        return '{' + str + '}';
    },
    /**
     * transform css obj to smart obj
     * @param obj
     * @param ext
     * @returns {*}
     */
    getSmartObj(obj, ext){
        // obj = _.clone(obj);
        //handle transform
        let transformStr = getTransformString(obj, ext);
        Util.clearKeys(obj, ['transform', 'x', 'y', 'rotate', 'scale', 'scaleX', 'scaleY']);
        if(transformStr){
            _.extend(obj, {'transform': transformStr});
        }
        //handle others
        _.each(obj, function (v, k) {
            if (k.match(/^transition|^transform|^animation|^filter|^perspective|^backface-visibility/)) {
                //prefix
                _.extend(obj, getPrefixedCssObj(v, k));
            } else if (k.match(/width|height|top|left|right|bottom|margin|padding|size/)) {
                // postfix
                obj[k] = getPostfixedValue(v, ext);
            }
        });
        return obj;
    },
    /**
     * main entry1
     * @param selector
     * @param obj
     * @param ext
     */
    smartCss(selector, obj, ext = 'px'){
        //transform css obj to smart obj
        this.getSmartObj(obj, ext);
        //after transform, write string to CSS
        this.writeCssString(selector + this.cssObjToString(obj))
    },
    /**
     * main entry2
     * @param el
     * @param obj
     * @param ext
     */
    smartStyle(el, obj, ext = 'px'){
        //transform css obj to smart obj
        this.getSmartObj(obj, ext);
        //after transform, bind style to dom element
        _.each(obj, function (v, k) {
            el.style[k] = v;
        });
    },
    smartCssAnimation(name, frames, ext = 'px'){
        let steps = frames.length - 1;
        let stepStr = '0%';
        let framesCssStr = '';
        _.each(frames,  (v, i)=> {
            this.getSmartObj(v, ext);
            stepStr = (i / steps * 100).toFixed(2) + '%';
            framesCssStr += stepStr + this.cssObjToString(v);
        });
        let keyframesStr =
            '@keyframes ' + name + '{' + framesCssStr + '}' +
            '@-webkit-keyframes ' + name + '{' + framesCssStr + '}' +
            '@-moz-keyframes ' + name + '{' + framesCssStr + '}' +
            '@-ms-keyframes ' + name + '{' + framesCssStr + '}';
        this.writeCssString(keyframesStr);
    }
};
export default Css;
