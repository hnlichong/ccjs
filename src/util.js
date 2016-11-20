/**
 * Created by congcong on 2016/11/19.
 */
import _ from '../js/underscore'
let Util = {
    /**
     * 删除对象属性
     * @param obj
     * @param key [String]
     */
    clearKey(obj,key){
        if(_.isString(key)){
            if(_.has(obj,key)){
                delete obj[key]
            }
        }
    },
    /**
     * 删除多个对象属性
     * @param obj
     * @param keys [Array]
     */
    clearKeys(obj,keys){
        if(_.isArray(keys)){
            _.each(keys,function(v,i){
                this.clearKey(obj,v)
            }.bind(this))
        }
    }

};
export default Util;
export function log(mes){
    console.log(mes);
}