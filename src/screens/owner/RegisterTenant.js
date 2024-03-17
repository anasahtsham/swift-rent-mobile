import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import InputField from "../../components/common/input_fields/InputField";
import { buttonWidthSmall } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { forgotPasswordSchema } from "../../helpers/validation/ValidationSchemas";
import InputFieldWithHint from "./../../components/common/input_fields/InputFieldWithHint";

const RegisterTenant = ({ navigation }) => {
  const colors = useColors();

  const dropdownStyles = {
    style: {
      backgroundColor: colors.buttonBackgroundPrimary,
      borderColor: colors.buttonBorderPrimary,
      borderWidth: 1,
    },
    textStyle: {
      fontFamily: "OpenSansRegular",
      fontSize: FontSizes.small,
      color: colors.textPrimary,
    },
    dropDownContainerStyle: {
      backgroundColor: colors.backgroundPrimary,
      borderColor: colors.buttonBorderPrimary,
      borderWidth: 1,
    },
    theme: colors.dropDownTheme,
    itemSeparator: true,
  };

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const securityAmountRef = React.useRef();
  const leaseTillRef = React.useRef();
  const evictionPeriodRef = React.useRef();
  const yearlyIncreaseRef = React.useRef();
  const lateRentFineRef = React.useRef();
  const tenantContactRef = React.useRef();

  const [openRentDue, setOpenRentDue] = useState(false);
  const [valueRentDue, setValueRentDue] = useState(null);
  const [itemsRentDue, setItemsRentDue] = useState([
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
  ]);

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

            <View style={[styles.bodyContainer, { marginBottom: 20 }]}>
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
                isLeaseTill={true}
                fieldType="date"
                borderRadius={10}
                label="Lease Till"
                value={values.leaseTill}
                onChangeText={handleChange("leaseTill")}
                onBlur={handleBlur("leaseTill")}
                error={errors.leaseTill}
                touched={touched.leaseTill}
                returnKeyType="next"
                onSubmitEditing={() => evictionPeriodRef.current?.focus()}
                ref={leaseTillRef}
              />
              <InputFieldWithHint
                borderRadius={10}
                label="Eviction Period"
                value={values.evictionPeriod}
                onChangeText={handleChange("evictionPeriod")}
                onBlur={handleBlur("evictionPeriod")}
                error={errors.evictionPeriod}
                touched={touched.evictionPeriod}
                returnKeyType="next"
                nextInput={yearlyIncreaseRef}
                ref={evictionPeriodRef}
                hintTexts={{
                  english:
                    "Eviction period refers to the amount of time notice must be given before a tenant is required to vacate the property. For example, you can set it to 30 days or 60 days depending on your local laws and agreements.",
                  urdu: "خارجی مدت وقت اس وقت کا حتمی وقت ہے جب کرایہ دار کو جائیداد خالی کرنے کا حکم دیا جاتا ہے۔ مثال کے طور پر، آپ اسے 30 دن یا 60 دن کر سکتے ہیں، جو آپ کے مقامی قوانین اور معاہدوں پر منحصر ہوتا ہے۔",
                }}
              />
              <InputFieldWithHint
                canBeDisabled={true}
                borderRadius={10}
                label="Yearly Increase"
                value={values.yearlyIncrease}
                onChangeText={handleChange("yearlyIncrease")}
                onBlur={handleBlur("yearlyIncrease")}
                error={errors.yearlyIncrease}
                touched={touched.yearlyIncrease}
                returnKeyType="next"
                ref={yearlyIncreaseRef}
                nextInput={lateRentFineRef}
                hintTexts={{
                  english:
                    "Yearly increase refers to the percentage by which the rent can be increased each year. For example, you can set it to 3% to allow for a 3% increase in rent annually.",
                  urdu: "سالانہ اضافہ وقت کی فی صد میں اضافہ کا مطلب ہے جس سے کرایہ ہر سال بڑھایا جا سکتا ہے۔ مثال کے طور پر، آپ اسے 3 فی صد پر مقرر کر سکتے ہیں تاکہ کرایہ ہر سال 3 فی صد بڑھایا جا سکے۔",
                }}
              />
              <DropDownPicker
                {...dropdownStyles}
                listMode="SCROLLVIEW"
                theme={colors.dropDownTheme}
                zIndex={4000}
                open={openRentDue}
                value={valueRentDue}
                items={itemsRentDue}
                setOpen={setOpenRentDue}
                setValue={setValueRentDue}
                setItems={setItemsRentDue}
                placeholder="Rent Due Date"
              />

              <View style={{ height: 25 }} />

              <InputFieldWithHint
                canBeDisabled={true}
                borderRadius={10}
                label="Late Rent Fine"
                value={values.lateRentFine}
                onChangeText={handleChange("lateRentFine")}
                onBlur={handleBlur("lateRentFine")}
                error={errors.lateRentFine}
                touched={touched.lateRentFine}
                returnKeyType="next"
                nextInput={tenantContactRef}
                ref={lateRentFineRef}
                hintTexts={{
                  english:
                    "Late rent fine refers to the additional fee charged when the rent payment is not made on time. For example, you can set it to $50 to be charged if the rent is not paid within 5 days of the due date.",
                  urdu: "دیر سے ادا کرایہ جرمانہ وہ اضافی فیس ہے جو کرایہ کی ادائیگی وقت پر نہیں کی جاتی ہے۔ مثال کے طور پر، آپ اسے 5 دن کی حد سے زائد دیر کے لئے ادا نہ ہونے پر 50 ڈالر مقرر کرسکتے ہیں۔",
                }}
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
    width: "80%",
  },
});

export default RegisterTenant;
