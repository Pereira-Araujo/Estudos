import * as Yup from "yup";

export const signIn = Yup.object().shape({
  login: Yup.string().email("Deve ser um email"),
  password: Yup.string().min(6, "Deve ter mais de 6 caracteres")
    .required("Não pode estar vazio"),
});
