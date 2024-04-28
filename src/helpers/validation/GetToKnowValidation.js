import * as Yup from "yup";

import {
  invalidDateMessage,
  min3CharactersInt,
  min3CharactersMessage,
  nameFirstCharacterUppercaseMessage,
  nameFirstCharacterUppercaseRegex,
  noSpacesMessage,
  noSpacesRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const getToKnowSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(noSpacesRegex, noSpacesMessage)
    .required(requiredMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .min(min3CharactersInt, min3CharactersMessage),
  lastName: Yup.string()
    .matches(noSpacesRegex, noSpacesMessage)
    .required(requiredMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .min(min3CharactersInt, min3CharactersMessage),
  date: Yup.date().typeError(invalidDateMessage).required(requiredMessage),
});
