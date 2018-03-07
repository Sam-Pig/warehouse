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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

"use strict";


var _autoSlideUp = __webpack_require__(4);

var _autoSlideUp2 = _interopRequireDefault(_autoSlideUp);

var _topBar = __webpack_require__(5);

var _topBar2 = _interopRequireDefault(_topBar);

var _smoothlyNavgation = __webpack_require__(6);

var _smoothlyNavgation2 = _interopRequireDefault(_smoothlyNavgation);

var _portfolioTranslation = __webpack_require__(7);

var _portfolioTranslation2 = _interopRequireDefault(_portfolioTranslation);

var _message = __webpack_require__(8);

var _message2 = _interopRequireDefault(_message);

__webpack_require__(9);

var _todo = __webpack_require__(11);

var _todo2 = _interopRequireDefault(_todo);

var _canvas = __webpack_require__(12);

var _canvas2 = _interopRequireDefault(_canvas);

var _music = __webpack_require__(13);

var _music2 = _interopRequireDefault(_music);

var _colorPicker = __webpack_require__(14);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _pikachu = __webpack_require__(15);

var _pikachu2 = _interopRequireDefault(_pikachu);

var _rsCover = __webpack_require__(10);

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
/* 4 */
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
/* 5 */
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

function portfolioTranslation() {
    var view = document.querySelector('.portfolioNav');
    var modle = {
        previousClass: 'all'
    };
    var controller = function controller(view) {
        $(view).on("click", 'li', function (e) {
            $(e.currentTarget).addClass('active').siblings().removeClass('active');
            var imgIndex = $(e.currentTarget).index();
            console.log($(e.currentTarget));
            console.log(e.currentTarget);
            console.log(imgIndex);
            var moveDistance = imgIndex * 800;
            console.log(moveDistance);
            $('.jobsInner').css({ transform: 'translate(-' + moveDistance + 'px)' });
        });
    };
    controller(view);
}

exports.default = portfolioTranslation;

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
                console.log(1);
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
            } else {
                return;
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
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/rs-cover.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/todo.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/canvas.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/music.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/colorPicker.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/pikachu.jpg";

/***/ })
/******/ ]);