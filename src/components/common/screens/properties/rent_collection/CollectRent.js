import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../../../../assets/fonts/FontSizes";
import { BUTTON_WIDTH_SMALL } from "../../../../../constants";
import { useColors } from "../../../../../helpers/SetColors";
import { useUserID } from "../../../../../helpers/SetUserID";
import ButtonGrey from "../../../buttons/ButtonGrey";
import InputFieldWithHint from "../../../input_fields/InputFieldWithHint";

const CollectRent = ({ navigation, route }) => {
  const tenantID = useUserID();
  const { propertyID } = route.params;
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
      validationSchema={{}}
      onSubmit={(values) => {}}
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
            </View>

            <View style={[styles.textInputsContainer, { marginBottom: 40 }]}>
              <InputFieldWithHint
                label="Money Received*"
                value={values.moneyReceived}
                handleChange={handleChange("moneyReceived")}
                handleBlur={handleBlur("moneyReceived")}
                errorText={touched.moneyReceived ? errors.moneyReceived : ""} // If the user has touched the input field and there's an error, display the error message
                onSubmitEditing={() => handleSubmit} // When the user presses "Next" on the keyboard, the form will be submitted
                hintTexts={{
                  english:
                    "Enter How much money have you received. If you have only received a part of the rent, enter the amount you have received, then in the next month enter the remaining amount even if his rent for that month hasnt increased automatically based on how much was left from the previous month.",
                  urdu: "درج کریں کہ آپ نے کتنے پیسے وصول کئے ہیں۔ اگر آپ نے کرایہ کا صرف ایک حصہ وصول کیا ہے تو اس میں درج کریں جو رقم آپ نے وصول کی ہے، پھر اگلے مہینے اس باقی رقم کو درج کریں چاہے اس کا کرایہ اس مہینے میں بڑھا ہوا ہو یا نہیں جو پچھلے مہینے سے باقی رہ گیا تھا۔",
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
