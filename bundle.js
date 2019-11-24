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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./components/Chat/FormInput.js":
/*!**************************************!*\
  !*** ./components/Chat/FormInput.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        input {\n            border: 0;\n            outline: none;\n            width: calc(100% - 2px);\n            \n           \n        }\n\n        :host {\n            display: inline-block;\n            border: 1px solid rgba(25, 25, 25, 0.32);\n        }\n        \n    </style>\n    <input type=\"text\">\n";

var FormInput =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(FormInput, _HTMLElement);

  function FormInput() {
    var _this;

    _classCallCheck(this, FormInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this));
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    _this._shadowRoot.appendChild(template.content.cloneNode(true));

    _this.$input = _this.shadowRoot.querySelector('input');
    return _this;
  }

  _createClass(FormInput, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      this.$input.setAttribute(name, newValue);
    }
  }, {
    key: "clearInput",

    /* Очищает input */
    value: function clearInput() {
      this.$input.value = '';
    }
  }, {
    key: "value",
    get: function get() {
      return this.$input.value;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['name', 'value', 'placeholder', 'disabled'];
    }
  }]);

  return FormInput;
}(_wrapNativeSuper(HTMLElement));

customElements.define('form-input', FormInput);

/***/ }),

/***/ "./components/Chat/Message.js":
/*!************************************!*\
  !*** ./components/Chat/Message.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        div{\n            text-align: right;\n         }\n        .mess_class{\n            display: flex;\n            color: white;\n            word-break: break-word;\n            white-space: pre-wrap;\n            background: darkorange;\n            border: 0.5rem solid;\n            border-radius: 20px;\n            border-color: darkorange;\n            width: fit-content;\n            max-width: 600px;\n            margin-left: 20px;\n            min-width : 100px;\n            min-height: 30px;        \n        }\n        \n        .date{\n        font-size : smaller;\n        \n        }\n        \n        .space{\n        min-height: 5px;\n        }\n        \n        .my-message{\n            flex: auto;\n        }\n\n        :host {\n            display: inline-block;\n           \n        }\n    </style>\n    <div class = \"mess_class\">\n        <div class = \"my-message\"></div>         \n        <div class = \"space\"></div>   \n    </div>\n    <div class = \"date\"></div> \n    <div class = \"space\"></div>\n";

var Message =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Message, _HTMLElement);

  function Message() {
    var _this;

    _classCallCheck(this, Message);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Message).call(this));
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    _this._shadowRoot.appendChild(template.content.cloneNode(true));

    _this.$message = _this.shadowRoot.querySelector('.my-message');
    _this.$date = _this.shadowRoot.querySelector('.date');
    _this.$messClass = _this.shadowRoot.querySelector('.mess_class');
    _this.chatId = '';
    _this.senderId = '';
    return _this;
  }

  _createClass(Message, [{
    key: "createMess",
    value: function createMess(senderId, chatId, mess, date, root) {
      this.chatId = chatId;
      this.senderId = senderId;
      this.$message.innerText = mess;
      this.$date.innerText = date;
      root.appendChild(this.$messClass);
    }
  }]);

  return Message;
}(_wrapNativeSuper(HTMLElement));


customElements.define('chat-message', Message);

/***/ }),

