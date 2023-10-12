import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  peso: Yup.string().required("Peso é obrigatório"),
  altura: Yup.string().required("Altura é obrigatória"),
  birthDate: Yup.string().required("Data de Nascimento é obrigatória"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  genre: Yup.string().required("Gênero é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),
});
