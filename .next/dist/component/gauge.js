"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mariasyed/Documents/ISDP/component/gauge.js";


var TICK_ID = 'tick';

var Gauge = function (_Component) {
  (0, _inherits3.default)(Gauge, _Component);

  function Gauge() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Gauge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Gauge.__proto__ || (0, _getPrototypeOf2.default)(Gauge)).call.apply(_ref, [this].concat(args))), _this), _this.defineTick = function (opts) {
      var tX1 = opts.cX + opts.radius - Math.max(opts.dialWidth, opts.progressWidth) / 2;
      var tX2 = tX1 - opts.tickLength;
      return _react2.default.createElement("line", {
        id: TICK_ID,
        x1: tX1,
        y1: opts.cY,
        x2: tX2,
        y2: opts.cY,
        stroke: opts.tickColor,
        strokeWidth: opts.tickWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    }, _this.renderDial = function (opts) {
      return _react2.default.createElement("circle", {
        cx: opts.cX,
        cy: opts.cY,
        r: opts.radius,
        fill: "none",
        stroke: opts.dialColor,
        strokeWidth: opts.dialWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      });
    }, _this.renderTicks = function (opts) {
      if (opts.renderTicks === false) {
        return '';
      }
      var tickAngles = [];
      for (var i = 0; i <= 360; i += opts.tickInterval) {
        tickAngles.push(i);
      }
      return _react2.default.createElement("g", { className: "ticks", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, tickAngles.map(function (tickAngle) {
        return _react2.default.createElement("use", {
          href: "#" + TICK_ID,
          key: "tick-" + tickAngle,
          transform: "rotate(" + tickAngle + " " + opts.cX + " " + opts.cY + ")",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      }));
    }, _this.renderProgress = function (opts) {
      var offset = opts.circumference * (1 - opts.currentValue / opts.maximumValue);
      return _react2.default.createElement("circle", {
        cx: opts.cX,
        cy: opts.cY,
        r: opts.radius,
        fill: "none",
        stroke: opts.progressColor,
        strokeWidth: opts.progressWidth,
        strokeDasharray: opts.circumference,
        strokeDashoffset: offset,
        strokeLinecap: opts.progressRoundedEdge ? 'round' : 'butt',
        transform: "rotate(" + opts.progressRotation + "  " + opts.cX + " " + opts.cY + ")",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      });
    }, _this.renderNeedle = function (opts) {
      if (opts.renderNeedle === false) {
        return '';
      }
      var x1 = opts.cX;
      var y1 = opts.cY - opts.needleWidth / 2;
      var x2 = opts.cX;
      var y2 = opts.cY + opts.needleWidth / 2;
      var x3 = opts.diameter;
      var y3 = opts.cY;
      var needleAngle = 360 * opts.currentValue / 100;

      var needleElm = null;
      if (opts.needleSharp) {
        needleElm = _react2.default.createElement("polygon", {
          points: x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3,
          fill: opts.needleColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        });
      } else {
        needleElm = _react2.default.createElement("line", {
          x1: opts.cX,
          y1: opts.cY,
          x2: opts.diameter,
          y2: opts.cY,
          fill: "none",
          strokeWidth: opts.needleWidth,
          stroke: opts.needleColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        });
      }

      return _react2.default.createElement("g", { className: "needle", __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement("g", { transform: "rotate(" + needleAngle + " " + opts.cX + " " + opts.cY + ")", __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, needleElm), _react2.default.createElement("circle", {
        cx: opts.cX,
        cy: opts.cY,
        r: opts.needleBaseSize,
        fill: opts.needleBaseColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }));
    }, _this.renderText = function (opts) {
      return _react2.default.createElement("text", {
        x: opts.cX,
        y: !opts.renderNeedle ? opts.cY + 10 : opts.cY + 55,
        fontFamily: opts.progressFont,
        fontWeight: opts.progressFontWeight,
        transform: "rotate(90 " + opts.cX + " " + opts.cY + ")",
        textAnchor: "middle",
        fill: opts.progressTextColor === '' ? opts.progressColor : opts.progressTextColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement("tspan", {
        fontSize: opts.progressFontSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, opts.currentValue), _react2.default.createElement("tspan", {
        fontSize: opts.progressFontSize * 0.8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, opts.progressFontUnits));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Gauge, [{
    key: "render",
    value: function render() {
      var opts = (0, _assign2.default)({}, this.props);

      var _opts = opts,
          size = _opts.size,
          dialWidth = _opts.dialWidth;

      var cX = size / 2;
      var cY = size / 2;
      var radius = (size - 2 * dialWidth) / 2;
      var diameter = 2 * radius;
      var circumference = 2 * Math.PI * radius;
      opts = (0, _assign2.default)(opts, {
        cX: cX,
        cY: cY,
        radius: radius,
        diameter: diameter,
        circumference: circumference
      });

      return _react2.default.createElement("div", { className: opts.className, __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: opts.className,
        height: size,
        width: size,
        viewBox: "0 0 " + size + " " + size,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, this.defineTick(opts), _react2.default.createElement("linearGradient", { id: "grad", x1: "0", y1: "0", x2: "170", y2: "0", __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, _react2.default.createElement("stop", { offset: "0", stopColor: "rgb(255,255,0)", stopOpacity: "0", __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), _react2.default.createElement("stop", { offset: "1", stopColor: "red", stopOpacity: "1", __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }))), _react2.default.createElement("g", { transform: "rotate(-90 " + cX + " " + cY + ")", __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, this.renderDial(opts), this.renderTicks(opts), this.renderProgress(opts), this.renderNeedle(opts), this.renderText(opts))));
    }
  }]);

  return Gauge;
}(_react.Component);

exports.default = Gauge;


Gauge.defaultProps = {
  className: '',
  size: 200,

  dialWidth: 10,
  dialColor: '#eee',

  renderTicks: false,
  tickLength: 3,
  tickWidth: 1,
  tickColor: '#cacaca',
  tickInterval: 10,

  maximumValue: 100,
  currentValue: 25,
  progressWidth: 5,
  progressColor: '#3d3d3d',
  progressTextColor: '',
  progressRoundedEdge: true,
  progressRotation: 0,
  downProgressColor: 'red',
  progressFont: 'Sans-Serif',
  progressFontSize: '40',
  progressFontWeight: '200',
  progressFontUnits: '',

  renderNeedle: false,
  needleBaseSize: 5,
  needleBaseColor: '#9d9d9d',
  needleWidth: 2,
  needleSharp: false,
  needleColor: '#8a8a8a'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9nYXVnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRJQ0tfSUQiLCJHYXVnZSIsImRlZmluZVRpY2siLCJvcHRzIiwidFgxIiwiY1giLCJyYWRpdXMiLCJNYXRoIiwibWF4IiwiZGlhbFdpZHRoIiwicHJvZ3Jlc3NXaWR0aCIsInRYMiIsInRpY2tMZW5ndGgiLCJjWSIsInRpY2tDb2xvciIsInRpY2tXaWR0aCIsInJlbmRlckRpYWwiLCJkaWFsQ29sb3IiLCJyZW5kZXJUaWNrcyIsInRpY2tBbmdsZXMiLCJpIiwidGlja0ludGVydmFsIiwicHVzaCIsIm1hcCIsInRpY2tBbmdsZSIsInJlbmRlclByb2dyZXNzIiwib2Zmc2V0IiwiY2lyY3VtZmVyZW5jZSIsImN1cnJlbnRWYWx1ZSIsIm1heGltdW1WYWx1ZSIsInByb2dyZXNzQ29sb3IiLCJwcm9ncmVzc1JvdW5kZWRFZGdlIiwicHJvZ3Jlc3NSb3RhdGlvbiIsInJlbmRlck5lZWRsZSIsIngxIiwieTEiLCJuZWVkbGVXaWR0aCIsIngyIiwieTIiLCJ4MyIsImRpYW1ldGVyIiwieTMiLCJuZWVkbGVBbmdsZSIsIm5lZWRsZUVsbSIsIm5lZWRsZVNoYXJwIiwibmVlZGxlQ29sb3IiLCJuZWVkbGVCYXNlU2l6ZSIsIm5lZWRsZUJhc2VDb2xvciIsInJlbmRlclRleHQiLCJwcm9ncmVzc0ZvbnQiLCJwcm9ncmVzc0ZvbnRXZWlnaHQiLCJwcm9ncmVzc1RleHRDb2xvciIsInByb2dyZXNzRm9udFNpemUiLCJwcm9ncmVzc0ZvbnRVbml0cyIsInByb3BzIiwic2l6ZSIsIlBJIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIiwiZG93blByb2dyZXNzQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQU0sVUFBTixBQUFnQjs7SSxBQUVLOzs7Ozs7Ozs7Ozs7OzswTUFFbkIsQSxh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