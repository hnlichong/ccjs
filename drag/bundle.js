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
eval("\n\nfunction Drag(el) {\n    el.addEventListener('mousedown', this.mousedownHandler);\n}\nDrag.prototype = {\n    constructor: Drag,\n    mousedownHandler: function mousedownHandler(ev) {}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kcmFnL2luZGV4LmpzPzcyZjciXSwibmFtZXMiOlsiRHJhZyIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlZG93bkhhbmRsZXIiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsImV2Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLElBQVQsQ0FBY0MsRUFBZCxFQUFrQjtBQUNkQSxPQUFHQyxnQkFBSCxDQUFvQixXQUFwQixFQUFpQyxLQUFLQyxnQkFBdEM7QUFFSDtBQUNESCxLQUFLSSxTQUFMLEdBQWlCO0FBQ2JDLGlCQUFhTCxJQURBO0FBRWJHLHNCQUFrQiwwQkFBVUcsRUFBVixFQUFjLENBQy9CO0FBSFksQ0FBakIiLCJmaWxlIjoiLi9kcmFnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRHJhZyhlbCkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2Vkb3duSGFuZGxlcilcblxufVxuRHJhZy5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IERyYWcsXG4gICAgbW91c2Vkb3duSGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./drag/index.js\n");

/***/ })

/******/ });