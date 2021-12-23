import { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { signIn } from "../../services/validations";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/logo.png";
import { gotToListRecipes, gotToRegister } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { Container, TextLogin, BoxLogin, ButtonRegister } from "./style.js";

const LoginForm = (props) => {
  const history = useHistory()
  const enter = (values) => {
    console.log(values);
  };

  useEffect(() => {
    enter();
  });

  return (
    <Container>
      <img src={Logo} alt={"Logo Cookenu"} />
      <Formik
        validationSchema={signIn}
        initialValues={{
          login: "",
          password: "",
        }}
        onSubmit={(initialValues) => enter(initialValues)}
      >
        {() => (
          <Form>
            <BoxLogin>
              <TextLogin
                id="login"
                name="login"
                type="text"
                placeholder="login"
              />
              <ErrorMessage name="login" />
            </BoxLogin>
            <BoxLogin>
              <TextLogin
                id="password"
                name="password"
                type="password"
                placeholder="senha"
              />
              <ErrorMessage name="password" />
            </BoxLogin>
            <Button onClick={() => gotToListRecipes(history)} color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <ButtonRegister onClick={() => gotToRegister(history)} color="primary" variant="outlined" fullWidth type="submit">
        Cadastre-se
      </ButtonRegister>
    </Container>
  );
};

export default LoginForm;
