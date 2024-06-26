import * as Yup from "yup";

import {
  invalidDateMessage,
  min3CharactersInt,
  min3CharactersMessage,
  nameFirstCharacterUppercaseMessage,
  nameFirstCharacterUppercaseRegex,
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  noNumbersMessage,
  noNumbersRegex,
  noSpecialCharacterAtStartOrEndMessage,
  noSpecialCharacterAtStartOrEndRegex,
  noSpecialCharactersExceptHyphenSpaceOrPeriodMessage,
  noSpecialCharactersExceptHyphenSpaceOrPeriodRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const getToKnowSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(requiredMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .matches(
      noSpecialCharactersExceptHyphenSpaceOrPeriodRegex,
      noSpecialCharactersExceptHyphenSpaceOrPeriodMessage
    )
    .matches(
      noSpecialCharacterAtStartOrEndRegex,
      noSpecialCharacterAtStartOrEndMessage
    )
    .min(min3CharactersInt, min3CharactersMessage)
    .matches(noNumbersRegex, noNumbersMessage),
  lastName: Yup.string()
    .required(requiredMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage)
    .matches(
      nameFirstCharacterUppercaseRegex,
      nameFirstCharacterUppercaseMessage
    )
    .matches(
      noSpecialCharactersExceptHyphenSpaceOrPeriodRegex,
      noSpecialCharactersExceptHyphenSpaceOrPeriodMessage
    )
    .matches(
      noSpecialCharacterAtStartOrEndRegex,
      noSpecialCharacterAtStartOrEndMessage
    )
    .min(min3CharactersInt, min3CharactersMessage)
    .matches(noNumbersRegex, noNumbersMessage),
  date: Yup.date().typeError(invalidDateMessage).required(requiredMessage),
});
