import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Geçerli bir mail adresi giriniz").required(),
  password: yup
    .string()
    .min(6, "Şifreniz en az 6 karakter olmalıdır")
    .required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar eşleşmiyor")
    .required(),
});

export default validations;
