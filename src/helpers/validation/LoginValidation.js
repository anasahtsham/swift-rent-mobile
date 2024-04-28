import * as Yup from "yup";

import {
  invalidEmailOrPhone,
  invalidEmailRegex,
  noSpacesMessage,
  noSpacesRegex,
  passwordLengthMessage,
  passwordLengthRegex,
  phoneRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const loginSchema = Yup.object().shape({
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
});
