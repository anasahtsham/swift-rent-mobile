import * as Yup from "yup";
import {
  from1To100Message,
  from1To100Regex,
  multipleOfHunderedMessage,
  multipleOfHunderedRegex,
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const getValidationSchema = (salaryPaymentType) => {
  let schema = {
    rentCounterOffer: Yup.string()
      .required(requiredMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage),
  };

  switch (salaryPaymentType) {
    case "F":
      schema.fixedCounterOffer = Yup.string()
        .required(requiredMessage)
        .matches(onlyNumbersRegex, onlyNumbersMessage)
        .matches(multipleOfHunderedRegex, multipleOfHunderedMessage);
      break;
    case "P":
      schema.percentageCounterOffer = Yup.string()
        .required(requiredMessage)
        .matches(onlyNumbersRegex, onlyNumbersMessage)
        .matches(from1To100Regex, from1To100Message);
      break;
    default:
      schema.oneTimeCounterOffer = Yup.string()
        .required(requiredMessage)
        .matches(onlyNumbersRegex, onlyNumbersMessage)
        .matches(multipleOfHunderedRegex, multipleOfHunderedMessage);
      break;
  }

  return Yup.object().shape(schema);
};
