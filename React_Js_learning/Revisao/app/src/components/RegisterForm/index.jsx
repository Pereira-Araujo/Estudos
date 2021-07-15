import { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { register } from "../../services/validations";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/logo.png";
import {gotToLogin} from  "../../routes/coordinator"
import { useHistory } from "react-router";
import { Container, TextLogin, BoxLogin, ButtonLogin } from "./style.js";

const RegisterForm = (props) => {
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
        validationSchema={register}
        initialValues={{
          name: "",
          email:"",
          password: "",
        }}
        onSubmit={(initialValues) => enter(initialValues)}
      >
        {() => (
          <Form>
              <BoxLogin>
              <TextLogin
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
              />
              <ErrorMessage name="name" />
            </BoxLogin>
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
            <Button color="primary" variant="contained" fullWidth type="submit">
              Cadastre
            </Button>
          </Form>
        )}
      </Formik>
      <ButtonLogin onClick={()=>gotToLogin(history)} variant="outlined" color="primary" fullWidth type="submit">
             Login
      </ButtonLogin>
    </Container>
  );
};

export default RegisterForm;
