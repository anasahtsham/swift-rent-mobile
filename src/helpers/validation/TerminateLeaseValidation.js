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
} from "./ValidationRegexAndMessages";

export const terminateLeaseSchema = Yup.object().shape({
  moneyReturned: Yup.string().matches(onlyNumbersRegex, onlyNumbersMessage),
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
