import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { buttonWidthSmaller } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { getToKnowSchema } from "../../helpers/validation/ValidationSchemas";
import InputField from "./../../components/common/input_fields/InputField";

const GetToKnow = ({ navigation, route }) => {
  const { userType } = route.params;

  const colors = useColors();
  const languages = useLanguages();

  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const dateRef = React.useRef();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        date: "",
      }}
      validationSchema={getToKnowSchema}
      onSubmit={(values) => {
        navigation.navigate("Contact Info", {
          userType: userType,
          firstName: values.firstName,
          lastName: values.lastName,
          date: values.date,
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
                  {languages.letsGetToKnowYou}
                </Text>
              </View>

              <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
                <InputField
                  ref={firstNameRef}
                  textFieldIcon={icons.userIcon}
                  fieldType="name"
                  label="First Name"
                  value={values.firstName}
                  handleChange={handleChange("firstName")}
                  handleBlur={handleBlur("firstName")}
                  errorText={touched.firstName ? errors.firstName : ""}
                  onSubmitEditing={() => lastNameRef.current.focus()}
                />
                <InputField
                  ref={lastNameRef}
                  textFieldIcon={icons.userIcon}
                  fieldType="name"
                  label="Last Name"
                  value={values.lastName}
                  handleChange={handleChange("lastName")}
                  handleBlur={handleBlur("lastName")}
                  errorText={touched.lastName ? errors.lastName : ""}
                />
                <InputField
                  ref={dateRef}
                  fieldType="date"
                  label="Date of Birth"
                  value={values.date}
                  handleChange={handleChange("date")}
                  handleBlur={handleBlur("date")}
                  errorText={touched.date ? errors.date : ""}
                />
              </View>

              <View style={styles.buttonsContainer}>
                <ButtonGrey
                  width={buttonWidthSmaller}
                  fontSize={FontSizes.small}
                  buttonText={languages.back}
                  destinationScreen="Who Are You"
                  navigation={navigation}
                />
                <ButtonGrey
                  width={buttonWidthSmaller}
                  fontSize={FontSizes.small}
                  buttonText={languages.next}
                  onPress={handleSubmit}
                  isSubmitButton={true}
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
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
});

export default GetToKnow;
