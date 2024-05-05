import axios from "axios";
import { Formik } from "formik";
import { md5 } from "js-md5";
import React, { useEffect } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { useLanguages } from "../../../../helpers/SetLanguages";
import { useUserID } from "../../../../helpers/SetUserID";
import { changePasswordSchema } from "../../../../helpers/validation/ChangePasswordValidation";
import ButtonGrey from "../../buttons/ButtonGrey";
import InputField from "../../input_fields/InputField";

const ChangePassword = ({ navigation }) => {
  const userID = useUserID();
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
      onSubmit={async (values) => {
        try {
          const data = {
            userID: userID,
            oldPassword: md5(values.oldPassword),
            newPassword: md5(values.password),
          };

          await axios.post(`${BASE_URL}/api/auth/change-password`, data);
          Alert.alert("Success", "Password changed successfully");
          navigation.goBack();
        } catch (error) {
          Alert.alert("Error changing password", error.response.data.error);
        }
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
              width={BUTTON_WIDTH_SMALL}
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
