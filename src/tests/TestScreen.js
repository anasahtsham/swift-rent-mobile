import { Formik } from "formik";
import React from "react";
import { Button, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import InputField from "../components/common/input_fields/InputField";
import InputFieldWithHint from "../components/common/input_fields/InputFieldWithHint";
import { icons } from "../helpers/ImageImports";
import { setColorsToDefault, useColors } from "../helpers/SetColors";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone number is required"),
  date: Yup.date().required("Date is required"),
});

const TestScreen = () => {
  const hintTexts = {
    english: "This is the contents of the popover",
    urdu: "یہ پاپ اوور کا مواد ہے۔",
  };
  setColorsToDefault();
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
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          scrollEnabled={true}
          extraScrollHeight={2500}
          style={{
            flex: 1,
            backgroundColor: colors.backgroundPrimary,
          }}
        >
          <View
            style={{
              width: "80%",
            }}
          >
            <InputFieldWithHint
              fieldType="name"
              label="First Name"
              value={values.firstName}
              handleChange={handleChange("firstName")}
              handleBlur={handleBlur("firstName")}
              errorText={touched.firstName ? errors.firstName : ""}
              hintTexts={hintTexts}
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
