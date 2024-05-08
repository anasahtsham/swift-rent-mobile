import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { forgotPasswordSchema } from "../../helpers/validation/ForgotPasswordValidation";
import InputField from "./../../components/common/input_fields/InputField";

const ForgotPassword = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();

  const [loading, setLoading] = useState(false); // Indicates if the form is loading or not

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const emailOrPhoneRef = React.useRef();

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
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={(values) => {
        setLoading(true);
        axios
          .post(`${BASE_URL}/api/auth/forgot-password`, {
            emailOrPhone: values.emailOrPhone,
          })
          .then((response) => {
            Alert.alert("Success", response.data.success);
          })
          .catch((error) => {
            if (error.response && error.response.data.error) {
              Alert.alert("Error", error.response.data.error);
            } else {
              console.error("There was an error!", error);
            }
          })
          .finally(() => {
            setLoading(false);
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
                onSubmitEditing={() => handleSubmit()} // When the user presses "Next" on the keyboard, the form will be submitted
                returnKeyType="next"
              />
            </View>

            <ButtonGrey
              loading={loading}
              width={BUTTON_WIDTH_SMALL}
              fontSize={FontSizes.medium}
              buttonText={"Reset"}
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

export default ForgotPassword;
