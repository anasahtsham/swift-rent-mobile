import * as Yup from "yup";
import {
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const sendOnlineRentVerificationRequestSchema = Yup.object().shape({
  verificationMessage: Yup.string()
    .required(requiredMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage),
});
