import { Formik } from "formik";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { BUTTON_WIDTH_SMALLer } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import InputField from "./../../components/common/input_fields/InputField";
import { getToKnowSchema } from "./../../helpers/validation/GetToKnowValidation";

const GetToKnow = ({ navigation, route }) => {
  const { userType } = route.params; // userType is either "T", "O", or "M" (tenant, owner, or manager)

  const colors = useColors();
  const languages = useLanguages();

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const lastNameRef = React.useRef();
  const dateRef = React.useRef();

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
        firstName: "",
        lastName: "",
        date: "",
      }}
      validationSchema={getToKnowSchema}
      onSubmit={(values) => {
        // Pass the user's first name, last name, and date of birth to the next screen
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
                  textFieldIcon={icons.userIcon}
                  fieldType="name"
                  label="First Name"
                  value={values.firstName}
                  handleChange={handleChange("firstName")}
                  handleBlur={handleBlur("firstName")}
                  errorText={touched.firstName ? errors.firstName : ""} // If the user has touched the input field, display the error message
                  onSubmitEditing={() => lastNameRef.current.focus()}
                  returnKeyType="next"
                />
                <InputField
                  ref={lastNameRef}
                  textFieldIcon={icons.userIcon}
                  fieldType="name"
                  label="Last Name"
                  value={values.lastName}
                  handleChange={handleChange("lastName")}
                  handleBlur={handleBlur("lastName")}
                  errorText={touched.lastName ? errors.lastName : ""} // If the user has touched the input field, display the error message
                  returnKeyType="next"
                  onSubmitEditing={() => dateRef.current.focus()}
                />
                <InputField
                  ref={dateRef}
                  fieldType="date"
                  label="Date of Birth"
                  value={values.date}
                  handleChange={handleChange("date")}
                  handleBlur={handleBlur("date")}
                  errorText={touched.date ? errors.date : ""} // If the user has touched the input field, display the error message
                />
              </View>

              <View style={styles.buttonsContainer}>
                <ButtonGrey
                  width={BUTTON_WIDTH_SMALLer}
                  fontSize={FontSizes.small}
                  buttonText={languages.back}
                  hasOwnOnPress={true}
                  onPress={() => navigation.goBack()}
                />
                <ButtonGrey
                  width={BUTTON_WIDTH_SMALLer}
                  fontSize={FontSizes.small}
                  buttonText={languages.next}
                  onPress={handleSubmit} // When the user presses "Next", the form is submitted
                  hasOwnOnPress={true} // pass true so that the component can change its functionality according to submit button and the onPress is called that is passed from the prop instead of the default navigation
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
    height: "40%",
    width: "90%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
});

export default GetToKnow;
