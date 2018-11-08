// webpack umd
(function webpackUniversalModuleDefinition(root, name, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports[name] = factory();
  else
    root[name] = factory();
})(typeof self !== 'undefined' ? self : this, 'ccupload', function() {
  function getDatetime(date) {
    date = date || new Date()
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
    return date.toJSON().replace(/[\-T:\.Z]/g, '')
  }

  function ccupload(target, name, mineType) {
    const URL = 'http://fe.byted.org/bbs/api/bbs/file/ttfe/upload'
    const PREFIX = 'lichong/'
    let type = Object.prototype.toString.call(target)
    let f = null
    switch(type) {
      case '[object Object]': {
        mineType = 'application/json'
        name = getDatetime() + (name || '.json')
        f = new File([JSON.stringify(target)], name, {type: mineType})
        break
      }
      case '[object String]': {
        mineType = 'text/pain'
        name = getDatetime() + (name || '')
        f = new File([target], name, {type: mineType})
        break
      }
      case '[object Blob]':
      case '[object File]': {
        f = target
        break
      }
      default: {
        return
      }
    }
    const fd = new FormData()
    fd.append('prefix', PREFIX)
    fd.append('files', f)
    axios({
      url: URL,
      method: 'post',
      data: fd,
    }).then(resp=>{
      const data = resp.data
      console.log('upload success!')
      const CDN_BASE = 'https://sf1-ttcdn-tos.pstatp.com/obj/ttfe/' + PREFIX
      let url = CDN_BASE + data.data[0].name
      console.log(url)
    })
  }
  console.log('upload.js loaded!')
  return ccupload;
});