/***/ "./components/Chat/MessageForm.js":
/*!****************************************!*\
  !*** ./components/Chat/MessageForm.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ "./components/Chat/Message.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// eslint-disable-next-line no-unused-vars

var template = document.createElement('template');
template.innerHTML = "\n    <style>         \n          form{\n           position: fixed;\n           top: 0;\n           left: 0;\n           width: 100%;\n           height: 100%;\n          }\n\n        \n        .flex-cont {\n            display: flex;\n            flex-direction: column;\n            overflow: hidden;\n            height: 100%;\n        }\n        \n        #mess-list-root{\n         align-items: flex-end;\n         overflow-y: scroll;\n         bottom: 0;\n         text-align: right;\n         margin-top: 5px;\n         margin-bottom: 10px; \n         min-height: 670px;  \n         height: 70%;         \n         display: flex;\n         flex-direction: column;\n         overflow-y: auto;\n         flex: 1;  \n               \n        }\n       \n        form-input {\n            display: flex;\n            width: 100%;\n            align-self: flex-end;\n            min-height: 50px;\n            position: relative;\n           \n         }\n        \n        input[type=submit] {\n            visibility: collapse;\n        }\n        \n        .chat_name{\n        text-align: center;\n        background: #0074D9;\n        padding: 20px;\n        margin: unset;\n        color: #bbbbbb;      \n        }\n        \n        @keyframes appear {\n          0% {\n            opacity(0);\n            transform: scale(0.1, 0.1);\n          }\n          100% {\n            opacity(1);\n            transform: scale(1, 1);\n          }\n        }\n        \n        \n    </style>\n    \n    <form>\n        <div class = \"flex-cont\">\n        <div class = \"head\">\n            <h1 class=\"chat_name\">Chat Screen</h1>\n        </div>    \n            <div id=\"mess-list-root\"></div>\n            <form-input name=\"message-text\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435  \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\"></form-input>\n        </div>\n    </form>\n   \n";

var MessageForm =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MessageForm, _HTMLElement);

  function MessageForm() {
    var _this;

    _classCallCheck(this, MessageForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageForm).call(this));
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    _this._shadowRoot.appendChild(template.content.cloneNode(true));

    _this.$form = _this._shadowRoot.querySelector('form');
    _this.$input = _this._shadowRoot.querySelector('form-input');
    _this.$messListRoot = _this._shadowRoot.querySelector('#mess-list-root');
    _this.$chatId = null;

    _this.reloadMessList(); // Добавление listener


    _this.$form.addEventListener('submit', _this._onSubmit.bind(_assertThisInitialized(_this)));

    _this.$form.addEventListener('keypress', _this._onKeyPress.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(MessageForm, [{
    key: "_onSubmit",
    value: function _onSubmit(event) {
      event.preventDefault();

      if (this.$input.value !== '') {
        var message = document.createElement('chat-message');
        message.style.animation = 'appear 0.3s';
        message.$message.innerText = this.$input.value;
        var date = MessageForm.getDate();
        message.$date.innerText = date;
        this.$messListRoot.append(message);
        var map = new Map();
        map.set('date', date);
        map.set('message', this.$input.value);
        this.messList.push(map);
        MessageForm.addElemToLocalStorage("MESS_LIST_KEY_".concat(this.$chatId), this.messList);
      }

      this.$input.clearInput();
      this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight);
    } // для map

  }, {
    key: "reloadMessList",
    value: function reloadMessList() {
      var _this2 = this;

      this.messList = MessageForm.getElementFromLocalStorage("MESS_LIST_KEY_".concat(this.$chatId));

      if (this.messList == null) {
        this.messList = [];
      } else {
        this.messList.forEach(function (map) {
          var message = document.createElement('chat-message');
          message.style.animation = 'appear 0.3s';
          message.$message.innerText = map.get('message');
          message.$date.innerText = map.get('date');

          _this2.$messListRoot.append(message); // message.createMess('Kate', 'chat_1', map.get('message'), '12.09.2019', root);

        });
      } // Прокручиваю сообщения вниз


      this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight);
    }
  }, {
    key: "_onKeyPress",
    value: function _onKeyPress(event) {
      if (event.keyCode === 13) {
        this.$form.dispatchEvent(new Event('submit'));
      }
    }
  }], [{
    key: "addElemToLocalStorage",
    value: function addElemToLocalStorage(key, val) {
      var messList = [];
      val.forEach(function (map) {
        messList.push(JSON.stringify(Array.from(map.entries())));
      });
      localStorage.setItem(key, JSON.stringify(messList));
    }
  }, {
    key: "getElementFromLocalStorage",
    value: function getElementFromLocalStorage(key) {
      var local = localStorage.getItem(key);

      if (local == null) {
        return [];
      }

      var list = JSON.parse(local);
      var result = [];
      list.forEach(function (map) {
        result.push(new Map(JSON.parse(map)));
      });
      return result;
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var date = new Date().toString();
      date = date.split(' ');
      date = "".concat(date[2], "-").concat(date[1], " ").concat(date[4]);
      return date;
    }
  }]);

  return MessageForm;
}(_wrapNativeSuper(HTMLElement));

customElements.define('message-form', MessageForm);

/***/ }),

/***/ "./components/ChatList/Chat.js":
/*!*************************************!*\
  !*** ./components/ChatList/Chat.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n    <style>       \n    .chat-class{\n            text-align: center;\n             background: white;\n             padding: 20px;\n             margin: unset;\n             color: black;\n             border: 0.1rem solid;\n             border-color: darkorange;\n            \n    }\n    \n    :hover{\n            background: #fff4c2;\n    }\n    \n}\n    \n    </style>\n    <div class = \"chat-class\"> \n        <div class = \"chat-name\"></div>          \n    </div>\n";

var Chat =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Chat, _HTMLElement);

  function Chat() {
    var _this;

    _classCallCheck(this, Chat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chat).call(this));
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    _this._shadowRoot.appendChild(template.content.cloneNode(true));

    _this.$chat = _this.shadowRoot.querySelector('.chat-class');

    _this.$chat.addEventListener('click', _this.showChat.bind(_assertThisInitialized(_this)));

    _this.$chatName = _this.shadowRoot.querySelector('.chat-name');
    _this.chatId = '';
    return _this;
  }

  _createClass(Chat, [{
    key: "showChat",
    value: function showChat(event) {
      event.preventDefault();
      var node = document.getElementById('chat-list');
      var parent = node.parentNode;

      if (parent) {
        node.parentNode.removeChild(node);
      }

      var chatForm = document.createElement('message-form');
      chatForm.className = 'mess-form';
      chatForm.animationDuration = '3s';
      chatForm.animationName = 'slidein';
      chatForm.$chatId = this.chatId;
      chatForm.reloadMessList();
      parent.appendChild(chatForm);
    }
  }]);

  return Chat;
}(_wrapNativeSuper(HTMLElement));


customElements.define('my-chat', Chat);

/***/ }),

