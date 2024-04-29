import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_SMALL } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { useUserID } from "../../helpers/SetUserID";
import { useUserType } from "../../helpers/SetUserType";
import { registerTenantSchema } from "../../helpers/validation/RegisterTenantValidation";
import ButtonGrey from "../common/buttons/ButtonGrey";
import InputField from "../common/input_fields/InputField";
import InputFieldWithHint from "../common/input_fields/InputFieldWithHint";

const RegisterTenant = ({ navigation, route }) => {
  const { id } = route.params;
  const colors = useColors();
  const userID = useUserID();
  const userType = useUserType();

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

  //dropdown for rent due date
  const [openRentDue, setOpenRentDue] = useState(false);
  const [valueRentDue, setValueRentDue] = useState(null);
  const [valueRentDueError, setValueRentDueError] = useState(false);
  const [itemsRentDue, setItemsRentDue] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
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
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
  ]);

  useEffect(() => {
    if (valueRentDue) {
      setValueRentDueError(false);
    }
  }, [valueRentDue]);

  // Refs are used to focus on the next input field when the user presses "Next" on the keyboard
  const tenantContactRef = React.useRef();
  const leasedForMonthsRef = React.useRef();
  const securityAmountRef = React.useRef();
  const advancePaymentRef = React.useRef();
  const advancePaymentForMonthsRef = React.useRef();
  const yearlyIncreaseRef = React.useRef();
  const incrementPeriodRef = React.useRef();
  const lateRentFineRef = React.useRef();

  const [isSecurityAmountEditable, setIsSecurityAmountEditable] =
    useState(false);
  const [isAdvancePaymentEditable, setIsAdvancePaymentEditable] =
    useState(false);
  const [isYearlyIncreaseEditable, setIsYearlyIncreaseEditable] =
    useState(false);
  const [isLateRentFineEditable, setIsLateRentFineEditable] = useState(false);
  const [currentSchema, setCurrentSchema] = useState(
    registerTenantSchema(
      isSecurityAmountEditable,
      isAdvancePaymentEditable,
      isYearlyIncreaseEditable,
      isLateRentFineEditable
    )
  );

  return (
    <Formik
      initialValues={{
        //sorted in order of the form generation
        rentAmount: "",
        tenantContact: "",
        leasedForMonths: "",
        securityAmount: "",
        advancePayment: "",
        advancePaymentForMonths: "",
        yearlyIncrease: "",
        incrementPeriod: "",
        lateRentFine: "",
      }}
      validationSchema={currentSchema}
      onSubmit={(values) => {
        const data = {
          // sorted in order for postman
          propertyID: id,
          phone: values.tenantContact,
          registeredByID: userID,
          registeredByType: userType,
          leasedForMonths: values.leasedForMonths,
          incrementPercentage: values.yearlyIncrease,
          incrementPeriod: values.incrementPeriod,
          rent: values.rentAmount,
          securityDeposit: values.securityAmount,
          advancePayment: values.advancePayment,
          advancePaymentMonths: values.advancePaymentForMonths,
          dueDate: valueRentDue,
          fine: values.lateRentFine,
        };

        console.log(data);
        axios
          .post(`${BASE_URL}/api/owner/register-tenant`, data)
          .then((response) => {
            if (response.data.success) {
              Alert.alert("Success", "Tenant Registered Successfully!");
              navigation.goBack();
            } else {
              Alert.alert("Error", response.data.error);
            }
          })
          .catch((error) => {
            Alert.alert("Error", error.response.data.error);
            console.error(error);
          });
      }}
    >
      {(formikProps) => {
        const {
          handleChange,
          handleBlur,
          handleSubmit,
          validateForm,
          values,
          errors,
          touched,
        } = formikProps;

        const isSecurityAmountEditableRef = useRef(isSecurityAmountEditable);
        const isAdvancePaymentEditableRef = useRef(isAdvancePaymentEditable);
        const isYearlyIncreaseEditableRef = useRef(isYearlyIncreaseEditable);
        const isLateRentFineEditableRef = useRef(isLateRentFineEditable);

        useEffect(() => {
          isSecurityAmountEditableRef.current = isSecurityAmountEditable;
          isAdvancePaymentEditableRef.current = isAdvancePaymentEditable;
          isYearlyIncreaseEditableRef.current = isYearlyIncreaseEditable;
          isLateRentFineEditableRef.current = isLateRentFineEditable;

          setCurrentSchema(
            registerTenantSchema(
              isSecurityAmountEditable,
              isAdvancePaymentEditable,
              isYearlyIncreaseEditable,
              isLateRentFineEditable
            )
          );

          validateForm();
        }, [
          isSecurityAmountEditableRef.current,
          isAdvancePaymentEditableRef.current,
          isYearlyIncreaseEditableRef.current,
          isLateRentFineEditableRef.current,
          isSecurityAmountEditable,
          isAdvancePaymentEditable,
          isYearlyIncreaseEditable,
          isLateRentFineEditable,
        ]);

        return (
          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled={true}
            onTouchEnd={() => {
              setOpenRentDue(false);
            }}
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
                <Text
                  style={{
                    fontSize: FontSizes.extraSmall,
                    color: colors.textPrimary,
                    fontFamily: "OpenSansRegular",
                    alignSelf: "flex-start",
                    marginLeft: 10,
                  }}
                >
                  Rent Due Date
                </Text>
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

                {valueRentDueError && (
                  <Text
                    style={{
                      color: colors.textRed,
                      fontSize: FontSizes.extraSmall,
                      alignSelf: "flex-start",
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Select an Option!
                  </Text>
                )}

                <View style={{ height: valueRentDueError ? 10 : 25 }} />

                <InputField
                  fieldType="numeric"
                  borderRadius={10}
                  label="Rent Amount (PKR)"
                  value={values.rentAmount}
                  handleChange={handleChange("rentAmount")}
                  handleBlur={handleBlur("rentAmount")}
                  errorText={touched.rentAmount ? errors.rentAmount : ""}
                  returnKeyType="next"
                  onSubmitEditing={() => tenantContactRef.current.focus()}
                />

                <InputField
                  fieldType="phone-pad"
                  borderRadius={10}
                  label="Tenant Contact"
                  value={values.tenantContact}
                  handleChange={handleChange("tenantContact")}
                  handleBlur={handleBlur("tenantContact")}
                  errorText={touched.tenantContact ? errors.tenantContact : ""}
                  onSubmitEditing={() => leasedForMonthsRef.current?.focus()}
                  returnKeyType="next"
                  ref={tenantContactRef}
                />

                <InputField
                  fieldType="numeric"
                  borderRadius={10}
                  label="Leased For (Months)"
                  value={values.leasedForMonths}
                  handleChange={handleChange("leasedForMonths")}
                  handleBlur={handleBlur("leasedForMonths")}
                  errorText={
                    touched.leasedForMonths ? errors.leasedForMonths : ""
                  }
                  returnKeyType="next"
                  ref={leasedForMonthsRef}
                  onSubmitEditing={() => securityAmountRef.current?.focus()}
                />

                <InputFieldWithHint
                  isEditable={isSecurityAmountEditable}
                  setIsEditable={setIsSecurityAmountEditable}
                  fieldType="numeric"
                  canBeDisabled={true}
                  borderRadius={10}
                  label="Security Amount (PKR)"
                  value={isSecurityAmountEditable ? values.securityAmount : ""}
                  handleChange={handleChange("securityAmount")}
                  handleBlur={handleBlur("securityAmount")}
                  errorText={
                    touched.securityAmount ? errors.securityAmount : ""
                  }
                  returnKeyType="next"
                  onSubmitEditing={() => advancePaymentRef.current?.focus()}
                  ref={securityAmountRef}
                  hintTexts={{
                    english:
                      "Security amount refers to the amount of money that the tenant pays as a security deposit. For example, you can set it to $2000 to be paid as a security deposit.",
                    urdu: "سیکیورٹی رقم وہ رقم ہے جو کرایہ دار سیکیورٹی جمع کرانے کے طور پر ادا کرتا ہے۔ مثال کے طور پر، آپ اسے 2000 ڈالر پر مقرر کرسکتے ہیں تاکہ یہ سیکیورٹی جمع کرایا جائے۔",
                  }}
                />

                <InputFieldWithHint
                  isEditable={isAdvancePaymentEditable}
                  setIsEditable={setIsAdvancePaymentEditable}
                  fieldType="numeric"
                  canBeDisabled={true}
                  borderRadius={10}
                  label="Advance Payment (PKR)"
                  value={isAdvancePaymentEditable ? values.advancePayment : ""}
                  handleChange={handleChange("advancePayment")}
                  handleBlur={handleBlur("advancePayment")}
                  errorText={
                    touched.advancePayment ? errors.advancePayment : ""
                  }
                  returnKeyType="next"
                  ref={advancePaymentRef}
                  onSubmitEditing={() =>
                    advancePaymentForMonthsRef.current?.focus()
                  }
                  hintTexts={{
                    english:
                      "Advance payment refers to the amount of rent that the tenant pays in advance. For example, you can set it to $1000 to be paid before the start of each month.",
                    urdu: "اعلی ادا کرایہ وہ رقم ہے جو کرایہ دار پہلے ہی ادا کرتا ہے۔ مثال کے طور پر، آپ اسے 1000 ڈالر پر مقرر کرسکتے ہیں تاکہ ہر مہینے کی شروعات سے پہلے ادا کیا جائے۔",
                  }}
                />

                {isAdvancePaymentEditable && (
                  <InputFieldWithHint
                    fieldType="numeric"
                    borderRadius={10}
                    label="Advance Payment For (Months)"
                    value={values.advancePaymentForMonths}
                    handleChange={handleChange("advancePaymentForMonths")}
                    handleBlur={handleBlur("advancePaymentForMonths")}
                    errorText={
                      touched.advancePaymentForMonths
                        ? errors.advancePaymentForMonths
                        : ""
                    }
                    returnKeyType="next"
                    ref={advancePaymentForMonthsRef}
                    onSubmitEditing={() => yearlyIncreaseRef.current?.focus()}
                    hintTexts={{
                      english:
                        "Advance payment for months refers to the number of months for which the advance payment is made. For example, you can set it to 2 to pay the rent for 2 months in advance.",
                      urdu: "مہینوں کے لیے اعلی ادا کرایہ وہ مہینے ہیں جن کے لیے اعلی ادا کیا جاتا ہے۔ مثال کے طور پر، آپ اسے 2 پر مقرر کرسکتے ہیں تاکہ کرایہ کو 2 مہینے پہلے ادا کیا جائے۔",
                    }}
                  />
                )}

                <InputFieldWithHint
                  isEditable={isYearlyIncreaseEditable}
                  setIsEditable={setIsYearlyIncreaseEditable}
                  fieldType="numeric"
                  canBeDisabled={true}
                  borderRadius={10}
                  label="Yearly Increase (%)"
                  value={isYearlyIncreaseEditable ? values.yearlyIncrease : ""}
                  handleChange={handleChange("yearlyIncrease")}
                  handleBlur={handleBlur("yearlyIncrease")}
                  errorText={
                    touched.yearlyIncrease ? errors.yearlyIncrease : ""
                  }
                  returnKeyType="next"
                  ref={yearlyIncreaseRef}
                  onSubmitEditing={() => incrementPeriodRef.current?.focus()}
                  hintTexts={{
                    english:
                      "Yearly increase refers to the percentage by which the rent can be increased each year. For example, you can set it to 3% to allow for a 3% increase in rent annually.",
                    urdu: "سالانہ اضافہ وقت کی فی صد میں اضافہ کا مطلب ہے جس سے کرایہ ہر سال بڑھایا جا سکتا ہے۔ مثال کے طور پر، آپ اسے 3 فی صد پر مقرر کر سکتے ہیں تاکہ کرایہ ہر سال 3 فی صد بڑھایا جا سکے۔",
                  }}
                />

                {isYearlyIncreaseEditable && (
                  <InputFieldWithHint
                    fieldType="numeric"
                    borderRadius={10}
                    label="Increment Period (Months)"
                    value={values.incrementPeriod}
                    handleChange={handleChange("incrementPeriod")}
                    handleBlur={handleBlur("incrementPeriod")}
                    errorText={
                      touched.incrementPeriod ? errors.incrementPeriod : ""
                    }
                    returnKeyType="next"
                    ref={incrementPeriodRef}
                    onSubmitEditing={() => lateRentFineRef.current?.focus()}
                    hintTexts={{
                      english:
                        "Increment period refers to the amount of time after which the rent will be increased by the yearly increase percentage. For example, you can set it to 12 months to increase the rent annually.",
                      urdu: "اضافہ مدت وقت اس وقت کی مدت ہے جس کے بعد کرایہ سالانہ اضافہ فی صد سے بڑھایا جائے گا۔ مثال کے طور پر، آپ اسے 12 مہینے پر مقرر کر سکتے ہیں تاکہ کرایہ سالانہ بڑھایا جائے۔",
                    }}
                  />
                )}

                <InputFieldWithHint
                  isEditable={isLateRentFineEditable}
                  setIsEditable={setIsLateRentFineEditable}
                  fieldType="numeric"
                  canBeDisabled={true}
                  borderRadius={10}
                  label="Late Rent Fine (PKR)"
                  value={isLateRentFineEditable ? values.lateRentFine : ""}
                  handleChange={handleChange("lateRentFine")}
                  handleBlur={handleBlur("lateRentFine")}
                  errorText={touched.lateRentFine ? errors.lateRentFine : ""}
                  ref={lateRentFineRef}
                  onSubmitEditing={handleSubmit}
                  hintTexts={{
                    english:
                      "Late rent fine refers to the additional fee charged when the rent payment is not made on time. For example, you can set it to $50 to be charged if the rent is not paid within 5 days of the due date.",
                    urdu: "دیر سے ادا کرایہ جرمانہ وہ اضافی فیس ہے جو کرایہ کی ادائیگی وقت پر نہیں کی جاتی ہے۔ مثال کے طور پر، آپ اسے 5 دن کی حد سے زائد دیر کے لئے ادا نہ ہونے پر 50 ڈالر مقرر کرسکتے ہیں۔",
                  }}
                />
              </View>

              <ButtonGrey
                width={BUTTON_WIDTH_SMALL}
                fontSize={FontSizes.medium}
                buttonText="Register"
                onPress={() => {
                  if (!valueRentDue) {
                    setValueRentDueError(true);
                    handleSubmit();
                  } else {
                    setValueRentDueError(false);
                    handleSubmit();
                  }
                }} // When the user presses "Change", the form will be submitted
                hasOwnOnPress={true} // Indicates to the component that this is a submit button so that it can change its flow
              />
              <View style={{ height: 30 }} />
            </View>
          </KeyboardAwareScrollView>
        );
      }}
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