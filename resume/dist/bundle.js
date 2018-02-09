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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
window.View = function (selector) {
    return document.querySelector(selector);
};

exports.default = View;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
window.Model = function (options) {
    var resourceName = options.resourceName;
    return {
        initAV: function initAV() {
            var APP_ID = 'fPNjK7UqI6CmzRjz0aJTLJHj-gzGzoHsz';
            var APP_KEY = 'fn9UsTazxn7ycAtS1ir8loNN';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        //获取数据
        fetch: function fetch() {
            var messageFromDatabase = new AV.Query(resourceName);
            return messageFromDatabase.find(); //Promise对象
        },
        //创建数据
        save: function save(object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object);
        }
    };
};

exports.default = Model;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
window.Controller = function (options) {
    var _init = options.init;
    var object = {
        model: null,
        view: null,
        init: function init(view, model) {
            this.view = view;
            this.model = model;
            if (_init !== null) {
                _init.call(this, view, model);
            }
            this.bindEvents();
        }
    };
    for (var key in options) {
        if (key !== 'init') {
            object[key] = options[key];
        }
    }
    console.log(object);
    return object;
};

exports.default = Controller;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/rs-cover.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _autoSlideUp = __webpack_require__(5);

var _autoSlideUp2 = _interopRequireDefault(_autoSlideUp);

var _topBar = __webpack_require__(6);

var _topBar2 = _interopRequireDefault(_topBar);

var _smoothlyNavgation = __webpack_require__(7);

var _smoothlyNavgation2 = _interopRequireDefault(_smoothlyNavgation);

var _portfolioTranslation = __webpack_require__(8);

var _portfolioTranslation2 = _interopRequireDefault(_portfolioTranslation);

var _message = __webpack_require__(9);

var _message2 = _interopRequireDefault(_message);

__webpack_require__(10);

var _ = __webpack_require__(16);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(17);

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(18);

var _6 = _interopRequireDefault(_5);

var _avatar = __webpack_require__(19);

var _avatar2 = _interopRequireDefault(_avatar);

var _canvas = __webpack_require__(20);

var _canvas2 = _interopRequireDefault(_canvas);

var _lunbo = __webpack_require__(21);

var _lunbo2 = _interopRequireDefault(_lunbo);

var _nav = __webpack_require__(22);

var _nav2 = _interopRequireDefault(_nav);

var _rsCover = __webpack_require__(3);

