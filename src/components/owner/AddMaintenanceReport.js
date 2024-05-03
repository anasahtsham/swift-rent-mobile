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
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_MEDIUM } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { addMaintenanceReportSchema } from "../../helpers/validation/AddMaintenanceReportValidation";
import ButtonGrey from "../common/buttons/ButtonGrey";

const AddMaintenanceReport = ({ navigation, route }) => {
  const { propertyID } = route.params;
  const colors = useColors();
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState();

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

  const costRef = useRef();
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
            initialValues={{
              maintenanceTitle: "",
              maintenanceDescription: "",
              maintenanceCost: "",
            }}
            validationSchema={addMaintenanceReportSchema}
            onSubmit={(values) => {
              setLoading(true);

              const data = {
                propertyID: propertyID,
                title: values.maintenanceTitle,
                description: values.maintenanceDescription,
                cost: values.maintenanceCost,
              };

              axios
                .post(`${BASE_URL}/api/owner/generate-maintenance-report`, data)
                .then(() => {
                  Alert.alert(
                    "Success",
                    "Maintenance report has been added successfully"
                  );
                  navigation.pop(2);
                })
                .catch((error) => {
                  Alert.alert("Error", error.message);
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
              <>
                <Text
                  style={[
                    styles.topTitle,
                    { color: colors.textPrimary, marginBottom: 10 },
                  ]}
                >
                  Add Maintenace Report
                </Text>

                <View
                  style={{
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <TextInput
                    placeholder="Type of Maintenance"
                    placeholderTextColor={colors.textPrimary}
                    style={[
                      styles.textFieldInput,
                      {
                        color: colors.textPrimary,
                        borderColor: colors.borderPrimary,
                      },
                    ]}
                    onChangeText={handleChange("maintenanceTitle")}
                    onBlur={handleBlur("maintenanceTitle")}
                    value={values.maintenanceTitle}
                    onSubmitEditing={() => costRef.current.focus()}
                    returnKeyType="next"
                  />
                  {touched.maintenanceTitle && errors.maintenanceTitle && (
                    <Text style={{ color: colors.textRed, marginTop: 10 }}>
                      {errors.maintenanceTitle}
                    </Text>
                  )}

                  <TextInput
                    ref={costRef}
                    placeholder="Cost"
                    placeholderTextColor={colors.textPrimary}
                    style={[
                      styles.textFieldInput,
                      {
                        color: colors.textPrimary,
                        borderColor: colors.borderPrimary,
                      },
                    ]}
                    onChangeText={handleChange("maintenanceCost")}
                    onBlur={handleBlur("maintenanceCost")}
                    value={values.maintenanceCost}
                    keyboardType="numeric"
                    returnKeyType="next"
                    onSubmitEditing={() => descriptionRef.current.focus()}
                  />
                  {touched.maintenanceCost && errors.maintenanceCost && (
                    <Text style={{ color: colors.textRed, marginTop: 10 }}>
                      {errors.maintenanceCost}
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
                    onChangeText={handleChange("maintenanceDescription")}
                    onBlur={handleBlur("maintenanceDescription")}
                    value={values.maintenanceDescription}
                    multiline={true}
                    onContentSizeChange={({
                      nativeEvent: {
                        contentSize: { height },
                      },
                    }) => {
                      setHeight(height);
                    }}
                  />
                  {touched.maintenanceDescription &&
                    errors.maintenanceDescription && (
                      <Text
                        style={{
                          color: colors.textRed,
                          marginTop: 10,
                        }}
                      >
                        {errors.maintenanceDescription}
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

export default AddMaintenanceReport;
