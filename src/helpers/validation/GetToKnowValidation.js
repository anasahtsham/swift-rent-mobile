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
    .required(requiredMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .min(min3CharactersInt, min3CharactersMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage),
  lastName: Yup.string()
    .required(requiredMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .min(min3CharactersInt, min3CharactersMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage),
  date: Yup.date().typeError(invalidDateMessage).required(requiredMessage),
});
