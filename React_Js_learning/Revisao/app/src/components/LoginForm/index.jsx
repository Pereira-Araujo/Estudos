import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signIn } from "../../utils/validations";
import { primaryColor } from "../../constants/colors";
import swal from "sweetalert";

const LoginForm = (props) => {
  const [inform, setInform] = useState("");

  const enter = (values) => {
    setInform(values);

    if (inform !== undefined && inform !== "") return show();
  };

  const show = () => {
    swal({
      title: "Perfeito",
      text: "Aproveite nosso site",
      icon: "success",
    });
  };

  useEffect(() => {
    enter();
  });

  return (
    <>
      <h1>{props.title}</h1>
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
            <div>
              <label>Login</label>
              <Field id="login" name="login" type="text" />
              <ErrorMessage name="login" />
            </div>
            <div>
              <label>Senha</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage name="password" />
            </div>
            <button>Entrar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
