import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import { buttonWidthSmall } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { forgotPasswordSchema } from "../../helpers/validation/ValidationSchemas";
import InputField from "./../../components/common/input fields/InputField";

const LoginScreen = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();

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
                errorText={touched.emailOrPhone ? errors.emailOrPhone : ""}
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
                fieldType="password"
                label="Confirm Password"
                value={values.confirmPassword}
                handleChange={handleChange("confirmPassword")}
                handleBlur={handleBlur("confirmPassword")}
                errorText={
                  touched.confirmPassword ? errors.confirmPassword : ""
                }
              />
            </View>

            <ButtonGrey
              width={buttonWidthSmall}
              fontSize={FontSizes.medium}
              buttonText={languages.change}
              onPress={handleSubmit}
              isSubmitButton={true}
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
    justifyContent: "space-between ",
    width: "100%",
  },
});

export default LoginScreen;
