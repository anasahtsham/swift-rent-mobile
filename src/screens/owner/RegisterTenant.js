import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import InputField from "../../components/common/input_fields/InputField";
import { buttonWidthSmall } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import { forgotPasswordSchema } from "../../helpers/validation/ValidationSchemas";

const RegisterTenant = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const rentAmountRef = React.useRef();
  const securityAmountRef = React.useRef();
  const leaseTillRef = React.useRef();
  const evictionPeriodRef = React.useRef();
  const yearlyIncreaseRef = React.useRef();
  const rentDueDateRef = React.useRef();
  const lateRentFineRef = React.useRef();
  const tenantContactRef = React.useRef();

  return (
    <Formik
      initialValues={{
        rentAmount: "",
        securityAmount: "",
        leaseTill: "",
        evictionPeriod: "",
        yearlyIncrease: "",
        rentDueDate: "",
        lateRentFine: "",
        tenantContact: "",
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={() => {
        navigation.navigate("Forgot Password");
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
            <Text
              style={[
                styles.headerText,
                {
                  fontSize: FontSizes.large,
                  color: colors.textPrimary,
                  marginVertical: 30,
                },
              ]}
            >
              Register Tenant
            </Text>

            <View style={[styles.bodyContainer, { marginBottom: 40 }]}>
              <InputField
                borderRadius={10}
                label="Rent Amount"
                value={values.rentAmount}
                onChangeText={handleChange("rentAmount")}
                onBlur={handleBlur("rentAmount")}
                error={errors.rentAmount}
                touched={touched.rentAmount}
                returnKeyType="next"
                onSubmitEditing={() => securityAmountRef.current.focus()}
              />
              <InputField
                borderRadius={10}
                label="Security Amount"
                value={values.securityAmount}
                onChangeText={handleChange("securityAmount")}
                onBlur={handleBlur("securityAmount")}
                error={errors.securityAmount}
                touched={touched.securityAmount}
                returnKeyType="next"
                onSubmitEditing={() => leaseTillRef.current.focus()}
                ref={securityAmountRef}
              />
              <InputField
                borderRadius={10}
                label="Lease Till"
                value={values.leaseTill}
                onChangeText={handleChange("leaseTill")}
                onBlur={handleBlur("leaseTill")}
                error={errors.leaseTill}
                touched={touched.leaseTill}
                returnKeyType="next"
                onSubmitEditing={() => evictionPeriodRef.current.focus()}
                ref={leaseTillRef}
              />
              <InputField
                borderRadius={10}
                label="Eviction Period"
                value={values.evictionPeriod}
                onChangeText={handleChange("evictionPeriod")}
                onBlur={handleBlur("evictionPeriod")}
                error={errors.evictionPeriod}
                touched={touched.evictionPeriod}
                returnKeyType="next"
                onSubmitEditing={() => yearlyIncreaseRef.current.focus()}
                ref={evictionPeriodRef}
              />
              <InputField
                borderRadius={10}
                label="Yearly Increase"
                value={values.yearlyIncrease}
                onChangeText={handleChange("yearlyIncrease")}
                onBlur={handleBlur("yearlyIncrease")}
                error={errors.yearlyIncrease}
                touched={touched.yearlyIncrease}
                returnKeyType="next"
                onSubmitEditing={() => rentDueDateRef.current.focus()}
                ref={yearlyIncreaseRef}
              />
              <InputField
                borderRadius={10}
                label="Rent Due Date"
                value={values.rentDueDate}
                onChangeText={handleChange("rentDueDate")}
                onBlur={handleBlur("rentDueDate")}
                error={errors.rentDueDate}
                touched={touched.rentDueDate}
                returnKeyType="next"
                onSubmitEditing={() => lateRentFineRef.current.focus()}
                ref={rentDueDateRef}
              />
              <InputField
                borderRadius={10}
                label="Late Rent Fine"
                value={values.lateRentFine}
                onChangeText={handleChange("lateRentFine")}
                onBlur={handleBlur("lateRentFine")}
                error={errors.lateRentFine}
                touched={touched.lateRentFine}
                returnKeyType="next"
                onSubmitEditing={() => tenantContactRef.current.focus()}
                ref={lateRentFineRef}
              />
              <InputField
                borderRadius={10}
                label="Tenant Contact"
                value={values.tenantContact}
                onChangeText={handleChange("tenantContact")}
                onBlur={handleBlur("tenantContact")}
                error={errors.tenantContact}
                touched={touched.tenantContact}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
                ref={tenantContactRef}
              />
            </View>

            <ButtonGrey
              width={buttonWidthSmall}
              fontSize={FontSizes.medium}
              buttonText="Register"
              onPress={handleSubmit} // When the user presses "Change", the form will be submitted
              isSubmitButton={true} // Indicates to the component that this is a submit button so that it can change its flow
            />
            <View style={{ height: 30 }} />
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
  headerText: { fontFamily: "OpenSansBold", textAlign: "center" },
  bodyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "80%",
  },
});

export default RegisterTenant;
