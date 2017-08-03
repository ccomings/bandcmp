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

var _instruments = __webpack_require__(3);

var _instruments2 = _interopRequireDefault(_instruments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

  var drumMachine = new _drum_machine2.default();
  var drumLoop = new _drum_loop2.default();

  var $power = $("#power");
  var $start_stop = $(".start_stop");
  var $volume = $(".volume");

  var power_on = false;
  var playing = false;
  var bpm = 1000 / 6;

  $power.click(function () {
    if (power_on === true) {
      clearInterval(playloop);
      playing = false;
      drumLoop.reset();
      drumLoop.clearBoard();
      power_on = false;
      $power.removeClass('on');
    } else {
      clearInterval(playloop);
      drumLoop.reset();
      drumLoop.clearBoard();
      power_on = true;
      $power.toggleClass('on');
    }
  });

  $start_stop.click(function () {
    if (power_on === true) {
      if (playing === true) {
        playing = false;
        clearInterval(playloop);
        drumLoop.reset();
      } else {
        playing = true;
        play();
      }
    }
  });

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
});

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
      var NAMES = ['Bass Drum', 'Snare Drum', 'Closed Hi Hat', 'CLaves'];

      var _loop = function _loop(i) {
        var $row = $('<ul class=\'row\'>');

        var _loop2 = function _loop2(j) {
          var $beat = $('<li class=\'' + j + '\'><div class=\'led\'></li>');
          $beat.click(function () {
            if ($(".power").hasClass('on')) {
              $beat.toggleClass('on');
              $beat.children().toggleClass('on');
              var audio = SOUNDS[i];
              if ($beat.hasClass("on")) {
                audio.play();
              }
            }
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
    this.stopPlay = this.stopPlay.bind(this);
  }

  _createClass(DrumLoop, [{
    key: 'loop',
    value: function loop(bpm) {
      var SOUNDS = [BD, SD, CH, CL];

      var column = $('li.' + this.currentNote);
      column.addClass('active');
      setTimeout(function () {
        return column.removeClass('active');
      }, bpm);

      for (var i = 0; i < column.length; i++) {
        var audio = $(column[i]);
        if (audio.hasClass('on')) {
          var sound = SOUNDS[i];
          this.stopPlay(sound);
          sound.play();
        }
      }

      this.currentNote++;
      if (this.currentNote > 15) {
        this.currentNote = 0;
      }
    }
  }, {
    key: 'stopPlay',
    value: function stopPlay(sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  }, {
    key: 'clearBoard',
    value: function clearBoard() {
      var $li = $("li");
      if ($li.hasClass("on")) {
        $li.removeClass("on");
      }
      var $div = $('div');
      if ($div.hasClass("on")) {
        $div.removeClass("on");
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.currentNote = 0;
    }
  }]);

  return DrumLoop;
}();

exports.default = DrumLoop;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Instruments = exports.Instruments = function Instruments() {
  var list = ['Bass Drum', 'Snare Drum', 'Closed Hi Hat', 'CLaves'];
  var $instruments = $("<ul class='instruments'>");
  for (var i = 0; i < list.length; i++) {
    var $name = $('<li>' + list[i] + '</li>');
    $instruments.append($name);
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map