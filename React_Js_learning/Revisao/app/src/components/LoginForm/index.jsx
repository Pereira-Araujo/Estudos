import { Formik, Form, Field } from "formik";

const LoginForm = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Login</label>
              <Field id="login" name="login" type="text" />
            </div>
            <div>
              <label>Senha</label>
              <Field id="password" name="password" type="text" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
