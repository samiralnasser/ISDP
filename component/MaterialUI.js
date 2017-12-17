import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

try {
    injectTapEventPlugin()
}
catch(e) {
    //Don't do anything
}

export default ({ children }) => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        { children }
    </MuiThemeProvider>
)