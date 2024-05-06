import * as Yup from "yup";

import {
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
  noSpecialCharacterAtStartOrEndMessage,
  noSpecialCharacterAtStartOrEndRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const addPropertySchema = Yup.object().shape({
  address: Yup.string()
    .required(requiredMessage)
    .matches(
      noSpecialCharacterAtStartOrEndRegex,
      noSpecialCharacterAtStartOrEndMessage
    )
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage),
});
