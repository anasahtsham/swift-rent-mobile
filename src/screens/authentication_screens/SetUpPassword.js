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
  const { userType, firstName, lastName, date, email, phoneNumber } =
    route.params;

  const colors = useColors();
  const languages = useLanguages();

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      validationSchema={setUpPasswordSchema}
      onSubmit={(values) => {
        navigation.navigate("All Set Up", {
          userType: userType,
          firstName: firstName,
          lastName: lastName,
          date: date,
          email: email,
          phoneNumber: phoneNumber,
          password: values.password,
          confirmPassword: values.confirmPassword,
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
                  onPress={handleSubmit}
                  isSubmitButton={true}
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
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
});

export default SetUpPassword;
