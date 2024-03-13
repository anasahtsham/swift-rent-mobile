import React, { useEffect } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import { useColors } from "../../helpers/SetColors";
import { buttonWidthMedium } from "../../constants";
import { Formik } from "formik";
import { reportBugSchema } from "../../helpers/validation/ValidationSchemas";

const ReportBug = ({ navigation }) => {
  const colors = useColors();

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{ backgroundColor: colors.backgroundPrimary, flex: 1 }}
      >
        <Formik
          initialValues={{ issueType: "", issueDescription: "" }}
          validationSchema={reportBugSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.container}>
              <Text style={[styles.topTitle, { color: colors.textPrimary }]}>
                Report a Bug
              </Text>
              <View
                style={[
                  styles.issueTypeField,
                  {
                    borderColor: colors.borderPrimary,
                    backgroundColor: colors.textInputFieldBackground,
                  },
                ]}
              >
                <TextInput
                  placeholder="Type of Issue"
                  placeholderTextColor={colors.textPrimary}
                  style={{ textAlign: "left", color: colors.textPrimary }}
                  onChangeText={handleChange("issueType")}
                  onBlur={handleBlur("issueType")}
                  value={values.issueType}
                />
                {touched.issueType && errors.issueType && (
                  <View style={{ paddingTop: 10 }}>
                    <Text style={{ color: colors.textRed }}>
                      {errors.issueType}
                    </Text>
                  </View>
                )}
              </View>
              <View
                style={[
                  styles.bugDescriptiionField,
                  {
                    borderColor: colors.borderPrimary,
                    backgroundColor: colors.textInputFieldBackground,
                  },
                ]}
              >
                <TextInput
                  placeholder="Describe your problem"
                  placeholderTextColor={colors.textPrimary}
                  style={{
                    textAlign: "left",
                    color: colors.textPrimary,
                    minHeight: 150,
                    textAlignVertical: "top",
                  }}
                  onChangeText={handleChange("issueDescription")}
                  onBlur={handleBlur("issueDescription")}
                  value={values.issueDescription}
                  multiline={true}
                />
                {touched.issueDescription && errors.issueDescription && (
                  <View style={{ marginTop: -12 }}>
                    <Text style={{ color: colors.textRed }}>
                      {errors.issueDescription}
                    </Text>
                  </View>
                )}
              </View>
              <View style={{ alignSelf: "center", marginTop: 30 }}>
                <ButtonGrey
                  fontSize={FontSizes.medium}
                  width={buttonWidthMedium}
                  buttonText="Submit"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
    paddingBottom: 10,
  },
  topTitle: {
    fontSize: FontSizes.extraLarge,
    fontWeight: "bold",
    textAlign: "center",
  },
  issueTypeField: {
    height: 50,
    width: "80%",
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  bugDescriptiionField: {
    height: 150,
    width: "80%",
    marginTop: 30,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
});

export default ReportBug;
