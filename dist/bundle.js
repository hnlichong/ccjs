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
/******/ 	return __webpack_require__(__webpack_require__.s = "./es6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./es6/class.js":
/*!**********************!*\
  !*** ./es6/class.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 使用class构造类实际上是使用原型链继承机制的语法糖\n// 类的声明不会提升（hoisting)，如果你要使用某个 Class，那你必须在使用之前定义它，否则会抛出一个 ReferenceError 的错误\n// 在类中定义函数不需要使用 function 关键词\n\nclass Polygon {\n    constructor(width = 0, height = 0) {\n        this.name = '实例属性 polygon.name: polygon'\n        this.width = width\n        this.height = height\n        this.area = width * height\n        console.log('Polygon instantiated')\n    }\n    sayName(){\n        console.log('实例方法，polygon.sayName: ' + this.name)\n    }\n    static sayClassName() {\n        console.log('静态方法(类方法)在类名上调用, Polygon.sayClassName: ' + Polygon.className)\n    }\n    // ES6 明确规定， Class 内部只有静态方法，没有静态属性; 静态属性定义在class外部，实例属性定义在constructor内部\n    // ES7 的提案支持如下写法：\n    // name = '实例属性 polygon.name: polygon'\n    // static className = '静态属性（类属性）在类名上调用, Polygon.className: Polygon'\n}\nconsole.log('静态属性定义在class代码块外部')\nPolygon.className = '静态属性 Polygon.className: Polygon'\n\nlet polygon = new Polygon(3, 4)\nconsole.log(polygon.name)\nconsole.log(Polygon.className)\npolygon.sayName()\nPolygon.sayClassName()\n// console.log('polygon.className: ' + polygon.className)  // undefined\n// polygon.sayClassName()   // Uncaught TypeError: polygon.sayClassName is not a function\n\n/*\n* 继承\n*/\nclass Square extends Polygon {\n    constructor(length) {\n        super(length, length)\n        this.name = 'square'\n        console.log('Square instantiated')\n    }\n    sayName() {\n        console.log('子类Square覆写父类中的sayName方法, name: ' + this.name)\n    }\n    sayName2(){\n        console.log('子类方法sayName2:' + this.name)\n    }\n    sayName3(){\n        console.log('子类用super.调用父类方法')\n        super.sayName()\n    }\n}\nlet square = new Square(5)\nconsole.log('square area: ' + square.area)\npolygon.sayName()\nsquare.sayName()\nsquare.sayName2()\nsquare.sayName3()\n\n\n/*\n* ES6中的class实际上是经典js中构造函数+原型链机制的语法糖\n* */\nconsole.log('ES5 构造函数+原型链实现类')\nfunction Person(name, age) {\n    // 实例属性\n    this.name = name\n    this.age = age\n    // 不要在构造函数里面定义函数！\n    // this.sayAge = function () {\n    //     console.log('age: ' + this.age)\n    // }\n}\n// 实例方法\nPerson.prototype.sayName = function () {\n    console.log('Person.prototype.sayName: ' + this.name)\n}\n// 静态属性（类属性）\nPerson.className = 'Person'\n// 静态方法（类方法）\nPerson.staticSayName = function () {\n    console.log('Person.staticSayName: ' + this.className)\n}\n// 静态方法一般是工具函数，根据实际传入参数计算返回值,不出现this\nPerson.standardWeight = function (height) {\n    return (height - 100) * Person.K\n}\nPerson.K = 0.9\n\nlet person = new Person('lichong', 25)\nperson.sayName()  // lichong\n// console.log('person.className: ' + person.className) // undefined\n// person.staticSayName() //TypeError: person.staticSayName is not a function\nconsole.log(Person.className)\nPerson.staticSayName() // Person\nconsole.log(Person.standardWeight(174) + 'kg')\n\n\n\n//# sourceURL=webpack:///./es6/class.js?");

/***/ }),

/***/ "./es6/index.js":
/*!**********************!*\
  !*** ./es6/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ \"./es6/class.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_class__WEBPACK_IMPORTED_MODULE_0__);\n// import \"./const\"\n// import \"./scope\"\n// import \"./arrow-function\"\n// import \"./parameter\"\n// import \"./proxy\"\n// test()\n// import './ccscope'\n// import './ccfunction'\n// import './ccstring'\n// import './destructure'\n\n\n//# sourceURL=webpack:///./es6/index.js?");

/***/ })

/******/ });