import { Formik } from "formik";
import React from "react";
import { Button, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import InputField from "../components/common/input fields/InputField";
import { icons } from "../helpers/ImageImports";
import { useColors } from "../helpers/SetColors";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(3, "Name must be 3 characters or more")
    .matches(/^\S*$/, "No spaces allowed"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .matches(/^\S*$/, "No spaces allowed")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be more than 7 characters")
    .matches(/^\S*$/, "No spaces allowed"),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^03\d{9}$/, "Phone number must be 11 digits and start with 03")
    .matches(/^\S*$/, "No spaces allowed"),
  date: Yup.string().required("Required").matches(/^\S*$/, "No spaces allowed"),
});
const TestScreen = () => {
  const colors = useColors();
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        password: "",
        phoneNumber: "",
        date: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setTouched }) => {
        setTouched({
          firstName: true,
          email: true,
          password: true,
          phoneNumber: true,
          date: true,
        });
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={true}
          extraScrollHeight={2500}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.backgroundPrimary,
            }}
          >
            <InputField
              textFieldIcon={icons.userIcon}
              fieldType="name"
              label="First Name"
              value={values.firstName}
              handleChange={handleChange("firstName")}
              handleBlur={handleBlur("firstName")}
              errorText={touched.firstName ? errors.firstName : ""}
            />
            <InputField
              textFieldIcon={icons.emailIcon}
              fieldType="email-address"
              label="Email"
              value={values.email}
              handleChange={handleChange("email")}
              handleBlur={handleBlur("email")}
              errorText={touched.email ? errors.email : ""}
            />
            <InputField
              fieldType="password"
              label="Password"
              value={values.password}
              handleChange={handleChange("password")}
              handleBlur={handleBlur("password")}
              errorText={touched.password ? errors.password : ""}
            />
            <InputField
              textFieldIcon={icons.phoneNumberIcon}
              fieldType="phone-pad"
              label="Phone Number"
              value={values.phoneNumber}
              handleChange={handleChange("phoneNumber")}
              handleBlur={handleBlur("phoneNumber")}
              errorText={touched.phoneNumber ? errors.phoneNumber : ""}
            />
            <InputField
              fieldType="date"
              label="Date"
              value={values.date}
              handleChange={handleChange("date")}
              handleBlur={handleBlur("date")}
              errorText={touched.date ? errors.date : ""}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default TestScreen;
