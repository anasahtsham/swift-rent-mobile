import * as Yup from "yup";

// firstName: Yup.string()
// .required("Required")
// .matches(/^\S*$/, "No spaces allowed")
// .min(3, "Name must be 3 characters or more"),
// lastName: Yup.string()
// .required("Required")
// .matches(/^\S*$/, "No spaces allowed")
// .min(3, "Name must be 3 characters or more"),
// email: Yup.string()
//   .matches(/^\S*$/, "No spaces allowed")
//   .email("Invalid email")
//   .required("Required")
//   .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
// password: Yup.string()
//   .matches(/^\S*$/, "No spaces allowed")
//   .required("Required")
//   .min(8, "Password must be 8 characters or more"),
// phoneNumber: Yup.string()
//   .required("Required")
//   .matches(/^\S*$/, "No spaces allowed")
//   .matches(/^03\d{9}$/, "Phone number must be 11 digits and start with 03"),
// date: Yup.string().required("Required").matches(/^\S*$/, "No spaces allowed"),

export const getToKnowSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .matches(
      /^[A-Z][a-z]*$/,
      "First character must be uppercase and the rest lowercase"
    )
    .min(3, "Name must be 3 characters or more"),
  lastName: Yup.string()
    .required("Required")
    .matches(
      /^[A-Z][a-z]*$/,
      "First character must be uppercase and the rest lowercase"
    )
    .min(3, "Name must be 3 characters or more"),
  date: Yup.string().required("Required").matches(/^\S*$/, "No spaces allowed"),
});

export const contactInfoSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .email("Invalid email")
    .required("Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "No spaces allowed")
    .matches(/^03\d{9}$/, "Phone number must be 11 digits and start with 03"),
});

export const setUpPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more"),
  confirmPassword: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .test(
      "emailOrPhone",
      "Invalid email address or phone number",
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^03\d{9}$/.test(value)
    ),

  password: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more"),
});

export const forgotPasswordSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .test(
      "emailOrPhone",
      "Invalid email address or phone number",
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^03\d{9}$/.test(value)
    ),
  password: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more"),
  confirmPassword: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more"),
  password: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more"),
  confirmPassword: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
