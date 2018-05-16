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
/******/ 	return __webpack_require__(__webpack_require__.s = "./event/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./event/index.js":
/*!************************!*\
  !*** ./event/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\nEventManager is a single instance class\n */\nvar EventManager = function () {\n    function EventManager() {\n        _classCallCheck(this, EventManager);\n\n        this.events = {};\n        this.domEvents = new Map();\n        // on is an alias for addHandler\n        this.on = this.addHandler;\n    }\n\n    _createClass(EventManager, [{\n        key: \"addHandler\",\n        value: function addHandler(eventName, handler) {\n            if (this.events[eventName] === undefined) {\n                this.events[eventName] = [];\n            }\n            if (this.events[eventName].indexOf(handler) === -1) {\n                this.events[eventName].push(handler);\n            }\n        }\n    }, {\n        key: \"removeHandler\",\n        value: function removeHandler(eventName, handler) {\n            var arr = this.events[eventName];\n            if (arr !== undefined) {\n                var i = arr.indexOf(handler);\n                if (i !== -1) {\n                    arr.splice(i, 1);\n                }\n            }\n        }\n    }, {\n        key: \"emit\",\n        value: function emit(eventName) {\n            var eventObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n            if (this.events[eventName] === undefined) return;\n            eventObj.type = eventName;\n            this.events[eventName].forEach(function (handler) {\n                return handler(eventObj);\n            });\n        }\n    }]);\n\n    return EventManager;\n}();\n\nexports.default = new EventManager();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC9pbmRleC5qcz8yOWVlIl0sIm5hbWVzIjpbIkV2ZW50TWFuYWdlciIsImV2ZW50cyIsImRvbUV2ZW50cyIsIk1hcCIsIm9uIiwiYWRkSGFuZGxlciIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwicHVzaCIsImFyciIsImkiLCJzcGxpY2UiLCJldmVudE9iaiIsInR5cGUiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdNQSxZO0FBQ0YsNEJBQWM7QUFBQTs7QUFDVixhQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUtDLFNBQUwsR0FBaUIsSUFBSUMsR0FBSixFQUFqQjtBQUNBO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLEtBQUtDLFVBQWY7QUFDSDs7OzttQ0FDVUMsUyxFQUFXQyxPLEVBQVM7QUFDM0IsZ0JBQUksS0FBS04sTUFBTCxDQUFZSyxTQUFaLE1BQTJCRSxTQUEvQixFQUEwQztBQUN0QyxxQkFBS1AsTUFBTCxDQUFZSyxTQUFaLElBQXlCLEVBQXpCO0FBQ0g7QUFDRCxnQkFBSSxLQUFLTCxNQUFMLENBQVlLLFNBQVosRUFBdUJHLE9BQXZCLENBQStCRixPQUEvQixNQUE0QyxDQUFDLENBQWpELEVBQW9EO0FBQ2hELHFCQUFLTixNQUFMLENBQVlLLFNBQVosRUFBdUJJLElBQXZCLENBQTRCSCxPQUE1QjtBQUNIO0FBQ0o7OztzQ0FDYUQsUyxFQUFXQyxPLEVBQVM7QUFDOUIsZ0JBQU1JLE1BQU0sS0FBS1YsTUFBTCxDQUFZSyxTQUFaLENBQVo7QUFDQSxnQkFBR0ssUUFBUUgsU0FBWCxFQUFzQjtBQUNsQixvQkFBSUksSUFBSUQsSUFBSUYsT0FBSixDQUFZRixPQUFaLENBQVI7QUFDQSxvQkFBSUssTUFBTSxDQUFDLENBQVgsRUFBYztBQUNWRCx3QkFBSUUsTUFBSixDQUFXRCxDQUFYLEVBQWMsQ0FBZDtBQUNIO0FBQ0o7QUFDSjs7OzZCQUNJTixTLEVBQXdCO0FBQUEsZ0JBQWJRLFFBQWEsdUVBQUosRUFBSTs7QUFDekIsZ0JBQUksS0FBS2IsTUFBTCxDQUFZSyxTQUFaLE1BQTJCRSxTQUEvQixFQUEwQztBQUMxQ00scUJBQVNDLElBQVQsR0FBZ0JULFNBQWhCO0FBQ0EsaUJBQUtMLE1BQUwsQ0FBWUssU0FBWixFQUF1QlUsT0FBdkIsQ0FBK0I7QUFBQSx1QkFBV1QsUUFBUU8sUUFBUixDQUFYO0FBQUEsYUFBL0I7QUFDSDs7Ozs7O2tCQUVVLElBQUlkLFlBQUosRSIsImZpbGUiOiIuL2V2ZW50L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkV2ZW50TWFuYWdlciBpcyBhIHNpbmdsZSBpbnN0YW5jZSBjbGFzc1xuICovXG5jbGFzcyBFdmVudE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9XG4gICAgICAgIHRoaXMuZG9tRXZlbnRzID0gbmV3IE1hcCgpXG4gICAgICAgIC8vIG9uIGlzIGFuIGFsaWFzIGZvciBhZGRIYW5kbGVyXG4gICAgICAgIHRoaXMub24gPSB0aGlzLmFkZEhhbmRsZXJcbiAgICB9XG4gICAgYWRkSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihoYW5kbGVyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1cbiAgICAgICAgaWYoYXJyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBpID0gYXJyLmluZGV4T2YoaGFuZGxlcilcbiAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0KGV2ZW50TmFtZSwgZXZlbnRPYmo9e30pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgICAgIGV2ZW50T2JqLnR5cGUgPSBldmVudE5hbWVcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihldmVudE9iaikpXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50TWFuYWdlcigpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./event/index.js\n");

/***/ })

/******/ });