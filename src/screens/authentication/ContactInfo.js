import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import InputField from "../../components/common/input_fields/InputField";
import { BASE_URL, buttonWidthSmaller } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { contactInfoSchema } from "../../helpers/validation/ValidationSchemas";

const ContactInfo = ({ navigation, route }) => {
  const { userType, firstName, lastName, date } = route.params;

  const colors = useColors();
  const languages = useLanguages();

  const [loading, setLoading] = useState(false);

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

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const emailRef = React.useRef();
  const phoneNumberRef = React.useRef();

  return (
    <Formik
      initialValues={{
        email: "",
        phoneNumber: "",
      }}
      validationSchema={contactInfoSchema}
      onSubmit={(values, {}) => {
        setLoading(true);
        // Prepare the data to send to the API
        const data = {
          email: values.email,
          phone: values.phoneNumber,
        };

        // Send a POST request to the API
        axios
          .post(`${BASE_URL}/api/auth/verify-credentials`, data)
          .then((response) => {
            // If the response data contains "success": true, navigate to the next screen
            if (response.data.success) {
              navigation.navigate("Set Up Password", {
                userType: userType,
                firstName: firstName,
                lastName: lastName,
                date: date,
                email: values.email,
                phoneNumber: values.phoneNumber,
              });
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
                  {languages.weNeedYourContactInformation}
                </Text>
              </View>

              <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
                <InputField
                  ref={emailRef}
                  textFieldIcon={icons.emailIcon}
                  fieldType="email-address"
                  label="Email"
                  value={values.email}
                  handleChange={handleChange("email")}
                  handleBlur={handleBlur("email")}
                  errorText={touched.email ? errors.email : ""} // If the user has touched the input field, display the error message
                  onSubmitEditing={() => phoneNumberRef.current.focus()} // When the user presses "Next" on the keyboard, the focus will move to the next input field
                  returnKeyType="next"
                />
                <InputField
                  ref={phoneNumberRef}
                  textFieldIcon={icons.phoneNumberIcon}
                  fieldType="phone-pad"
                  label="Phone Number"
                  value={values.phoneNumber}
                  handleChange={handleChange("phoneNumber")}
                  handleBlur={handleBlur("phoneNumber")}
                  errorText={touched.phoneNumber ? errors.phoneNumber : ""} // If the user has touched the input field, display the error message
                  onSubmitEditing={handleSubmit} // When the user presses "Next" on the keyboard, the form will be submitted
                />
              </View>

              <View style={styles.buttonsContainer}>
                <ButtonGrey
                  width={buttonWidthSmaller}
                  fontSize={FontSizes.small}
                  buttonText={languages.back}
                  userType={userType}
                  destinationScreen="Get To Know"
                  navigation={navigation}
                />
                <ButtonGrey
                  loading={loading}
                  width={buttonWidthSmaller}
                  fontSize={FontSizes.small}
                  buttonText={languages.next}
                  onPress={handleSubmit} // When the user presses "Next", the form is submitted
                  hasOwnOnPress={true} // Indicates that this button is a submit button
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
    height: "35%",
    width: "90%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
});

export default ContactInfo;
