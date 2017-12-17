'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mariasyed/Documents/metropolia/ISDP/component/MaterialUI.js';


try {
    (0, _reactTapEventPlugin2.default)();
} catch (e) {
    //Don't do anything
}

exports.default = function (_ref) {
    var children = _ref.children;
    return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default), __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9NYXRlcmlhbFVJLmpzIl0sIm5hbWVzIjpbImxpZ2h0QmFzZVRoZW1lIiwiTXVpVGhlbWVQcm92aWRlciIsImdldE11aVRoZW1lIiwiaW5qZWN0VGFwRXZlbnRQbHVnaW4iLCJlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFJLEFBQ0E7QUFDSDtBQUZELEVBR0EsT0FBQSxBQUFNLEdBQUcsQUFDTDtBQUNIO0FBRUQ7O2tCQUFlLGdCQUFBO1FBQUEsQUFBRyxnQkFBSCxBQUFHOzJCQUNkLEFBQUMsNENBQWlCLFVBQWxCLEFBQTRCLEFBQVk7c0JBQXhDO3dCQUFBLEFBQ007QUFETjtLQUFBLEVBRFcsQUFDWDtBQURKIiwiZmlsZSI6Ik1hdGVyaWFsVUkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmlhc3llZC9Eb2N1bWVudHMvbWV0cm9wb2xpYS9JU0RQIn0=