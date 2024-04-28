import * as Yup from "yup";

import {
  invalidEmailOrPhone,
  invalidEmailRegex,
  noSpacesMessage,
  noSpacesRegex,
  passwordLengthMessage,
  passwordLengthRegex,
  passwordsMustMatchMessage,
  phoneRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const forgotPasswordSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .test(
      "email-or-phone",
      invalidEmailOrPhone,
      (value) => invalidEmailRegex.test(value) || phoneRegex.test(value)
    ),
  password: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(passwordLengthRegex, passwordLengthMessage),
  confirmPassword: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(passwordLengthRegex, passwordLengthMessage)
    .oneOf([Yup.ref("password"), null], passwordsMustMatchMessage),
});
