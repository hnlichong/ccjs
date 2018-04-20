let s = `(function()%7Bvar%20s=document.createElement(%22script%22);s.type=%22text/javascript%22;s.src=%22https://www.diigo.com/javascripts/webtoolbar/diigolet_b_h_b.js%22;document.body.appendChild(s);%7D)();`
let res = decodeURIComponent(s)
console.log(res)