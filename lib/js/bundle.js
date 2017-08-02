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


var _drum_machine = __webpack_require__(1);

var _drum_machine2 = _interopRequireDefault(_drum_machine);

var _drum_loop = __webpack_require__(2);

var _drum_loop2 = _interopRequireDefault(_drum_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

  var drumMachine = new _drum_machine2.default();
  var drumLoop = new _drum_loop2.default();

  var playing = true;
  var bpm = 1000 / 2;
  var playloop = void 0;

  var play = function play() {
    playloop = setTimeout(function () {
      drumLoop.loop(bpm);
      if (playing) {
        play();
      }
    }, bpm);
  };

  play();

  // const $power = $("power");
  // const $start_stop = $("start_stop");
  // const $volume = $("volume");
});

// $( () => {
//   const rootEl = $('.drummachine');
// });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrumMachine = function () {
  function DrumMachine() {
    _classCallCheck(this, DrumMachine);

    this.createGrid();
  }

  _createClass(DrumMachine, [{
    key: 'createGrid',
    value: function createGrid() {
      var BUTTONS = 16;
      var SOUNDS = [BD, SD, CH, CL];

      var _loop = function _loop(i) {
        var $row = $("<ul class='row'>");

        var _loop2 = function _loop2(j) {
          var $beat = $('<li class=\'' + j + '\'>');
          $beat.click(function () {
            $beat.toggleClass('on');
            var audio = SOUNDS[i];
            audio.play();
          });

          $row.append($beat);
        };

        for (var j = 0; j < BUTTONS; j++) {
          _loop2(j);
        }
        $row.appendTo('.drummachine');
      };

      for (var i = 0; i < SOUNDS.length; i++) {
        _loop(i);
      }
    }
  }]);

  return DrumMachine;
}();

exports.default = DrumMachine;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrumLoop = function () {
  function DrumLoop() {
    _classCallCheck(this, DrumLoop);

    this.currentNote = 0;
  }

  _createClass(DrumLoop, [{
    key: 'loop',
    value: function loop(bpm) {
      var column = $('li.' + this.currentNote);
      column.addClass('active');
      setTimeout(function () {
        return column.removeClass('active');
      }, bpm);

      this.currentNote++;
      if (this.currentNote > 15) {
        this.currentNote = 0;
      }
    }
  }]);

  return DrumLoop;
}();

exports.default = DrumLoop;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map