/***/ "./components/ChatList/ChatCreateForm.js":
/*!***********************************************!*\
  !*** ./components/ChatList/ChatCreateForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatCreateForm; });
/* harmony import */ var _Helpers_ChatListHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/ChatListHelper */ "./components/Helpers/ChatListHelper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var template = document.createElement('template');
template.innerHTML = "\n<style>\n\n*{\n    font-family: Areal;\n}\n\n.b-popup{\n        width:100%;\n        height: 5000px;\n        background-color: rgba(0,0,0,0.5);\n        overflow:hidden;\n        position:fixed;\n        top:0px;\n}\n.b-popup .b-popup-content{\n        margin:40px auto 0px auto;\n        width:50%;\n        height: 150px;\n        button : 10%;\n        padding:10px;\n        background-color: #c5c5c5;\n        border-radius:5px;\n        box-shadow: 0px 0px 10px #000;\n}\n\n.close{\n        font-size: 6vh;\n        color: #aaaaaa;\n        float: right;\n        font-weight: bold;\n}\n\n.name{\n        text-align: center;\n        background: #0074D9;\n        padding: 20px;\n        margin: unset;\n        color: #bbbbbb;\n}\n\nform-input{\n            \n        display: flex;\n        width: 100%;           \n        min-height: 50px;\n        position: relative;\n    \n}\n.space{\nmin-height: 10px;\n\n}\n.close:hover{\ncolor: black;\n}\n\n</style>\n\n<div class=\"b-popup\" >\n    <div class=\"b-popup-content\">\n        <div class = name>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0442\u0430\n        <span class=\"close\">\xD7</span>\n        </div>\n        <div class = 'space'>  </div>\n        <form-input></form-input>\n    </div>    \n</div>\n\n\n";

var ChatCreateForm =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ChatCreateForm, _HTMLElement);

  function ChatCreateForm() {
    var _this;

    _classCallCheck(this, ChatCreateForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatCreateForm).call(this));
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    _this._shadowRoot.appendChild(template.content.cloneNode(true));

    _this.$close = _this._shadowRoot.querySelector('.close');
    _this.$input = _this._shadowRoot.querySelector('form-input');
    _this.$popup = _this._shadowRoot.querySelector('.b-popup');
    _this.$mySelfForm = null;
    _this.$chatList = null;

    _this.$close.addEventListener('click', _this.close.bind(_assertThisInitialized(_this)));

    _this.$popup.addEventListener('submit', _this.onSubmit.bind(_assertThisInitialized(_this)));

    _this.$popup.addEventListener('keypress', _this._onKeyPress.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(ChatCreateForm, [{
    key: "close",
    value: function close(event) {
      event.preventDefault();
      var node = this.$mySelfForm;
      var parent = node.parentNode;

      if (parent) {
        node.parentNode.removeChild(node);
      }
    }
  }, {
    key: "_onKeyPress",
    value: function _onKeyPress(event) {
      if (event.keyCode === 13) {
        this.$popup.dispatchEvent(new Event('submit'));
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      var chatName = this.$input.value;
      var node = this.$mySelfForm;
      var parent = node.parentNode;

      if (parent) {
        node.parentNode.removeChild(node);
      }

      this.$chatList.addNewChatToChatList(chatName, Object(_Helpers_ChatListHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 1000));
    }
  }]);

  return ChatCreateForm;
}(_wrapNativeSuper(HTMLElement));


customElements.define('chat-create-form', ChatCreateForm);

/***/ }),

/***/ "./components/ChatList/ChatList.js":
/*!*****************************************!*\
  !*** ./components/ChatList/ChatList.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat */ "./components/ChatList/Chat.js");
/* harmony import */ var _ChatCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatCreateForm */ "./components/ChatList/ChatCreateForm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var template = document.createElement('template');
template.innerHTML = "\n<style>\n          form{\n            overflow-y: scroll;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          }\n          .chat-root{\n            flex-direction: column;\n          }\n          h1{\n            text-align: center;\n            background: #0074D9;\n            padding: 20px;\n            margin: unset;\n            color: #bbbbbb;\n          }\n          button{\n            position: absolute;\n            right: 3vh;\n            bottom: 3vh;\n            border-radius: 50%;\n            width: 8vh;\n            height: 8vh;\n            background-color: #0084ff;\n            transition: all 0.3s;\n            box-shadow: 0 0 0 blue;\n            animation: pulse 2s infinite;\n            \n          }\n          \n          span{\n             font-size: 350%;\n             color: black;      \n             font-weight: bold;\n          }\n                    \n             .addChatButton:hover {\n             animation: none;\n          }\n           \n           \n          @keyframes pulse {\n          0% {\n               -moz-box-shadow: 0 0 0 0 cornflowerblue;\n               box-shadow: 0 0 0 0 deepskyblue;\n          }\n          70% {\n               -moz-box-shadow: 0 0 0 10px cornflowerblue;\n               box-shadow: 0 0 0 10px deepskyblue;\n          }\n          100% {\n                -moz-box-shadow: 0 0 0 0 cornflowerblue;\n                box-shadow: 0 0 0 0 deepskyblue;\n          }\n          }\n    }\n         \n</style>\n<form>\n    <h1>Chat List</h1>\n    <div class = \"chat-root\" id = 'chat-root'></div>\n    <button class = \"addChatButton\"><span>+</span></button>\n</form>\n";

