import { Formik } from "formik";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { BUTTON_WIDTH_SMALL } from "../../../constants";
import { useColors } from "../../../helpers/SetColors";
import { getValidationSchema } from "../../../helpers/validation/CounterRequestFormFooterValidation";
import OwnerHiringFooterButton from "../buttons/OwnerHiringFooterButton";
import InputField from "../input_fields/InputField";

const CounterRequestFormFooter = ({
  navigation,
  purpose,
  salaryPaymentType,
}) => {
  const colors = useColors();

  const fixedCounterOfferRef = useRef();
  const percentageCounterOfferRef = useRef();
  const oneTimeCounterOfferRef = useRef();

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
        console.log(values);
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
            { backgroundColor: colors.headerAndFooterBackground },
          ]}
        >
          <Text
            style={[
              styles.footerTitle,
              {
                fontSize: FontSizes.midSmall,
                fontWeight: "bold",
                color: colors.textPrimary,
              },
            ]}
          >
            Hiring For {formattedPurpose(purpose)}
          </Text>

          <InputField
            onSubmitEditing={() => fixedCounterOfferRef.current.focus()}
            returnKeyType="next"
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
              ref={fixedCounterOfferRef}
              onSubmitEditing={() => percentageCounterOfferRef.current.focus()}
              returnKeyType="next"
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
              ref={percentageCounterOfferRef}
              onSubmitEditing={() => oneTimeCounterOfferRef.current.focus()}
              returnKeyType="next"
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
              ref={oneTimeCounterOfferRef}
              returnKeyType="done"
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
            <OwnerHiringFooterButton
              buttonWidth={BUTTON_WIDTH_SMALL}
              onPress={handleSubmit}
              borderColor={colors.borderGreen}
              buttonText="Accept"
              isBold={true}
            />

            <OwnerHiringFooterButton
              buttonWidth={BUTTON_WIDTH_SMALL}
              onPress={() => navigation.goBack()}
              borderColor={colors.borderRed}
              buttonText="Go Back"
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
