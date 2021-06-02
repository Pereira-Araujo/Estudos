import Routes from "./routes/Router";
import theme from './constants/theme'
import {ThemeProvider} from '@material-ui/core/styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
