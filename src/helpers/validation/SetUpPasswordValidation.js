import * as Yup from "yup";

import {
  noSpacesMessage,
  noSpacesRegex,
  passwordLengthMessage,
  passwordLengthRegex,
  passwordsMustMatchMessage,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const setUpPasswordSchema = Yup.object().shape({
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
