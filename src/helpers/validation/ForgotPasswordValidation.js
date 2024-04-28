import * as Yup from "yup";

import {
  invalidEmailOrPhone,
  invalidEmailRegex,
  noSpacesMessage,
  noSpacesRegex,
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
});