var ChatList =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ChatList, _HTMLElement);

  function ChatList() {
    var _this;

    _classCallCheck(this, ChatList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatList).call(this));
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    _this._shadowRoot.appendChild(template.content.cloneNode(true));

    _this.$form = _this._shadowRoot.querySelector('form');
    _this.$chatListRoot = _this._shadowRoot.querySelector('.chat-root');
    _this.$chatList = ChatList.getElementFromLocalStorage('CHAT_LIST_KEY');
    _this.button = _this._shadowRoot.querySelector('button');

    _this.button.addEventListener('click', _this._onSubmit.bind(_assertThisInitialized(_this)));

    if (_this.$chatList == null) _this.$chatList = [];else {
      _this.$chatList.forEach(function (map) {
        var elem = document.createElement('my-chat');
        elem.$chatName.innerText = map.get('chatName');
        elem.chatId = map.get('chatId');

        _this.$chatListRoot.appendChild(elem);
      });
    }
    return _this;
  }

  _createClass(ChatList, [{
    key: "_onSubmit",
    value: function _onSubmit(event) {
      event.preventDefault();
      var chatCreateForm = document.createElement('chat-create-form');
      chatCreateForm.$mySelfForm = chatCreateForm;
      chatCreateForm.$chatList = this;
      this.$form.appendChild(chatCreateForm);
    }
  }, {
    key: "addNewChatToChatList",
    value: function addNewChatToChatList(chatName, chatId) {
      var map = new Map();
      map.set('chatName', chatName);
      map.set('chatId', chatId);
      this.$chatList.push(map);
      ChatList.addElemToLocalStorage('CHAT_LIST_KEY', this.$chatList);
      var elem = document.createElement('my-chat');
      elem.$chatName.innerText = chatName;
      elem.chatId = chatId;
      this.$chatListRoot.appendChild(elem);
    }
  }], [{
    key: "addElemToLocalStorage",
    value: function addElemToLocalStorage(key, val) {
      var messList = [];
      val.forEach(function (map) {
        messList.push(JSON.stringify(Array.from(map.entries())));
      });
      localStorage.setItem(key, JSON.stringify(messList));
    }
  }, {
    key: "getElementFromLocalStorage",
    value: function getElementFromLocalStorage(key) {
      var local = localStorage.getItem(key);

      if (local == null) {
        return [];
      }

      var list = JSON.parse(local);
      var result = [];
      list.forEach(function (map) {
        result.push(new Map(JSON.parse(map)));
      });
      return result;
    }
  }]);

  return ChatList;
}(_wrapNativeSuper(HTMLElement));

customElements.define('chat-list', ChatList);

/***/ }),

