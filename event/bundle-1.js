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
/******/ 	return __webpack_require__(__webpack_require__.s = "./event/index-1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./event/index-1.js":
/*!**************************!*\
  !*** ./event/index-1.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\nEventManager is a single instance class\nadd dom events\n */\nvar EventManager = function () {\n    function EventManager() {\n        _classCallCheck(this, EventManager);\n\n        this.events = {};\n        this.domEvents = new Map();\n        // on is an alias for addHandler\n        this.on = this.addHandler;\n    }\n\n    _createClass(EventManager, [{\n        key: \"addHandler\",\n        value: function addHandler(eventName, handler) {\n            if (this.events[eventName] === undefined) {\n                this.events[eventName] = [];\n            }\n            if (this.events[eventName].indexOf(handler) === -1) {\n                this.events[eventName].push(handler);\n            }\n        }\n    }, {\n        key: \"removeHandler\",\n        value: function removeHandler(eventName, handler) {\n            var arr = this.events[eventName];\n            if (arr !== undefined) {\n                var i = arr.indexOf(handler);\n                if (i !== -1) {\n                    arr.splice(i, 1);\n                }\n            }\n        }\n    }, {\n        key: \"emit\",\n        value: function emit(eventName) {\n            var eventObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n            if (this.events[eventName] === undefined) return;\n            eventObj.type = eventName;\n            this.events[eventName].forEach(function (handler) {\n                return handler(eventObj);\n            });\n        }\n    }, {\n        key: \"addDomEventHandler\",\n        value: function addDomEventHandler(el, type, handler) {\n            var obj = {};\n            if (!this.domEvents.has(el)) {\n                obj._delegateHandler = function (ev) {\n                    obj[ev.type].forEach(function (handler) {\n                        return handler(ev);\n                    });\n                };\n                this.domEvents.set(el, obj);\n            } else {\n                obj = this.domEvents.get(el);\n            }\n            if (obj[type] === undefined) {\n                obj[type] = [];\n                el.addEventListener(type, obj._delegateHandler);\n            }\n            obj[type].push(handler);\n        }\n    }, {\n        key: \"removeDomEventHandler\",\n        value: function removeDomEventHandler(el, type, handler) {\n            if (this.domEvents.has(el)) {\n                var obj = this.domEvents.get(el);\n                if (obj[type] !== undefined) {\n                    var i = obj[type].indexOf(handler);\n                    if (i !== -1) {\n                        obj[type].splice(obj[type].indexOf(handler), 1);\n                    }\n                    if (obj[type].length === 0) {\n                        el.removeEventListener(type, obj._delegateHandler);\n                    }\n                }\n            }\n        }\n    }]);\n\n    return EventManager;\n}();\n\nexports.default = new EventManager();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC9pbmRleC0xLmpzPzk2N2EiXSwibmFtZXMiOlsiRXZlbnRNYW5hZ2VyIiwiZXZlbnRzIiwiZG9tRXZlbnRzIiwiTWFwIiwib24iLCJhZGRIYW5kbGVyIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsInVuZGVmaW5lZCIsImluZGV4T2YiLCJwdXNoIiwiYXJyIiwiaSIsInNwbGljZSIsImV2ZW50T2JqIiwidHlwZSIsImZvckVhY2giLCJlbCIsIm9iaiIsImhhcyIsIl9kZWxlZ2F0ZUhhbmRsZXIiLCJldiIsInNldCIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7SUFJTUEsWTtBQUNGLDRCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLQyxTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFDQTtBQUNBLGFBQUtDLEVBQUwsR0FBVSxLQUFLQyxVQUFmO0FBQ0g7Ozs7bUNBQ1VDLFMsRUFBV0MsTyxFQUFTO0FBQzNCLGdCQUFJLEtBQUtOLE1BQUwsQ0FBWUssU0FBWixNQUEyQkUsU0FBL0IsRUFBMEM7QUFDdEMscUJBQUtQLE1BQUwsQ0FBWUssU0FBWixJQUF5QixFQUF6QjtBQUNIO0FBQ0QsZ0JBQUksS0FBS0wsTUFBTCxDQUFZSyxTQUFaLEVBQXVCRyxPQUF2QixDQUErQkYsT0FBL0IsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNoRCxxQkFBS04sTUFBTCxDQUFZSyxTQUFaLEVBQXVCSSxJQUF2QixDQUE0QkgsT0FBNUI7QUFDSDtBQUNKOzs7c0NBQ2FELFMsRUFBV0MsTyxFQUFTO0FBQzlCLGdCQUFNSSxNQUFNLEtBQUtWLE1BQUwsQ0FBWUssU0FBWixDQUFaO0FBQ0EsZ0JBQUdLLFFBQVFILFNBQVgsRUFBc0I7QUFDbEIsb0JBQUlJLElBQUlELElBQUlGLE9BQUosQ0FBWUYsT0FBWixDQUFSO0FBQ0Esb0JBQUlLLE1BQU0sQ0FBQyxDQUFYLEVBQWM7QUFDVkQsd0JBQUlFLE1BQUosQ0FBV0QsQ0FBWCxFQUFjLENBQWQ7QUFDSDtBQUNKO0FBQ0o7Ozs2QkFDSU4sUyxFQUF3QjtBQUFBLGdCQUFiUSxRQUFhLHVFQUFKLEVBQUk7O0FBQ3pCLGdCQUFJLEtBQUtiLE1BQUwsQ0FBWUssU0FBWixNQUEyQkUsU0FBL0IsRUFBMEM7QUFDMUNNLHFCQUFTQyxJQUFULEdBQWdCVCxTQUFoQjtBQUNBLGlCQUFLTCxNQUFMLENBQVlLLFNBQVosRUFBdUJVLE9BQXZCLENBQStCO0FBQUEsdUJBQVdULFFBQVFPLFFBQVIsQ0FBWDtBQUFBLGFBQS9CO0FBQ0g7OzsyQ0FDa0JHLEUsRUFBSUYsSSxFQUFNUixPLEVBQVM7QUFDbEMsZ0JBQUlXLE1BQU0sRUFBVjtBQUNBLGdCQUFHLENBQUMsS0FBS2hCLFNBQUwsQ0FBZWlCLEdBQWYsQ0FBbUJGLEVBQW5CLENBQUosRUFBNEI7QUFDeEJDLG9CQUFJRSxnQkFBSixHQUF1QixVQUFTQyxFQUFULEVBQWE7QUFDaENILHdCQUFJRyxHQUFHTixJQUFQLEVBQWFDLE9BQWIsQ0FBcUI7QUFBQSwrQkFBV1QsUUFBUWMsRUFBUixDQUFYO0FBQUEscUJBQXJCO0FBQ0gsaUJBRkQ7QUFHQSxxQkFBS25CLFNBQUwsQ0FBZW9CLEdBQWYsQ0FBbUJMLEVBQW5CLEVBQXVCQyxHQUF2QjtBQUNILGFBTEQsTUFLTTtBQUNGQSxzQkFBTSxLQUFLaEIsU0FBTCxDQUFlcUIsR0FBZixDQUFtQk4sRUFBbkIsQ0FBTjtBQUNIO0FBQ0QsZ0JBQUdDLElBQUlILElBQUosTUFBY1AsU0FBakIsRUFBNEI7QUFDeEJVLG9CQUFJSCxJQUFKLElBQVksRUFBWjtBQUNBRSxtQkFBR08sZ0JBQUgsQ0FBb0JULElBQXBCLEVBQTBCRyxJQUFJRSxnQkFBOUI7QUFDSDtBQUNERixnQkFBSUgsSUFBSixFQUFVTCxJQUFWLENBQWVILE9BQWY7QUFDSDs7OzhDQUNxQlUsRSxFQUFJRixJLEVBQU1SLE8sRUFBUztBQUNyQyxnQkFBRyxLQUFLTCxTQUFMLENBQWVpQixHQUFmLENBQW1CRixFQUFuQixDQUFILEVBQTJCO0FBQ3ZCLG9CQUFNQyxNQUFNLEtBQUtoQixTQUFMLENBQWVxQixHQUFmLENBQW1CTixFQUFuQixDQUFaO0FBQ0Esb0JBQUdDLElBQUlILElBQUosTUFBY1AsU0FBakIsRUFBNEI7QUFDeEIsd0JBQUlJLElBQUlNLElBQUlILElBQUosRUFBVU4sT0FBVixDQUFrQkYsT0FBbEIsQ0FBUjtBQUNBLHdCQUFJSyxNQUFNLENBQUMsQ0FBWCxFQUFjO0FBQ1ZNLDRCQUFJSCxJQUFKLEVBQVVGLE1BQVYsQ0FBaUJLLElBQUlILElBQUosRUFBVU4sT0FBVixDQUFrQkYsT0FBbEIsQ0FBakIsRUFBNkMsQ0FBN0M7QUFDSDtBQUNELHdCQUFHVyxJQUFJSCxJQUFKLEVBQVVVLE1BQVYsS0FBcUIsQ0FBeEIsRUFBMkI7QUFDdkJSLDJCQUFHUyxtQkFBSCxDQUF1QlgsSUFBdkIsRUFBNkJHLElBQUlFLGdCQUFqQztBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7Ozs7a0JBR1UsSUFBSXBCLFlBQUosRSIsImZpbGUiOiIuL2V2ZW50L2luZGV4LTEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuRXZlbnRNYW5hZ2VyIGlzIGEgc2luZ2xlIGluc3RhbmNlIGNsYXNzXG5hZGQgZG9tIGV2ZW50c1xuICovXG5jbGFzcyBFdmVudE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9XG4gICAgICAgIHRoaXMuZG9tRXZlbnRzID0gbmV3IE1hcCgpXG4gICAgICAgIC8vIG9uIGlzIGFuIGFsaWFzIGZvciBhZGRIYW5kbGVyXG4gICAgICAgIHRoaXMub24gPSB0aGlzLmFkZEhhbmRsZXJcbiAgICB9XG4gICAgYWRkSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihoYW5kbGVyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1cbiAgICAgICAgaWYoYXJyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBpID0gYXJyLmluZGV4T2YoaGFuZGxlcilcbiAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0KGV2ZW50TmFtZSwgZXZlbnRPYmo9e30pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgICAgIGV2ZW50T2JqLnR5cGUgPSBldmVudE5hbWVcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihldmVudE9iaikpXG4gICAgfVxuICAgIGFkZERvbUV2ZW50SGFuZGxlcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICAgICAgICBsZXQgb2JqID0ge31cbiAgICAgICAgaWYoIXRoaXMuZG9tRXZlbnRzLmhhcyhlbCkpIHtcbiAgICAgICAgICAgIG9iai5fZGVsZWdhdGVIYW5kbGVyID0gZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgICAgICAgICBvYmpbZXYudHlwZV0uZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIoZXYpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kb21FdmVudHMuc2V0KGVsLCBvYmopXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IHRoaXMuZG9tRXZlbnRzLmdldChlbClcbiAgICAgICAgfVxuICAgICAgICBpZihvYmpbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2JqW3R5cGVdID0gW11cbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgb2JqLl9kZWxlZ2F0ZUhhbmRsZXIpXG4gICAgICAgIH1cbiAgICAgICAgb2JqW3R5cGVdLnB1c2goaGFuZGxlcilcbiAgICB9XG4gICAgcmVtb3ZlRG9tRXZlbnRIYW5kbGVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgIGlmKHRoaXMuZG9tRXZlbnRzLmhhcyhlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZG9tRXZlbnRzLmdldChlbClcbiAgICAgICAgICAgIGlmKG9ialt0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBvYmpbdHlwZV0uaW5kZXhPZihoYW5kbGVyKVxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpbdHlwZV0uc3BsaWNlKG9ialt0eXBlXS5pbmRleE9mKGhhbmRsZXIpLCAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihvYmpbdHlwZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgb2JqLl9kZWxlZ2F0ZUhhbmRsZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRNYW5hZ2VyKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./event/index-1.js\n");

/***/ })

/******/ });