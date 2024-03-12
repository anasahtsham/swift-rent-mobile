import { Formik } from "formik";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { buttonWidthSmall } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { loginSchema } from "../../helpers/validation/ValidationSchema";
import InputField from "./../../components/common/input fields/InputField";

const LoginScreen = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();

  return (
    <Formik
      initialValues={{
        emailOrPhone: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        navigation.navigate("Login As", {
          emailOrPhone: values.emailOrPhone,
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
            <View style={[styles.logoAndTextContainer, { marginBottom: 100 }]}>
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
                {languages.enterYourDetails}
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
              <Pressable
                onTouchEnd={() => navigation.navigate("Forgot Password")}
              >
                <Text
                  style={[
                    {
                      fontSize: FontSizes.small,
                      color: colors.textLightBlue,
                      padding: 10,
                    },
                  ]}
                >
                  {languages.forgotPassword}
                </Text>
              </Pressable>
            </View>

            <ButtonGrey
              width={buttonWidthSmall}
              fontSize={FontSizes.medium}
              buttonText={languages.login}
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
    width: "70%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: {
    alignItems: "center",
    justifyContent: "space-between ",
    width: "100%",
  },
});

export default LoginScreen;
