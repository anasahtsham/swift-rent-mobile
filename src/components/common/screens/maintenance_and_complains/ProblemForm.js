import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  BackHandler,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_MEDIUM } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { useUserID } from "../../../../helpers/SetUserID";
import { useUserType } from "../../../../helpers/SetUserType";
import { reportBugSchema } from "../../../../helpers/validation/ReportBugValidation";
import ButtonGrey from "../../buttons/ButtonGrey";

const ProblemForm = ({ navigation, route }) => {
  const userID = useUserID();
  const userType = useUserType();
  // sendToType and propertyID for complain
  const { headerText, sendToType, propertyID } = route.params;
  const colors = useColors();
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

  const [height, setHeight] = useState();

  const descriptionRef = useRef();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{
            backgroundColor: colors.backgroundPrimary,
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={{ issueType: "", issueDescription: "" }}
            validationSchema={reportBugSchema}
            onSubmit={(values) => {
              Alert.alert(
                "Confirmation",
                "Are you sure you want to submit this complaint?",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      setLoading(true);
                      // if making complaint to admin
                      if (headerText === "Customer Support") {
                        axios
                          .post(`${BASE_URL}/api/common/customer-support`, {
                            senderID: userID,
                            senderType: userType,
                            complaintTitle: values.issueType,
                            complaintDescription: values.issueDescription,
                          })
                          .then(() => {
                            Alert.alert(
                              "Success",
                              "Your complaint has been submitted"
                            );
                            navigation.goBack();
                          })
                          .catch(() => {
                            Alert.alert("Error", "Something went wrong");
                          })
                          .finally(() => {
                            setLoading(false);
                          });
                      }
                      // if making complaint to manager, owner or tenant
                      else {
                        data = {
                          propertyID: propertyID,
                          userID: userID,
                          userType: userType,
                          sentToType: sendToType,
                          title: values.issueType,
                          description: values.issueDescription,
                        };

                        axios
                          .post(
                            `${BASE_URL}/api/common/register-complaint`,
                            data
                          )
                          .then(() => {
                            Alert.alert(
                              "Success",
                              "Your complaint has been submitted"
                            );
                            navigation.goBack();
                          })
                          .catch(() => {
                            Alert.alert("Error", "Something went wrong");
                          })
                          .finally(() => {
                            setLoading(false);
                          });
                      }
                    },
                  },
                ]
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
              <>
                <Text
                  style={[
                    styles.topTitle,
                    { color: colors.textPrimary, marginBottom: 10 },
                  ]}
                >
                  {headerText}
                </Text>

                {(sendToType === "M" ||
                  sendToType === "O" ||
                  sendToType === "T") && (
                  <Text
                    style={[
                      styles.topTitle,
                      {
                        color: colors.textPrimary,
                        marginBottom: 10,
                        fontSize: FontSizes.large,
                      },
                    ]}
                  >
                    {sendToType === "M"
                      ? "To Manager"
                      : sendToType === "O"
                      ? "To Owner"
                      : sendToType === "T"
                      ? "To Tenant"
                      : ""}
                  </Text>
                )}

                <View
                  style={{
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <TextInput
                    placeholder="Type of Issue"
                    placeholderTextColor={colors.textPrimary}
                    style={[
                      styles.textFieldInput,
                      {
                        color: colors.textPrimary,
                        borderColor: colors.borderPrimary,
                      },
                    ]}
                    onChangeText={handleChange("issueType")}
                    onBlur={handleBlur("issueType")}
                    value={values.issueType}
                    onSubmitEditing={() => descriptionRef.current.focus()}
                    returnKeyType="next"
                  />
                  {touched.issueType && errors.issueType && (
                    <Text style={{ color: colors.textRed, marginTop: 10 }}>
                      {errors.issueType}
                    </Text>
                  )}

                  <TextInput
                    ref={descriptionRef}
                    placeholder="Describe your problem"
                    placeholderTextColor={colors.textPrimary}
                    style={[
                      styles.textFieldInput,
                      {
                        height: height,
                        minHeight: 150,
                        textAlignVertical: "top",
                        color: colors.textPrimary,
                        borderColor: colors.borderPrimary,
                      },
                    ]}
                    onChangeText={handleChange("issueDescription")}
                    onBlur={handleBlur("issueDescription")}
                    value={values.issueDescription}
                    multiline={true}
                    onContentSizeChange={({
                      nativeEvent: {
                        contentSize: { height },
                      },
                    }) => {
                      setHeight(height);
                    }}
                  />
                  {touched.issueDescription && errors.issueDescription && (
                    <Text
                      style={{
                        color: colors.textRed,
                        marginTop: 10,
                      }}
                    >
                      {errors.issueDescription}
                    </Text>
                  )}
                </View>

                <View
                  style={{
                    marginTop: 150,
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <ButtonGrey
                    loading={loading}
                    fontSize={FontSizes.medium}
                    width={BUTTON_WIDTH_MEDIUM}
                    buttonText="Submit"
                    hasOwnOnPress={true}
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  topTitle: {
    fontSize: FontSizes.extraLarge,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
  },

  textFieldInput: {
    width: "90%",
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    textAlign: "left",
  },
});

export default ProblemForm;
