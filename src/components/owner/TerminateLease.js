import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import * as FontSizes from "../../../../../assets/fonts/FontSizes";
import axios from "axios";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useUserID } from "../../helpers/SetUserID";
import { formatNumberForAPI } from "../../helpers/utils";
import { terminateLeaseSchema } from "../../helpers/validation/TerminateLeaseValidation";
import ButtonGrey from "../common/buttons/ButtonGrey";
import InputFieldWithHint from "../common/input_fields/InputFieldWithHint";

const TerminateLease = ({ navigation, route }) => {
  const ownerID = useUserID();
  const { propertyID } = route.params;
  const colors = useColors();

  const [loading, setLoading] = useState(false); // Indicates if the form is loading or not

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

  const terminationReasonRef = useRef();

  return (
    <Formik
      initialValues={{
        moneyReturned: "",
        terminationReason: "",
      }}
      validationSchema={terminateLeaseSchema}
      onSubmit={(values) => {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to terminate the lease?",
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setLoading(true);

                const data = {
                  ownerID: ownerID,
                  propertyID: propertyID,
                  moneyReturned: formatNumberForAPI(values.moneyReturned),
                  terminationReason: values.terminationReason,
                };

                axios
                  .post(`${BASE_URL}/api/owner/terminate-tenant`, data)
                  .then((response) => {
                    Alert.alert(
                      "Success",
                      "The lease has been terminated successfully."
                    );
                    navigation.goBack();
                  })
                  .catch((error) => {
                    if (error.response.status === 400) {
                      console.log(JSON.stringify(error.response, null, 2));
                      Alert.alert("Error", error.response.data.success);
                    } else {
                      console.log(JSON.stringify(error.response, null, 2));
                      Alert.alert("Error", "Something went wrong");
                    }
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
            <View style={[styles.logoAndTextContainer, { marginBottom: 50 }]}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: FontSizes.large,
                    color: colors.textPrimary,
                  },
                ]}
              >
                Terminate Lease
              </Text>
            </View>

            <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
              <InputFieldWithHint
                textFieldIcon={icons.rupeeIcon}
                label="Money Returned"
                value={values.moneyReturned}
                handleChange={handleChange("moneyReturned")}
                handleBlur={handleBlur("moneyReturned")}
                errorText={touched.moneyReturned ? errors.moneyReturned : ""} // If the user has touched the input field and there's an error, display the error message
                onSubmitEditing={() => terminationReasonRef.current.focus()} // When the user presses "Next" on the keyboard focus the next field
                returnKeyType="next"
                hintTexts={{
                  english:
                    "The advanced or any other money returned to the tenant. Do not include the security deposit.",
                  urdu: "پیشہ یا کسی اور رقم جو کرایہ دار کو واپس کی گئی ہے۔ سیکیورٹی جمع نہ شامل کریں۔",
                }}
              />

              <InputFieldWithHint
                label="Termination Reason*"
                value={values.terminationReason}
                handleChange={handleChange("terminationReason")}
                handleBlur={handleBlur("terminationReason")}
                errorText={
                  touched.terminationReason ? errors.terminationReason : ""
                } // If the user has touched the input field and there's an error, display the error message
                ref={terminationReasonRef}
                onSubmitEditing={() => handleSubmit} // When the user presses "Next" on the keyboard, the form will be submitted
                hintTexts={{
                  english: "Enter the reason for terminating the lease.",
                  urdu: "لیز ختم کرنے کا سبب درج کریں۔",
                }}
              />
            </View>

            <ButtonGrey
              loading={loading}
              width={BUTTON_WIDTH_SMALL}
              fontSize={FontSizes.medium}
              buttonText={"Terminate"}
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

export default TerminateLease;
