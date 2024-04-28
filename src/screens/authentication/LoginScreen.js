import axios from "axios";
import { Formik } from "formik";
import { md5 } from "js-md5";
import React, { useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../constants";
import { saveUserID, saveUserType } from "../../helpers";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { loginSchema } from "../../helpers/validation/LoginValidation";
import InputField from "./../../components/common/input_fields/InputField";

const LoginScreen = ({ navigation, route }) => {
  const { newRegister } = route.params || {};
  const colors = useColors();
  const languages = useLanguages();
  const [loading, setLoading] = useState(false);

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const emailOrPhoneRef = React.useRef();
  const passwordRef = React.useRef();

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
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        setLoading(true);
        if (newRegister) {
          // Prepare the data to send to the API
          const data = {
            emailOrPhone: values.emailOrPhone,
            userPassword: md5(values.password),
          };

          // Send a POST request to the API
          axios
            .post(`${BASE_URL}/api/auth/login`, data)
            .then((response) => {
              const { isOwner, isManager, isTenant } = response.data;

              // Check if the user is registered as an owner, manager, and tenant
              if (isOwner && isManager && isTenant) {
                // If the user is registered as all three, navigate to the "Login As" screen
                navigation.navigate("Login As", response.data);
              } else {
                // If not, navigate to the "Register As" screen
                navigation.navigate("Register As", response.data);
              }
            })
            .catch((error) => {
              // If the response data contains an error
              if (error.response && error.response.data.error) {
                Alert.alert("Error", error.response.data.error);
              } else {
                // Handle other errors here. For example, you could show an error message:
                console.error("There was an error!", error);
              }
            })
            .finally(() => setLoading(false));
        } else {
          // If the login is not part of the registration process
          // Prepare the data to send to the API

          const data = {
            emailOrPhone: values.emailOrPhone,
            userPassword: md5(values.password),
          };

          // Send a POST request to the API
          axios
            .post(`${BASE_URL}/api/auth/login`, data)
            .then((response) => {
              const { isOwner, isManager, isTenant, success } = response.data;

              if (success) {
                const roles = [isOwner, isManager, isTenant];
                const trueRoles = roles.filter(Boolean);

                if (trueRoles.length === 1) {
                  if (isOwner) {
                    saveUserID(response.data.userID.toString());
                    saveUserType("owner");
                    navigation.navigate("Owner Navigator");
                  } else if (isManager) {
                    saveUserID(response.data.userID.toString());
                    saveUserType("manager");
                    navigation.navigate("Manager Navigator");
                  } else if (isTenant) {
                    saveUserID(response.data.userID.toString());
                    saveUserType("tenant");
                    navigation.navigate("Tenant Navigator");
                  }
                } else {
                  // Navigate to "Login As" screen with response.data
                  navigation.navigate("Login As", response.data);
                }
              } else {
                // Handle the case where success is false
                Alert.alert("Login unsuccessful");
              }
            })
            .catch((error) => {
              // If the response data contains an error
              if (error.response && error.response.data.error) {
                Alert.alert("Error", error.response.data.error);
              } else {
                // Handle other errors here. For example, you could show an error message:
                Alert.alert("Error", error.toString());
              }
            })
            .finally(() => setLoading(false));
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

            <View style={[styles.textInputsContainer]}>
              <InputField
                ref={emailOrPhoneRef}
                textFieldIcon={icons.emailIcon}
                fieldType="email-address"
                label="Email or Phone"
                value={values.emailOrPhone}
                handleChange={handleChange("emailOrPhone")}
                handleBlur={handleBlur("emailOrPhone")}
                errorText={touched.emailOrPhone ? errors.emailOrPhone : ""} // If the user has touched the input field and there's an error, display the error message
                onSubmitEditing={() => passwordRef.current.focus()} // When the user presses "Next" on the keyboard, the focus will move to the next input field
                returnKeyType="next" // This changes the "Next" button on the keyboard to "Next"
              />
              <InputField
                ref={passwordRef}
                fieldType="password"
                label="Password"
                value={values.password}
                handleChange={handleChange("password")}
                handleBlur={handleBlur("password")}
                errorText={touched.password ? errors.password : ""} // If the user has touched the input field and there's an error, display the error message
                onSubmitEditing={handleSubmit} // When the user presses "Next" on the keyboard, the form will be submitted
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
              loading={loading}
              width={BUTTON_WIDTH_SMALL}
              fontSize={FontSizes.medium}
              buttonText={languages.login}
              onPress={handleSubmit} // When the user presses "Login", the form will be submitted
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
    width: "70%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "30%",
    width: "90%",
  },
});

export default LoginScreen;
