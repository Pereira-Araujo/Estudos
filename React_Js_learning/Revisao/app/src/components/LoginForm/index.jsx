import {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signIn } from "../../utils/validations";

const LoginForm = (props) => {

  const enter = (values) => {
    setInform(values)

    alert(inform);
  };

  const [inform, setInform] =useState('')

 

  return (
    <>
      <h1>{props.title}</h1>
      <Formik
        validationSchema={signIn}
        initialValues={{
          login: "",
          password: "",
        }}
        onSubmit={()=>enter(props.values.login)}
      >
        {() => (
          <Form>
            <div>
              <label>Login</label>
              <Field id="login"  name="login" type="text" />
              <ErrorMessage name="login" />
            </div>
            <div>
              <label>Senha</label>
              <Field id="password" name="password" type="text" />
              <ErrorMessage name="password"/>
            </div>

            <button>Entrar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
