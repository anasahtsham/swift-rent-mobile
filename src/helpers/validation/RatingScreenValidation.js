import * as Yup from "yup";

import {
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
} from "./ValidationRegexAndMessages";

export const ratingScreenSchema = Yup.object().shape({
  remark: Yup.string().matches(noDoubleSpacesRegex, noDoubleSpacesMessage),
});
