'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

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

var _reactRadialGauge = require('react-radial-gauge');

var _reactRadialGauge2 = _interopRequireDefault(_reactRadialGauge);

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

if (!_firebase2.default.apps.length) {
    _firebase2.default.initializeApp({});
}
var AppBarExampleIcon = function AppBarExampleIcon() {
    return _react2.default.createElement(_MaterialUI2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement(_style2.default, {
        styleId: '1950190566',
        css: 'h1.jsx-1950190566{font-family:\'Avenir\';font-size:100px;text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHc0MscUJBQ0wsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJpYXN5ZWQvRG9jdW1lbnRzL0lTRFAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyIGZyb20gJ21hdGVyaWFsLXVpL0FwcEJhcic7XG5pbXBvcnQgaW5qZWN0VGFwRXZlbnRQbHVnaW4gZnJvbSAncmVhY3QtdGFwLWV2ZW50LXBsdWdpbic7XG5pbXBvcnQgTWF0ZXJpYWxVSSBmcm9tICcuLi9jb21wb25lbnQvTWF0ZXJpYWxVSSdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcbmltcG9ydCBHYXVnZSBmcm9tICdyZWFjdC1yYWRpYWwtZ2F1Z2UnO1xuXG5cbnRyeSB7XG4gICAgaW5qZWN0VGFwRXZlbnRQbHVnaW4oKVxufVxuY2F0Y2goZSkge1xuICAgIC8vRG9uJ3QgZG8gYW55dGhpbmdcbn1cblxudmFyIGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QkN2eDFXRlBZT3V0TnZqOEhmbXVfalR1eG9XRVF2UEhjXCIsXG4gICAgYXV0aERvbWFpbjogXCJpc2RwLTk1NGIzLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vaXNkcC05NTRiMy5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJpc2RwLTk1NGIzXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJpc2RwLTk1NGIzLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTk1MjYzMTQ3ODEwXCJcbn07XG5cbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHt9KTtcbn1cbmNvbnN0IEFwcEJhckV4YW1wbGVJY29uID0gKCkgPT4gKFxuICAgIDxNYXRlcmlhbFVJPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0F2ZW5pcic7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxBcHBCYXJcbiAgICAgICAgICAgIHRpdGxlPVwiSW50bCBTZW5zb3JzIERldmVsb3BtZW50IFByb2plY3RcIlxuICAgICAgICAgICAgaWNvbkNsYXNzTmFtZVJpZ2h0PVwibXVpZG9jcy1pY29uLW5hdmlnYXRpb24tZXhwYW5kLW1vcmVcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8aDE+Tk9XPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEdhdWdlIGN1cnJlbnRWYWx1ZT17Nzh9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj48R2F1Z2UgY3VycmVudFZhbHVlPXs1OH0vPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48R2F1Z2UgY3VycmVudFZhbHVlPXsyM30vPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L01hdGVyaWFsVUk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBCYXJFeGFtcGxlSWNvblxuXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
    }), _react2.default.createElement(_AppBar2.default, {
        title: 'Intl Sensors Development Project',
        iconClassNameRight: 'muidocs-icon-navigation-expand-more',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-1950190566',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-1950190566',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, 'NOW')), _react2.default.createElement('div', {
        className: 'jsx-1950190566',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1950190566',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement(_reactRadialGauge2.default, { currentValue: 78, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1950190566',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement(_reactRadialGauge2.default, { currentValue: 58, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1950190566',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement(_reactRadialGauge2.default, { currentValue: 23, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }))));
};

exports.default = AppBarExampleIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcEJhciIsImluamVjdFRhcEV2ZW50UGx1Z2luIiwiTWF0ZXJpYWxVSSIsImZpcmViYXNlIiwiR2F1Z2UiLCJlIiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJBcHBCYXJFeGFtcGxlSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUdQLElBQUksQUFDQTtBQUNIO0FBRkQsRUFHQSxPQUFBLEFBQU0sR0FBRyxBQUNMO0FBQ0g7OztBQUVELElBQUk7WUFBUyxBQUNELEFBQ1I7Z0JBRlMsQUFFRyxBQUNaO2lCQUhTLEFBR0ksQUFDYjtlQUpTLEFBSUUsQUFDWDttQkFMUyxBQUtNLEFBQ2Y7dUJBTkosQUFBYSxBQU1VO0FBTlYsQUFDVDs7QUFRSixJQUFJLENBQUMsbUJBQUEsQUFBUyxLQUFkLEFBQW1CLFFBQVEsQUFDdkI7dUJBQUEsQUFBUyxjQUFULEFBQXVCLEFBQzFCOztBQUNELElBQU0sb0JBQW9CLFNBQXBCLEFBQW9CLG9CQUFBOzJCQUN0QixBQUFDOztzQkFBRDt3QkFBQTtBQUFBO0FBQUEsS0FBQTtpQkFBQTthQUFBLEFBU0k7QUFUSix3QkFTSSxBQUFDO2VBQUQsQUFDVSxBQUNOOzRCQUZKLEFBRXVCOztzQkFGdkI7d0JBVEosQUFTSSxBQUlBO0FBSkE7QUFDSSx3QkFHSixjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUVJO0FBRko7QUFBQSx1QkFFSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FmUixBQWFJLEFBRUksQUFHSix5QkFBQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLDRDQUFNLGNBQVAsQUFBcUI7c0JBQXJCO3dCQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7eUJBRUosY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsdUJBQUssQUFBQyw0Q0FBTSxjQUFQLEFBQXFCO3NCQUFyQjt3QkFKVCxBQUlJLEFBQUssQUFDTDtBQURLO3lCQUNMLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLHVCQUFLLEFBQUMsNENBQU0sY0FBUCxBQUFxQjtzQkFBckI7d0JBeEJTLEFBQ3RCLEFBa0JJLEFBS0ksQUFBSztBQUFBOztBQXhCakIsQUE2QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmlhc3llZC9Eb2N1bWVudHMvSVNEUCJ9