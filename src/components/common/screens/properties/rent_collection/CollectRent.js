import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../../../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../../../../constants";
import { useColors } from "../../../../../helpers/SetColors";
import { useUserID } from "../../../../../helpers/SetUserID";
import { formatNumberForAPI } from "../../../../../helpers/utils";
import { collectRentSchema } from "../../../../../helpers/validation/CollectRentValidation";
import ButtonGrey from "../../../buttons/ButtonGrey";
import InputFieldWithHint from "../../../input_fields/InputFieldWithHint";
import { useUserType } from "./../../../../../helpers/SetUserType";

const CollectRent = ({ navigation, route }) => {
  const userID = useUserID();
  const userType = useUserType();
  const { propertyID, rentAmount, salaryFixed, salaryPercentage } =
    route.params;
  const colors = useColors();

  const [loading, setLoading] = useState(false); // Indicates if the form is loading or not

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const moneyReceivedRef = React.useRef();

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
        moneyReceived: "",
      }}
      validationSchema={collectRentSchema}
      onSubmit={(values) => {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to submit?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setLoading(true);

                // in the case where manager is collecting rent from tenant
                if (userType === "M") {
                  const data = {
                    managerID: userID,
                    propertyID,
                    collectedAmount: formatNumberForAPI(values.moneyReceived),
                  };

                  console.log(
                    "case where manager is collecting rent from tenant"
                  );
                  console.log(JSON.stringify(data, null, 2));

                  axios
                    .post(`${BASE_URL}/api/manager/collect-rent`, data)
                    .then((response) => {
                      Alert.alert(
                        "Success",
                        "The rent has been collected successfully."
                      );
                      navigation.goBack();
                    })
                    .catch((error) => {
                      if (error.response.status === 400) {
                        Alert.alert("Error", error.response.data.success);
                      } else {
                        console.log(JSON.stringify(error.response, null, 2));
                        Alert.alert("Error", "Something went wrong");
                      }
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }

                // in the case where owner is collecting rent from (tenant or manager)
                if (userType === "O") {
                  const data = {
                    ownerID: userID,
                    propertyID,
                    collectedAmount: formatNumberForAPI(values.moneyReceived),
                  };

                  console.log(
                    "case where owner is collecting rent from tenant or manager"
                  );
                  console.log(JSON.stringify(data, null, 2));

                  axios
                    .post(`${BASE_URL}/api/owner/collect-rent`, data)
                    .then((response) => {
                      Alert.alert(
                        "Success",
                        "The rent has been collected successfully."
                      );
                      navigation.goBack();
                    })
                    .catch((error) => {
                      if (error.response.status === 400) {
                        Alert.alert("Error", error.response.data.success);
                      } else {
                        console.log(JSON.stringify(error.response, null, 2));
                        Alert.alert("Error", "Something went wrong");
                      }
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }
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
                Collect Rent
              </Text>

              <Text
                style={[
                  {
                    fontSize: FontSizes.small,
                    color: colors.textPrimary,
                  },
                ]}
              >
                Rent Amount: {rentAmount} PKR
              </Text>

              {salaryFixed && (
                <>
                  <Text
                    style={[
                      {
                        fontSize: FontSizes.small,
                        color: colors.textPrimary,
                      },
                    ]}
                  >
                    Salary Fixed: {salaryFixed} PKR
                  </Text>

                  <Text
                    style={[
                      {
                        fontSize: FontSizes.small,
                        color: colors.textPrimary,
                      },
                    ]}
                  >
                    Collectable Amount: {rentAmount - salaryFixed} PKR
                  </Text>
                </>
              )}

              {salaryPercentage && (
                <>
                  <Text
                    style={[
                      {
                        fontSize: FontSizes.small,
                        color: colors.textPrimary,
                      },
                    ]}
                  >
                    Salary Percentage: {salaryPercentage}%
                  </Text>

                  <Text
                    style={[
                      {
                        fontSize: FontSizes.small,
                        color: colors.textPrimary,
                      },
                    ]}
                  >
                    Collectable Amount:{" "}
                    {rentAmount - (rentAmount * salaryPercentage) / 100} PKR
                  </Text>
                </>
              )}
            </View>

            <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
              <InputFieldWithHint
                fieldType="numeric"
                label="Money Received*"
                value={values.moneyReceived}
                handleChange={handleChange("moneyReceived")}
                handleBlur={handleBlur("moneyReceived")}
                errorText={touched.moneyReceived ? errors.moneyReceived : ""} // If the user has touched the input field and there's an error, display the error message
                onSubmitEditing={() => handleSubmit()} // When the user presses "Next" on the keyboard, the form will be submitted
                hintTexts={{
                  english: "Enter How much money have you received.",
                  urdu: "وہ رقم درج کریں جو آپ نے وصول کی ہے۔",
                }}
              />
            </View>

            <ButtonGrey
              loading={loading}
              width={BUTTON_WIDTH_SMALL}
              fontSize={FontSizes.medium}
              buttonText={"Collect"}
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

export default CollectRent;
