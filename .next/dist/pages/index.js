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

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _IndexStyles = require('../styles/IndexStyles');

var _IndexStyles2 = _interopRequireDefault(_IndexStyles);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _MaterialUI = require('../component/MaterialUI');

var _MaterialUI2 = _interopRequireDefault(_MaterialUI);

var _LiquidGauge = require('../component/LiquidGauge');

var _LiquidGauge2 = _interopRequireDefault(_LiquidGauge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mariasyed/Documents/metropolia/ISDP/pages/index.js?entry';


if (_firebase2.default.apps.length === 0) {
    _firebase2.default.initializeApp(_firebaseConfig2.default);
}

var _getPercentage = function _getPercentage(max, min, current) {
    return (current - min) / (max - min) * 100;
};

var GaugeContainer = function GaugeContainer(_ref) {
    var title = _ref.title,
        value = _ref.value,
        max = _ref.max,
        min = _ref.min;
    return _react2.default.createElement('div', { style: { display: 'inline-block' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('h3', { style: _IndexStyles2.default.gaugeTitle, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, title), _react2.default.createElement('p', { style: _IndexStyles2.default.gaugeValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, Math.round(value * 100000) / 100000), _react2.default.createElement(_LiquidGauge2.default, {
        style: _IndexStyles2.default.gauge,
        value: _getPercentage(max, min, value),
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }));
};

var Home = function (_Component) {
    (0, _inherits3.default)(Home, _Component);

    function Home(props) {
        (0, _classCallCheck3.default)(this, Home);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

        _this.state = {
            temperature: 0,
            humidity: 0,
            dustParticles: 0,
            pressure: 0
        };
        return _this;
    }

    (0, _createClass3.default)(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var db = _firebase2.default.database();
            db.ref('temperature').on('value', function (snapshot) {
                _this2.setState({ temperature: snapshot.val() });
            });
            db.ref('humidity').on('value', function (snapshot) {
                _this2.setState({ humidity: snapshot.val() });
            });
            db.ref('dustParticles').on('value', function (snapshot) {
                _this2.setState({ dustParticles: snapshot.val() });
            });
            db.ref('pressure').on('value', function (snapshot) {
                _this2.setState({ pressure: snapshot.val() });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                temperature = _state.temperature,
                humidity = _state.humidity,
                dustParticles = _state.dustParticles,
                pressure = _state.pressure;

            return _react2.default.createElement(_MaterialUI2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_AppBar2.default, {
                title: 'Intl Sensors Development Project',
                iconClassNameRight: 'muidocs-icon-navigation-expand-more',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('h1', { style: _IndexStyles2.default.heading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Real Time Updates')), _react2.default.createElement('div', { style: _IndexStyles2.default.gaugeContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(GaugeContainer, {
                title: 'Temperature / \xB0C',
                value: temperature,
                max: 120,
                min: -60,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement(GaugeContainer, {
                title: 'Humidity / %',
                value: humidity,
                max: 120,
                min: -60,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement('div', { style: _IndexStyles2.default.gaugeContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(GaugeContainer, {
                title: 'Pressure / kPa',
                value: pressure,
                max: 120,
                min: -60,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }), _react2.default.createElement(GaugeContainer, {
                title: 'Dust Particles / %',
                value: dustParticles,
                max: 120,
                min: -60,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }))));
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJzdHlsZXMiLCJBcHBCYXIiLCJNYXRlcmlhbFVJIiwiTGlxdWlkR2F1Z2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsIl9nZXRQZXJjZW50YWdlIiwibWF4IiwibWluIiwiY3VycmVudCIsIkdhdWdlQ29udGFpbmVyIiwidGl0bGUiLCJ2YWx1ZSIsImRpc3BsYXkiLCJnYXVnZVRpdGxlIiwiZ2F1Z2VWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsImdhdWdlIiwiSG9tZSIsInByb3BzIiwic3RhdGUiLCJ0ZW1wZXJhdHVyZSIsImh1bWlkaXR5IiwiZHVzdFBhcnRpY2xlcyIsInByZXNzdXJlIiwiZGIiLCJkYXRhYmFzZSIsInJlZiIsIm9uIiwic25hcHNob3QiLCJzZXRTdGF0ZSIsInZhbCIsImhlYWRpbmciLCJnYXVnZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFBb0I7Ozs7QUFFM0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBaUI7Ozs7Ozs7OztBQUd4QixJQUFJLG1CQUFBLEFBQVMsS0FBVCxBQUFjLFdBQWxCLEFBQTZCLEdBQUcsQUFDNUI7dUJBQUEsQUFBUyxBQUFjLEFBQzFCOzs7QUFFRCxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU4sQUFBVyxTQUFZLEFBQzFDO1dBQVEsQ0FBQyxVQUFELEFBQVcsUUFBUSxNQUFwQixBQUFDLEFBQXlCLE9BQWpDLEFBQXlDLEFBQzVDO0FBRkQ7O0FBSUEsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIscUJBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsYUFBVixBQUFVO1FBQVYsQUFBaUIsV0FBakIsQUFBaUI7UUFBakIsQUFBc0IsV0FBdEIsQUFBc0I7MkJBQ3pDLGNBQUEsU0FBSyxPQUFPLEVBQUUsU0FBZCxBQUFZLEFBQVc7c0JBQXZCO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLGNBQUEsUUFBSSxPQUFPLHNCQUFYLEFBQWtCO3NCQUFsQjt3QkFBQSxBQUErQjtBQUEvQjtPQURKLEFBQ0ksQUFDQSx3QkFBQSxjQUFBLE9BQUcsT0FBTyxzQkFBVixBQUFpQjtzQkFBakI7d0JBQUEsQUFBOEI7QUFBOUI7WUFBOEIsQUFBSyxNQUFNLFFBQVgsQUFBbUIsVUFGckQsQUFFSSxBQUEyRCxBQUMzRCx5QkFBQSxBQUFDO2VBQ1Usc0JBRFgsQUFDa0IsQUFDZDtlQUFPLGVBQUEsQUFBZSxLQUFmLEFBQW9CLEtBRi9CLEFBRVcsQUFBeUI7O3NCQUZwQzt3QkFKZSxBQUNuQixBQUdJO0FBQUE7QUFDSTtBQUxaOztJLEFBV007a0NBQ0Y7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7eUJBQVEsQUFDSSxBQUNiO3NCQUZTLEFBRUMsQUFDVjsyQkFIUyxBQUdNLEFBQ2Y7c0JBTlcsQUFFZixBQUFhLEFBSUM7QUFKRCxBQUNUO2VBS1A7Ozs7OzRDQUVtQjt5QkFDaEI7O2dCQUFNLEtBQUssbUJBQVgsQUFBVyxBQUFTLEFBQ3BCO2VBQUEsQUFBRyxJQUFILEFBQU8sZUFBUCxBQUFzQixHQUF0QixBQUF5QixTQUFTLFVBQUEsQUFBQyxVQUFhLEFBQzVDO3VCQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsU0FBN0IsQUFBYyxBQUFlLEFBQVMsQUFDekM7QUFGRCxBQUdBO2VBQUEsQUFBRyxJQUFILEFBQU8sWUFBUCxBQUFtQixHQUFuQixBQUFzQixTQUFTLFVBQUEsQUFBQyxVQUFhLEFBQ3pDO3VCQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsU0FBMUIsQUFBYyxBQUFZLEFBQVMsQUFDdEM7QUFGRCxBQUdBO2VBQUEsQUFBRyxJQUFILEFBQU8saUJBQVAsQUFBd0IsR0FBeEIsQUFBMkIsU0FBUyxVQUFBLEFBQUMsVUFBYSxBQUM5Qzt1QkFBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLFNBQS9CLEFBQWMsQUFBaUIsQUFBUyxBQUMzQztBQUZELEFBR0E7ZUFBQSxBQUFHLElBQUgsQUFBTyxZQUFQLEFBQW1CLEdBQW5CLEFBQXNCLFNBQVMsVUFBQSxBQUFDLFVBQWEsQUFDekM7dUJBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxTQUExQixBQUFjLEFBQVksQUFBUyxBQUN0QztBQUZELEFBR0g7Ozs7aUNBRVE7eUJBQ3NELEtBRHRELEFBQzJEO2dCQUQzRCxBQUNHLHFCQURILEFBQ0c7Z0JBREgsQUFDZ0Isa0JBRGhCLEFBQ2dCO2dCQURoQixBQUMwQix1QkFEMUIsQUFDMEI7Z0JBRDFCLEFBQ3lDLGtCQUR6QyxBQUN5QyxBQUM5Qzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3VCQUFELEFBQ1UsQUFDTjtvQ0FGSixBQUV1Qjs7OEJBRnZCO2dDQURKLEFBQ0ksQUFJQTtBQUpBO0FBQ0ksZ0NBR0osY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxRQUFJLE9BQU8sc0JBQVgsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFOUixBQUtJLEFBQ0ksQUFHSix1Q0FBQSxjQUFBLFNBQUssT0FBTyxzQkFBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7dUJBQUQsQUFDVSxBQUNOO3VCQUZKLEFBRVcsQUFDUDtxQkFISixBQUdTLEFBQ0w7cUJBQUssQ0FKVCxBQUlVOzs4QkFKVjtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNJLDhDQUtKLEFBQUM7dUJBQUQsQUFDVSxBQUNOO3VCQUZKLEFBRVcsQUFDUDtxQkFISixBQUdTLEFBQ0w7cUJBQUssQ0FKVCxBQUlVOzs4QkFKVjtnQ0FoQlIsQUFTSSxBQU9JLEFBT0o7QUFQSTtBQUNJLGlDQU1SLGNBQUEsU0FBSyxPQUFPLHNCQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7NkNBQ0ksQUFBQzt1QkFBRCxBQUNVLEFBQ047dUJBRkosQUFFVyxBQUNQO3FCQUhKLEFBR1MsQUFDTDtxQkFBSyxDQUpULEFBSVU7OzhCQUpWO2dDQURKLEFBQ0ksQUFNQTtBQU5BO0FBQ0ksOENBS0osQUFBQzt1QkFBRCxBQUNVLEFBQ047dUJBRkosQUFFVyxBQUNQO3FCQUhKLEFBR1MsQUFDTDtxQkFBSyxDQUpULEFBSVU7OzhCQUpWO2dDQWhDaEIsQUFDSSxBQUNJLEFBdUJJLEFBT0ksQUFVbkI7QUFWbUI7QUFDSTs7Ozs7QUE5RFQsQSxBQTBFbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmlhc3llZC9Eb2N1bWVudHMvbWV0cm9wb2xpYS9JU0RQIn0=