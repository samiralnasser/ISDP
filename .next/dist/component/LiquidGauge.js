'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Color = require('d3-color');

var _d3Interpolate = require('d3-interpolate');

var _reactLiquidGauge = require('react-liquid-gauge');

var _reactLiquidGauge2 = _interopRequireDefault(_reactLiquidGauge);

var _Fonts = require('../themes/Fonts');

var _Fonts2 = _interopRequireDefault(_Fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mariasyed/Documents/metropolia/ISDP/component/LiquidGauge.js';


var LiquidGauge = function (_Component) {
    (0, _inherits3.default)(LiquidGauge, _Component);

    function LiquidGauge(props) {
        (0, _classCallCheck3.default)(this, LiquidGauge);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LiquidGauge.__proto__ || (0, _getPrototypeOf2.default)(LiquidGauge)).call(this, props));

        _this.startColor = '#6495ed'; // cornflowerblue
        _this.endColor = '#dc143c'; // crimson
        return _this;
    }

    (0, _createClass3.default)(LiquidGauge, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                percent = _props.percent,
                style = _props.style;

            var radius = 150;
            var interpolate = (0, _d3Interpolate.interpolateRgb)(this.startColor, this.endColor);
            var fillColor = interpolate(value / 100);
            var gradientStops = [{
                key: '0%',
                stopColor: (0, _d3Color.color)(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            }, {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            }, {
                key: '100%',
                stopColor: (0, _d3Color.color)(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }];

            return _react2.default.createElement(_reactLiquidGauge2.default, {
                style: style,
                width: radius * 2,
                height: radius * 2,
                value: value,
                percent: percent,
                textSize: 1,
                textOffsetX: 0,
                textOffsetY: 0,
                textRenderer: function textRenderer(props) {
                    var value = props.value;
                    var textPixels = props.textSize * radius / 2;
                    var labelStyle = {
                        fontFamily: _Fonts2.default.type.base,
                        fontSize: textPixels * 0.5
                    };
                    var level = "low";
                    if (value < 25) {
                        level = "Low";
                    } else if (value >= 25 && value < 75) {
                        level = "Medium";
                    } else {
                        level = "High";
                    }

                    return _react2.default.createElement('tspan', { className: 'value', style: labelStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    }, level);
                },
                riseAnimation: true,
                riseAnimationTime: 1500,
                waveAnimation: true,
                waveFrequency: 2,
                waveAmplitude: 1,
                gradient: true,
                gradientStops: gradientStops,
                circleStyle: {
                    fill: fillColor
                },
                waveStyle: {
                    fill: fillColor
                },
                textStyle: {
                    fill: (0, _d3Color.color)('#444').toString(),
                    fontFamily: 'Arial'
                },
                waveTextStyle: {
                    fill: (0, _d3Color.color)('#fff').toString(),
                    fontFamily: 'Arial'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            });
        }
    }]);

    return LiquidGauge;
}(_react.Component);

