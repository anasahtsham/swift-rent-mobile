import * as Yup from "yup";

import {
  noDoubleSpacesMessage,
  noDoubleSpacesRegex,
  noLeadingOrTrailingSpacesMessage,
  noLeadingOrTrailingSpacesRegex,
} from "./ValidationRegexAndMessages";

export const rentalRequestAgreementFormSchema = Yup.object().shape({
  remarks: Yup.string()
    .matches(noLeadingOrTrailingSpacesRegex, noLeadingOrTrailingSpacesMessage)
    .matches(noDoubleSpacesRegex, noDoubleSpacesMessage),
});
