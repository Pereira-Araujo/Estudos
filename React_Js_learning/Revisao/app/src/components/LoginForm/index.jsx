import { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { signIn } from "../../services/validations";
import show from "../../services/modal";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/logo.png";
import { Container, TextLogin, BoxLogin } from "./style.js";

const LoginForm = (props) => {
  const enter = (values) => {
    console.log(values);
    // return show();
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
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
