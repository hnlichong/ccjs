/**
 * Created by congcong on 2016/12/8.
 */
let CookieUtil = {
    //设置cookie
    setCookie(cname, cvalue, exdays) {
        let expires = ''
        if (exdays !== undefined) {
            let d = new Date();
            d.setDate(d.getDate() + exdays)
            expires = "expires=" + d.toUTCString();
        }
        document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + "; " + expires;
    },
    //获取cookie
    getCookie(cname) {
        cname = encodeURIComponent(cname)
        let re = new RegExp('(^| )' + cname + '=([^;]*)(;|$)');
        let matchArr = document.cookie.match(re);
        if (matchArr === null) return null
        return (decodeURIComponent(matchArr[2]));
    },
    //删除cookie
    removeCookie(cname) {
        setCookie(cname, "", -1);
    },
    //测试
    checkCookie() {
        let user = getCookie("username");
        if (user !== null) {
            alert("Welcome again, " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user !== "" && user !== null) {
                setCookie("username", user, 365);
            }
        }
    }
};

// extend functions to window obj
// window = {
//     ...window,
//     ...CookieUtil
// }
Object.assign(window, CookieUtil)

// export default CookieUtil