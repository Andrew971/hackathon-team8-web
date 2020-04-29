import { createMuiTheme,responsiveFontSizes  } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: green,
  },
  // status: {
  //   danger: 'orange',
  // }
});;
theme = responsiveFontSizes(theme);
export default theme