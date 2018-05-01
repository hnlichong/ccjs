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
/******/ 	return __webpack_require__(__webpack_require__.s = "./drag/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./drag/index.js":
/*!***********************!*\
  !*** ./drag/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction drag(el) {\n    var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n    var de = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.documentElement;\n    var bd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document.body;\n\n    // 距离不变，三个事件\n    function mousedownHandler(ev) {\n        var sl = de.scrollLeft || bd.scrollLeft,\n            st = de.scrollTop || bd.scrollTop,\n            dw = de.clientWidth || bd.clientWidth,\n            dh = de.clientHeight || bd.clientHeight,\n            rect = el.getBoundingClientRect(),\n            dX = sl + ev.clientX - rect.left,\n            dY = st + ev.clientY - rect.top,\n            maxLeft = sl + dw - rect.width,\n            maxTop = st + dh - rect.height;\n        doc.addEventListener('mousemove', mousemoveHandler);\n\n        function mousemoveHandler(ev) {\n            var sl = de.scrollLeft || bd.scrollLeft,\n                st = de.scrollTop || bd.scrollTop,\n                left = sl + ev.clientX - dX,\n                top = st + ev.clientY - dY;\n            // limit\n            var min = Math.min,\n                max = Math.max;\n            left = max(0, min(left, maxLeft));\n            top = max(0, min(top, maxTop));\n            // batch update dom\n            el.style.cssText += 'left:' + left + 'px;top:' + top + 'px;';\n        }\n\n        doc.addEventListener('mouseup', mouseupHandler);\n\n        function mouseupHandler(ev) {\n            doc.removeEventListener('mousemove', mousemoveHandler);\n            doc.removeEventListener('mouseup', mouseupHandler);\n        }\n    }\n\n    return {\n        enable: function enable() {\n            el.addEventListener('mousedown', mousedownHandler);\n        },\n        disable: function disable() {\n            el.removeEventListener('mousedown', mousedownHandler);\n        }\n    };\n}\n\nwindow.drag = drag;\nexports.default = drag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kcmFnL2luZGV4LmpzPzcyZjciXSwibmFtZXMiOlsiZHJhZyIsImVsIiwiZG9jIiwiZG9jdW1lbnQiLCJkZSIsImRvY3VtZW50RWxlbWVudCIsImJkIiwiYm9keSIsIm1vdXNlZG93bkhhbmRsZXIiLCJldiIsInNsIiwic2Nyb2xsTGVmdCIsInN0Iiwic2Nyb2xsVG9wIiwiZHciLCJjbGllbnRXaWR0aCIsImRoIiwiY2xpZW50SGVpZ2h0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRYIiwiY2xpZW50WCIsImxlZnQiLCJkWSIsImNsaWVudFkiLCJ0b3AiLCJtYXhMZWZ0Iiwid2lkdGgiLCJtYXhUb3AiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2Vtb3ZlSGFuZGxlciIsIm1pbiIsIk1hdGgiLCJtYXgiLCJzdHlsZSIsImNzc1RleHQiLCJtb3VzZXVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGUiLCJkaXNhYmxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLElBQVQsQ0FBY0MsRUFBZCxFQUFxRjtBQUFBLFFBQW5FQyxHQUFtRSx1RUFBN0RDLFFBQTZEO0FBQUEsUUFBbkRDLEVBQW1ELHVFQUE5Q0QsU0FBU0UsZUFBcUM7QUFBQSxRQUFwQkMsRUFBb0IsdUVBQWZILFNBQVNJLElBQU07O0FBQ2pGO0FBQ0EsYUFBU0MsZ0JBQVQsQ0FBMEJDLEVBQTFCLEVBQThCO0FBQzFCLFlBQUlDLEtBQUtOLEdBQUdPLFVBQUgsSUFBaUJMLEdBQUdLLFVBQTdCO0FBQUEsWUFDSUMsS0FBS1IsR0FBR1MsU0FBSCxJQUFnQlAsR0FBR08sU0FENUI7QUFBQSxZQUVJQyxLQUFLVixHQUFHVyxXQUFILElBQWtCVCxHQUFHUyxXQUY5QjtBQUFBLFlBR0lDLEtBQUtaLEdBQUdhLFlBQUgsSUFBbUJYLEdBQUdXLFlBSC9CO0FBQUEsWUFJSUMsT0FBT2pCLEdBQUdrQixxQkFBSCxFQUpYO0FBQUEsWUFLSUMsS0FBS1YsS0FBS0QsR0FBR1ksT0FBUixHQUFrQkgsS0FBS0ksSUFMaEM7QUFBQSxZQU1JQyxLQUFLWCxLQUFLSCxHQUFHZSxPQUFSLEdBQWtCTixLQUFLTyxHQU5oQztBQUFBLFlBT0lDLFVBQVVoQixLQUFLSSxFQUFMLEdBQVVJLEtBQUtTLEtBUDdCO0FBQUEsWUFRSUMsU0FBU2hCLEtBQUtJLEVBQUwsR0FBVUUsS0FBS1csTUFSNUI7QUFTQTNCLFlBQUk0QixnQkFBSixDQUFxQixXQUFyQixFQUFrQ0MsZ0JBQWxDOztBQUVBLGlCQUFTQSxnQkFBVCxDQUEwQnRCLEVBQTFCLEVBQThCO0FBQzFCLGdCQUFJQyxLQUFLTixHQUFHTyxVQUFILElBQWlCTCxHQUFHSyxVQUE3QjtBQUFBLGdCQUNJQyxLQUFLUixHQUFHUyxTQUFILElBQWdCUCxHQUFHTyxTQUQ1QjtBQUFBLGdCQUVJUyxPQUFPWixLQUFLRCxHQUFHWSxPQUFSLEdBQWtCRCxFQUY3QjtBQUFBLGdCQUdJSyxNQUFNYixLQUFLSCxHQUFHZSxPQUFSLEdBQWtCRCxFQUg1QjtBQUlBO0FBQ0EsZ0JBQU1TLE1BQU1DLEtBQUtELEdBQWpCO0FBQUEsZ0JBQ0lFLE1BQU1ELEtBQUtDLEdBRGY7QUFFQVosbUJBQU9ZLElBQUksQ0FBSixFQUFPRixJQUFJVixJQUFKLEVBQVVJLE9BQVYsQ0FBUCxDQUFQO0FBQ0FELGtCQUFNUyxJQUFJLENBQUosRUFBT0YsSUFBSVAsR0FBSixFQUFTRyxNQUFULENBQVAsQ0FBTjtBQUNBO0FBQ0EzQixlQUFHa0MsS0FBSCxDQUFTQyxPQUFULGNBQTRCZCxJQUE1QixlQUEwQ0csR0FBMUM7QUFDSDs7QUFFRHZCLFlBQUk0QixnQkFBSixDQUFxQixTQUFyQixFQUFnQ08sY0FBaEM7O0FBRUEsaUJBQVNBLGNBQVQsQ0FBd0I1QixFQUF4QixFQUE0QjtBQUN4QlAsZ0JBQUlvQyxtQkFBSixDQUF3QixXQUF4QixFQUFxQ1AsZ0JBQXJDO0FBQ0E3QixnQkFBSW9DLG1CQUFKLENBQXdCLFNBQXhCLEVBQW1DRCxjQUFuQztBQUNIO0FBQ0o7O0FBRUQsV0FBTztBQUNIRSxjQURHLG9CQUNNO0FBQ0x0QyxlQUFHNkIsZ0JBQUgsQ0FBb0IsV0FBcEIsRUFBaUN0QixnQkFBakM7QUFDSCxTQUhFO0FBSUhnQyxlQUpHLHFCQUlPO0FBQ052QyxlQUFHcUMsbUJBQUgsQ0FBdUIsV0FBdkIsRUFBb0M5QixnQkFBcEM7QUFDSDtBQU5FLEtBQVA7QUFTSDs7QUFFRGlDLE9BQU96QyxJQUFQLEdBQWNBLElBQWQ7a0JBQ2VBLEkiLCJmaWxlIjoiLi9kcmFnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZHJhZyhlbCwgZG9jID0gZG9jdW1lbnQsIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBiZCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAvLyDot53nprvkuI3lj5jvvIzkuInkuKrkuovku7ZcbiAgICBmdW5jdGlvbiBtb3VzZWRvd25IYW5kbGVyKGV2KSB7XG4gICAgICAgIGxldCBzbCA9IGRlLnNjcm9sbExlZnQgfHwgYmQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHN0ID0gZGUuc2Nyb2xsVG9wIHx8IGJkLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIGR3ID0gZGUuY2xpZW50V2lkdGggfHwgYmQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBkaCA9IGRlLmNsaWVudEhlaWdodCB8fCBiZC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICBkWCA9IHNsICsgZXYuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgICAgIGRZID0gc3QgKyBldi5jbGllbnRZIC0gcmVjdC50b3AsXG4gICAgICAgICAgICBtYXhMZWZ0ID0gc2wgKyBkdyAtIHJlY3Qud2lkdGgsXG4gICAgICAgICAgICBtYXhUb3AgPSBzdCArIGRoIC0gcmVjdC5oZWlnaHRcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlbW92ZUhhbmRsZXIpXG5cbiAgICAgICAgZnVuY3Rpb24gbW91c2Vtb3ZlSGFuZGxlcihldikge1xuICAgICAgICAgICAgbGV0IHNsID0gZGUuc2Nyb2xsTGVmdCB8fCBiZC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIHN0ID0gZGUuc2Nyb2xsVG9wIHx8IGJkLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gc2wgKyBldi5jbGllbnRYIC0gZFgsXG4gICAgICAgICAgICAgICAgdG9wID0gc3QgKyBldi5jbGllbnRZIC0gZFlcbiAgICAgICAgICAgIC8vIGxpbWl0XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbixcbiAgICAgICAgICAgICAgICBtYXggPSBNYXRoLm1heFxuICAgICAgICAgICAgbGVmdCA9IG1heCgwLCBtaW4obGVmdCwgbWF4TGVmdCkpXG4gICAgICAgICAgICB0b3AgPSBtYXgoMCwgbWluKHRvcCwgbWF4VG9wKSlcbiAgICAgICAgICAgIC8vIGJhdGNoIHVwZGF0ZSBkb21cbiAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgKz0gYGxlZnQ6JHtsZWZ0fXB4O3RvcDoke3RvcH1weDtgXG4gICAgICAgIH1cblxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNldXBIYW5kbGVyKVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNldXBIYW5kbGVyKGV2KSB7XG4gICAgICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlSGFuZGxlcilcbiAgICAgICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2V1cEhhbmRsZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmFibGUoKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZWRvd25IYW5kbGVyKVxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlKCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2Vkb3duSGFuZGxlcilcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG53aW5kb3cuZHJhZyA9IGRyYWdcbmV4cG9ydCBkZWZhdWx0IGRyYWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./drag/index.js\n");

/***/ })

/******/ });