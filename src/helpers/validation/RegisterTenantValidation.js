import * as Yup from "yup";

import {
  between1and100Message,
  between1and100Regex,
  between30and60Message,
  between30and60Regex,
  invalidDateMessage,
  multipleOfHunderedMessage,
  multipleOfHunderedRegex,
  noSpacesMessage,
  noSpacesRegex,
  number11DigitsMessage,
  number11DigitsRegex,
  numberStartsWith03Message,
  numberStartsWith03Regex,
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const registerTenantSchema = (
  isYearlyIncreaseEditable,
  isLateRentFineEditable
) =>
  Yup.object().shape({
    rentAmount: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage),
    securityAmount: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage),
    evictionPeriod: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(between30and60Regex, between30and60Message),
    tenantContact: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(numberStartsWith03Regex, numberStartsWith03Message)
      .matches(number11DigitsRegex, number11DigitsMessage),
    yearlyIncrease: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(between1and100Regex, between1and100Message)
      .test(
        "isYearlyIncreaseEditable",
        "This Field is required",
        function (value) {
          if (isYearlyIncreaseEditable && !value) {
            return false;
          }
          return true;
        }
      ),
    lateRentFine: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .test(
        "isLateRentFineEditable",
        "This Field is required",
        function (value) {
          if (isLateRentFineEditable && !value) {
            return false;
          }
          return true;
        }
      )
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage),
    leaseTill: Yup.date()
      .typeError(invalidDateMessage)
      .required(requiredMessage),
  });
