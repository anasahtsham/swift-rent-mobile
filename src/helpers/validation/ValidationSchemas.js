import * as Yup from "yup";
import {
  checkEmptySpace,
  validateEmail,
  validatePasswordLength,
  validatePhoneNumber,
} from "./ValidationFunctions";

// This file contains all the validation schemas used in the app

export const getToKnowSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .matches(
      /^[A-Z][a-z]*$/,
      "First character must be uppercase and the rest lowercase"
    )
    .min(3, "Name must be 3 characters or more"),
  lastName: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .matches(
      /^[A-Z][a-z]*$/,
      "First character must be uppercase and the rest lowercase"
    )
    .min(3, "Name must be 3 characters or more"),
  date: Yup.date()
    .typeError("Invalid date format")
    .required("This Field is required"),
});

export const contactInfoSchema = Yup.object().shape({
  email: Yup.string()
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test("is-valid-email", "Invalid email", validateEmail),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-phone-number",
      "Phone number must be 11 digits and start with 03",
      validatePhoneNumber
    ),
});

export const setUpPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    )
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-email-or-phone",
      "Invalid email or phone number",
      (value) => validateEmail(value) || validatePhoneNumber(value)
    ),
  password: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    ),
});

export const forgotPasswordSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-email-or-phone",
      "Invalid email or phone number",
      (value) => validateEmail(value) || validatePhoneNumber(value)
    ),
  password: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    )
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    ),
  password: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .test("is-empty-space", "No spaces allowed", checkEmptySpace)
    .test(
      "is-valid-password-length",
      "Password must be 8 characters or more",
      validatePasswordLength
    )
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const reportBugSchema = Yup.object().shape({
  issueType: Yup.string()
    .required("Can't leave empty")
    .min(2, "Issue type must be at least 2 characters")
    .max(50, "Issue type must be at most 50 characters")
    .matches(/^[^\s].*[^\s]$/, "No leading or trailing spaces")
    .matches(/^(?!.*  ).*$/, "No double spaces")
    .matches(/^(?!\d+$).*$/, "Issue type can't be only numbers")
    .matches(/^[a-zA-Z0-9\s]*$/, "Can't be only special characters or symbols"),
  issueDescription: Yup.string()
    .required("Can't leave empty")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be at most 500 characters")
    .matches(/^[^\s].*[^\s]$/, "No leading or trailing spaces")
    .matches(/^(?!.*  ).*$/, "No double spaces")
    .matches(/^(?!\d+$).*$/, "Description can't be only numbers")
    .matches(/^[a-zA-Z0-9\s]*$/, "Can't be only special characters or symbols"),
});

export const addPropertySchema = Yup.object().shape({
  street: Yup.string()
    .required("Required")
    .matches(/^\d*$/, "Only digits from 0-9 are allowed"),
  building: Yup.string()
    .required("Required")
    .matches(/^\d*$/, "Only digits from 0-9 are allowed"),
});

export const viewMaintenanceAndComplainsSchema = Yup.object().shape({
  remarks: Yup.string()
    .matches(/^[^\s].*[^\s]$/, "No leading or trailing spaces")
    .matches(/^(?!.*  ).*$/, "No double spaces"),
});

export const registerTenantSchema = (
  isYearlyIncreaseEditable,
  isLateRentFineEditable
) =>
  Yup.object().shape({
    rentAmount: Yup.string()
      .required("This Field is required")
      .matches(/^\S*$/, "No spaces allowed")
      .matches(/^[0-9]*$/, "Only numbers allowed")
      .matches(/^([1-9][0-9]*00)$/, "Value must be a multiple of 100"),
    securityAmount: Yup.string()
      .required("This Field is required")
      .matches(/^\S*$/, "No spaces allowed")
      .matches(/^[0-9]*$/, "Only numbers allowed")
      .matches(/^([1-9][0-9]*00)$/, "Value must be a multiple of 100"),
    evictionPeriod: Yup.string()
      .required("This Field is required")
      .matches(/^[0-9]*$/, "Only numbers allowed")
      .matches(/^[3-5][0-9]$|^60$/, "Value must be between 30 and 60"),
    tenantContact: Yup.string()
      .required("This Field is required")
      .matches(/^\S*$/, "No spaces allowed")
      .matches(/^03\d{9}$/, "Phone number must be 11 digits and start with 03"),
    yearlyIncrease: Yup.string()
      .matches(/^[0-9]*$/, "Only numbers allowed")
      .matches(/^\S*$/, "No spaces allowed")
      .matches(/^(100|[1-9][0-9]?)$/, "Value must be between 1 and 100")
      .test(
        "isYearlyIncreaseEditable",
        "This Field is required",
        function (value) {
          if (isYearlyIncreaseEditable && !value) {
            return false;
          }
          return true;
        }
      ),
    lateRentFine: Yup.string()
      .matches(/^\S*$/, "No spaces allowed")
      .matches(/^[0-9]*$/, "Only numbers allowed")
      .test(
        "isLateRentFineEditable",
        "This Field is required",
        function (value) {
          if (isLateRentFineEditable && !value) {
            return false;
          }
          return true;
        }
      )
      .matches(/^([1-9][0-9]*00)$/, "Value must be a multiple of 100"),
    leaseTill: Yup.date()
      .typeError("Invalid date format")
      .required("This Field is required"),
  });

export const ratingScreenSchema = Yup.object().shape({
  description: Yup.string().matches(/^(?!.*  ).*$/, "No double spaces"),
});

export const managerOneTimeFeeSchema = Yup.object().shape({
  managerOneTimeFee: Yup.string().required("Manager One Time Fee is required"),
  rentAmount: Yup.string().required("Rent Amount is required"),
  specialTerms: Yup.string().required("Special Terms is required"),
});

export const managerPercentageSchema = Yup.object().shape({
  percentage: Yup.string().required("Percentage is required"),
  rentAmount: Yup.string().required("Rent Amount is required"),
  specialTerms: Yup.string().required("Special Terms is required"),
});

export const managerFixedSchema = Yup.object().shape({
  fixed: Yup.string().required("Fixed is required"),
  rentAmount: Yup.string().required("Rent Amount is required"),
  specialTerms: Yup.string().required("Special Terms is required"),
});
