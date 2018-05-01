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
/******/ 	return __webpack_require__(__webpack_require__.s = "./cookie/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cookie/index.js":
/*!*************************!*\
  !*** ./cookie/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Created by congcong on 2016/12/8.\n */\nvar CookieUtil = {\n    //设置cookie\n    setCookie: function setCookie(cname, cvalue, exdays) {\n        var expires = '';\n        if (exdays !== undefined) {\n            var d = new Date();\n            d.setDate(d.getDate() + exdays);\n            expires = \"expires=\" + d.toUTCString();\n        }\n        document.cookie = encodeURIComponent(cname) + \"=\" + encodeURIComponent(cvalue) + \"; \" + expires;\n    },\n\n    //获取cookie\n    getCookie: function getCookie(cname) {\n        cname = encodeURIComponent(cname);\n        var re = new RegExp('(^| )' + cname + '=([^;]*)(;|$)');\n        var matchArr = document.cookie.match(re);\n        if (matchArr === null) return null;\n        return decodeURIComponent(matchArr[2]);\n    },\n\n    //删除cookie\n    removeCookie: function removeCookie(cname) {\n        setCookie(cname, \"\", -1);\n    },\n\n    //测试\n    checkCookie: function checkCookie() {\n        var user = getCookie(\"username\");\n        if (user !== null) {\n            alert(\"Welcome again, \" + user);\n        } else {\n            user = prompt(\"Please enter your name:\", \"\");\n            if (user !== \"\" && user !== null) {\n                setCookie(\"username\", user, 365);\n            }\n        }\n    }\n};\n\n// extend functions to window obj\n// window = {\n//     ...window,\n//     ...CookieUtil\n// }\nObject.assign(window, CookieUtil);\n\n// export default CookieUtil//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb29raWUvaW5kZXguanM/ZDBmNyJdLCJuYW1lcyI6WyJDb29raWVVdGlsIiwic2V0Q29va2llIiwiY25hbWUiLCJjdmFsdWUiLCJleGRheXMiLCJleHBpcmVzIiwidW5kZWZpbmVkIiwiZCIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInRvVVRDU3RyaW5nIiwiZG9jdW1lbnQiLCJjb29raWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRDb29raWUiLCJyZSIsIlJlZ0V4cCIsIm1hdGNoQXJyIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZW1vdmVDb29raWUiLCJjaGVja0Nvb2tpZSIsInVzZXIiLCJhbGVydCIsInByb21wdCIsIk9iamVjdCIsImFzc2lnbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0FBR0EsSUFBSUEsYUFBYTtBQUNiO0FBQ0FDLGFBRmEscUJBRUhDLEtBRkcsRUFFSUMsTUFGSixFQUVZQyxNQUZaLEVBRW9CO0FBQzdCLFlBQUlDLFVBQVUsRUFBZDtBQUNBLFlBQUlELFdBQVdFLFNBQWYsRUFBMEI7QUFDdEIsZ0JBQUlDLElBQUksSUFBSUMsSUFBSixFQUFSO0FBQ0FELGNBQUVFLE9BQUYsQ0FBVUYsRUFBRUcsT0FBRixLQUFjTixNQUF4QjtBQUNBQyxzQkFBVSxhQUFhRSxFQUFFSSxXQUFGLEVBQXZCO0FBQ0g7QUFDREMsaUJBQVNDLE1BQVQsR0FBa0JDLG1CQUFtQlosS0FBbkIsSUFBNEIsR0FBNUIsR0FBa0NZLG1CQUFtQlgsTUFBbkIsQ0FBbEMsR0FBK0QsSUFBL0QsR0FBc0VFLE9BQXhGO0FBQ0gsS0FWWTs7QUFXYjtBQUNBVSxhQVphLHFCQVlIYixLQVpHLEVBWUk7QUFDYkEsZ0JBQVFZLG1CQUFtQlosS0FBbkIsQ0FBUjtBQUNBLFlBQUljLEtBQUssSUFBSUMsTUFBSixDQUFXLFVBQVVmLEtBQVYsR0FBa0IsZUFBN0IsQ0FBVDtBQUNBLFlBQUlnQixXQUFXTixTQUFTQyxNQUFULENBQWdCTSxLQUFoQixDQUFzQkgsRUFBdEIsQ0FBZjtBQUNBLFlBQUlFLGFBQWEsSUFBakIsRUFBdUIsT0FBTyxJQUFQO0FBQ3ZCLGVBQVFFLG1CQUFtQkYsU0FBUyxDQUFULENBQW5CLENBQVI7QUFDSCxLQWxCWTs7QUFtQmI7QUFDQUcsZ0JBcEJhLHdCQW9CQW5CLEtBcEJBLEVBb0JPO0FBQ2hCRCxrQkFBVUMsS0FBVixFQUFpQixFQUFqQixFQUFxQixDQUFDLENBQXRCO0FBQ0gsS0F0Qlk7O0FBdUJiO0FBQ0FvQixlQXhCYSx5QkF3QkM7QUFDVixZQUFJQyxPQUFPUixVQUFVLFVBQVYsQ0FBWDtBQUNBLFlBQUlRLFNBQVMsSUFBYixFQUFtQjtBQUNmQyxrQkFBTSxvQkFBb0JELElBQTFCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLG1CQUFPRSxPQUFPLHlCQUFQLEVBQWtDLEVBQWxDLENBQVA7QUFDQSxnQkFBSUYsU0FBUyxFQUFULElBQWVBLFNBQVMsSUFBNUIsRUFBa0M7QUFDOUJ0QiwwQkFBVSxVQUFWLEVBQXNCc0IsSUFBdEIsRUFBNEIsR0FBNUI7QUFDSDtBQUNKO0FBQ0o7QUFsQ1ksQ0FBakI7O0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUcsT0FBT0MsTUFBUCxDQUFjQyxNQUFkLEVBQXNCNUIsVUFBdEI7O0FBRUEiLCJmaWxlIjoiLi9jb29raWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgY29uZ2Nvbmcgb24gMjAxNi8xMi84LlxuICovXG5sZXQgQ29va2llVXRpbCA9IHtcbiAgICAvL+iuvue9rmNvb2tpZVxuICAgIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcbiAgICAgICAgbGV0IGV4cGlyZXMgPSAnJ1xuICAgICAgICBpZiAoZXhkYXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGV4ZGF5cylcbiAgICAgICAgICAgIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIgKyBkLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KGNuYW1lKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGN2YWx1ZSkgKyBcIjsgXCIgKyBleHBpcmVzO1xuICAgIH0sXG4gICAgLy/ojrflj5Zjb29raWVcbiAgICBnZXRDb29raWUoY25hbWUpIHtcbiAgICAgICAgY25hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoY25hbWUpXG4gICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoJyhefCApJyArIGNuYW1lICsgJz0oW147XSopKDt8JCknKTtcbiAgICAgICAgbGV0IG1hdGNoQXJyID0gZG9jdW1lbnQuY29va2llLm1hdGNoKHJlKTtcbiAgICAgICAgaWYgKG1hdGNoQXJyID09PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaEFyclsyXSkpO1xuICAgIH0sXG4gICAgLy/liKDpmaRjb29raWVcbiAgICByZW1vdmVDb29raWUoY25hbWUpIHtcbiAgICAgICAgc2V0Q29va2llKGNuYW1lLCBcIlwiLCAtMSk7XG4gICAgfSxcbiAgICAvL+a1i+ivlVxuICAgIGNoZWNrQ29va2llKCkge1xuICAgICAgICBsZXQgdXNlciA9IGdldENvb2tpZShcInVzZXJuYW1lXCIpO1xuICAgICAgICBpZiAodXNlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYWxlcnQoXCJXZWxjb21lIGFnYWluLCBcIiArIHVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXNlciA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6XCIsIFwiXCIpO1xuICAgICAgICAgICAgaWYgKHVzZXIgIT09IFwiXCIgJiYgdXNlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInVzZXJuYW1lXCIsIHVzZXIsIDM2NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHRlbmQgZnVuY3Rpb25zIHRvIHdpbmRvdyBvYmpcbi8vIHdpbmRvdyA9IHtcbi8vICAgICAuLi53aW5kb3csXG4vLyAgICAgLi4uQ29va2llVXRpbFxuLy8gfVxuT2JqZWN0LmFzc2lnbih3aW5kb3csIENvb2tpZVV0aWwpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IENvb2tpZVV0aWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./cookie/index.js\n");

/***/ })

/******/ });