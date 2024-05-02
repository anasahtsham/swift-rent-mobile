import * as Yup from "yup";

import {
  max500CharactersInt,
  max500CharactersMessage,
  max50CharactersInt,
  max50CharactersMessage,
  min3CharactersInt,
  min3CharactersMessage,
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  notOnlyNumbersMessage,
  notOnlyNumbersRegex,
  notOnlySpacesMessage,
  notOnlySpacesRegex,
  notOnlySpecialCharactersMessage,
  notOnlySpecialCharactersRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const reportBugSchema = Yup.object().shape({
  issueType: Yup.string()
    .required(requiredMessage)
    .min(min3CharactersInt, min3CharactersMessage)
    .max(max50CharactersInt, max50CharactersMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage)
    .matches(notOnlyNumbersRegex, notOnlyNumbersMessage)
    .matches(notOnlySpecialCharactersRegex, notOnlySpecialCharactersMessage),

  issueDescription: Yup.string()
    .required(requiredMessage)
    .min(min3CharactersInt, min3CharactersMessage)
    .max(max500CharactersInt, max500CharactersMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage)
    .matches(notOnlyNumbersRegex, notOnlyNumbersMessage)
    .matches(notOnlySpacesRegex, notOnlySpacesMessage)
    .matches(notOnlySpecialCharactersRegex, notOnlySpecialCharactersMessage),
});
