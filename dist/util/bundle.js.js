/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./util/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction genLongHTML() {\n    var ss = '';\n    for (var i = 0; i < 1000; i++) {\n        ss += '<div>' + i + '</div>';\n    }\n    // document.body.insertAdjacentHTML('afterbegin', ss)\n    var wrapper = document.createElement('div');\n    wrapper.id = 'wrapper';\n    wrapper.innerHTML = ss;\n    document.body.insertBefore(wrapper, document.body.firstChild);\n}\n\n// getTypeOf([]) => array\nfunction getTypeOf(obj) {\n    var s = Object.prototype.toString.call(obj);\n    var pat = /\\[object\\s+(\\w+)\\]/;\n    return pat.exec(s)[1].toLowerCase();\n}\n\n/**\n * min <= random < max\n * @param min\n * @param max\n * @returns {*}\n */\nfunction getRandom(min, max) {\n    return Math.random() * (max - min) + min;\n}\n\n/**\n * min <= randomInt < max\n * @param min\n * @param max\n * @returns {*}\n */\nfunction getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive\n}\n\n/**\n * min <= randomInt <= max\n * @param min\n * @param max\n * @returns {*}\n */\nfunction getRandomIntInclusive(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive\n}\n\nfunction getRandomItem(arr) {\n    if (arr.length === 0) {\n        return null;\n    }\n    return arr[getRandomInt(0, arr.length)];\n}\n\nfunction mandatoryArg() {\n    throw new Error('mandatory argument missing!');\n}\n\nfunction getFnRunningTime(fn, args) {\n    var t1 = Date.now();\n    var res = fn(args);\n    var t2 = Date.now();\n    console.log(fn.name + ' finished, time elapsed: ' + (t2 - t1) + 'ms');\n}\n\n// debounce 防抖\n// 最后一次触发delay(ms)后执行一次\nfunction debounce(method) {\n    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;\n\n    clearTimeout(method.timeoutId);\n    method.timeoutId = setTimeout(function () {\n        method.call(context);\n    }, delay);\n}\n\n// throttle 函数节流\n// delay(ms)里只执行一次\n// 常用在高频率触发调用的函数上，比如scroll,resize等事件的handler\nfunction throttle(method) {\n    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;\n\n    if (method.tId === undefined) {\n        method.tId = setTimeout(function () {\n            method.call(context);\n            // delete method.tId\n            setTimeout(function () {\n                delete method.tId;\n            }, delay);\n        });\n    }\n}\n\nexports.getRandomItem = getRandomItem;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL2luZGV4LmpzP2UxNjQiXSwibmFtZXMiOlsiZ2VuTG9uZ0hUTUwiLCJzcyIsImkiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJpbm5lckhUTUwiLCJib2R5IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImdldFR5cGVPZiIsIm9iaiIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJwYXQiLCJleGVjIiwidG9Mb3dlckNhc2UiLCJnZXRSYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiY2VpbCIsImZsb29yIiwiZ2V0UmFuZG9tSW50SW5jbHVzaXZlIiwiZ2V0UmFuZG9tSXRlbSIsImFyciIsImxlbmd0aCIsIm1hbmRhdG9yeUFyZyIsIkVycm9yIiwiZ2V0Rm5SdW5uaW5nVGltZSIsImZuIiwiYXJncyIsInQxIiwiRGF0ZSIsIm5vdyIsInJlcyIsInQyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJkZWJvdW5jZSIsIm1ldGhvZCIsImRlbGF5IiwiY29udGV4dCIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJ0aHJvdHRsZSIsInRJZCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxXQUFULEdBQXVCO0FBQ25CLFFBQUlDLEtBQUssRUFBVDtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLElBQXBCLEVBQTBCQSxHQUExQixFQUErQjtBQUMzQkQsY0FBTSxVQUFVQyxDQUFWLEdBQWMsUUFBcEI7QUFDSDtBQUNEO0FBQ0EsUUFBSUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FGLFlBQVFHLEVBQVIsR0FBYSxTQUFiO0FBQ0FILFlBQVFJLFNBQVIsR0FBb0JOLEVBQXBCO0FBQ0FHLGFBQVNJLElB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T0FBT1EsR0FBZjtBQUNILGFBRkQsRUFFR1AsS0FGSDtBQUdILFNBTlksQ0FBYjtBQU9IO0FBQ0o7O1FBRU9sQixhLEdBQUFBLGEiLCJmaWxlIjoiLi91dGlsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuTG9uZ0hUTUwoKSB7XG4gICAgdmFyIHNzID0gJydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgICBzcyArPSAnPGRpdj4nICsgaSArICc8L2Rpdj4nXG4gICAgfVxuICAgIC8vIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgc3MpXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdyYXBwZXIuaWQgPSAnd3JhcHBlcidcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IHNzXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKVxuXG59XG5cbi8vIGdldFR5cGVPZihbXSkgPT4gYXJyYXlcbmZ1bmN0aW9uIGdldFR5cGVPZihvYmopIHtcbiAgICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXG4gICAgdmFyIHBhdCA9IC9cXFtvYmplY3RcXHMrKFxcdyspXFxdL1xuICAgIHJldHVybiBwYXQuZXhlYyhzKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cblxuLyoqXG4gKiBtaW4gPD0gcmFuZG9tIDwgbWF4XG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxufVxuXG4vKipcbiAqIG1pbiA8PSByYW5kb21JbnQgPCBtYXhcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKVxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW4gLy9UaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxufVxuXG4vKipcbiAqIG1pbiA8PSByYW5kb21JbnQgPD0gbWF4XG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbilcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heClcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbiAvL1RoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUl0ZW0oYXJyKSB7XG4gICAgaWYgKGFyci5sZW5ndGg9PT0wKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBhcnJbZ2V0UmFuZG9tSW50KDAsIGFyci5sZW5ndGgpXVxufVxuXG5mdW5jdGlvbiBtYW5kYXRvcnlBcmcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYW5kYXRvcnkgYXJndW1lbnQgbWlzc2luZyEnKVxufVxuXG5mdW5jdGlvbiBnZXRGblJ1bm5pbmdUaW1lKGZuLCBhcmdzKSB7XG4gICAgdmFyIHQxID0gRGF0ZS5ub3coKVxuICAgIHZhciByZXMgPSBmbihhcmdzKVxuICAgIHZhciB0MiA9IERhdGUubm93KClcbiAgICBjb25zb2xlLmxvZyhmbi5uYW1lICsgJyBmaW5pc2hlZCwgdGltZSBlbGFwc2VkOiAnICsgKHQyIC0gdDEpICsgJ21zJylcbn1cblxuLy8gZGVib3VuY2Ug6Ziy5oqWXG4vLyDmnIDlkI7kuIDmrKHop6blj5FkZWxheShtcynlkI7miafooYzkuIDmrKFcbmZ1bmN0aW9uIGRlYm91bmNlKG1ldGhvZCwgZGVsYXkgPSAxMDAsIGNvbnRleHQgPSB3aW5kb3cpIHtcbiAgICBjbGVhclRpbWVvdXQobWV0aG9kLnRpbWVvdXRJZClcbiAgICBtZXRob2QudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1ldGhvZC5jYWxsKGNvbnRleHQpXG4gICAgfSwgZGVsYXkpXG59XG5cbi8vIHRocm90dGxlIOWHveaVsOiKgua1gVxuLy8gZGVsYXkobXMp6YeM5Y+q5omn6KGM5LiA5qyhXG4vLyDluLjnlKjlnKjpq5jpopHnjofop6blj5HosIPnlKjnmoTlh73mlbDkuIrvvIzmr5TlpoJzY3JvbGwscmVzaXpl562J5LqL5Lu255qEaGFuZGxlclxuZnVuY3Rpb24gdGhyb3R0bGUobWV0aG9kLCBkZWxheSA9IDEwMCwgY29udGV4dCA9IHdpbmRvdykge1xuICAgIGlmIChtZXRob2QudElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWV0aG9kLnRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWV0aG9kLmNhbGwoY29udGV4dClcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBtZXRob2QudElkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgIG1ldGhvZC50SWRcbiAgICAgICAgICAgIH0sIGRlbGF5KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IHtnZXRSYW5kb21JdGVtfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/index.js\n");

/***/ })

/******/ });