/***/ "./components/Helpers/ChatListHelper.js":
/*!**********************************************!*\
  !*** ./components/Helpers/ChatListHelper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createId; });
function createId(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chat_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Chat/FormInput */ "./components/Chat/FormInput.js");
/* harmony import */ var _components_Chat_FormInput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Chat_FormInput__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Chat_MessageForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Chat/MessageForm */ "./components/Chat/MessageForm.js");
/* harmony import */ var _components_Chat_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Chat/Message */ "./components/Chat/Message.js");
/* harmony import */ var _components_ChatList_ChatList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ChatList/ChatList */ "./components/ChatList/ChatList.js");






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0L0Zvcm1JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXQvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXQvTWVzc2FnZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0TGlzdC9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdExpc3QvQ2hhdENyZWF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0TGlzdC9DaGF0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbHBlcnMvQ2hhdExpc3RIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguY3NzP2JmMzkiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOlsidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJGb3JtSW5wdXQiLCJfc2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCIkaW5wdXQiLCJzaGFkb3dSb290IiwicXVlcnlTZWxlY3RvciIsIm5hbWUiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJIVE1MRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiTWVzc2FnZSIsIiRtZXNzYWdlIiwiJGRhdGUiLCIkbWVzc0NsYXNzIiwiY2hhdElkIiwic2VuZGVySWQiLCJtZXNzIiwiZGF0ZSIsInJvb3QiLCJpbm5lclRleHQiLCJNZXNzYWdlRm9ybSIsIiRmb3JtIiwiJG1lc3NMaXN0Um9vdCIsIiRjaGF0SWQiLCJyZWxvYWRNZXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25TdWJtaXQiLCJiaW5kIiwiX29uS2V5UHJlc3MiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsInN0eWxlIiwiYW5pbWF0aW9uIiwiZ2V0RGF0ZSIsImFwcGVuZCIsIm1hcCIsIk1hcCIsInNldCIsIm1lc3NMaXN0IiwicHVzaCIsImFkZEVsZW1Ub0xvY2FsU3RvcmFnZSIsImNsZWFySW5wdXQiLCJzY3JvbGxUbyIsInNjcm9sbEhlaWdodCIsImdldEVsZW1lbnRGcm9tTG9jYWxTdG9yYWdlIiwiZm9yRWFjaCIsImdldCIsImtleUNvZGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJrZXkiLCJ2YWwiLCJKU09OIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwiZW50cmllcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhbCIsImdldEl0ZW0iLCJsaXN0IiwicGFyc2UiLCJyZXN1bHQiLCJEYXRlIiwidG9TdHJpbmciLCJzcGxpdCIsIkNoYXQiLCIkY2hhdCIsInNob3dDaGF0IiwiJGNoYXROYW1lIiwibm9kZSIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2hhdEZvcm0iLCJjbGFzc05hbWUiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJDaGF0Q3JlYXRlRm9ybSIsIiRjbG9zZSIsIiRwb3B1cCIsIiRteVNlbGZGb3JtIiwiJGNoYXRMaXN0IiwiY2xvc2UiLCJvblN1Ym1pdCIsImNoYXROYW1lIiwiYWRkTmV3Q2hhdFRvQ2hhdExpc3QiLCJjcmVhdGVJZCIsIkNoYXRMaXN0IiwiJGNoYXRMaXN0Um9vdCIsImJ1dHRvbiIsImVsZW0iLCJjaGF0Q3JlYXRlRm9ybSIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwicm91bmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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Q0FBQ0MsU0FBTCxDQUFlZixRQUFmLENBQTFCO0FBQ0Q7OzsrQ0FFaUNZLEcsRUFBSztBQUNyQyxVQUFNUyxLQUFLLEdBQUdGLFlBQVksQ0FBQ0csT0FBYixDQUFxQlYsR0FBckIsQ0FBZDs7QUFDQSxVQUFJUyxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQixlQUFPLEVBQVA7QUFDRDs7QUFDRCxVQUFNRSxJQUFJLEdBQUdULElBQUksQ0FBQ1UsS0FBTCxDQUFXSCxLQUFYLENBQWI7QUFDQSxVQUFNSSxNQUFNLEdBQUcsRUFBZjtBQUNBRixVQUFJLENBQUNoQixPQUFMLENBQWEsVUFBQ1YsR0FBRCxFQUFTO0FBQ3BCNEIsY0FBTSxDQUFDeEIsSUFBUCxDQUFZLElBQUlILEdBQUosQ0FBUWdCLElBQUksQ0FBQ1UsS0FBTCxDQUFXM0IsR0FBWCxDQUFSLENBQVo7QUFDRCxPQUZEO0FBR0EsYUFBTzRCLE1BQVA7QUFDRDs7OzttQkF6Q29CekQsVzs7QUFnRXZCQyxjQUFjLENBQUNDLE1BQWYsQ0FBc0IsV0FBdEIsRUFBbUNrRixRQUFuQyxFOzs7Ozs7Ozs7Ozs7QUN6SUE7QUFBQTtBQUFlLFNBQVNELFFBQVQsQ0FBa0JNLEdBQWxCLEVBQXVCQyxHQUF2QixFQUE0QjtBQUN6QztBQUNBLE1BQU1DLElBQUksR0FBR0YsR0FBRyxHQUFHLEdBQU4sR0FBWUcsSUFBSSxDQUFDQyxNQUFMLE1BQWlCSCxHQUFHLEdBQUdELEdBQU4sR0FBWSxDQUE3QixDQUF6QjtBQUNBLFNBQU9HLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxJQUFYLENBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ0pELHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUsIDI1LCAyNSwgMC4zMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgPC9zdHlsZT5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbmA7XG5cbmNsYXNzIEZvcm1JbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICB0aGlzLiRpbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnbmFtZScsICd2YWx1ZScsICdwbGFjZWhvbGRlcicsICdkaXNhYmxlZCddO1xuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShuYW1lLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGlucHV0LnZhbHVlO1xuICB9XG5cbiAgLyog0J7Rh9C40YnQsNC10YIgaW5wdXQgKi9cbiAgY2xlYXJJbnB1dCgpIHtcbiAgICB0aGlzLiRpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZm9ybS1pbnB1dCcsIEZvcm1JbnB1dCk7XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgIH1cbiAgICAgICAgLm1lc3NfY2xhc3N7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7XG4gICAgICAgICAgICBib3JkZXI6IDAuNXJlbSBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtvcmFuZ2U7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGggOiAxMDBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRhdGV7XG4gICAgICAgIGZvbnQtc2l6ZSA6IHNtYWxsZXI7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc3BhY2V7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm15LW1lc3NhZ2V7XG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBjbGFzcyA9IFwibWVzc19jbGFzc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJteS1tZXNzYWdlXCI+PC9kaXY+ICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInNwYWNlXCI+PC9kaXY+ICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwiZGF0ZVwiPjwvZGl2PiBcbiAgICA8ZGl2IGNsYXNzID0gXCJzcGFjZVwiPjwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy4kbWVzc2FnZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcubXktbWVzc2FnZScpO1xuICAgIHRoaXMuJGRhdGUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICB0aGlzLiRtZXNzQ2xhc3MgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLm1lc3NfY2xhc3MnKTtcbiAgICB0aGlzLmNoYXRJZCA9ICcnO1xuICAgIHRoaXMuc2VuZGVySWQgPSAnJztcbiAgfVxuXG4gIGNyZWF0ZU1lc3Moc2VuZGVySWQsIGNoYXRJZCwgbWVzcywgZGF0ZSwgcm9vdCkge1xuICAgIHRoaXMuY2hhdElkID0gY2hhdElkO1xuICAgIHRoaXMuc2VuZGVySWQgPSBzZW5kZXJJZDtcbiAgICB0aGlzLiRtZXNzYWdlLmlubmVyVGV4dCA9IG1lc3M7XG4gICAgdGhpcy4kZGF0ZS5pbm5lclRleHQgPSBkYXRlO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQodGhpcy4kbWVzc0NsYXNzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjaGF0LW1lc3NhZ2UnLCBNZXNzYWdlKTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcblxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT4gICAgICAgICBcbiAgICAgICAgICBmb3Jte1xuICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC5mbGV4LWNvbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjbWVzcy1saXN0LXJvb3R7XG4gICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICBib3R0b206IDA7XG4gICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxuICAgICAgICAgbWluLWhlaWdodDogNjcwcHg7ICBcbiAgICAgICAgIGhlaWdodDogNzAlOyAgICAgICAgIFxuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgZmxleDogMTsgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgZm9ybS1pbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2hhdF9uYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDc0RDk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgICAgIGNvbG9yOiAjYmJiYmJiOyAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGFwcGVhciB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHkoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgPC9zdHlsZT5cbiAgICBcbiAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiZmxleC1jb250XCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImhlYWRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImNoYXRfbmFtZVwiPkNoYXQgU2NyZWVuPC9oMT5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lc3MtbGlzdC1yb290XCI+PC9kaXY+XG4gICAgICAgICAgICA8Zm9ybS1pbnB1dCBuYW1lPVwibWVzc2FnZS10ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSAg0YHQvtC+0LHRidC10L3QuNC1XCI+PC9mb3JtLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICBcbmA7XG5cbmNsYXNzIE1lc3NhZ2VGb3JtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB0aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLiRmb3JtID0gdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgdGhpcy4kaW5wdXQgPSB0aGlzLl9zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0taW5wdXQnKTtcbiAgICB0aGlzLiRtZXNzTGlzdFJvb3QgPSB0aGlzLl9zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzLWxpc3Qtcm9vdCcpO1xuICAgIHRoaXMuJGNoYXRJZCA9IG51bGw7XG4gICAgdGhpcy5yZWxvYWRNZXNzTGlzdCgpO1xuICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1IGxpc3RlbmVyXG4gICAgdGhpcy4kZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLl9vblN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLiRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5fb25LZXlQcmVzcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9vblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuJGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NoYXQtbWVzc2FnZScpO1xuICAgICAgbWVzc2FnZS5zdHlsZS5hbmltYXRpb24gPSAnYXBwZWFyIDAuM3MnO1xuICAgICAgbWVzc2FnZS4kbWVzc2FnZS5pbm5lclRleHQgPSB0aGlzLiRpbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBNZXNzYWdlRm9ybS5nZXREYXRlKCk7XG4gICAgICBtZXNzYWdlLiRkYXRlLmlubmVyVGV4dCA9IGRhdGU7XG4gICAgICB0aGlzLiRtZXNzTGlzdFJvb3QuYXBwZW5kKG1lc3NhZ2UpO1xuICAgICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgbWFwLnNldCgnZGF0ZScsIGRhdGUpO1xuICAgICAgbWFwLnNldCgnbWVzc2FnZScsIHRoaXMuJGlucHV0LnZhbHVlKTtcbiAgICAgIHRoaXMubWVzc0xpc3QucHVzaChtYXApO1xuICAgICAgTWVzc2FnZUZvcm0uYWRkRWxlbVRvTG9jYWxTdG9yYWdlKGBNRVNTX0xJU1RfS0VZXyR7dGhpcy4kY2hhdElkfWAsIHRoaXMubWVzc0xpc3QpO1xuICAgIH1cbiAgICB0aGlzLiRpbnB1dC5jbGVhcklucHV0KCk7XG4gICAgdGhpcy4kbWVzc0xpc3RSb290LnNjcm9sbFRvKDAsIHRoaXMuJG1lc3NMaXN0Um9vdC5zY3JvbGxIZWlnaHQpO1xuICB9XG5cbiAgLy8g0LTQu9GPIG1hcFxuICBzdGF0aWMgYWRkRWxlbVRvTG9jYWxTdG9yYWdlKGtleSwgdmFsKSB7XG4gICAgY29uc3QgbWVzc0xpc3QgPSBbXTtcbiAgICB2YWwuZm9yRWFjaCgobWFwKSA9PiB7XG4gICAgICBtZXNzTGlzdC5wdXNoKEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obWFwLmVudHJpZXMoKSkpKTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG1lc3NMaXN0KSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RWxlbWVudEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgY29uc3QgbG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGlmIChsb2NhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsKTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsaXN0LmZvckVhY2goKG1hcCkgPT4ge1xuICAgICAgcmVzdWx0LnB1c2gobmV3IE1hcChKU09OLnBhcnNlKG1hcCkpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldERhdGUoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgZGF0ZSA9IGRhdGUuc3BsaXQoJyAnKTtcbiAgICBkYXRlID0gYCR7ZGF0ZVsyXX0tJHtkYXRlWzFdfSAke2RhdGVbNF19YDtcblxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgcmVsb2FkTWVzc0xpc3QoKSB7XG4gICAgdGhpcy5tZXNzTGlzdCA9IE1lc3NhZ2VGb3JtLmdldEVsZW1lbnRGcm9tTG9jYWxTdG9yYWdlKGBNRVNTX0xJU1RfS0VZXyR7dGhpcy4kY2hhdElkfWApO1xuICAgIGlmICh0aGlzLm1lc3NMaXN0ID09IG51bGwpIHtcbiAgICAgIHRoaXMubWVzc0xpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXNzTGlzdC5mb3JFYWNoKChtYXApID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NoYXQtbWVzc2FnZScpO1xuICAgICAgICBtZXNzYWdlLnN0eWxlLmFuaW1hdGlvbiA9ICdhcHBlYXIgMC4zcyc7XG4gICAgICAgIG1lc3NhZ2UuJG1lc3NhZ2UuaW5uZXJUZXh0ID0gbWFwLmdldCgnbWVzc2FnZScpO1xuICAgICAgICBtZXNzYWdlLiRkYXRlLmlubmVyVGV4dCA9IG1hcC5nZXQoJ2RhdGUnKTtcbiAgICAgICAgdGhpcy4kbWVzc0xpc3RSb290LmFwcGVuZChtZXNzYWdlKTtcbiAgICAgICAgLy8gbWVzc2FnZS5jcmVhdGVNZXNzKCdLYXRlJywgJ2NoYXRfMScsIG1hcC5nZXQoJ21lc3NhZ2UnKSwgJzEyLjA5LjIwMTknLCByb290KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDQn9GA0L7QutGA0YPRh9C40LLQsNGOINGB0L7QvtCx0YnQtdC90LjRjyDQstC90LjQt1xuICAgIHRoaXMuJG1lc3NMaXN0Um9vdC5zY3JvbGxUbygwLCB0aGlzLiRtZXNzTGlzdFJvb3Quc2Nyb2xsSGVpZ2h0KTtcbiAgfVxuXG4gIF9vbktleVByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLiRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdWJtaXQnKSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWVzc2FnZS1mb3JtJywgTWVzc2FnZUZvcm0pO1xuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT4gICAgICAgXG4gICAgLmNoYXQtY2xhc3N7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICBtYXJnaW46IHVuc2V0O1xuICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZDtcbiAgICAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtvcmFuZ2U7XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjRjMjtcbiAgICB9XG4gICAgXG59XG4gICAgXG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzID0gXCJjaGF0LWNsYXNzXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJjaGF0LW5hbWVcIj48L2Rpdj4gICAgICAgICAgXG4gICAgPC9kaXY+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB0aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLiRjaGF0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jaGF0LWNsYXNzJyk7XG4gICAgdGhpcy4kY2hhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0NoYXQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4kY2hhdE5hbWUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNoYXQtbmFtZScpO1xuICAgIHRoaXMuY2hhdElkID0gJyc7XG4gIH1cblxuICBzaG93Q2hhdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LWxpc3QnKTtcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgICBjb25zdCBjaGF0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21lc3NhZ2UtZm9ybScpO1xuICAgIGNoYXRGb3JtLmNsYXNzTmFtZSA9ICdtZXNzLWZvcm0nO1xuICAgIGNoYXRGb3JtLmFuaW1hdGlvbkR1cmF0aW9uID0gJzNzJztcbiAgICBjaGF0Rm9ybS5hbmltYXRpb25OYW1lID0gJ3NsaWRlaW4nO1xuICAgIGNoYXRGb3JtLiRjaGF0SWQgPSB0aGlzLmNoYXRJZDtcbiAgICBjaGF0Rm9ybS5yZWxvYWRNZXNzTGlzdCgpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGF0Rm9ybSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktY2hhdCcsIENoYXQpO1xuIiwiaW1wb3J0IGNyZWF0ZUlkIGZyb20gJy4uL0hlbHBlcnMvQ2hhdExpc3RIZWxwZXInO1xuXG5cbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxzdHlsZT5cblxuKntcbiAgICBmb250LWZhbWlseTogQXJlYWw7XG59XG5cbi5iLXBvcHVwe1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICB0b3A6MHB4O1xufVxuLmItcG9wdXAgLmItcG9wdXAtY29udGVudHtcbiAgICAgICAgbWFyZ2luOjQwcHggYXV0byAwcHggYXV0bztcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBidXR0b24gOiAxMCU7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwO1xufVxuXG4uY2xvc2V7XG4gICAgICAgIGZvbnQtc2l6ZTogNnZoO1xuICAgICAgICBjb2xvcjogI2FhYWFhYTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hbWV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwNzREOTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luOiB1bnNldDtcbiAgICAgICAgY29sb3I6ICNiYmJiYmI7XG59XG5cbmZvcm0taW5wdXR7XG4gICAgICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICBcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxufVxuLnNwYWNle1xubWluLWhlaWdodDogMTBweDtcblxufVxuLmNsb3NlOmhvdmVye1xuY29sb3I6IGJsYWNrO1xufVxuXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiYi1wb3B1cFwiID5cbiAgICA8ZGl2IGNsYXNzPVwiYi1wb3B1cC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBuYW1lPtCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YfQsNGC0LBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPsOXPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9ICdzcGFjZSc+ICA8L2Rpdj5cbiAgICAgICAgPGZvcm0taW5wdXQ+PC9mb3JtLWlucHV0PlxuICAgIDwvZGl2PiAgICBcbjwvZGl2PlxuXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRDcmVhdGVGb3JtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB0aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLiRjbG9zZSA9IHRoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgdGhpcy4kaW5wdXQgPSB0aGlzLl9zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0taW5wdXQnKTtcbiAgICB0aGlzLiRwb3B1cCA9IHRoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmItcG9wdXAnKTtcbiAgICB0aGlzLiRteVNlbGZGb3JtID0gbnVsbDtcbiAgICB0aGlzLiRjaGF0TGlzdCA9IG51bGw7XG4gICAgdGhpcy4kY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuJHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMub25TdWJtaXQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4kcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLl9vbktleVByZXNzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xvc2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLiRteVNlbGZGb3JtO1xuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgX29uS2V5UHJlc3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuJHBvcHVwLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdWJtaXQnKSk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNoYXROYW1lID0gdGhpcy4kaW5wdXQudmFsdWU7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuJG15U2VsZkZvcm07XG4gICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgdGhpcy4kY2hhdExpc3QuYWRkTmV3Q2hhdFRvQ2hhdExpc3QoY2hhdE5hbWUsIGNyZWF0ZUlkKDEsIDEwMDApKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjaGF0LWNyZWF0ZS1mb3JtJywgQ2hhdENyZWF0ZUZvcm0pO1xuIiwiaW1wb3J0ICcuL0NoYXQnO1xuaW1wb3J0ICcuL0NoYXRDcmVhdGVGb3JtJztcblxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgICAgICAgIGZvcm17XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGF0LXJvb3R7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDc0RDk7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiB1bnNldDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogM3ZoO1xuICAgICAgICAgICAgYm90dG9tOiAzdmg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogOHZoO1xuICAgICAgICAgICAgaGVpZ2h0OiA4dmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NGZmO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCBibHVlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzUwJTtcbiAgICAgICAgICAgICBjb2xvcjogYmxhY2s7ICAgICAgXG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAuYWRkQ2hhdEJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMCBjb3JuZmxvd2VyYmx1ZTtcbiAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgZGVlcHNreWJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggY29ybmZsb3dlcmJsdWU7XG4gICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IGRlZXBza3libHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgY29ybmZsb3dlcmJsdWU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCBkZWVwc2t5Ymx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIH1cbiAgICAgICAgIFxuPC9zdHlsZT5cbjxmb3JtPlxuICAgIDxoMT5DaGF0IExpc3Q8L2gxPlxuICAgIDxkaXYgY2xhc3MgPSBcImNoYXQtcm9vdFwiIGlkID0gJ2NoYXQtcm9vdCc+PC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcyA9IFwiYWRkQ2hhdEJ1dHRvblwiPjxzcGFuPis8L3NwYW4+PC9idXR0b24+XG48L2Zvcm0+XG5gO1xuXG5jbGFzcyBDaGF0TGlzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy4kZm9ybSA9IHRoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIHRoaXMuJGNoYXRMaXN0Um9vdCA9IHRoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNoYXQtcm9vdCcpO1xuICAgIHRoaXMuJGNoYXRMaXN0ID0gQ2hhdExpc3QuZ2V0RWxlbWVudEZyb21Mb2NhbFN0b3JhZ2UoJ0NIQVRfTElTVF9LRVknKTtcbiAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vblN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy4kY2hhdExpc3QgPT0gbnVsbCkgdGhpcy4kY2hhdExpc3QgPSBbXTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuJGNoYXRMaXN0LmZvckVhY2goKG1hcCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbXktY2hhdCcpO1xuICAgICAgICBlbGVtLiRjaGF0TmFtZS5pbm5lclRleHQgPSBtYXAuZ2V0KCdjaGF0TmFtZScpO1xuICAgICAgICBlbGVtLmNoYXRJZCA9IG1hcC5nZXQoJ2NoYXRJZCcpO1xuICAgICAgICB0aGlzLiRjaGF0TGlzdFJvb3QuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyBhZGRFbGVtVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWwpIHtcbiAgICBjb25zdCBtZXNzTGlzdCA9IFtdO1xuICAgIHZhbC5mb3JFYWNoKChtYXApID0+IHtcbiAgICAgIG1lc3NMaXN0LnB1c2goSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShtYXAuZW50cmllcygpKSkpO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkobWVzc0xpc3QpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRFbGVtZW50RnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgaWYgKGxvY2FsID09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbGlzdCA9IEpTT04ucGFyc2UobG9jYWwpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxpc3QuZm9yRWFjaCgobWFwKSA9PiB7XG4gICAgICByZXN1bHQucHVzaChuZXcgTWFwKEpTT04ucGFyc2UobWFwKSkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNoYXRDcmVhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2hhdC1jcmVhdGUtZm9ybScpO1xuICAgIGNoYXRDcmVhdGVGb3JtLiRteVNlbGZGb3JtID0gY2hhdENyZWF0ZUZvcm07XG4gICAgY2hhdENyZWF0ZUZvcm0uJGNoYXRMaXN0ID0gdGhpcztcbiAgICB0aGlzLiRmb3JtLmFwcGVuZENoaWxkKGNoYXRDcmVhdGVGb3JtKTtcbiAgfVxuXG4gIGFkZE5ld0NoYXRUb0NoYXRMaXN0KGNoYXROYW1lLCBjaGF0SWQpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldCgnY2hhdE5hbWUnLCBjaGF0TmFtZSk7XG4gICAgbWFwLnNldCgnY2hhdElkJywgY2hhdElkKTtcbiAgICB0aGlzLiRjaGF0TGlzdC5wdXNoKG1hcCk7XG4gICAgQ2hhdExpc3QuYWRkRWxlbVRvTG9jYWxTdG9yYWdlKCdDSEFUX0xJU1RfS0VZJywgdGhpcy4kY2hhdExpc3QpO1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdteS1jaGF0Jyk7XG4gICAgZWxlbS4kY2hhdE5hbWUuaW5uZXJUZXh0ID0gY2hhdE5hbWU7XG4gICAgZWxlbS5jaGF0SWQgPSBjaGF0SWQ7XG4gICAgdGhpcy4kY2hhdExpc3RSb290LmFwcGVuZENoaWxkKGVsZW0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2hhdC1saXN0JywgQ2hhdExpc3QpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSWQobWluLCBtYXgpIHtcbiAgLy8g0L/QvtC70YPRh9C40YLRjCDRgdC70YPRh9Cw0LnQvdC+0LUg0YfQuNGB0LvQviDQvtGCIChtaW4tMC41KSDQtNC+IChtYXgrMC41KVxuICBjb25zdCByYW5kID0gbWluIC0gMC41ICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcbiAgcmV0dXJuIE1hdGgucm91bmQocmFuZCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvQ2hhdC9Gb3JtSW5wdXQnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvQ2hhdC9NZXNzYWdlRm9ybSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9DaGF0L01lc3NhZ2UnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50cy9DaGF0TGlzdC9DaGF0TGlzdCc7XG4iXSwic291cmNlUm9vdCI6IiJ9