import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { buttonWidthSmaller } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { setUpPasswordSchema } from "../../helpers/validation/ValidationSchemas";
import InputField from "./../../components/common/input_fields/InputField";

const SetUpPassword = ({ navigation, route }) => {
  // Get the user's first name, last name, date of birth, email, and phone number from the previous screens
  const { userType, firstName, lastName, date, email, phoneNumber } =
    route.params;

  const colors = useColors();
  const languages = useLanguages();

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      validationSchema={setUpPasswordSchema}
      onSubmit={(values) => {
        // Pass the user's password to the next screen
        navigation.navigate("All Set Up", {
          userType: userType,
          firstName: firstName,
          lastName: lastName,
          date: date,
          email: email,
          phoneNumber: phoneNumber,
          password: values.password,
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
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={true}
        >
          <View
            style={[
              styles.container,
              { backgroundColor: colors.backgroundPrimary },
            ]}
          >
            <View
              style={[
                {
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <View style={[styles.logoAndTextContainer, { marginBottom: 40 }]}>
                <SwiftRentLogoMedium />
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: FontSizes.large,
                      color: colors.textLightBlue,
                    },
                  ]}
                >
                  {languages.nowLetsSetUpYourPassword}
                </Text>
              </View>

              <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
                <InputField
                  ref={passwordRef}
                  fieldType="password"
                  label="Password"
                  value={values.password}
                  handleChange={handleChange("password")}
                  handleBlur={handleBlur("password")}
                  errorText={touched.password ? errors.password : ""} // If the user has touched the input field, display the error message
                  onSubmitEditing={() => confirmPasswordRef.current.focus()} // Focus on the next input field
                />
                <InputField
                  ref={confirmPasswordRef}
                  fieldType="password"
                  label="Confirm Password"
                  value={values.confirmPassword}
                  handleChange={handleChange("confirmPassword")}
                  handleBlur={handleBlur("confirmPassword")}
                  errorText={
                    touched.confirmPassword ? errors.confirmPassword : "" // If the user has touched the input field, display the error message
                  }
                  onSubmitEditing={handleSubmit} // When the user presses "Next" on the keyboard, the form will be submitted
                />
              </View>

              <View style={styles.buttonsContainer}>
                <ButtonGrey
                  width={buttonWidthSmaller}
                  fontSize={FontSizes.small}
                  buttonText={languages.back}
                  userType={userType}
                  destinationScreen="Contact Info"
                  navigation={navigation}
                />
                <ButtonGrey
                  width={buttonWidthSmaller}
                  fontSize={FontSizes.small}
                  buttonText={languages.next}
                  onPress={handleSubmit} // When the user presses "Next", the form is submitted
                  isSubmitButton={true} // Indicates that this button is a submit button
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoAndTextContainer: {
    alignItems: "center",
    width: "70%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "40%",
    width: "90%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
});

export default SetUpPassword;
