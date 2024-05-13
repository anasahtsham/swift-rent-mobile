import * as Yup from "yup";
import {
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
  from1to1000000000Regex,
  from1to1000000000Message,
} from "./ValidationRegexAndMessages";

export const verifyOnlinePaymentSchema = Yup.object().shape({
  moneyReceived: Yup.string()
    .required(requiredMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(from1to1000000000Regex, from1to1000000000Message),
});
