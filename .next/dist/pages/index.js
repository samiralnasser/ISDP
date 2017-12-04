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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MaterialUI = require('../component/MaterialUI');

var _MaterialUI2 = _interopRequireDefault(_MaterialUI);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _gauge = require('../component/gauge');

var _gauge2 = _interopRequireDefault(_gauge);

var _IndexStyles = require('../styles/IndexStyles');

var _IndexStyles2 = _interopRequireDefault(_IndexStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mariasyed/Documents/ISDP/pages/index.js?entry';


try {
    (0, _reactTapEventPlugin2.default)();
} catch (e) {
    //Don't do anything
}

if (_firebase2.default.apps.length === 0) {
    _firebase2.default.initializeApp(_firebaseConfig2.default);
}

var CustomGuage = function CustomGuage(props) {
    return _react2.default.createElement(_gauge2.default, (0, _extends3.default)({
        style: _IndexStyles2.default.gauge,
        size: 300,
        maximumValue: 130,
        dialWidth: 9,
        progressRotation: -45,
        progressWidth: 18,
        progressFontSize: 40,
        progressColor: 'rgba(95, 103, 142, 1)'
    }, props, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
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
        key: 'componentWillMount',
        value: function componentWillMount() {
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
            return _react2.default.createElement(_MaterialUI2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_AppBar2.default, {
                title: 'Intl Sensors Development Project',
                iconClassNameRight: 'muidocs-icon-navigation-expand-more',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('h1', { style: _IndexStyles2.default.heading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'NOW')), _react2.default.createElement('div', { style: _IndexStyles2.default.gaugeContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('div', { style: { display: 'inline-block' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'Temperature'), _react2.default.createElement(CustomGuage, { currentValue: this.state.temperature, progressFontUnits: '\xB0C', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement('div', { style: { display: 'inline-block' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Humidity'), _react2.default.createElement(CustomGuage, { currentValue: this.state.humidity, progressFontUnits: '%', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }))), _react2.default.createElement('div', { style: _IndexStyles2.default.gaugeContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(CustomGuage, { currentValue: this.state.dustParticles, progressFontUnits: '\xB0C', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }), _react2.default.createElement(CustomGuage, { currentValue: this.state.pressure, progressFontUnits: 'mm/Hg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }))));
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkFwcEJhciIsImluamVjdFRhcEV2ZW50UGx1Z2luIiwiTWF0ZXJpYWxVSSIsImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJHYXVnZSIsInN0eWxlcyIsImUiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsIkN1c3RvbUd1YWdlIiwicHJvcHMiLCJnYXVnZSIsIkhvbWUiLCJzdGF0ZSIsInRlbXBlcmF0dXJlIiwiaHVtaWRpdHkiLCJkdXN0UGFydGljbGVzIiwicHJlc3N1cmUiLCJkYiIsImRhdGFiYXNlIiwicmVmIiwib24iLCJzbmFwc2hvdCIsInNldFN0YXRlIiwidmFsIiwiaGVhZGluZyIsImdhdWdlQ29udGFpbmVyIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBSSxBQUNBO0FBQ0g7QUFGRCxFQUdBLE9BQUEsQUFBTSxHQUFHLEFBQ0w7QUFDSDs7O0FBRUQsSUFBSSxtQkFBQSxBQUFTLEtBQVQsQUFBYyxXQUFsQixBQUE2QixHQUFHLEFBQzVCO3VCQUFBLEFBQVMsQUFBYyxBQUMxQjs7O0FBRUQsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDaEIsQUFBQztlQUNVLHNCQURYLEFBQ2tCLEFBQ2Q7Y0FGSixBQUVVLEFBQ047c0JBSEosQUFHa0IsQUFDZDttQkFKSixBQUllLEFBQ1g7MEJBQWtCLENBTHRCLEFBS3VCLEFBQ25CO3VCQU5KLEFBTW1CLEFBQ2Y7MEJBUEosQUFPc0IsQUFDbEI7dUJBUkosQUFRa0I7QUFQZCxPQURKLEFBU1E7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