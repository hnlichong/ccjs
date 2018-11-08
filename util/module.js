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
})(typeof self !== 'undefined' ? self : this, name, function() {
  return 'var';
});
