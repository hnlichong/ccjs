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
/******/ 	return __webpack_require__(__webpack_require__.s = "./canvas/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./canvas/index.js":
/*!*************************!*\
  !*** ./canvas/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.requestAnimFrame = function () {\n\treturn window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function FrameRequestCallback */callback, /* DOMElement Element */element) {\n\t\treturn window.setTimeout(callback, 0);\n\t};\n}();\n\nfunction calLength2(x1, y1, x2, y2) {\n\treturn Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);\n}\n\nfunction randomColor() {\n\tvar col = [0, 1, 2];\n\tcol[0] = Math.random() * 100 + 155;\n\tcol[0] = col[0].toFixed();\n\tcol[1] = Math.random() * 100 + 155;\n\tcol[1] = col[1].toFixed();\n\tcol[2] = Math.random() * 100 + 155;\n\tcol[2] = col[2].toFixed();\n\tvar num = Math.floor(Math.random() * 3);\n\tcol[num] = 0;\n\treturn \"rgba(\" + col[0] + \",\" + col[1] + \",\" + col[2] + \",\";\n}\n\nfunction lerpAngle(a, b, t) {\n\tvar d = b - a;\n\tif (d > Math.PI) d = d - 2 * Math.PI;\n\tif (d < -Math.PI) d = d + 2 * Math.PI;\n\treturn a + d * t;\n}\n\nfunction inOboundary(arrX, arrY, l, r, t, b) {\n\t//在l r t b范围内的检测\n\treturn arrX > l && arrX < r && arrY > t && arrY < b;\n}\n\nfunction rgbColor(r, g, b) {\n\tr = Math.round(r * 256);\n\tg = Math.round(g * 256);\n\tb = Math.round(b * 256);\n\treturn \"rgba(\" + r + \",\" + g + \",\" + b + \",1)\";\n}\n\nfunction rgbNum(r, g, b) {\n\tr = Math.round(r * 256);\n\tg = Math.round(g * 256);\n\tb = Math.round(b * 256);\n\treturn \"rgba(\" + r + \",\" + g + \",\" + b;\n}\n\nfunction rnd(m) {\n\tvar n = m || 1;\n\treturn Math.random() * n;\n}\n\nfunction rateRandom(m, n) {\n\tvar sum = 0;\n\tfor (var i = 1; i < n - m; i++) {\n\t\tsum += i;\n\t}\n\n\tvar ran = Math.random() * sum;\n\n\tfor (var i = 1; i < n - m; i++) {\n\t\tran -= i;\n\t\tif (ran < 0) {\n\t\t\treturn i - 1 + m;\n\t\t}\n\t}\n}\n\nfunction distance(x1, y1, x2, y2, l) {\n\tvar x = Math.abs(x1 - x2);\n\tvar y = Math.abs(y1 - y2);\n\tif (x < l && y < l) {\n\t\treturn true;\n\t}\n\treturn false;\n}\n\nfunction AABBbox(object1, w1, h1, object2, w2, h2, overlap) {\n\tA1 = object1.x + overlap;\n\tB1 = object1.x + w1 - overlap;\n\tC1 = object1.y + overlap;\n\tD1 = object1.y + h1 - overlap;\n\n\tA2 = object2.x + overlap;\n\tB2 = object2.x + w2 - overlap;\n\tC2 = object2.y + overlap;\n\tD2 = object2.y + h2 - overlap;\n\n\tif (A1 > B2 || B1 < A2 || C1 > D2 || D1 < C2) return false;else return true;\n}\n\nfunction dis2(x, y, x0, y0) {\n\tvar dx = x - x0;\n\tvar dy = y - y0;\n\treturn dx * dx + dy * dy;\n}\n\nfunction rndi2(m, n) {\n\tvar a = Math.random() * (n - m) + m;\n\treturn Math.floor(a);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jYW52YXMvaW5kZXguanM/NjgxZCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50Iiwic2V0VGltZW91dCIsImNhbExlbmd0aDIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIk1hdGgiLCJwb3ciLCJyYW5kb21Db2xvciIsImNvbCIsInJhbmRvbSIsInRvRml4ZWQiLCJudW0iLCJmbG9vciIsImxlcnBBbmdsZSIsImEiLCJiIiwidCIsImQiLCJQSSIsImluT2JvdW5kYXJ5IiwiYXJyWCIsImFyclkiLCJsIiwiciIsInJnYkNvbG9yIiwiZyIsInJvdW5kIiwicmdiTnVtIiwicm5kIiwibSIsIm4iLCJyYXRlUmFuZG9tIiwic3VtIiwiaSIsInJhbiIsImRpc3RhbmNlIiwieCIsImFicyIsInkiLCJBQUJCYm94Iiwib2JqZWN0MSIsIncxIiwiaDEiLCJvYmplY3QyIiwidzIiLCJoMiIsIm92ZXJsYXAiLCJBMSIsIkIxIiwiQzEiLCJEMSIsIkEyIiwiQjIiLCJDMiIsIkQyIiwiZGlzMiIsIngwIiwieTAiLCJkeCIsImR5Iiwicm5kaTIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLGdCQUFQLEdBQTJCLFlBQVc7QUFDckMsUUFBT0QsT0FBT0UscUJBQVAsSUFBZ0NGLE9BQU9HLDJCQUF2QyxJQUFzRUgsT0FBT0ksd0JBQTdFLElBQXlHSixPQUFPSyxzQkFBaEgsSUFBMElMLE9BQU9NLHVCQUFqSixJQUNOLFdBQVUsbUNBQW9DQyxRQUE5QyxFQUF3RCx3QkFBeUJDLE9BQWpGLEVBQTBGO0FBQ3pGLFNBQU9SLE9BQU9TLFVBQVAsQ0FBa0JGLFFBQWxC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T0FBbkQsRUFBNEQ7QUFDM0RDLE1BQUtQLFFBQVFKLENBQVIsR0FBWVUsT0FBakI7QUFDQUUsTUFBS1IsUUFBUUosQ0FBUixHQUFZSyxFQUFaLEdBQWlCSyxPQUF0QjtBQUNBRyxNQUFLVCxRQUFRRixDQUFSLEdBQVlRLE9BQWpCO0FBQ0FJLE1BQUtWLFFBQVFGLENBQVIsR0FBWUksRUFBWixHQUFpQkksT0FBdEI7O0FBRUFLLE1BQUtSLFFBQVFQLENBQVIsR0FBWVUsT0FBakI7QUFDQU0sTUFBS1QsUUFBUVAsQ0FBUixHQUFZUSxFQUFaLEdBQWlCRSxPQUF0QjtBQUNBTyxNQUFLVixRQUFRTCxDQUFSLEdBQVlRLE9BQWpCO0FBQ0FRLE1BQUtYLFFBQVFMLENBQVIsR0FBWU8sRUFBWixHQUFpQkMsT0FBdEI7O0FBRUEsS0FBSUMsS0FBS0ssRUFBTCxJQUFXSixLQUFLRyxFQUFoQixJQUFzQkYsS0FBS0ssRUFBM0IsSUFBaUNKLEtBQUtHLEVBQTFDLEVBQThDLE9BQU8sS0FBUCxDQUE5QyxLQUNLLE9BQU8sSUFBUDtBQUNMOztBQUdELFNBQVNFLElBQVQsQ0FBY25CLENBQWQsRUFBaUJFLENBQWpCLEVBQW9Ca0IsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCO0FBQzNCLEtBQUlDLEtBQUt0QixJQUFJb0IsRUFBYjtBQUNBLEtBQUlHLEtBQUtyQixJQUFJbUIsRUFBYjtBQUNBLFFBQU9DLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBdEI7QUFDQTs7QUFFRCxTQUFTQyxLQUFULENBQWUvQixDQUFmLEVBQWtCQyxDQUFsQixFQUFxQjtBQUNwQixLQUFJaEIsSUFBSVQsS0FBS0ksTUFBTCxNQUFpQnFCLElBQUlELENBQXJCLElBQTBCQSxDQUFsQztBQUNBLFFBQU94QixLQUFLTyxLQUFMLENBQVdFLENBQVgsQ0FBUDtBQUNBIiwiZmlsZSI6Ii4vY2FudmFzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRmdW5jdGlvbiggLyogZnVuY3Rpb24gRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgKi8gY2FsbGJhY2ssIC8qIERPTUVsZW1lbnQgRWxlbWVudCAqLyBlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuXHRcdH07XG59KSgpO1xuXG5cbmZ1bmN0aW9uIGNhbExlbmd0aDIoeDEsIHkxLCB4MiwgeTIpIHtcblx0cmV0dXJuIE1hdGgucG93KHgxIC0geDIsIDIpICsgTWF0aC5wb3coeTEgLSB5MiwgMik7XG59XG5cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG5cdHZhciBjb2wgPSBbMCwgMSwgMl07XG5cdGNvbFswXSA9IE1hdGgucmFuZG9tKCkgKiAxMDAgKyAxNTU7XG5cdGNvbFswXSA9IGNvbFswXS50b0ZpeGVkKCk7XG5cdGNvbFsxXSA9IE1hdGgucmFuZG9tKCkgKiAxMDAgKyAxNTU7XG5cdGNvbFsxXSA9IGNvbFsxXS50b0ZpeGVkKCk7XG5cdGNvbFsyXSA9IE1hdGgucmFuZG9tKCkgKiAxMDAgKyAxNTU7XG5cdGNvbFsyXSA9IGNvbFsyXS50b0ZpeGVkKCk7XG5cdHZhciBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcblx0Y29sW251bV0gPSAwO1xuXHRyZXR1cm4gXCJyZ2JhKFwiICsgY29sWzBdICsgXCIsXCIgKyBjb2xbMV0gKyBcIixcIiArIGNvbFsyXSArIFwiLFwiO1xufVxuXG5cbmZ1bmN0aW9uIGxlcnBBbmdsZShhLCBiLCB0KSB7XG5cdHZhciBkID0gYiAtIGE7XG5cdGlmIChkID4gTWF0aC5QSSkgZCA9IGQgLSAyICogTWF0aC5QSTtcblx0aWYgKGQgPCAtTWF0aC5QSSkgZCA9IGQgKyAyICogTWF0aC5QSTtcblx0cmV0dXJuIGEgKyBkICogdDtcbn1cblxuZnVuY3Rpb24gaW5PYm91bmRhcnkoYXJyWCwgYXJyWSwgbCwgciwgdCwgYikgeyAvL+WcqGwgciB0IGLojIPlm7TlhoXnmoTmo4DmtYtcblx0cmV0dXJuIGFyclggPiBsICYmIGFyclggPCByICYmIGFyclkgPiB0ICYmIGFyclkgPCBiO1xufVxuXG5mdW5jdGlvbiByZ2JDb2xvcihyLCBnLCBiKSB7XG5cdHIgPSBNYXRoLnJvdW5kKHIgKiAyNTYpO1xuXHRnID0gTWF0aC5yb3VuZChnICogMjU2KTtcblx0YiA9IE1hdGgucm91bmQoYiAqIDI1Nik7XG5cdHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIjtcbn1cblxuZnVuY3Rpb24gcmdiTnVtKHIsIGcsIGIpIHtcblx0ciA9IE1hdGgucm91bmQociAqIDI1Nik7XG5cdGcgPSBNYXRoLnJvdW5kKGcgKiAyNTYpO1xuXHRiID0gTWF0aC5yb3VuZChiICogMjU2KTtcblx0cmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGI7XG59XG5cbmZ1bmN0aW9uIHJuZChtKSB7XG5cdHZhciBuID0gbSB8fCAxO1xuXHRyZXR1cm4gTWF0aC5yYW5kb20oKSAqIG47XG59XG5cbmZ1bmN0aW9uIHJhdGVSYW5kb20obSwgbikge1xuXHR2YXIgc3VtID0gMDtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCAobiAtIG0pOyBpKyspIHtcblx0XHRzdW0gKz0gaTtcblxuXHR9XG5cblx0dmFyIHJhbiA9IE1hdGgucmFuZG9tKCkgKiBzdW07XG5cblx0Zm9yICh2YXIgaSA9IDE7IGkgPCAobiAtIG0pOyBpKyspIHtcblx0XHRyYW4gLT0gaTtcblx0XHRpZiAocmFuIDwgMCkge1xuXHRcdFx0cmV0dXJuIGkgLSAxICsgbTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIsIGwpIHtcblx0dmFyIHggPSBNYXRoLmFicyh4MSAtIHgyKTtcblx0dmFyIHkgPSBNYXRoLmFicyh5MSAtIHkyKTtcblx0aWYgKHggPCBsICYmIHkgPCBsKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBBQUJCYm94KG9iamVjdDEsIHcxLCBoMSwgb2JqZWN0MiwgdzIsIGgyLCBvdmVybGFwKSB7XG5cdEExID0gb2JqZWN0MS54ICsgb3ZlcmxhcDtcblx0QjEgPSBvYmplY3QxLnggKyB3MSAtIG92ZXJsYXA7XG5cdEMxID0gb2JqZWN0MS55ICsgb3ZlcmxhcDtcblx0RDEgPSBvYmplY3QxLnkgKyBoMSAtIG92ZXJsYXA7XG5cblx0QTIgPSBvYmplY3QyLnggKyBvdmVybGFwO1xuXHRCMiA9IG9iamVjdDIueCArIHcyIC0gb3ZlcmxhcDtcblx0QzIgPSBvYmplY3QyLnkgKyBvdmVybGFwO1xuXHREMiA9IG9iamVjdDIueSArIGgyIC0gb3ZlcmxhcDtcblxuXHRpZiAoQTEgPiBCMiB8fCBCMSA8IEEyIHx8IEMxID4gRDIgfHwgRDEgPCBDMikgcmV0dXJuIGZhbHNlO1xuXHRlbHNlIHJldHVybiB0cnVlO1xufVxuXG5cbmZ1bmN0aW9uIGRpczIoeCwgeSwgeDAsIHkwKSB7XG5cdHZhciBkeCA9IHggLSB4MDtcblx0dmFyIGR5ID0geSAtIHkwO1xuXHRyZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG5cbmZ1bmN0aW9uIHJuZGkyKG0sIG4pIHtcblx0dmFyIGEgPSBNYXRoLnJhbmRvbSgpICogKG4gLSBtKSArIG07XG5cdHJldHVybiBNYXRoLmZsb29yKGEpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./canvas/index.js\n");

/***/ })

/******/ });