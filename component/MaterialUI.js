import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default ({ children }) => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        { children }
    </MuiThemeProvider>
)