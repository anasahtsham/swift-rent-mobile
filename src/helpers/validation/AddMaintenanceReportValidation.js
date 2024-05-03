import * as Yup from "yup";

import {
  max500CharactersInt,
  max500CharactersMessage,
  min3CharactersInt,
  min3CharactersMessage,
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
  notOnlyNumbersMessage,
  notOnlyNumbersRegex,
  notOnlySpecialCharactersMessage,
  notOnlySpecialCharactersRegex,
  onlyNumbersMessage,
  onlyNumbersRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const addMaintenanceReportSchema = Yup.object().shape({
  maintenanceTitle: Yup.string()
    .required(requiredMessage)
    .min(min3CharactersInt, min3CharactersMessage)
    .max(max500CharactersInt, max500CharactersMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage)
    .matches(notOnlyNumbersRegex, notOnlyNumbersMessage)
    .matches(notOnlySpecialCharactersRegex, notOnlySpecialCharactersMessage),

  maintenanceCost: Yup.string()
    .required(requiredMessage)
    .matches(onlyNumbersRegex, onlyNumbersMessage),

  maintenanceDescription: Yup.string()
    .min(min3CharactersInt, min3CharactersMessage)
    .max(max500CharactersInt, max500CharactersMessage)
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage)
    .matches(notOnlyNumbersRegex, notOnlyNumbersMessage)
    .matches(notOnlySpecialCharactersRegex, notOnlySpecialCharactersMessage),
});
