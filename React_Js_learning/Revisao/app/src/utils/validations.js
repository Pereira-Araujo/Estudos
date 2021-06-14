import * as Yup from "yup";

export const signIn = Yup.object().shape({
  login: Yup.string().email(<p style={{color:'red'}}>Deve ser um email</p>),
  password: Yup.string().min(6, <p style={{color:'red'}}>Deve ter mais de 6 caracteres</p>)
    .required(<p style={{color:'red'}}>Campo não pode estar vazio</p>),
});