var _rsCover2 = _interopRequireDefault(_rsCover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function () {
    (0, _autoSlideUp2.default)();
    (0, _topBar2.default)();
    (0, _smoothlyNavgation2.default)();
    (0, _portfolioTranslation2.default)();
    (0, _message2.default)();
}.call();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function AutoSlideUp() {
    var siteWelcome = document.getElementById('siteWelcome');
    var disappear = document.getElementById('disappear');
    var topNavBar = document.getElementsByClassName('topNavBar')[0];

    window.onload = function () {
        siteWelcome.classList.add('disappear');
        disappear.classList.remove('disappear');
        findClosestElementToWindowTop();
        findElementExceedWindowBottom();
    };

    window.onscroll = function () {
        if (window.scrollY > 0) {
            topNavBar.classList.add('sticky');
        } else {
            topNavBar.classList.remove('sticky');
        }

        findClosestElementToWindowTop();

        findElementExceedWindowBottom();
    };

    function findElementExceedWindowBottom() {
        var windowBottomY = document.documentElement.clientHeight + window.scrollY;
        var specialTags = document.querySelectorAll('[data-x]');
        var progressBar = document.querySelectorAll('.progressBar');
        for (var i = 0; i < specialTags.length; i++) {
            var elementY = specialTags[i].offsetTop;
            if (elementY - windowBottomY < 0) {
                specialTags[i].classList.remove('offset');
            } else {
                specialTags[i].classList.add('offset');
            }
        }

        for (var j = 0; j < progressBar.length; j++) {
            //不用offsetTop是因为，元素的offsetParent是section.skills，而不是<body>
            var progressBarY = progressBar[j].getBoundingClientRect().top + document.documentElement.scrollTop;

            if (progressBarY - windowBottomY < 0) {
                progressBar[j].classList.remove('contraction');
            } else {
                progressBar[j].classList.add('contraction');
            }
        }
    }

    function findClosestElementToWindowTop() {
        var specialTags = document.querySelectorAll('[data-x]');
        var minIndex = 0;
        for (var i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                //存储最近元素的下标
                minIndex = i;
            }
        }
        // minIndex 就是里窗口顶部最近的元素
        var id = specialTags[minIndex].id;
        var a = document.querySelector('a[href="#' + id + '"]');
        var li = a.parentNode;
        var brothersAndMe = li.parentNode.children;
        for (var _i = 0; _i < brothersAndMe.length; _i++) {
            brothersAndMe[_i].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }
}

exports.default = AutoSlideUp;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _View = __webpack_require__(0);

var _View2 = _interopRequireDefault(_View);

var _Model = __webpack_require__(1);

var _Model2 = _interopRequireDefault(_Model);

var _Controller = __webpack_require__(2);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function topBar() {
    var view = document.querySelector('nav.topNavBar');
    var controller = {
        view: null,
        init: function init(view) {
            this.view = view;
            this.bindEvent();
        },
        bindEvent: function bindEvent() {
            var _this = this;

            var liTags = this.view.querySelectorAll('ul > li');
            for (var i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function (e) {
                    _this.active(e.currentTarget);
                };
                liTags[i].onmouseleave = function (e) {
                    _this.deactive(e.currentTarget);
                };
            }
        },
        active: function active(ele) {
            ele.classList.add('active');
        },
        deactive: function deactive(element) {
            element.classList.remove('active');
        }
    };
    controller.init(view);
}

exports.default = topBar;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _View = __webpack_require__(0);

var _View2 = _interopRequireDefault(_View);

var _Model = __webpack_require__(1);

var _Model2 = _interopRequireDefault(_Model);

var _Controller = __webpack_require__(2);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigation() {
    var view = (0, _View2.default)('nav.topNavBar');
    var model = null;
    var controller = (0, _Controller2.default)({
        aTags: null,
        initAnimation: function initAnimation() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function scrollToElement(element) {
            var targetY = element.offsetTop - 80;
            var currentY = window.scrollY;
            var t = Math.abs((targetY - currentY) / 100 * 300); // 时间
            if (t > 500) {
                t = 500;
            }
            var coords = { x: 0, y: currentY };
            var tween = new TWEEN.Tween(coords).to({ x: 0, y: targetY }, t).easing(TWEEN.Easing.Cubic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        },
        bindEvents: function bindEvents() {
            var _this = this;

            this.aTags = this.view.querySelectorAll('ul > li >a');
            for (var i = 0; i < this.aTags.length; i++) {
                this.aTags[i].onclick = function (e) {
                    e.preventDefault();
                    var href = e.currentTarget.getAttribute('href');
                    var element = document.querySelector(href);
                    _this.scrollToElement(element);
                };
            }
        },
        init: function init(view, model) {
            this.initAnimation();
        }
    });
    controller.init(view);
}

exports.default = Navigation;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _View = __webpack_require__(0);

var _View2 = _interopRequireDefault(_View);

var _Model = __webpack_require__(1);

var _Model2 = _interopRequireDefault(_Model);

var _Controller = __webpack_require__(2);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function portfolioTranslation() {
    var view = document.querySelector('.portfolio');
    var controller = function controller(view) {
        var portfolio1 = view.querySelector('#portfolio1');
        var portfolio2 = view.querySelector('#portfolio2');
        var portfolio3 = view.querySelector('#portfolio3');
        var small_2_picture = view.querySelector('#small_2_picture');
        var big_1_picture = view.querySelector('#big_1_picture');
        var portfolioBar = view.querySelector('#portfolioBar');
        var small_1 = view.querySelector('#small_1');
        var small_2 = view.querySelector('#small_2');

        portfolio1.onclick = function () {
            portfolioBar.className = 'bar state-1';
            small_2_picture.className = '';
            big_1_picture.className = '';
            small_1.className = '';
            small_2.className = '';
        };
        portfolio2.onclick = function () {
            portfolioBar.className = 'bar state-2';
            small_2_picture.className = 'small_2_picture_2';
            big_1_picture.className = '';
            small_1.className = '';
            small_2.className = '';
        };
        portfolio3.onclick = function () {
            portfolioBar.className = 'bar state-3';
            small_2_picture.className = '';
            big_1_picture.className = 'big_1_picture_1';
            small_1.className = 'small-1';
            small_2.className = 'small-2';
        };
    };
    controller(view);
}

exports.default = portfolioTranslation;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _View = __webpack_require__(0);

var _View2 = _interopRequireDefault(_View);

var _Model = __webpack_require__(1);

var _Model2 = _interopRequireDefault(_Model);

var _Controller = __webpack_require__(2);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Message() {
    var view = (0, _View2.default)('#messagePart');
    var model = (0, _Model2.default)({ resourceName: 'Message' });
    var controller = (0, _Controller2.default)({
        myForm: null,
        loadMessage: function loadMessage() {
            var _this = this;

            this.model.fetch().then(function (messages) {
                var contentArray = messages.map(function (item) {
                    return item.attributes;
                });
                contentArray.forEach(function (item) {
                    var li = document.createElement('li');
                    var p1 = document.createElement('p');
                    var p2 = document.createElement('p');
                    p1.innerText = item.username + '\u2014\u2014' + item.time;
                    p2.innerText = '' + item.content;
                    var messageList = _this.view.querySelector('#messageList');
                    messageList.appendChild(li);
                    li.appendChild(p1);
                    li.appendChild(p2);
                });
            });
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            this.myForm = this.view.querySelector('#messageForm');
            this.myForm.addEventListener('submit', function (e) {
                e.preventDefault();
                _this2.addMessage();
            });
        },
        addMessage: function addMessage() {
            var _this3 = this;

            var content = document.querySelector('textarea').value;
            var username = document.querySelector('input[name=username]').value;
            var date = new Date();
            var time = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
            var item = void 0;
            if (content.split(" ").join("").length) {
                if (username.split(" ").join("").length === 0) {
                    username = "匿名用户";
                }
                item = {
                    'username': username,
                    'content': content,
                    'time': time
                };
            }
            this.model.save(item).then(function (object) {
                var li = document.createElement('li');
                var p1 = document.createElement('p');
                var p2 = document.createElement('p');
                p1.innerText = object.attributes.username + '\u2014\u2014' + object.attributes.time;
                p2.innerText = '' + object.attributes.content;
                var messageList = _this3.view.querySelector('#messageList');
                messageList.appendChild(li);
                li.appendChild(p1);
                li.appendChild(p2);
                _this3.view.querySelector('textarea').value = "";
                _this3.view.querySelector('input[name=username]').value = "";
            });
        },
        init: function init(view, model) {
            this.model.initAV();
            this.loadMessage();
        }
    });
    /*let model = {
        initAV: function(){
            var APP_ID = 'fPNjK7UqI6CmzRjz0aJTLJHj-gzGzoHsz';
            var APP_KEY = 'fn9UsTazxn7ycAtS1ir8loNN';
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            });
        },
        //获取数据
        fetch: function(){
            let messageFromDatabase = new AV.Query('Message');
            return messageFromDatabase.find() //Promise对象
        },
        //创建数据
        save: function(){
            let content = document.querySelector('textarea').value;
            let username = document.querySelector('input[name=username]').value;
            let Message = AV.Object.extend('Message');
            let date = new Date();
            let time = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
            if(content.split(" ").join("").length){
                if(username.split(" ").join("").length === 0){
                    username = "匿名用户";
                }
                let message = new Message();
                return message.save({
                    'username': username,
                    'content': content,
                    'time': time
                })
            } 
        }
    };*/
    controller.init(view, model);
}

/*
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/

exports.default = Message;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib/index.js!./main.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib/index.js!./main.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(12);
exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0px;\n  padding: 0px; }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden; }\n\n.swiper-container {\n  width: 600px;\n  height: 450px; }\n\n.disappear {\n  display: none; }\n\n* {\n  margin: 0px;\n  padding: 0px; }\n\n.clearfix::after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\na {\n  text-decoration: none; }\n\nhr {\n  height: 0px;\n  border: none;\n  border-bottom: 1px solid #d4d4d4; }\n\n[data-x].offset {\n  -webkit-transform: translateY(100px);\n  transform: translateY(100px); }\n\n[data-x] {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  -webkit-transition: all 0.8s;\n  transition: all 0.8s; }\n\n.topNavBar {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  z-index: 3; }\n\n.topNavBar .logo {\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 21px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n\n.topNavBar .logo .rs {\n  color: #e6686a; }\n\n.topNavBar .logo .card {\n  color: #9a9da2; }\n\n.topNavBar.sticky {\n  background-color: #ffffff;\n  -webkit-box-shadow: 0 0 20px 0px black;\n  box-shadow: 0 0 20px 0px black; }\n\n.topNavBar.sticky .logo {\n  padding: 15px; }\n\n.navList {\n  float: right;\n  margin: 0;\n  padding: 0; }\n\n.navList > li {\n  float: left;\n  list-style: none;\n  position: relative; }\n\n.navList li a {\n  display: block;\n  font-size: 12px;\n  padding: 9px 0px 7px 0px;\n  margin: 20px 17px;\n  color: #b7b7b7;\n  font-weight: bold;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid transparent;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  position: relative; }\n\n.topNavBar.sticky .navList li a {\n  margin: 14px 17px;\n  color: black; }\n\n.topNavBar .navList li:last-child a {\n  margin-right: 34px; }\n\n.topNavBar .navList li.active a::after,\n.topNavBar .navList li.highlight a::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  height: 3px;\n  width: 100%;\n  background-color: #e86767;\n  -webkit-animation: menuSlide 1s;\n  animation: menuSlide 1s; }\n\n@-webkit-keyframes menuSlide {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n@keyframes menuSlide {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n.topNavBar .navList .menuTigger .submenu {\n  list-style: none;\n  position: absolute;\n  top: 100%;\n  right: 7px;\n  display: none;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-animation: submenuSlide 0.3s;\n  animation: submenuSlide 0.3s; }\n\n@-webkit-keyframes submenuSlide {\n  0% {\n    margin-right: 100%; }\n  100% {\n    margin-right: 0%; } }\n\n@keyframes submenuSlide {\n  0% {\n    margin-right: 100%; }\n  100% {\n    margin-right: 0%; } }\n\n.topNavBar .navList .menuTigger.active .submenu {\n  display: block; }\n\n.topNavBar .navList .menuTigger .submenu > li {\n  white-space: nowrap;\n  margin: 10px;\n  cursor: pointer; }\n\n.banner {\n  height: 515px;\n  width: 100%;\n  background-image: url(" + escape(__webpack_require__(3)) + ");\n  background-size: cover; }\n\n.banner .mask {\n  height: 515px;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.userCard {\n  max-width: 940px;\n  margin: 0 auto;\n  background-color: #ffffff;\n  margin-top: -400px;\n  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5); }\n\n.userCard .welcome {\n  color: white;\n  background-color: #e86767;\n  display: inline-block;\n  padding: 4px 15px;\n  line-height: 21px;\n  position: relative; }\n\n.userCard .welcome .triangle {\n  border: 10px solid transparent;\n  width: 0px;\n  border-top-width: 0px;\n  border-left-color: #e86767;\n  position: absolute;\n  left: 10px;\n  top: 100%; }\n\n.userCard .pictureAndText .picture {\n  float: left;\n  width: 40%; }\n\n.userCard .pictureAndText .text {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  float: left;\n  width: 60%; }\n\n.userCard .pictureAndText .text h1 {\n  margin: 30px 0px 5px 0px; }\n\n.userCard .pictureAndText .text p {\n  color: #424242; }\n\n.userCard .pictureAndText .text hr {\n  margin: 20px 0px; }\n\n.userCard .pictureAndText {\n  padding: 50px; }\n\n.userCard .pictureAndText .text dt {\n  float: left;\n  width: 30%;\n  padding: 8px 0px; }\n\n.userCard .pictureAndText .text dd {\n  float: left;\n  width: 70%;\n  padding: 8px 0;\n  color: #a2a2a2; }\n\n.userCard .media {\n  background-color: #e86767;\n  text-align: center; }\n\n.userCard .media a {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 10px; }\n\n.userCard .media a:hover {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.userCard .media svg {\n  width: 30px;\n  height: 30px;\n  padding: 10px;\n  vertical-align: center;\n  fill: white; }\n\n.downloadResume-wrapper {\n  text-align: center;\n  margin: 30px  0px; }\n\n.downloadResume {\n  padding: 18px 60px;\n  line-height: 20px;\n  display: inline-block;\n  border: 1px solid #c0c0c0;\n  color: black;\n  -webkit-transition: -webkit-box-shadow 0.2s linear;\n  transition: -webkit-box-shadow 0.2s linear;\n  transition: box-shadow 0.2s linear;\n  transition: box-shadow 0.2s linear, -webkit-box-shadow 0.2s linear; }\n\n.downloadResume:hover {\n  -webkit-box-shadow: 0px 3px 13px 3px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 3px 13px 3px rgba(0, 0, 0, 0.2); }\n\n.selfIntroduction {\n  max-width: 940px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 18px;\n  line-height: 20px; }\n\nsection.skills,\nsection.portfolio,\nsection.messagePart {\n  max-width: 940px;\n  margin: 60px auto; }\n\nsection.skills h2,\nsection.portfolio h2,\nsection.messagePart h2 {\n  text-align: center;\n  color: #3d4451;\n  font-size: 34px;\n  line-height: 1.2;\n  font-weight: 600; }\n\nsection.skills h3 {\n  font-size: 14px;\n  line-height: 1.1;\n  padding-bottom: 3px; }\n\nsection.skills ol {\n  list-style: none;\n  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);\n  padding: 42px 10px;\n  margin: 30px 0px; }\n\nsection.skills ol li:nth-child(odd) {\n  width: 48%;\n  float: left;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-bottom: 30px; }\n\nsection.skills ol li:nth-child(even) {\n  width: 48%;\n  float: right;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-bottom: 30px; }\n\nsection.skills ol li:nth-child(5) {\n  padding-bottom: 0px; }\n\nsection.skills ol li:nth-child(6) {\n  padding-bottom: 0px; }\n\nsection.skills ol .progressBar {\n  height: 5px;\n  background: #FAE1E1;\n  border-radius: 2px;\n  position: relative;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transition: all 2s;\n  transition: all 2s; }\n\nsection.skills ol .progressBar.contraction {\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0); }\n\nsection.skills ol .progress-60::before,\nsection.skills ol .progress-50::before,\nsection.skills ol .progress-30::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: #E6686A;\n  height: 5px;\n  border-radius: 2px; }\n\nsection.skills ol .progress-60::before {\n  width: 60%; }\n\nsection.skills ol .progress-50::before {\n  width: 50%; }\n\nsection.skills ol .progress-30::before {\n  width: 30%; }\n\nsection.portfolio nav {\n  text-align: center;\n  margin: 30px 0px; }\n\nsection.portfolio ol {\n  list-style: none;\n  display: inline-block; }\n\nsection.portfolio ol li {\n  float: left;\n  cursor: pointer; }\n\nsection.portfolio ol li:nth-child(2) {\n  margin: 0px 40px; }\n\nsection.portfolio nav .bar {\n  height: 5px; }\n\nsection.portfolio nav .bar.state-1 .bar-inner,\nsection.portfolio nav .bar.state-2 .bar-inner,\nsection.portfolio nav .bar.state-3 .bar-inner {\n  height: 5px;\n  background-color: #E6686A;\n  border-radius: 2px;\n  -webkit-transition: all 1s;\n  transition: all 1s; }\n\nsection.portfolio nav .bar.state-1 .bar-inner {\n  width: 35px;\n  margin-left: 350px; }\n\nsection.portfolio nav .bar.state-2 .bar-inner {\n  width: 35px;\n  margin-left: 423px; }\n\nsection.portfolio nav .bar.state-3 .bar-inner {\n  width: 95px;\n  margin-left: 495px; }\n\nsection.portfolio .jobs {\n  position: relative; }\n\nsection.portfolio .jobs #big_1,\nsection.portfolio .jobs #small_1,\nsection.portfolio .jobs #small_2 {\n  position: absolute;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\nsection.portfolio .jobs #big_1 {\n  width: 606px;\n  height: 597px; }\n\nsection.portfolio .jobs #small_1,\nsection.portfolio .jobs #small_2 {\n  width: 293px;\n  height: 289px; }\n\nsection.portfolio .jobs #big_1 img,\nsection.portfolio .jobs #small_1 img,\nsection.portfolio .jobs #small_2 img {\n  width: 100%;\n  height: 100%; }\n\nsection.portfolio .jobs #big_1 #big_1_picture,\nsection.portfolio .jobs #small_2 #small_2_picture {\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\nsection.portfolio .jobs #small_2 #small_2_picture.small_2_picture_2 {\n  -webkit-transform: scale(0, 0);\n  transform: scale(0, 0);\n  -webkit-transform-origin: 50% 50% 0;\n  transform-origin: 50% 50% 0; }\n\nsection.portfolio .jobs #big_1 #big_1_picture.big_1_picture_1 {\n  -webkit-transform: scale(0, 0);\n  transform: scale(0, 0);\n  -webkit-transform-origin: 100% 0% 0;\n  transform-origin: 100% 0% 0; }\n\nsection.portfolio .jobs #small_1.small-1 {\n  -webkit-transform: translateX(-647px);\n  transform: translateX(-647px); }\n\nsection.portfolio .jobs #small_2.small-2 {\n  -webkit-transform: translate(-313px, -311px);\n  transform: translate(-313px, -311px); }\n\n.site-welcome {\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  z-index: 5;\n  background-color: #ffffff; }\n\n.site-welcome.disappear {\n  display: none; }\n\n.loading {\n  width: 200px;\n  height: 200px;\n  position: relative; }\n\n.loading::before,\n.loading::after {\n  content: '';\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background-color: black;\n  -webkit-animation: loadingAnimation 1.5s infinite;\n  animation: loadingAnimation 1.5s infinite; }\n\n.loading::after {\n  -webkit-animation-delay: 0.75s;\n  animation-delay: 0.75s; }\n\n@-webkit-keyframes loadingAnimation {\n  0% {\n    width: 0px;\n    height: 0px;\n    opacity: 1; }\n  100% {\n    width: 100px;\n    height: 100px;\n    opacity: 0; } }\n\n@keyframes loadingAnimation {\n  0% {\n    width: 0px;\n    height: 0px;\n    opacity: 1; }\n  100% {\n    width: 100px;\n    height: 100px;\n    opacity: 0; } }\n\n.swiper-container-outer {\n  position: relative; }\n\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.swiper-button-prev {\n  left: 300px; }\n\n.swiper-button-next {\n  right: 300px; }\n\n.messageForm table {\n  width: 100%;\n  background-color: #cbe6eb;\n  border-radius: 10px;\n  padding: 20px;\n  border-collapse: separate;\n  border-spacing: 0px 20px;\n  margin: 40px 0px; }\n\n.messageForm table tr {\n  padding: 10px; }\n\n.messageForm table tr td input[name=username] {\n  width: 30%;\n  height: 20px;\n  line-height: 20px;\n  font-size: 16px;\n  border-radius: 3px;\n  border: none; }\n\n.messageForm table tr td textarea {\n  border-radius: 5px;\n  border: none;\n  padding: 5px;\n  font-size: 16px; }\n\n.messageForm table tr td input[type=submit] {\n  width: 60px;\n  line-height: 30px;\n  background-color: #4f5150;\n  border: none;\n  color: white;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 16px; }\n\n.messageForm ol {\n  width: 100%;\n  background-color: #cbe6eb;\n  border-radius: 10px;\n  padding: 0px  20px 20px 20px;\n  margin: 40px 0px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.messageForm ol li {\n  list-style: none;\n  padding: 15px 0px;\n  border-bottom: 1px solid white; }\n\n.messageForm ol li p {\n  padding: 5px; }\n\n.messageForm ol li p:first-child {\n  margin: 10px 0px;\n  font-size: 14px;\n  color: white;\n  background-color: #4f5150; }\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/1.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/avatar.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/canvas.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/lunbo.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/nav.jpg";

/***/ })
/******/ ]);