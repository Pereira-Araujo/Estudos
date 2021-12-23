import * as Yup from "yup";

export const signIn = Yup.object().shape({
  login: Yup.string().email(<p style={{color:'red'}}>Deve ser um email</p>),
  password: Yup.string().min(6, <p style={{color:'red'}}>Deve ter mais de 6 caracteres</p>)
    
});

export const register = Yup.object().shape({
  name: Yup.string().min( 2,<p style={{color:'red'}}>Esse nome não é válido</p>),
  login: Yup.string().email(<p style={{color:'red'}}>Deve ser um email</p>),
  password: Yup.string().min(6, <p style={{color:'red'}}>Deve ter mais de 6 caracteres</p>)
    
});
