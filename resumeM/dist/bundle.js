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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _todo = __webpack_require__(2);

var _todo2 = _interopRequireDefault(_todo);

var _canvas = __webpack_require__(3);

var _canvas2 = _interopRequireDefault(_canvas);

var _music = __webpack_require__(4);

var _music2 = _interopRequireDefault(_music);

var _colorPicker = __webpack_require__(5);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _pikachu = __webpack_require__(6);

var _pikachu2 = _interopRequireDefault(_pikachu);

var _rsCover = __webpack_require__(7);

var _rsCover2 = _interopRequireDefault(_rsCover);

var _logo = __webpack_require__(8);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//在手机设备上的菜单点击
var menu_flag_xs = false;
var introduction_top = $('#introduction').offset().top;
var works_top = $('#works').offset().top;
var form_top = $('#form').offset().top;
var scroll_start;
var scroll_end;

function blurryMove() {
    if (scroll_end - scroll_start > 0) {
        scroll_start = scroll_start + (scroll_end - scroll_start) / 10;
        $('html,body').scrollTop(scroll_start);
        if (scroll_end - scroll_start < 1) {
            $('html,body').scrollTop(scroll_end);
            return;
        }
        requestAnimationFrame(blurryMove);
    } else {
        scroll_start = scroll_start + (scroll_end - scroll_start) / 10;
        $('html,body').scrollTop(scroll_start);
        if (scroll_start - scroll_end < 1) {
            $('html,body').scrollTop(scroll_end);
            return;
        }
        requestAnimationFrame(blurryMove);
    }
}

$('#icon_menu').click(function () {
    menu_flag_xs = !menu_flag_xs;
    if (menu_flag_xs) {

        $("#dropmenu").css("height", '116px');

        $("#port").click(function () {
            $("#port").addClass('checked');
            $('#about').removeClass('checked');
            $('#contact').removeClass('checked');
            scroll_start = $('html,body').scrollTop();
            scroll_end = works_top;
            blurryMove();
        });

        $("#about").click(function () {
            $("#about").addClass('checked');
            $('#port').removeClass('checked');
            $('#contact').removeClass('checked');
            scroll_start = $('html,body').scrollTop();
            scroll_end = introduction_top;
            blurryMove();
        });

        $("#contact").click(function () {
            $("#contact").addClass('checked');
            $('#about').removeClass('checked');
            $('#port').removeClass('checked');
            scroll_start = $('html,body').scrollTop();
            scroll_end = form_top;
            blurryMove();
        });
    } else {
        $("#dropmenu").css("height", '0px');
    }
});

//在电脑上的菜单点击
$("#port_not_xs").click(function () {
    $("#port_not_xs").addClass('checked');
    $('#about_not_xs').removeClass('checked');
    $('#contact_not_xs').removeClass('checked');
    scroll_start = $('html,body').scrollTop();
    scroll_end = works_top;
    blurryMove();
});
$("#about_not_xs").click(function () {
    $("#about_not_xs").addClass('checked');
    $('#port_not_xs').removeClass('checked');
    $('#contact_not_xs').removeClass('checked');
    scroll_start = $('html,body').scrollTop();
    scroll_end = introduction_top;
    blurryMove();
});
$("#contact_not_xs").click(function () {
    $("#contact_not_xs").addClass('checked');
    $('#about_not_xs').removeClass('checked');
    $('#port_not_xs').removeClass('checked');
    scroll_start = $('html,body').scrollTop();
    scroll_end = form_top;
    blurryMove();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/todo.jpg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/canvas.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/music.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/colorPicker.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/pikachu.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/rs-cover.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo.png";

/***/ })
/******/ ]);