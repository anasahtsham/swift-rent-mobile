import * as Yup from "yup";

import {
  invalidEmailMessage,
  invalidEmailRegex,
  noSpacesMessage,
  noSpacesRegex,
  number11DigitsMessage,
  number11DigitsRegex,
  numberStartsWith03Message,
  numberStartsWith03Regex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const contactInfoSchema = Yup.object().shape({
  email: Yup.string()
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(invalidEmailRegex, invalidEmailMessage),
  phoneNumber: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(numberStartsWith03Regex, numberStartsWith03Message)
    .matches(number11DigitsRegex, number11DigitsMessage),
});
