webpackHotUpdate(5,{

/***/ 596:
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

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _firebase = __webpack_require__(665);

var _firebase2 = _interopRequireDefault(_firebase);

var _firebaseConfig = __webpack_require__(747);

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _IndexStyles = __webpack_require__(749);

var _IndexStyles2 = _interopRequireDefault(_IndexStyles);

var _AppBar = __webpack_require__(597);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _MaterialUI = __webpack_require__(631);

var _MaterialUI2 = _interopRequireDefault(_MaterialUI);

var _LiquidGauge = __webpack_require__(750);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/mariasyed/Documents/metropolia/ISDP/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mariasyed/Documents/metropolia/ISDP/pages/index.js"); } } })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43NDI3YjgxZWJjNjhlZmE3ODkyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDRkM2FkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcbmltcG9ydCBmaXJlYmFzZUNvbmZpZyBmcm9tICcuLi9jb25maWcvZmlyZWJhc2VDb25maWcnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0luZGV4U3R5bGVzJ1xuaW1wb3J0IEFwcEJhciBmcm9tICdtYXRlcmlhbC11aS9BcHBCYXInO1xuaW1wb3J0IE1hdGVyaWFsVUkgZnJvbSAnLi4vY29tcG9uZW50L01hdGVyaWFsVUknXG5pbXBvcnQgTGlxdWlkR2F1Z2UgZnJvbSAnLi4vY29tcG9uZW50L0xpcXVpZEdhdWdlJ1xuXG5cbmlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xufVxuXG5jb25zdCBfZ2V0UGVyY2VudGFnZSA9IChtYXgsIG1pbiwgY3VycmVudCkgPT4ge1xuICAgIHJldHVybiAoKGN1cnJlbnQgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG59XG5cbmNvbnN0IEdhdWdlQ29udGFpbmVyID0gKHsgdGl0bGUsIHZhbHVlLCBtYXgsIG1pbiB9KSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cbiAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuZ2F1Z2VUaXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZ2F1Z2VWYWx1ZX0+e01hdGgucm91bmQodmFsdWUgKiAxMDAwMDApIC8gMTAwMDAwfTwvcD5cbiAgICAgICAgPExpcXVpZEdhdWdlXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmdhdWdlfVxuICAgICAgICAgICAgdmFsdWU9e19nZXRQZXJjZW50YWdlKG1heCwgbWluLCB2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4pXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICAgICAgICBodW1pZGl0eTogMCxcbiAgICAgICAgICAgIGR1c3RQYXJ0aWNsZXM6IDAsXG4gICAgICAgICAgICBwcmVzc3VyZTogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKVxuICAgICAgICBkYi5yZWYoJ3RlbXBlcmF0dXJlJykub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGVtcGVyYXR1cmU6IHNuYXBzaG90LnZhbCgpIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRiLnJlZignaHVtaWRpdHknKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBodW1pZGl0eTogc25hcHNob3QudmFsKCkgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZGIucmVmKCdkdXN0UGFydGljbGVzJykub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHVzdFBhcnRpY2xlczogc25hcHNob3QudmFsKCkgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZGIucmVmKCdwcmVzc3VyZScpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNzdXJlOiBzbmFwc2hvdC52YWwoKSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIGR1c3RQYXJ0aWNsZXMsIHByZXNzdXJlIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWF0ZXJpYWxVST5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QXBwQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkludGwgU2Vuc29ycyBEZXZlbG9wbWVudCBQcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbGFzc05hbWVSaWdodD1cIm11aWRvY3MtaWNvbi1uYXZpZ2F0aW9uLWV4cGFuZC1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17c3R5bGVzLmhlYWRpbmd9PlJlYWwgVGltZSBVcGRhdGVzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmdhdWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHYXVnZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGVtcGVyYXR1cmUgLyAmIzE3NjtDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXstNjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdhdWdlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIdW1pZGl0eSAvICVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtodW1pZGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ey02MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZ2F1Z2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdhdWdlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmVzc3VyZSAvIGtQYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByZXNzdXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17LTYwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHYXVnZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHVzdCBQYXJ0aWNsZXMgLyAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZHVzdFBhcnRpY2xlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ey02MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9NYXRlcmlhbFVJPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQUNBOztBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBVUE7QUFWQTtBQUNBOzs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==