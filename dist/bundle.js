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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\nEventManager is a single instance class\n */\nvar EventManager = function () {\n    function EventManager() {\n        _classCallCheck(this, EventManager);\n\n        this.events = {};\n        this.domEvents = new Map();\n        // on is an alias for addHandler\n        this.on = this.addHandler;\n    }\n\n    _createClass(EventManager, [{\n        key: \"addHandler\",\n        value: function addHandler(eventName, handler) {\n            if (this.events[eventName] === undefined) {\n                this.events[eventName] = [];\n            }\n            if (this.events[eventName].indexOf(handler) === -1) {\n                this.events[eventName].push(handler);\n            }\n        }\n    }, {\n        key: \"removeHandler\",\n        value: function removeHandler(eventName, handler) {\n            var arr = this.events[eventName];\n            if (arr !== undefined) {\n                var i = arr.indexOf(handler);\n                if (i !== -1) {\n                    arr.splice(i, 1);\n                }\n            }\n        }\n    }, {\n        key: \"emit\",\n        value: function emit(eventName) {\n            var eventObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n            if (this.events[eventName] === undefined) return;\n            eventObj.type = eventName;\n            this.events[eventName].forEach(function (handler) {\n                return handler(eventObj);\n            });\n        }\n    }, {\n        key: \"addDomEventHandler\",\n        value: function addDomEventHandler(el, type, handler) {\n            if (!this.domEvents.has(el)) {\n                this.domEvents.set(el, {});\n            }\n            var obj = this.domEvents.get(el);\n            if (obj[type] === undefined) {\n                obj[type] = [];\n                obj._delegateHandler = function (ev) {\n                    obj[ev.type].forEach(function (handler) {\n                        return handler(ev);\n                    });\n                };\n                el.addEventListener(type, obj._delegateHandler);\n            }\n            obj[type].push(handler);\n        }\n    }, {\n        key: \"removeDomEventHandler\",\n        value: function removeDomEventHandler(el, type, handler) {\n            if (this.domEvents.has(el)) {\n                var arr = this.getDomEventHandlers(el, type);\n                if (arr !== undefined) {\n                    var i = arr.indexOf(handler);\n                    if (i !== -1) {\n                        arr.splice(arr.indexOf(handler), 1);\n                    }\n                }\n            }\n        }\n    }, {\n        key: \"getDomEventHandlers\",\n        value: function getDomEventHandlers(el, type) {\n            if (this.domEvents.has(el)) {\n                var obj = this.domEvents.get(el);\n                if (obj[type] !== undefined) {\n                    return obj[type];\n                }\n            }\n            return undefined;\n        }\n    }]);\n\n    return EventManager;\n}();\n\nexports.default = new EventManager();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC9pbmRleC5qcz8yOWVlIl0sIm5hbWVzIjpbIkV2ZW50TWFuYWdlciIsImV2ZW50cyIsImRvbUV2ZW50cyIsIk1hcCIsIm9uIiwiYWRkSGFuZGxlciIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwicHVzaCIsImFyciIsImkiLCJzcGxpY2UiLCJldmVudE9iaiIsInR5cGUiLCJmb3JFYWNoIiwiZWwiLCJoYXMiLCJzZXQiLCJvYmoiLCJnZXQiLCJfZGVsZWdhdGVIYW5kbGVyIiwiZXYiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RG9tRXZlbnRIYW5kbGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsWTtBQUNGLDRCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLQyxTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFDQTtBQUNBLGFBQUtDLEVBQUwsR0FBVSxLQUFLQyxVQUFmO0FBQ0g7Ozs7bUNBQ1VDLFMsRUFBV0MsTyxFQUFTO0FBQzNCLGdCQUFJLEtBQUtOLE1BQUwsQ0FBWUssU0FBWixNQUEyQkUsU0FBL0IsRUFBMEM7QUFDdEMscUJBQUtQLE1BQUwsQ0FBWUssU0FBWixJQUF5QixFQUF6QjtBQUNIO0FBQ0QsZ0JBQUksS0FBS0wsTUFBTCxDQUFZSyxTQUFaLEVBQXVCRyxPQUF2QixDQUErQkYsT0FBL0IsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNoRCxxQkFBS04sTUFBTCxDQUFZSyxTQUFaLEVBQXVCSSxJQUF2QixDQUE0QkgsT0FBNUI7QUFDSDtBQUNKOzs7c0NBQ2FELFMsRUFBV0MsTyxFQUFTO0FBQzlCLGdCQUFNSSxNQUFNLEtBQUtWLE1BQUwsQ0FBWUssU0FBWixDQUFaO0FBQ0EsZ0JBQUdLLFFBQVFILFNBQVgsRUFBc0I7QUFDbEIsb0JBQUlJLElBQUlELElBQUlGLE9BQUosQ0FBWUYsT0FBWixDQUFSO0FBQ0Esb0JBQUlLLE1BQU0sQ0FBQyxDQUFYLEVBQWM7QUFDVkQsd0JBQUlFLE1BQUosQ0FBV0QsQ0FBWCxFQUFjLENBQWQ7QUFDSDtBQUNKO0FBQ0o7Ozs2QkFDSU4sUyxFQUF3QjtBQUFBLGdCQUFiUSxRQUFhLHVFQUFKLEVBQUk7O0FBQ3pCLGdCQUFJLEtBQUtiLE1BQUwsQ0FBWUssU0FBWixNQUEyQkUsU0FBL0IsRUFBMEM7QUFDMUNNLHFCQUFTQyxJQUFULEdBQWdCVCxTQUFoQjtBQUNBLGlCQUFLTCxNQUFMLENBQVlLLFNBQVosRUFBdUJVLE9BQXZCLENBQStCO0FBQUEsdUJBQVdULFFBQVFPLFFBQVIsQ0FBWDtBQUFBLGFBQS9CO0FBQ0g7OzsyQ0FDa0JHLEUsRUFBSUYsSSxFQUFNUixPLEVBQVM7QUFDbEMsZ0JBQUcsQ0FBQyxLQUFLTCxTQUFMLENBQWVnQixHQUFmLENBQW1CRCxFQUFuQixDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLZixTQUFMLENBQWVpQixHQUFmLENBQW1CRixFQUFuQixFQUF1QixFQUF2QjtBQUNIO0FBQ0QsZ0JBQU1HLE1BQU0sS0FBS2xCLFNBQUwsQ0FBZW1CLEdBQWYsQ0FBbUJKLEVBQW5CLENBQVo7QUFDQSxnQkFBR0csSUFBSUwsSUFBSixNQUFjUCxTQUFqQixFQUE0QjtBQUN4Qlksb0JBQUlMLElBQUosSUFBWSxFQUFaO0FBQ0FLLG9CQUFJRSxnQkFBSixHQUF1QixVQUFVQyxFQUFWLEVBQWM7QUFDakNILHdCQUFJRyxHQUFHUixJQUFQLEVBQWFDLE9BQWIsQ0FBcUI7QUFBQSwrQkFBV1QsUUFBUWdCLEVBQVIsQ0FBWDtBQUFBLHFCQUFyQjtBQUNILGlCQUZEO0FBR0FOLG1CQUFHTyxnQkFBSCxDQUFvQlQsSUFBcEIsRUFBMEJLLElBQUlFLGdCQUE5QjtBQUNIO0FBQ0RGLGdCQUFJTCxJQUFKLEVBQVVMLElBQVYsQ0FBZUgsT0FBZjtBQUVIOzs7OENBQ3FCVSxFLEVBQUlGLEksRUFBTVIsTyxFQUFTO0FBQ3JDLGdCQUFHLEtBQUtMLFNBQUwsQ0FBZWdCLEdBQWYsQ0FBbUJELEVBQW5CLENBQUgsRUFBMkI7QUFDdkIsb0JBQU1OLE1BQU0sS0FBS2MsbUJBQUwsQ0FBeUJSLEVBQXpCLEVBQTZCRixJQUE3QixDQUFaO0FBQ0Esb0JBQUdKLFFBQVFILFNBQVgsRUFBc0I7QUFDbEIsd0JBQUlJLElBQUlELElBQUlGLE9BQUosQ0FBWUYsT0FBWixDQUFSO0FBQ0Esd0JBQUlLLE1BQU0sQ0FBQyxDQUFYLEVBQWM7QUFDVkQsNEJBQUlFLE1BQUosQ0FBV0YsSUFBSUYsT0FBSixDQUFZRixPQUFaLENBQVgsRUFBaUMsQ0FBakM7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7OzRDQUNtQlUsRSxFQUFJRixJLEVBQU07QUFDMUIsZ0JBQUcsS0FBS2IsU0FBTCxDQUFlZ0IsR0FBZixDQUFtQkQsRUFBbkIsQ0FBSCxFQUEyQjtBQUN2QixvQkFBTUcsTUFBTSxLQUFLbEIsU0FBTCxDQUFlbUIsR0FBZixDQUFtQkosRUFBbkIsQ0FBWjtBQUNBLG9CQUFHRyxJQUFJTCxJQUFKLE1BQWNQLFNBQWpCLEVBQTRCO0FBQ3hCLDJCQUFPWSxJQUFJTCxJQUFKLENBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU9QLFNBQVA7QUFDSDs7Ozs7O2tCQUdVLElBQUlSLFlBQUosRSIsImZpbGUiOiIuL2V2ZW50L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkV2ZW50TWFuYWdlciBpcyBhIHNpbmdsZSBpbnN0YW5jZSBjbGFzc1xuICovXG5jbGFzcyBFdmVudE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9XG4gICAgICAgIHRoaXMuZG9tRXZlbnRzID0gbmV3IE1hcCgpXG4gICAgICAgIC8vIG9uIGlzIGFuIGFsaWFzIGZvciBhZGRIYW5kbGVyXG4gICAgICAgIHRoaXMub24gPSB0aGlzLmFkZEhhbmRsZXJcbiAgICB9XG4gICAgYWRkSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihoYW5kbGVyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1cbiAgICAgICAgaWYoYXJyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBpID0gYXJyLmluZGV4T2YoaGFuZGxlcilcbiAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0KGV2ZW50TmFtZSwgZXZlbnRPYmo9e30pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgICAgIGV2ZW50T2JqLnR5cGUgPSBldmVudE5hbWVcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihldmVudE9iaikpXG4gICAgfVxuICAgIGFkZERvbUV2ZW50SGFuZGxlcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICAgICAgICBpZighdGhpcy5kb21FdmVudHMuaGFzKGVsKSkge1xuICAgICAgICAgICAgdGhpcy5kb21FdmVudHMuc2V0KGVsLCB7fSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYmogPSB0aGlzLmRvbUV2ZW50cy5nZXQoZWwpXG4gICAgICAgIGlmKG9ialt0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvYmpbdHlwZV0gPSBbXVxuICAgICAgICAgICAgb2JqLl9kZWxlZ2F0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBvYmpbZXYudHlwZV0uZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIoZXYpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBvYmouX2RlbGVnYXRlSGFuZGxlcilcbiAgICAgICAgfVxuICAgICAgICBvYmpbdHlwZV0ucHVzaChoYW5kbGVyKVxuXG4gICAgfVxuICAgIHJlbW92ZURvbUV2ZW50SGFuZGxlcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICAgICAgICBpZih0aGlzLmRvbUV2ZW50cy5oYXMoZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmdldERvbUV2ZW50SGFuZGxlcnMoZWwsIHR5cGUpXG4gICAgICAgICAgICBpZihhcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBpID0gYXJyLmluZGV4T2YoaGFuZGxlcilcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShhcnIuaW5kZXhPZihoYW5kbGVyKSwgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RG9tRXZlbnRIYW5kbGVycyhlbCwgdHlwZSkge1xuICAgICAgICBpZih0aGlzLmRvbUV2ZW50cy5oYXMoZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmRvbUV2ZW50cy5nZXQoZWwpXG4gICAgICAgICAgICBpZihvYmpbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbdHlwZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRNYW5hZ2VyKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./event/index.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _event = __webpack_require__(/*! ./event */ \"./event/index.js\");\n\nvar _event2 = _interopRequireDefault(_event);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar btn1 = document.querySelector('#btn1');\n\nfunction onClick(ev) {\n    console.log(ev.type, ev.target);\n}\nfunction onBtnClick(ev) {\n    _event2.default.removeDomEventHandler(document, 'mouseover', onMouseOver);\n}\nfunction onMouseOver(ev) {\n    console.log(ev.type, ev.target);\n}\n_event2.default.addDomEventHandler(document, 'click', onClick);\n_event2.default.addDomEventHandler(document, 'mouseover', onMouseOver);\n_event2.default.addDomEventHandler(btn1, 'click', onBtnClick);\n\nwindow.ev = _event2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz80MWY1Il0sIm5hbWVzIjpbImJ0bjEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbkNsaWNrIiwiZXYiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInRhcmdldCIsIm9uQnRuQ2xpY2siLCJyZW1vdmVEb21FdmVudEhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsImFkZERvbUV2ZW50SGFuZGxlciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFiOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBQ2pCQyxZQUFRQyxHQUFSLENBQVlGLEdBQUdHLElBQWYsRUFBcUJILEdBQUdJLE1BQXhCO0FBQ0g7QUFDRCxTQUFTQyxVQUFULENBQW9CTCxFQUFwQixFQUF3QjtBQUNwQixvQkFBYU0scUJBQWIsQ0FBbUNULFFBQW5DLEVBQTZDLFdBQTdDLEVBQTBEVSxXQUExRDtBQUNIO0FBQ0QsU0FBU0EsV0FBVCxDQUFxQlAsRUFBckIsRUFBeUI7QUFDckJDLFlBQVFDLEdBQVIsQ0FBWUYsR0FBR0csSUFBZixFQUFxQkgsR0FBR0ksTUFBeEI7QUFFSDtBQUNELGdCQUFhSSxrQkFBYixDQUFnQ1gsUUFBaEMsRUFBMEMsT0FBMUMsRUFBbURFLE9BQW5EO0FBQ0EsZ0JBQWFTLGtCQUFiLENBQWdDWCxRQUFoQyxFQUEwQyxXQUExQyxFQUF1RFUsV0FBdkQ7QUFDQSxnQkFBYUMsa0JBQWIsQ0FBZ0NaLElBQWhDLEVBQXNDLE9BQXRDLEVBQStDUyxVQUEvQzs7QUFFQUksT0FBT1QsRUFBUCIsImZpbGUiOiIuL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50TWFuYWdlciBmcm9tICcuL2V2ZW50J1xuXG5jb25zdCBidG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bjEnKVxuXG5mdW5jdGlvbiBvbkNsaWNrKGV2KSB7XG4gICAgY29uc29sZS5sb2coZXYudHlwZSwgZXYudGFyZ2V0KVxufVxuZnVuY3Rpb24gb25CdG5DbGljayhldikge1xuICAgIGV2ZW50TWFuYWdlci5yZW1vdmVEb21FdmVudEhhbmRsZXIoZG9jdW1lbnQsICdtb3VzZW92ZXInLCBvbk1vdXNlT3Zlcilcbn1cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGV2KSB7XG4gICAgY29uc29sZS5sb2coZXYudHlwZSwgZXYudGFyZ2V0KVxuXG59XG5ldmVudE1hbmFnZXIuYWRkRG9tRXZlbnRIYW5kbGVyKGRvY3VtZW50LCAnY2xpY2snLCBvbkNsaWNrKVxuZXZlbnRNYW5hZ2VyLmFkZERvbUV2ZW50SGFuZGxlcihkb2N1bWVudCwgJ21vdXNlb3ZlcicsIG9uTW91c2VPdmVyKVxuZXZlbnRNYW5hZ2VyLmFkZERvbUV2ZW50SGFuZGxlcihidG4xLCAnY2xpY2snLCBvbkJ0bkNsaWNrKVxuXG53aW5kb3cuZXYgPSBldmVudE1hbmFnZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });