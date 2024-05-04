import * as Yup from "yup";

import {
  invalidDateMessage,
  min3CharactersInt,
  min3CharactersMessage,
  nameFirstCharacterUppercaseMessage,
  nameFirstCharacterUppercaseRegex,
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const getToKnowSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .required(requiredMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .min(min3CharactersInt, min3CharactersMessage),
  lastName: Yup.string()
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .required(requiredMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .min(min3CharactersInt, min3CharactersMessage),
  date: Yup.date().typeError(invalidDateMessage).required(requiredMessage),
});