exports.default = LiquidGauge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9MaXF1aWRHYXVnZS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjb2xvciIsImludGVycG9sYXRlUmdiIiwiTGlxdWlkRmlsbEdhdWdlIiwiRm9udHMiLCJMaXF1aWRHYXVnZSIsInByb3BzIiwic3RhcnRDb2xvciIsImVuZENvbG9yIiwidmFsdWUiLCJwZXJjZW50Iiwic3R5bGUiLCJyYWRpdXMiLCJpbnRlcnBvbGF0ZSIsImZpbGxDb2xvciIsImdyYWRpZW50U3RvcHMiLCJrZXkiLCJzdG9wQ29sb3IiLCJkYXJrZXIiLCJ0b1N0cmluZyIsInN0b3BPcGFjaXR5Iiwib2Zmc2V0IiwiYnJpZ2h0ZXIiLCJ0ZXh0UGl4ZWxzIiwidGV4dFNpemUiLCJsYWJlbFN0eWxlIiwiZm9udEZhbWlseSIsInR5cGUiLCJiYXNlIiwiZm9udFNpemUiLCJsZXZlbCIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7Ozs7Ozs7SSxBQUVaO3lDQUNGOzt5QkFBQSxBQUFZLE9BQU87NENBQUE7O29KQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLLGFBRlUsQUFFZixBQUFrQixXQUFXLEFBQzdCO2NBQUEsQUFBSyxXQUhVLEFBR2YsQUFBZ0IsV0FIRCxBQUdZO2VBQzlCOzs7OztpQ0FFUTt5QkFDNkIsS0FEN0IsQUFDa0M7Z0JBRGxDLEFBQ0csZUFESCxBQUNHO2dCQURILEFBQ1UsaUJBRFYsQUFDVTtnQkFEVixBQUNtQixlQURuQixBQUNtQixBQUN4Qjs7Z0JBQU0sU0FBTixBQUFlLEFBQ2Y7Z0JBQU0sY0FBYyxtQ0FBZSxLQUFmLEFBQW9CLFlBQVksS0FBcEQsQUFBb0IsQUFBcUMsQUFDekQ7Z0JBQU0sWUFBWSxZQUFZLFFBQTlCLEFBQWtCLEFBQW9CLEFBQ3RDO2dCQUFNO3FCQUNGLEFBQ1MsQUFDTDsyQkFBVyxvQkFBQSxBQUFNLFdBQU4sQUFBaUIsT0FBakIsQUFBd0IsS0FGdkMsQUFFZSxBQUE2QixBQUN4Qzs2QkFISixBQUdpQixBQUNiO3dCQUxjLEFBQ2xCLEFBSVk7QUFKWixBQUNJLGFBRmM7cUJBT2xCLEFBQ1MsQUFDTDsyQkFGSixBQUVlLEFBQ1g7NkJBSEosQUFHaUIsQUFDYjt3QkFYYyxBQU9sQixBQUlZO0FBSlosQUFDSTtxQkFLSixBQUNTLEFBQ0w7MkJBQVcsb0JBQUEsQUFBTSxXQUFOLEFBQWlCLFNBQWpCLEFBQTBCLEtBRnpDLEFBRWUsQUFBK0IsQUFDMUM7NkJBSEosQUFHaUIsQUFDYjt3QkFqQlIsQUFBc0IsQUFhbEIsQUFJWSxBQUloQjtBQVJJLEFBQ0k7O21DQVFKLEFBQUM7dUJBQUQsQUFDVyxBQUNQO3VCQUFPLFNBRlgsQUFFb0IsQUFDaEI7d0JBQVEsU0FIWixBQUdxQixBQUNqQjt1QkFKSixBQUlXLEFBQ1A7eUJBTEosQUFLYSxBQUNUOzBCQU5KLEFBTWMsQUFDVjs2QkFQSixBQU9pQixBQUNiOzZCQVJKLEFBUWlCLEFBQ2I7OEJBQWMsc0JBQUEsQUFBQyxPQUFVLEFBQ3JCO3dCQUFNLFFBQVEsTUFBZCxBQUFvQixBQUNwQjt3QkFBTSxhQUFjLE1BQUEsQUFBTSxXQUFOLEFBQWlCLFNBQXJDLEFBQThDLEFBQzlDO3dCQUFNO29DQUNVLGdCQUFBLEFBQU0sS0FESCxBQUNRLEFBQ3ZCO2tDQUFVLGFBRmQsQUFBbUIsQUFFUSxBQUUzQjtBQUptQixBQUNmO3dCQUdBLFFBQUosQUFBWSxBQUNaO3dCQUFJLFFBQUosQUFBWSxJQUFJLEFBQ1o7Z0NBQUEsQUFBUSxBQUNYO0FBRkQsK0JBRVcsU0FBQSxBQUFTLE1BQU0sUUFBbkIsQUFBMkIsSUFBSSxBQUNsQztnQ0FBQSxBQUFRLEFBQ1g7QUFGTSxxQkFBQSxNQUVBLEFBQ0g7Z0NBQUEsQUFBUSxBQUNYO0FBRUQ7OzJDQUNJLGNBQUEsV0FBTyxXQUFQLEFBQWlCLFNBQVEsT0FBekIsQUFBZ0M7c0NBQWhDO3dDQUFBLEFBQTZDO0FBQTdDO3FCQUFBLEVBREosQUFDSSxBQUVQO0FBNUJMLEFBNkJJOytCQTdCSixBQThCSTttQ0E5QkosQUE4QnVCLEFBQ25COytCQS9CSixBQWdDSTsrQkFoQ0osQUFnQ21CLEFBQ2Y7K0JBakNKLEFBaUNtQixBQUNmOzBCQWxDSixBQW1DSTsrQkFuQ0osQUFtQ21CLEFBQ2Y7OzBCQXBDSixBQW9DaUIsQUFDSCxBQUVWO0FBSGEsQUFDVDs7MEJBckNSLEFBdUNlLEFBQ0QsQUFFVjtBQUhXLEFBQ1A7OzBCQUdNLG9CQUFBLEFBQU0sUUFETCxBQUNELEFBQWMsQUFDcEI7Z0NBNUNSLEFBMENlLEFBRUssQUFFaEI7QUFKVyxBQUNQOzswQkFJTSxvQkFBQSxBQUFNLFFBREQsQUFDTCxBQUFjLEFBQ3BCO2dDQWhEUixBQThDbUIsQUFFQztBQUZELEFBQ1g7OzhCQS9DUjtnQ0FESixBQUNJLEFBb0RQO0FBcERPO0FBQ0ksYUFESjs7Ozs7QUFsQ2MsQSxBQXlGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGlxdWlkR2F1Z2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmlhc3llZC9Eb2N1bWVudHMvbWV0cm9wb2xpYS9JU0RQIn0=