webpackHotUpdate(5,{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(491);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactTapEventPlugin = __webpack_require__(520);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MaterialUI = __webpack_require__(525);

var _MaterialUI2 = _interopRequireDefault(_MaterialUI);

var _firebase = __webpack_require__(559);

var _firebase2 = _interopRequireDefault(_firebase);

var _firebaseConfig = __webpack_require__(642);

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _gauge = __webpack_require__(641);

var _gauge2 = _interopRequireDefault(_gauge);

var _IndexStyles = __webpack_require__(643);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/mariasyed/Documents/ISDP/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mariasyed/Documents/ISDP/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lZGVjNGJkMWM4MTQ2ZmEwZjJiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDQzYjU0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcbmltcG9ydCBNYXRlcmlhbFVJIGZyb20gJy4uL2NvbXBvbmVudC9NYXRlcmlhbFVJJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gJy4uL2NvbmZpZy9maXJlYmFzZUNvbmZpZydcbmltcG9ydCBHYXVnZSBmcm9tICcuLi9jb21wb25lbnQvZ2F1Z2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSW5kZXhTdHlsZXMnXG5cbnRyeSB7XG4gICAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxufVxuY2F0Y2goZSkge1xuICAgIC8vRG9uJ3QgZG8gYW55dGhpbmdcbn1cblxuaWYgKGZpcmViYXNlLmFwcHMubGVuZ3RoID09PSAwKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG59XG5cbmNvbnN0IEN1c3RvbUd1YWdlID0gKHByb3BzKSA9PiAoXG4gICAgPEdhdWdlXG4gICAgICAgIHN0eWxlPXtzdHlsZXMuZ2F1Z2V9XG4gICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgbWF4aW11bVZhbHVlPXsxMzB9XG4gICAgICAgIGRpYWxXaWR0aD17OX1cbiAgICAgICAgcHJvZ3Jlc3NSb3RhdGlvbj17LTQ1fVxuICAgICAgICBwcm9ncmVzc1dpZHRoPXsxOH1cbiAgICAgICAgcHJvZ3Jlc3NGb250U2l6ZT17NDB9XG4gICAgICAgIHByb2dyZXNzQ29sb3I9XCJyZ2JhKDk1LCAxMDMsIDE0MiwgMSlcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbilcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICAgICAgICAgIGh1bWlkaXR5OiAwLFxuICAgICAgICAgICAgZHVzdFBhcnRpY2xlczogMCxcbiAgICAgICAgICAgIHByZXNzdXJlOiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKVxuICAgICAgICBkYi5yZWYoJ3RlbXBlcmF0dXJlJykub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGVtcGVyYXR1cmU6IHNuYXBzaG90LnZhbCgpIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRiLnJlZignaHVtaWRpdHknKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBodW1pZGl0eTogc25hcHNob3QudmFsKCkgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZGIucmVmKCdkdXN0UGFydGljbGVzJykub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHVzdFBhcnRpY2xlczogc25hcHNob3QudmFsKCkgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZGIucmVmKCdwcmVzc3VyZScpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNzdXJlOiBzbmFwc2hvdC52YWwoKSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYXRlcmlhbFVJPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSW50bCBTZW5zb3JzIERldmVsb3BtZW50IFByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzTmFtZVJpZ2h0PVwibXVpZG9jcy1pY29uLW5hdmlnYXRpb24tZXhwYW5kLW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaGVhZGluZ30+Tk9XPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmdhdWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRlbXBlcmF0dXJlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tR3VhZ2UgY3VycmVudFZhbHVlPXt0aGlzLnN0YXRlLnRlbXBlcmF0dXJlfSBwcm9ncmVzc0ZvbnRVbml0cz1cIiYjMTc2O0NcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkh1bWlkaXR5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tR3VhZ2UgY3VycmVudFZhbHVlPXt0aGlzLnN0YXRlLmh1bWlkaXR5fSBwcm9ncmVzc0ZvbnRVbml0cz1cIiVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5nYXVnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tR3VhZ2UgY3VycmVudFZhbHVlPXt0aGlzLnN0YXRlLmR1c3RQYXJ0aWNsZXN9IHByb2dyZXNzRm9udFVuaXRzPVwiJiMxNzY7Q1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tR3VhZ2UgY3VycmVudFZhbHVlPXt0aGlzLnN0YXRlLnByZXNzdXJlfSBwcm9ncmVzc0ZvbnRVbml0cz1cIm1tL0hnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01hdGVyaWFsVUk+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBRkE7QUFLQTs7O0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFQQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7O0FBY0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFLQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9