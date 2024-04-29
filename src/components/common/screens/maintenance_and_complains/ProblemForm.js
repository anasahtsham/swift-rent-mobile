import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
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
import { reportBugSchema } from "../../../../helpers/validation/ReportBugValidation";
import ButtonGrey from "../../buttons/ButtonGrey";

const ProblemForm = ({ navigation, route }) => {
  const { headerText, userID, userType } = route.params;
  const colors = useColors();

  let userTypeToSend = "";

  switch (userType) {
    case "owner":
      userTypeToSend = "O";
      break;
    case "tenant":
      userTypeToSend = "T";
      break;
    case "manager":
      userTypeToSend = "M";
    default:
      userTypeToSend = "";
  }

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
              if (headerText === "Customer Support") {
                axios
                  .post(`${BASE_URL}/api/common/customer-support`, {
                    senderID: userID,
                    senderType: userTypeToSend,
                    complaintTitle: values.issueType,
                    complaintDescription: values.issueDescription,
                  })
                  .then((response) => {
                    Alert.alert("Report Sent", response.data.message);
                  })
                  .catch((error) => {
                    Alert.alert("Error", error.response.data.error);
                  });
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
              <>
                <Text
                  style={[
                    styles.topTitle,
                    { color: colors.textPrimary, marginBottom: 10 },
                  ]}
                >
                  {headerText}
                </Text>

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
                  />
                  {touched.issueType && errors.issueType && (
                    <Text style={{ color: colors.textRed, marginTop: 10 }}>
                      {errors.issueType}
                    </Text>
                  )}
                  <TextInput
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
