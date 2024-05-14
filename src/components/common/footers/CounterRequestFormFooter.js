import axios from "axios";
import { Formik } from "formik";
import { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../../constants";
import { useColors } from "../../../helpers/SetColors";
import { getValidationSchema } from "../../../helpers/validation/CounterRequestFormFooterValidation";
import CounterRequestFormFooterButton from "../buttons/CounterRequestFormFooterButton";
import InputField from "../input_fields/InputField";
import { useUserID } from "./../../../helpers/SetUserID";

const CounterRequestFormFooter = ({
  managerHireRequestID,
  navigation,
  salaryPaymentType,
  loading,
}) => {
  const colors = useColors();
  const managerID = useUserID();
  const [loadingButton, setLoadingButton] = useState(false);

  const formattedPurpose = (purpose) => {
    switch (purpose) {
      case "C":
        return "Caretaking";
      case "A":
        return "Acquiring Tenant";
      default:
        return "";
    }
  };

  if (loading) {
    return (
      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <ActivityIndicator size="large" color={colors.textPrimary} />
      </View>
    );
  }

  return (
    <Formik
      initialValues={{
        rentCounterOffer: "",
        fixedCounterOffer: "",
        percentageCounterOffer: "",
        oneTimeCounterOffer: "",
      }}
      validationSchema={getValidationSchema(salaryPaymentType)}
      onSubmit={(values) => {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to send this counter request?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setLoadingButton(true);

                const data = {
                  managerID: parseInt(managerID),
                  managerHireRequestID: parseInt(managerHireRequestID),
                  oneTimePay: parseInt(values.oneTimeCounterOffer),
                  salaryFixed: parseInt(values.fixedCounterOffer),
                  salaryPercentage: parseInt(values.percentageCounterOffer),
                  rent: parseInt(values.rentCounterOffer),
                };

                axios
                  .post(`${BASE_URL}/api/manager/send-counter-request`, data)
                  .then((response) => {
                    Alert.alert("Success", response.data.success);
                    navigation.goBack();
                  })
                  .catch((error) => {
                    Alert.alert("Error", error.response.data.error);
                  })
                  .finally(() => {
                    setLoadingButton(false);
                  });
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
        <View
          style={[
            styles.footer,
            {
              backgroundColor: colors.headerAndFooterBackground,
              paddingTop: 20,
            },
          ]}
        >
          <InputField
            label="Desired Rent (PKR)*"
            value={values.rentCounterOffer}
            onChangeText={handleChange("rentCounterOffer")}
            onBlur={handleBlur("rentCounterOffer")}
            errorText={touched.rentCounterOffer ? errors.rentCounterOffer : ""}
            touched={touched.rentCounterOffer}
            keyboardType="numeric"
          />

          {salaryPaymentType === "F" && (
            <InputField
              label="Desired Fixed Payment (PKR)*"
              value={values.fixedCounterOffer}
              onChangeText={handleChange("fixedCounterOffer")}
              onBlur={handleBlur("fixedCounterOffer")}
              errorText={
                touched.fixedCounterOffer ? errors.fixedCounterOffer : ""
              }
              touched={touched.fixedCounterOffer}
              keyboardType="numeric"
            />
          )}

          {salaryPaymentType === "P" && (
            <InputField
              label="Desired Percentage (%)*"
              value={values.percentageCounterOffer}
              onChangeText={handleChange("percentageCounterOffer")}
              onBlur={handleBlur("percentageCounterOffer")}
              errorText={
                touched.percentageCounterOffer
                  ? errors.percentageCounterOffer
                  : ""
              }
              touched={touched.percentageCounterOffer}
              keyboardType="numeric"
            />
          )}

          {salaryPaymentType !== "P" && salaryPaymentType !== "F" && (
            <InputField
              label="Desired One Time Payment (PKR)*"
              value={values.oneTimeCounterOffer}
              onChangeText={handleChange("oneTimeCounterOffer")}
              onBlur={handleBlur("oneTimeCounterOffer")}
              errorText={
                touched.oneTimeCounterOffer ? errors.oneTimeCounterOffer : ""
              }
              touched={touched.oneTimeCounterOffer}
              keyboardType="numeric"
            />
          )}

          <View style={styles.footerButtonContainer}>
            <CounterRequestFormFooterButton
              loading={loadingButton}
              buttonWidth={BUTTON_WIDTH_SMALL}
              onPress={handleSubmit}
              borderColor={colors.borderGreen}
              buttonText="Send"
              isBold={true}
            />

            <CounterRequestFormFooterButton
              buttonWidth={BUTTON_WIDTH_SMALL}
              onPress={() => navigation.goBack()}
              borderColor={colors.borderRed}
              buttonText="Back"
              isBold={true}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  footer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: "2%",
    paddingHorizontal: "5%",
  },
  footerTitle: {
    textAlign: "center",
    marginBottom: "2%",
  },
  footerBodyText: {
    fontSize: FontSizes.small,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1%",
  },
  footerButtonContainer: {
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default CounterRequestFormFooter;
