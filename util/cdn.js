const CDN_BASE = '//sf3-ttcdn-tos.pstatp.com/obj/'

function urlToUri(url) {
  return url.match(/(obj|img)\/(.+)$/)[2]
}

function uriToUrl (uri) {
  return CDN_BASE + uri
}


export {
  uriToUrl,
  urlToUri,
}
