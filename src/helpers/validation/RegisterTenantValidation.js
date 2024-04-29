import * as Yup from "yup";

import {
  between1and100Message,
  between1and100Regex,
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
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage),
    tenantContact: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(numberStartsWith03Regex, numberStartsWith03Message)
      .matches(number11DigitsRegex, number11DigitsMessage),
    leasedForMonths: Yup.string()
      .required(requiredMessage)
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage),

    securityAmount: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
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
      .test("isAdvancePaymentEditable", requiredMessage, function (value) {
        if (isAdvancePaymentEditable && !value) {
          return false;
        }
        return true;
      }),

    yearlyIncrease: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
      .matches(between1and100Regex, between1and100Message)
      .test("isYearlyIncreaseEditable", requiredMessage, function (value) {
        if (isYearlyIncreaseEditable && !value) {
          return false;
        }
        return true;
      }),
    incrementPeriod: Yup.string()
      .matches(noSpacesRegex, noSpacesMessage)
      .matches(onlyNumbersRegex, onlyNumbersMessage)
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
      .test("isLateRentFineEditable", requiredMessage, function (value) {
        if (isLateRentFineEditable && !value) {
          return false;
        }
        return true;
      }),
  });
