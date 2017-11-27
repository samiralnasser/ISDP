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

var _gauge = require('../component/gauge');

var _gauge2 = _interopRequireDefault(_gauge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mariasyed/Documents/ISDP/pages/index.js?entry';


try {
    (0, _reactTapEventPlugin2.default)();
} catch (e) {
    //Don't do anything
}

var config = {
    apiKey: "AIzaSyBCvx1WFPYOutNvj8Hfmu_jTuxoWEQvPHc",
    authDomain: "isdp-954b3.firebaseapp.com",
    databaseURL: "https://isdp-954b3.firebaseio.com",
    projectId: "isdp-954b3",
    storageBucket: "isdp-954b3.appspot.com",
    messagingSenderId: "195263147810"
};

if (_firebase2.default.apps.length === 0) {
    _firebase2.default.initializeApp(config);
}

var CustomGuage = function CustomGuage(props) {
    return _react2.default.createElement(_gauge2.default, (0, _extends3.default)({
        size: 300,
        maximumValue: 130,
        dialWidth: 9,
        progressRotation: -45,
        progressWidth: 18,
        progressFontSize: 60,
        progressFontUnits: '\xB0C',
        progressColor: 'rgba(95, 103, 142, 1)'
    }, props, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
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
            dustParticles: 0
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
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_MaterialUI2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_AppBar2.default, {
                title: 'Intl Sensors Development Project',
                iconClassNameRight: 'muidocs-icon-navigation-expand-more',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'NOW')), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(CustomGuage, { currentValue: this.state.temperature, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            })), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(CustomGuage, { currentValue: this.state.humidity, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            })), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(CustomGuage, { currentValue: this.state.dustParticles, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            })))));
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkFwcEJhciIsImluamVjdFRhcEV2ZW50UGx1Z2luIiwiTWF0ZXJpYWxVSSIsImZpcmViYXNlIiwiR2F1Z2UiLCJlIiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJDdXN0b21HdWFnZSIsInByb3BzIiwiSG9tZSIsInN0YXRlIiwidGVtcGVyYXR1cmUiLCJodW1pZGl0eSIsImR1c3RQYXJ0aWNsZXMiLCJkYiIsImRhdGFiYXNlIiwicmVmIiwib24iLCJzbmFwc2hvdCIsInNldFN0YXRlIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7OztBQUVsQixJQUFJLEFBQ0E7QUFDSDtBQUZELEVBR0EsT0FBQSxBQUFNLEdBQUcsQUFDTDtBQUNIOzs7QUFFRCxJQUFJO1lBQVMsQUFDRCxBQUNSO2dCQUZTLEFBRUcsQUFDWjtpQkFIUyxBQUdJLEFBQ2I7ZUFKUyxBQUlFLEFBQ1g7bUJBTFMsQUFLTSxBQUNmO3VCQU5KLEFBQWEsQUFNVTtBQU5WLEFBQ1Q7O0FBUUosSUFBSSxtQkFBQSxBQUFTLEtBQVQsQUFBYyxXQUFsQixBQUE2QixHQUFHLEFBQzVCO3VCQUFBLEFBQVMsY0FBVCxBQUF1QixBQUMxQjs7O0FBRUQsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDaEIsQUFBQztjQUFELEFBQ1UsQUFDTjtzQkFGSixBQUVrQixBQUNkO21CQUhKLEFBR2UsQUFDWDswQkFBa0IsQ0FKdEIsQUFJdUIsQUFDbkI7dUJBTEosQUFLbUIsQUFDZjswQkFOSixBQU1zQixBQUNsQjsyQkFQSixBQU9zQixBQUNsQjt1QkFSSixBQVFrQjtBQVBkLE9BREosQUFTUTs7c0JBVFI7d0JBRGdCLEFBQ2hCO0FBQUE7QUFBQSxNQUFBO0FBREo7O0lBY00sQTtrQ0FDRjs7a0JBQUEsQUFBWSxPQUFPOzRDQUFBOztzSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzt5QkFBUSxBQUNJLEFBQ2I7c0JBRlMsQUFFQyxBQUNWOzJCQUxXLEFBRWYsQUFBYSxBQUdNO0FBSE4sQUFDVDtlQUlQOzs7Ozs2Q0FFb0I7eUJBQ2pCOztnQkFBTSxLQUFLLG1CQUFYLEFBQVcsQUFBUyxBQUNwQjtlQUFBLEFBQUcsSUFBSCxBQUFPLGVBQVAsQUFBc0IsR0FBdEIsQUFBeUIsU0FBUyxVQUFBLEFBQUMsVUFBYSxBQUM1Qzt1QkFBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLFNBQTdCLEFBQWMsQUFBZSxBQUFTLEFBQ3pDO0FBRkQsQUFHQTtlQUFBLEFBQUcsSUFBSCxBQUFPLFlBQVAsQUFBbUIsR0FBbkIsQUFBc0IsU0FBUyxVQUFBLEFBQUMsVUFBYSxBQUN6Qzt1QkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLFNBQTFCLEFBQWMsQUFBWSxBQUFTLEFBQ3RDO0FBRkQsQUFHQTtlQUFBLEFBQUcsSUFBSCxBQUFPLGlCQUFQLEFBQXdCLEdBQXhCLEFBQTJCLFNBQVMsVUFBQSxBQUFDLFVBQWEsQUFDOUM7dUJBQUEsQUFBSyxTQUFTLEVBQUUsZUFBZSxTQUEvQixBQUFjLEFBQWlCLEFBQVMsQUFDM0M7QUFGRCxBQUdIOzs7O2lDQUVRLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3VCQUFELEFBQ1UsQUFDTjtvQ0FGSixBQUV1Qjs7OEJBRnZCO2dDQURKLEFBQ0ksQUFJQTtBQUpBO0FBQ0ksZ0NBR0osY0FBQTs7OEJBQUE7Z0NBQUEsQUFFSTtBQUZKO0FBQUEsK0JBRUksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUFIsQUFLSSxBQUVJLEFBR0oseUJBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsNkNBQ0ksQUFBQyxlQUFZLGNBQWMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDOzhCQUF0QztnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLDZDQUNJLEFBQUMsZUFBWSxjQUFjLEtBQUEsQUFBSyxNQUFoQyxBQUFzQzs4QkFBdEM7Z0NBTFIsQUFJSSxBQUNJLEFBRUo7QUFGSTtpQ0FFSixjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSw2Q0FDSSxBQUFDLGVBQVksY0FBYyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7OEJBQXRDO2dDQXBCcEIsQUFDSSxBQUNJLEFBVUksQUFPSSxBQUNJLEFBTXZCO0FBTnVCOzs7Ozs7QUE1Q1QsQSxBQXFEbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmlhc3llZC9Eb2N1bWVudHMvSVNEUCJ9