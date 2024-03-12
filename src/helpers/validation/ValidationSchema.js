import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "No spaces allowed")
    .min(3, "Name must be 3 characters or more"),
  email: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .email("Invalid email")
    .required("Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  password: Yup.string()
    .matches(/^\S*$/, "No spaces allowed")
    .required("Required")
    .min(8, "Password must be 8 characters or more"),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\S*$/, "No spaces allowed")
    .matches(/^03\d{9}$/, "Phone number must be 11 digits and start with 03"),
  date: Yup.string().required("Required").matches(/^\S*$/, "No spaces allowed"),
});
