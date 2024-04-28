import * as Yup from "yup";

import { requiredMessage } from "./ValidationRegexAndMessages";

export const agentOneTimeFeeSchema = Yup.object().shape({
  agentOneTimeFee: Yup.string().required(requiredMessage),
  rentAmount: Yup.string().required(requiredMessage),
  specialTerms: Yup.string().required(requiredMessage),
});

export const managerPercentageSchema = Yup.object().shape({
  percentage: Yup.string().required(requiredMessage),
  rentAmount: Yup.string().required(requiredMessage),
  specialTerms: Yup.string().required(requiredMessage),
});

export const managerFixedSchema = Yup.object().shape({
  fixed: Yup.string().required(requiredMessage),
  rentAmount: Yup.string().required(requiredMessage),
  specialTerms: Yup.string().required(requiredMessage),
});
