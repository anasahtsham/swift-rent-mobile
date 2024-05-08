import * as Yup from "yup";
import {
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const terminateLeaseSchema = Yup.object().shape({
  moneyReturned: Yup.string().matches(onlyNumbersRegex, onlyNumbersMessage),
  terminationReason: Yup.string()
    .required(requiredMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage),
});
