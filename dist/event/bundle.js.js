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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\nEventManager is a single instance class\nsupported IE9+\n */\nvar EventManager = function () {\n    function EventManager() {\n        _classCallCheck(this, EventManager);\n\n        this.events = {};\n        this.domEvents = new Map();\n        // on is an alias for addHandler\n        this.on = this.addHandler;\n    }\n\n    _createClass(EventManager, [{\n        key: \"addHandler\",\n        value: function addHandler(eventName, handler) {\n            if (this.events[eventName] === undefined) {\n                this.events[eventName] = [];\n            }\n            if (this.events[eventName].indexOf(handler) === -1) {\n                this.events[eventName].push(handler);\n            }\n        }\n    }, {\n        key: \"removeHandler\",\n        value: function removeHandler(eventName, handler) {\n            var arr = this.events[eventName];\n            if (arr !== undefined) {\n                var i = arr.indexOf(handler);\n                if (i !== -1) {\n                    arr.splice(i, 1);\n                }\n            }\n        }\n    }, {\n        key: \"emit\",\n        value: function emit(eventName) {\n            var eventObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n            if (this.events[eventName] === undefined) return;\n            eventObj.type = eventName;\n            this.events[eventName].forEach(function (handler) {\n                return handler(eventObj);\n            });\n        }\n    }, {\n        key: \"addDomEventHandler\",\n        value: function addDomEventHandler(el, type, handler) {\n            var obj = {};\n            if (!this.domEvents.has(el)) {\n                obj._delegateHandler = function (ev) {\n                    obj[ev.type].forEach(function (handler) {\n                        return handler(ev);\n                    });\n                };\n                this.domEvents.set(el, obj);\n            } else {\n                obj = this.domEvents.get(el);\n            }\n            if (obj[type] === undefined) {\n                obj[type] = [];\n                el.addEventListener(type, obj._delegateHandler);\n            }\n            obj[type].push(handler);\n        }\n    }, {\n        key: \"removeDomEventHandler\",\n        value: function removeDomEventHandler(el, type, handler) {\n            if (this.domEvents.has(el)) {\n                var obj = this.domEvents.get(el);\n                if (obj[type] !== undefined) {\n                    var i = obj[type].indexOf(handler);\n                    if (i !== -1) {\n                        obj[type].splice(obj[type].indexOf(handler), 1);\n                    }\n                    if (obj[type].length === 0) {\n                        el.removeEventListener(type, obj._delegateHandler);\n                    }\n                }\n            }\n        }\n    }]);\n\n    return EventManager;\n}();\n\nexports.default = new EventManager();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC9pbmRleC5qcz8yOWVlIl0sIm5hbWVzIjpbIkV2ZW50TWFuYWdlciIsImV2ZW50cyIsImRvbUV2ZW50cyIsIk1hcCIsIm9uIiwiYWRkSGFuZGxlciIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwicHVzaCIsImFyciIsImkiLCJzcGxpY2UiLCJldmVudE9iaiIsInR5cGUiLCJmb3JFYWNoIiwiZWwiLCJvYmoiLCJoYXMiLCJfZGVsZWdhdGVIYW5kbGVyIiwiZXYiLCJzZXQiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0lBSU1BLFk7QUFDRiw0QkFBYztBQUFBOztBQUNWLGFBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixJQUFJQyxHQUFKLEVBQWpCO0FBQ0E7QUFDQSxhQUFLQyxFQUFMLEdBQVUsS0FBS0MsVUFBZjtBQUNIOzs7O21DQUNVQyxTLEVBQVdDLE8sRUFBUztBQUMzQixnQkFBSSxLQUFLTixNQUFMLENBQVlLLFNBQVosTUFBMkJFLFNBQS9CLEVBQTBDO0FBQ3RDLHFCQUFLUCxNQUFMLENBQVlLLFNBQVosSUFBeUIsRUFBekI7QUFDSDtBQUNELGdCQUFJLEtBQUtMLE1BQUwsQ0FBWUssU0FBWixFQUF1QkcsT0FBdkIsQ0FBK0JGLE9BQS9CLE1BQTRDLENBQUMsQ0FBakQsRUFBb0Q7QUFDaEQscUJBQUtOLE1BQUwsQ0FBWUssU0FBWixFQUF1QkksSUFBdkIsQ0FBNEJILE9BQTVCO0FBQ0g7QUFDSjs7O3NDQUNhRCxTLEVBQVdDLE8sRUFBUztBQUM5QixnQkFBTUksTUFBTSxLQUFLVixNQUFMLENBQVlLLFNBQVosQ0FBWjtBQUNBLGdCQUFHSyxRQUFRSCxTQUFYLEVBQXNCO0FBQ2xCLG9CQUFJSSxJQUFJRCxJQUFJRixPQUFKLENBQVlGLE9BQVosQ0FBUjtBQUNBLG9CQUFJSyxNQUFNLENBQUMsQ0FBWCxFQUFjO0FBQ1ZELHdCQUFJRSxNQUFKLENBQVdELENBQVgsRUFBYyxDQUFkO0FBQ0g7QUFDSjtBQUNKOzs7NkJBQ0lOLFMsRUFBd0I7QUFBQSxnQkFBYlEsUUFBYSx1RUFBSixFQUFJOztBQUN6QixnQkFBSSxLQUFLYixNQUFMLENBQVlLLFNBQVosTUFBMkJFLFNBQS9CLEVBQTBDO0FBQzFDTSxxQkFBU0MsSUFBVCxHQUFnQlQsU0FBaEI7QUFDQSxpQkFBS0wsTUFBTCxDQUFZSyxTQUFaLEVBQXVCVSxPQUF2QixDQUErQjtBQUFBLHVCQUFXVCxRQUFRTyxRQUFSLENBQVg7QUFBQSxhQUEvQjtBQUNIOzs7MkNBQ2tCRyxFLEVBQUlGLEksRUFBTVIsTyxFQUFTO0FBQ2xDLGdCQUFJVyxNQUFNLEVBQVY7QUFDQSxnQkFBRyxDQUFDLEtBQUtoQixTQUFMLENBQWVpQixHQUFmLENBQW1CRixFQUFuQixDQUFKLEVBQTRCO0FBQ3hCQyxvQkFBSUUsZ0JBQUosR0FBdUIsVUFBU0MsRUFBVCxFQUFhO0FBQ2hDSCx3QkFBSUcsR0FBR04sSUFBUCxFQUFhQyxPQUFiLENBQXFCO0FBQUEsK0JBQVdULFFBQVFjLEVBQVIsQ0FBWDtBQUFBLHFCQUFyQjtBQUNILGlCQUZEO0FBR0EscUJBQUtuQixTQUFMLENBQWVvQixHQUFmLENBQW1CTCxFQUFuQixFQUF1QkMsR0FBdkI7QUFDSCxhQUxELE1BS007QUFDRkEsc0JBQU0sS0FBS2hCLFNBQUwsQ0FBZXFCLEdBQWYsQ0FBbUJOLEVBQW5CLENBQU47QUFDSDtBQUNELGdCQUFHQyxJQUFJSCxJQUFKLE1BQWNQLFNBQWpCLEVBQTRCO0FBQ3hCVSxvQkFBSUgsSUFBSixJQUFZLEVBQVo7QUFDQUUsbUJBQUdPLGdCQUFILENBQW9CVCxJQUFwQixFQUEwQkcsSUFBSUUsZ0JBQTlCO0FBQ0g7QUFDREYsZ0JBQUlILElBQUosRUFBVUwsSUFBVixDQUFlSCxPQUFmO0FBQ0g7Ozs4Q0FDcUJVLEUsRUFBSUYsSSxFQUFNUixPLEVBQVM7QUFDckMsZ0JBQUcsS0FBS0wsU0FBTCxDQUFlaUIsR0FBZixDQUFtQkYsRUFBbkIsQ0FBSCxFQUEyQjtBQUN2QixvQkFBTUMsTUFBTSxLQUFLaEIsU0FBTCxDQUFlcUIsR0FBZixDQUFtQk4sRUFBbkIsQ0FBWjtBQUNBLG9CQUFHQyxJQUFJSCxJQUFKLE1BQWNQLFNBQWpCLEVBQTRCO0FBQ3hCLHdCQUFJSSxJQUFJTSxJQUFJSCxJQUFKLEVBQVVOLE9BQVYsQ0FBa0JGLE9BQWxCLENBQVI7QUFDQSx3QkFBSUssTUFBTSxDQUFDLENBQVgsRUFBYztBQUNWTSw0QkFBSUgsSUFBSixFQUFVRixNQUFWLENBQWlCSyxJQUFJSCxJQUFKLEVBQVVOLE9BQVYsQ0FBa0JGLE9BQWxCLENBQWpCLEVBQTZDLENBQTdDO0FBQ0g7QUFDRCx3QkFBR1csSUFBSUgsSUFBSixFQUFVVSxNQUFWLEtBQXFCLENBQXhCLEVBQTJCO0FBQ3ZCUiwyQkFBR1MsbUJBQUgsQ0FBdUJYLElBQXZCLEVBQTZCRyxJQUFJRSxnQkFBakM7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7Ozs7O2tCQUdVLElBQUlwQixZQUFKLEUiLCJmaWxlIjoiLi9ldmVudC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5FdmVudE1hbmFnZXIgaXMgYSBzaW5nbGUgaW5zdGFuY2UgY2xhc3NcbnN1cHBvcnRlZCBJRTkrXG4gKi9cbmNsYXNzIEV2ZW50TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge31cbiAgICAgICAgdGhpcy5kb21FdmVudHMgPSBuZXcgTWFwKClcbiAgICAgICAgLy8gb24gaXMgYW4gYWxpYXMgZm9yIGFkZEhhbmRsZXJcbiAgICAgICAgdGhpcy5vbiA9IHRoaXMuYWRkSGFuZGxlclxuICAgIH1cbiAgICBhZGRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGhhbmRsZXIpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXVxuICAgICAgICBpZihhcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGkgPSBhcnIuaW5kZXhPZihoYW5kbGVyKVxuICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXQoZXZlbnROYW1lLCBldmVudE9iaj17fSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cbiAgICAgICAgZXZlbnRPYmoudHlwZSA9IGV2ZW50TmFtZVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKGV2ZW50T2JqKSlcbiAgICB9XG4gICAgYWRkRG9tRXZlbnRIYW5kbGVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgIGxldCBvYmogPSB7fVxuICAgICAgICBpZighdGhpcy5kb21FdmVudHMuaGFzKGVsKSkge1xuICAgICAgICAgICAgb2JqLl9kZWxlZ2F0ZUhhbmRsZXIgPSBmdW5jdGlvbihldikge1xuICAgICAgICAgICAgICAgIG9ialtldi50eXBlXS5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihldikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRvbUV2ZW50cy5zZXQoZWwsIG9iailcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgb2JqID0gdGhpcy5kb21FdmVudHMuZ2V0KGVsKVxuICAgICAgICB9XG4gICAgICAgIGlmKG9ialt0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvYmpbdHlwZV0gPSBbXVxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBvYmouX2RlbGVnYXRlSGFuZGxlcilcbiAgICAgICAgfVxuICAgICAgICBvYmpbdHlwZV0ucHVzaChoYW5kbGVyKVxuICAgIH1cbiAgICByZW1vdmVEb21FdmVudEhhbmRsZXIoZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYodGhpcy5kb21FdmVudHMuaGFzKGVsKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5kb21FdmVudHMuZ2V0KGVsKVxuICAgICAgICAgICAgaWYob2JqW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IG9ialt0eXBlXS5pbmRleE9mKGhhbmRsZXIpXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialt0eXBlXS5zcGxpY2Uob2JqW3R5cGVdLmluZGV4T2YoaGFuZGxlciksIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG9ialt0eXBlXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBvYmouX2RlbGVnYXRlSGFuZGxlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudE1hbmFnZXIoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./event/index.js\n");

/***/ })

/******/ });