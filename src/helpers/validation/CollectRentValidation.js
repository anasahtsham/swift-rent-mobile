import * as Yup from "yup";
import {
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const collectRentSchema = Yup.object().shape({
  moneyReceived: Yup.string()
    .required(requiredMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage),
});
