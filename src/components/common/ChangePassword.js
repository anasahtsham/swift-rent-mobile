import { Formik } from "formik";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import { buttonWidthSmall } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { changePasswordSchema } from "../../helpers/validation/ValidationSchemas";
import InputField from "./../../components/common/input_fields/InputField";

const ChangePassword = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const newPassRef = React.useRef();
  const confirmPassRef = React.useRef();

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={changePasswordSchema}
      onSubmit={() => {
        navigation.navigate("Change Password");
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
                {languages.changeYourPassword}
              </Text>
            </View>

            <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
              <InputField
                onSubmitEditing={() => newPassRef.current.focus()}
                fieldType="password"
                label="Old Password"
                value={values.oldPassword}
                handleChange={handleChange("oldPassword")}
                handleBlur={handleBlur("oldPassword")}
                errorText={touched.oldPassword ? errors.oldPassword : ""}
                returnKeyType="next"
              />
              <InputField
                ref={newPassRef}
                onSubmitEditing={() => confirmPassRef.current.focus()}
                fieldType="password"
                label="Password"
                value={values.password}
                handleChange={handleChange("password")}
                handleBlur={handleBlur("password")}
                errorText={touched.password ? errors.password : ""}
                returnKeyType="next"
              />
              <InputField
                ref={confirmPassRef}
                fieldType="password"
                label="Confirm Password"
                value={values.confirmPassword}
                handleChange={handleChange("confirmPassword")}
                handleBlur={handleBlur("confirmPassword")}
                errorText={
                  touched.confirmPassword ? errors.confirmPassword : ""
                }
                onSubmitEditing={handleSubmit}
              />
            </View>

            <ButtonGrey
              width={buttonWidthSmall}
              fontSize={FontSizes.medium}
              buttonText={languages.change}
              onPress={handleSubmit}
              hasOwnOnPress={true}
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
    width: "90%",
  },
});

export default ChangePassword;
