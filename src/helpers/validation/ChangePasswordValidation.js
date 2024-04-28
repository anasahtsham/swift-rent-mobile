import * as Yup from "yup";

import {
  noSpacesMessage,
  noSpacesRegex,
  passwordLengthMessage,
  passwordLengthRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(passwordLengthRegex, passwordLengthMessage),
  password: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(passwordLengthRegex, passwordLengthMessage),
  confirmPassword: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(passwordLengthRegex, passwordLengthMessage)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
