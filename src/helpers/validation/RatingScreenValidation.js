import * as Yup from "yup";

import {
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
  requiredMessage,
} from "./ValidationRegexAndMessages";

export const ratingScreenSchema = Yup.object().shape({
  remark: Yup.string()
    .required(requiredMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage),
});
