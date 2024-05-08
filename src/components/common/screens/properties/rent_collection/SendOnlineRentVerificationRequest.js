import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../../../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../../../../constants";
import { useColors } from "../../../../../helpers/SetColors";
import { useUserID } from "../../../../../helpers/SetUserID";
import { sendOnlineRentVerificationRequestSchema } from "../../../../../helpers/validation/SendOnlineRentVerificationRequestValidation";
import ButtonGrey from "../../../buttons/ButtonGrey";
import InputFieldWithHint from "../../../input_fields/InputFieldWithHint";

const SendOnlineRentVerificationRequest = ({ navigation, route }) => {
  const tenantID = useUserID();
  const { propertyID } = route.params;
  const colors = useColors();

  const [loading, setLoading] = useState(false); // Indicates if the form is loading or not

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const verificationMessageRef = React.useRef();

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
        verificationMessage: "",
      }}
      validationSchema={sendOnlineRentVerificationRequestSchema}
      onSubmit={(values) => {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to send the online verification request?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setLoading(true);

                const data = {
                  tenantID: tenantID,
                  propertyID: propertyID,
                  verificationMessage: values.verificationMessage,
                };

                axios
                  .post(
                    `${BASE_URL}/api/tenant/submit-verification-request`,
                    data
                  )
                  .then((response) => {
                    Alert.alert(
                      "Success",
                      "Online Verification request sent successfully."
                    );
                    navigation.goBack();
                  })
                  .catch((error) => {
                    console.log(JSON.stringify(error.response, null, 2));
                    Alert.alert("Error", "Something went wrong");
                  })
                  .finally(() => {
                    setLoading(false);
                  });
              },
            },
          ],
          { cancelable: false }
        );
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
                Send Online Rent Verification Request
              </Text>
            </View>

            <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
              <InputFieldWithHint
                label="Verification Message*"
                value={values.verificationMessage}
                handleChange={handleChange("verificationMessage")}
                handleBlur={handleBlur("verificationMessage")}
                errorText={
                  touched.verificationMessage ? errors.verificationMessage : ""
                } // If the user has touched the input field and there's an error, display the error message
                ref={verificationMessageRef}
                onSubmitEditing={() => handleSubmit()} // When the user presses "Next" on the keyboard, the form will be submitted
                returnKeyType="next"
                hintTexts={{
                  english:
                    "Let the receiever know to which bank you have sent the online rent.",
                  urdu: "رسیور کو بتائیں کہ آپ نے آن لائن کرایہ کس بینک میں بھیجا ہے۔",
                }}
              />
            </View>

            <ButtonGrey
              loading={loading}
              width={BUTTON_WIDTH_SMALL}
              fontSize={FontSizes.medium}
              buttonText={"Submit"}
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
    width: "80%",
  },
});

export default SendOnlineRentVerificationRequest;
