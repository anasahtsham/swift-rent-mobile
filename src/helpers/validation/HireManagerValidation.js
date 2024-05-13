import * as Yup from "yup";

import {
  from1To100Message,
  from1To100Regex,
  multipleOfHunderedMessage,
  multipleOfHunderedRegex,
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  noSpacesMessage,
  noSpacesRegex,
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
  from1to1000000000Regex,
  from1to1000000000Message,
} from "./ValidationRegexAndMessages";

export const agentOneTimeFeeSchema = Yup.object().shape({
  agentOneTimeFee: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
    .matches(from1to1000000000Regex, from1to1000000000Message),
  rentAmount: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
    .matches(from1to1000000000Regex, from1to1000000000Message),
  specialTerms: Yup.string().matches(
    noLeadingOrTrailingSpacesRegex,
    noLeadingOrTrailingSpacesMessage
  ),
});

export const managerPercentageSchema = Yup.object().shape({
  percentage: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(from1To100Regex, from1To100Message),
  rentAmount: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
    .matches(from1to1000000000Regex, from1to1000000000Message),
  specialTerms: Yup.string().matches(
    noLeadingOrTrailingSpacesRegex,
    noLeadingOrTrailingSpacesMessage
  ),
});

export const managerFixedSchema = Yup.object().shape({
  fixed: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
    .matches(from1to1000000000Regex, from1to1000000000Message),
  rentAmount: Yup.string()
    .required(requiredMessage)
    .matches(noSpacesRegex, noSpacesMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage)
    .matches(multipleOfHunderedRegex, multipleOfHunderedMessage)
    .matches(from1to1000000000Regex, from1to1000000000Message),
  specialTerms: Yup.string().matches(
    noLeadingOrTrailingSpacesRegex,
    noLeadingOrTrailingSpacesMessage
  ),
});
