import { Formik } from "formik";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import { buttonWidthSmall } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { forgotPasswordSchema } from "../../helpers/validation/ValidationSchemas";
import InputField from "./../../components/common/input_fields/InputField";

const LoginScreen = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const emailOrPhoneRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  return (
    <Formik
      initialValues={{
        emailOrPhone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={() => {
        navigation.navigate("Forgot Password");
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
            <View style={[styles.logoAndTextContainer, { marginBottom: 100 }]}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: FontSizes.large,
                    color: colors.textPrimary,
                  },
                ]}
              >
                {languages.resetYourPassword}
              </Text>
            </View>

            <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
              <InputField
                textFieldIcon={icons.emailIcon}
                fieldType="email-address"
                label="Email or Phone"
                value={values.emailOrPhone}
                handleChange={handleChange("emailOrPhone")}
                handleBlur={handleBlur("emailOrPhone")}
                errorText={touched.emailOrPhone ? errors.emailOrPhone : ""} // If the user has touched the input field and there's an error, display the error message
                ref={emailOrPhoneRef}
                onSubmitEditing={() => passwordRef.current.focus()} // When the user presses "Next" on the keyboard, the focus will move to the next input field
                returnKeyType="next"
              />
              <InputField
                fieldType="password"
                label="New Password"
                value={values.password}
                handleChange={handleChange("password")}
                handleBlur={handleBlur("password")}
                errorText={touched.password ? errors.password : ""} // If the user has touched the input field and there's an error, display the error message
                ref={passwordRef}
                onSubmitEditing={() => confirmPasswordRef.current.focus()} // When the user presses "Next" on the keyboard, the focus will move to the next input field
                returnKeyType="next"
              />
              <InputField
                fieldType="password"
                label="Confirm Password"
                value={values.confirmPassword}
                handleChange={handleChange("confirmPassword")}
                handleBlur={handleBlur("confirmPassword")}
                errorText={
                  touched.confirmPassword ? errors.confirmPassword : "" // If the user has touched the input field and there's an error, display the error message
                }
                ref={confirmPasswordRef}
                onSubmitEditing={handleSubmit} // When the user presses "Next" on the keyboard, the form will be submitted
              />
            </View>

            <ButtonGrey
              width={buttonWidthSmall}
              fontSize={FontSizes.medium}
              buttonText={languages.change}
              onPress={handleSubmit} // When the user presses "Change", the form will be submitted
              hasOwnOnPress={true} // Indicates to the component that this is a submit button so that it can change its flow
            />
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
    width: "80%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "50%",
    width: "90%",
  },
});

export default LoginScreen;
