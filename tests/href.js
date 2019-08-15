// 不会跳转
console.log(window.location.href);
window.location.href = 'https://ad.oceanengine.com';
console.log(window.location.href);
window.location.href = 'bytedance://haha.com';
console.log(window.location.href);


// 会跳转
console.log(window.location.href);
window.location.href = 'bytedance://haha.com';
console.log(window.location.href);
window.location.href = 'https://ad.oceanengine.com';
console.log(window.location.href);


// 会跳转
console.log(window.location.href);
setTimeout(()=>{
   window.location.href = 'https://ad.oceanengine.com';
   console.log(window.location.href); // 上个页面的href
}, 100)
window.location.href = 'bytedance://haha.com';
console.log(window.location.href);


// 不会跳转
console.log(window.location.href);
var a = document.createElement('a')
a.href = 'https://ad.oceanengine.com'
a.click()
console.log(window.location.href);
window.location.href = 'bytedance://haha.com';
console.log(window.location.href);


// 不会跳转
console.log(window.location.href);
window.open('https://ad.oceanengine.com', '_self')
console.log(window.location.href);
window.location.href = 'bytedance://haha.com';
console.log(window.location.href);