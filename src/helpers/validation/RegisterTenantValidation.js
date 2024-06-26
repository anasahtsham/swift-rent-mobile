import * as Yup from "yup";

import {
  from1To100Message,
  from1To100Regex,
  from1To1200Message,
  from1To1200Regex,
  from1To99Message,
  from1To99Regex,
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
  from1to1000000000Regex,
  from1to1000000000Message,
} from "./ValidationRegexAndMessages";

export const registerTenantSchema = (
  isSecurityAmountEditable,
  isAdvancePaymentEditable,
  isYearlyIncreaseEditable,
  isLateRentFineEditable
) =>
  Yup.object().shape({
    rentAmount: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
      .matches(from1to1000000000Regex, from1to1000000000Message),
    tenantContact: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(numberStartsWith03Regex, numberStartsWith03Message)
      .matches(number11DigitsRegex, number11DigitsMessage),
    leasedForMonths: Yup.string()
      .required(requiredMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(from1To1200Regex, from1To1200Message),

    securityAmount: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
      .matches(from1to1000000000Regex, from1to1000000000Message)
      .test("isSecurityAmountEditable", requiredMessage, function (value) {
        if (isSecurityAmountEditable && !value) {
          return false;
        }
        return true;
      }),

    advancePayment: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
      .test("isAdvancePaymentEditable", requiredMessage, function (value) {
        if (isAdvancePaymentEditable && !value) {
          return false;
        }
        return true;
      }),
    advancePaymentForMonths: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(from1To99Regex, from1To99Message)
      .test("isAdvancePaymentEditable", requiredMessage, function (value) {
        if (isAdvancePaymentEditable && !value) {
          return false;
        }
        return true;
      }),

    yearlyIncrease: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(from1To100Regex, from1To100Message)
      .test("isYearlyIncreaseEditable", requiredMessage, function (value) {
        if (isYearlyIncreaseEditable && !value) {
          return false;
        }
        return true;
      }),
    incrementPeriod: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(from1To99Regex, from1To99Message)
      .test("isYearlyIncreaseEditable", requiredMessage, function (value) {
        if (isYearlyIncreaseEditable && !value) {
          return false;
        }
        return true;
      }),

    lateRentFine: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
      .matches(from1to1000000000Regex, from1to1000000000Message)
      .test("isLateRentFineEditable", requiredMessage, function (value) {
        if (isLateRentFineEditable && !value) {
          return false;
        }
        return true;
      }),
  });
