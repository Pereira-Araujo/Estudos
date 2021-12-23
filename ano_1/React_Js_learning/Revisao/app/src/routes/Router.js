import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/LoginPage/index";
import SignUp from "../pages/SignUpPage/index";
import RecipesList from "../pages/RecipesListPage/index";
import AddRecipes from "../pages/AddRecipesPage/index";
import RecipesDetails from "../pages/RecipesDetailsPage/index";
import Error from "../pages/ErrorPage/index";

import Header from '../components/Header/index'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path='/login'>
          <Login  />
        </Route>
        <Route  exact path='/cadastro' >
          <SignUp/>
        </Route>
        <Route exact path="/" >
          <RecipesList />
        </Route>
        <Route exact path='/adicionar'>
          <AddRecipes  />
        </Route>
        <Route exact path='/detalhe/:id'>
          <RecipesDetails />
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes