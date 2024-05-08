import * as Yup from "yup";
import {
  multipleOfHunderedMessage,
  multipleOfHunderedRegex,
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const verifyOnlinePaymentSchema = Yup.object().shape({
  moneyReceived: Yup.string()
    .required(requiredMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(multipleOfHunderedRegex, multipleOfHunderedMessage),
});
