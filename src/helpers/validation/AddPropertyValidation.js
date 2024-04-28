import * as Yup from "yup";

import {
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const addPropertySchema = Yup.object().shape({
  address: Yup.string()
    .required(requiredMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage),
});
