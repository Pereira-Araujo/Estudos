
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import {StyleToolbar} from "./style";

import {useHistory} from 'react-router-dom'
import {gotToLogin,gotToListRecipes} from '../../routes/coordinator'

const Header = () => {
  const history = useHistory()
  
  return (
    <AppBar position="static">
      <StyleToolbar>
        <Button onClick={()=> gotToListRecipes(history)} color="inherit">Cookenu</Button>
        <Button onClick={()=> gotToLogin(history)}  color="inherit">Login</Button>
      </StyleToolbar>
    </AppBar>
  );
};
export default Header;
