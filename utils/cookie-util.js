/**
 * Created by congcong on 2016/12/8.
 */
let CookieUtil = {
    //设置cookie
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        d.setDate(d.getDate() + exdays)
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    //获取cookie
    getCookie(cname) {
        var re = new RegExp('(^| )' + cname + '=([^;]*)(;|$)');
        var matchArr = document.cookie.match(re);
        if (matchArr)
            return (matchArr[2]);
        else
            return null;
    },
    //清除cookie
    clearCookie(name) {
        setCookie(name, "", -1);
    },
    //测试
    checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }
};


export default CookieUtil