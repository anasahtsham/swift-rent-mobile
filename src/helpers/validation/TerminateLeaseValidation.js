import * as Yup from "yup";
import {
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  notOnlyNumbersMessage,
  notOnlyNumbersRegex,
  notOnlySpecialCharactersAndNumbersMessage,
  notOnlySpecialCharactersAndNumbersRegex,
  notOnlySpecialCharactersMessage,
  notOnlySpecialCharactersRegex,
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
  from1to1000000000Regex,
  from1to1000000000Message,
} from "./ValidationRegexAndMessages";

export const terminateLeaseSchema = Yup.object().shape({
  moneyReturned: Yup.string()
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(from1to1000000000Regex, from1to1000000000Message),
  terminationReason: Yup.string()
    .required(requiredMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(notOnlyNumbersRegex, notOnlyNumbersMessage)
    .matches(notOnlySpecialCharactersRegex, notOnlySpecialCharactersMessage)
    .matches(
      notOnlySpecialCharactersAndNumbersRegex,
      notOnlySpecialCharactersAndNumbersMessage
    ),
});
