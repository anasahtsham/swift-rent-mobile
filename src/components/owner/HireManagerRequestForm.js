import axios from "axios";
import { Formik } from "formik";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_MEDIUM } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import {
  agentOneTimeFeeSchema,
  managerFixedSchema,
  managerPercentageSchema,
} from "../../helpers/validation/HireManagerValidation";
import ButtonGrey from "../common/buttons/ButtonGrey";
import Checkbox from "../common/checkboxes/Checkbox";
import InputFieldWithHint from "../common/input_fields/InputFieldWithHint";
import HintPopup from "../common/popups/HintPopup";

const HireManagerRequestForm = ({ navigation, route }) => {
  const { propertyID } = route.params;
  const colors = useColors();
  const [loading, setLoading] = useState(false);

  const dropdownStyles = {
    style: {
      backgroundColor: colors.buttonBackgroundPrimary,
      borderColor: colors.buttonBorderPrimary,
      borderWidth: 1,
    },
    textStyle: {
      fontFamily: "OpenSansRegular",
      fontSize: FontSizes.small,
      color: errorDropdowns ? colors.textRed : colors.textPrimary,
    },
    dropDownContainerStyle: {
      backgroundColor: colors.backgroundPrimary,
      borderColor: colors.buttonBorderPrimary,
      borderWidth: 1,
    },
    theme: colors.dropDownTheme,
    itemSeparator: true,
  };

  //Purpose of Hire Dropdown
  const [openPurposeOfHireDropdown, setOpenPurposeOfHireDropdown] =
    useState(false);
  const [valuePurposeOfHireDropdown, setPurposeOfHireDropdown] = useState(null);
  const [itemsPurposeOfHireDropdown, setItemsPurposeOfHireDropdown] = useState([
    { label: "Acquiring Tenant", value: "acquire_tenant" },
    { label: "Caretaking", value: "caretaking" },
  ]);

  //function that formats values for acquire_tenant to A, caretaking to C and leasing_property to L using switch statement
  const formatPurposeOfHire = (value) => {
    switch (value) {
      case "acquire_tenant":
        return "A";
      case "caretaking":
        return "C";
      default:
        return "";
    }
  };

  // Bring Tenants By Dropdown
  const [openBringTenantsByDropdown, setOpenBringTenantsByDropdown] =
    useState(false);
  const [valueBringTenantsByDropdown, setBringTenantsByDropdown] =
    useState(null);
  const [itemsBringTenantsByDropdown, setItemsBringTenantsByDropdown] =
    useState([
      { label: "Owner", value: "by_owner" },
      { label: "Manager", value: "by_manager" },
      { label: "Both", value: "both" },
    ]);

  //function that formats values for by_owner to O, by_manager to M and both to B using switch statement
  const formatBringTenantsBy = (value) => {
    switch (value) {
      case "by_owner":
        return "O";
      case "by_manager":
        return "M";
      case "both":
        return "B";
      default:
        return "";
    }
  };

  // Payment Type Dropdown
  const [openPaymentTypeDropdown, setOpenPaymentTypeDropdown] = useState(false);
  const [valuePaymentTypeDropdown, setPaymentTypeDropdown] = useState(null);
  const [itemsPaymentTypeDropdown, setItemsPaymentTypeDropdown] = useState([
    { label: "Percentage", value: "percentage" },
    { label: "Fixed", value: "fixed" },
  ]);

  //function that formats values for percentage to P and fixed to F using switch statement
  const formatPaymentType = (value) => {
    switch (value) {
      case "percentage":
        return "P";
      case "fixed":
        return "F";
      default:
        return "";
    }
  };

  const [errorDropdowns, setErrorDropdowns] = useState(false);

  //dropdown open functions
  const onPurposeOfHireDropdownOpen = useCallback(() => {
    setOpenBringTenantsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  }, []);

  const onBringTenantsByDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenPaymentTypeDropdown(false);
  }, []);

  const onPaymentTypeDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenBringTenantsByDropdown(false);
  }, []);

  const handleCloseAllDropdowns = () => {
    setOpenPurposeOfHireDropdown(false);
    setOpenBringTenantsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  };

  //checkboxes
  const [isLetManagerHandlePaperwork, setIsLetManagerHandlePapaerwork] =
    useState(false);

  const [validationSchema, setValidationSchema] = useState(
    agentOneTimeFeeSchema
  );

  useEffect(() => {
    // Check if the 'Payment Type' dropdown value is 'percentage'

    // console.log("Percentage", valuePaymentTypeDropdown === "percentage");
    // console.log("Fixed", valuePaymentTypeDropdown === "fixed");
    if (valuePaymentTypeDropdown === "percentage") {
      setValidationSchema(managerPercentageSchema);
    } else if (valuePaymentTypeDropdown === "fixed") {
      setValidationSchema(managerFixedSchema);
    }
    // console.log(Object.keys(validationSchema.fields));
  }, [valuePaymentTypeDropdown]);

  function validateDropdowns() {
    // console.log("result", errorDropdowns);
    setErrorDropdowns(false);

    // console.log("\npurpose", !valuePurposeOfHireDropdown);
    // console.log("paymentType", !valuePaymentTypeDropdown);
    // console.log("BringTenantsBy", !valueBringTenantsByDropdown);

    // Check if the 'Purpose Of Hire' dropdown value is not selected
    if (!valuePurposeOfHireDropdown) {
      setErrorDropdowns(true);
    }
    // Check if the 'Purpose Of Hire' dropdown value is 'caretaking'
    else if (valuePurposeOfHireDropdown === "caretaking") {
      // Check if the 'Payment Type' dropdown value is not selected
      if (!valuePaymentTypeDropdown) {
        setErrorDropdowns(true);
      }
      // Check if the 'Maintenance By' or 'Complains By' dropdown values are not selected
      if (!valueBringTenantsByDropdown) {
        setErrorDropdowns(true);
      }
    }
  }

  const agentOneTimeFeeRef = useRef(null);
  const rentAmountRef = useRef(null);
  const specialTermsRef = useRef(null);

  return (
    <Formik
      initialValues={{
        agentOneTimeFee: "",
        rentAmount: "",
        specialTerms: "",
        percentage: "",
        fixed: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        validateDropdowns();

        if (errorDropdowns === false) {
          setLoading(true);

          const data = {
            propertyID: propertyID,
            purpose: formatPurposeOfHire(valuePurposeOfHireDropdown),
            oneTimePay: values.agentOneTimeFee,
            salaryPamentType: formatPaymentType(valuePaymentTypeDropdown),
            salaryFixed: isNaN(parseInt(values.fixed, 10))
              ? 0
              : parseInt(values.fixed, 10),
            salaryPercentage: isNaN(parseInt(values.percentage, 10))
              ? 0
              : parseInt(values.percentage, 10),
            whoBringsTenant: formatBringTenantsBy(valueBringTenantsByDropdown),
            rent: values.rentAmount,
            specialCondition: values.specialTerms,
            needHelpWithLegalWork: isLetManagerHandlePaperwork,
          };

          axios
            .post(`${BASE_URL}/api/owner/generate-hire-request`, data)
            .then((response) => {
              Alert.alert("Success", response.data.success);
              navigation.goBack();
            })
            .catch((error) => {
              Alert.alert("Error", error.response.data.message);
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          setErrorDropdowns(true);
        }
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
        <TouchableWithoutFeedback
          onPress={() => {
            handleCloseAllDropdowns();
            Keyboard.dismiss();
          }}
        >
          <KeyboardAwareScrollView
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
            style={{
              backgroundColor: colors.backgroundPrimary,
            }}
            onTouchEnd={() => {
              handleCloseAllDropdowns();
            }}
          >
            <View
              style={{
                width: "80%",
                paddingVertical: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={[
                  styles.fontBold,
                  {
                    fontSize: FontSizes.large,
                    color: colors.textPrimary,
                    textAlign: "center",
                    marginBottom: 20,
                  },
                ]}
              >
                Manager Hiring Request Form
              </Text>
              <View style={[styles.dropdown, {}]}>
                <Text
                  style={[styles.dropdownLabel, { color: colors.textPrimary }]}
                >
                  Purpose Of Hire*
                </Text>
                <DropDownPicker
                  {...dropdownStyles}
                  listMode="SCROLLVIEW"
                  theme={colors.dropDownTheme}
                  zIndex={6000}
                  zIndexInverse={1000}
                  open={openPurposeOfHireDropdown}
                  value={valuePurposeOfHireDropdown}
                  items={itemsPurposeOfHireDropdown}
                  onOpen={onPurposeOfHireDropdownOpen}
                  setOpen={setOpenPurposeOfHireDropdown}
                  setValue={setPurposeOfHireDropdown}
                  setItems={setItemsPurposeOfHireDropdown}
                  placeholder="Purpose Of Hire*"
                />
                <HintPopup
                  top={34}
                  hintTexts={{
                    english:
                      "Will the manager acquire tenant or do caretaking?",
                    urdu: "مینیجر کرایہ دار کو حاصل کرے گا یا کیرٹیکنگ کرے گا؟",
                  }}
                />
              </View>

              {valuePurposeOfHireDropdown === "acquire_tenant" && (
                <InputFieldWithHint
                  ref={agentOneTimeFeeRef}
                  returnKeyType="next"
                  onSubmitEditing={() => rentAmountRef.current.focus()}
                  borderRadius={7}
                  label="Agent One Time Fee (PKR)*"
                  fieldType="numeric"
                  value={values.agentOneTimeFee}
                  handleChange={handleChange("agentOneTimeFee")}
                  handleBlur={handleBlur("agentOneTimeFee")}
                  errorText={
                    touched.agentOneTimeFee ? errors.agentOneTimeFee : ""
                  }
                  hintTexts={{
                    english:
                      "In the case of acquiring tenant, what is the agent's one-time fee?",
                    urdu: "کرایہ دار حاصل کرنے کی صورت میں ایجنٹ کی ایک بار کی فیس کیا ہے؟",
                  }}
                />
              )}

              {valuePurposeOfHireDropdown === "caretaking" && (
                <>
                  <>
                    <View style={[styles.dropdown, {}]}>
                      <Text
                        style={[
                          styles.dropdownLabel,
                          { color: colors.textPrimary },
                        ]}
                      >
                        Payment Type*
                      </Text>
                      <DropDownPicker
                        {...dropdownStyles}
                        listMode="SCROLLVIEW"
                        theme={colors.dropDownTheme}
                        zIndex={4000}
                        zIndexInverse={3000}
                        open={openPaymentTypeDropdown}
                        value={valuePaymentTypeDropdown}
                        items={itemsPaymentTypeDropdown}
                        onOpen={onPaymentTypeDropdownOpen}
                        setOpen={setOpenPaymentTypeDropdown}
                        setValue={setPaymentTypeDropdown}
                        setItems={setItemsPaymentTypeDropdown}
                        placeholder="Payment Type*"
                      />
                      <HintPopup
                        top={34}
                        hintTexts={{
                          english:
                            "Will the manager be paid in percentage or fixed amount?",
                          urdu: "کیا مینیجر کو فی صد یا مقررہ رقم میں ادا کیا جائے گا؟",
                        }}
                      />
                    </View>
                    {valuePaymentTypeDropdown === "percentage" && (
                      <InputFieldWithHint
                        borderRadius={7}
                        label="Percentage (%)*"
                        fieldType="numeric"
                        value={values.percentage}
                        handleChange={handleChange("percentage")}
                        handleBlur={handleBlur("percentage")}
                        errorText={touched.percentage ? errors.percentage : ""}
                        hintTexts={{
                          english:
                            "If the payment type is percentage, what is the percentage? keep in mind that by doing this the manager will get the advance payment cut in percentage",
                          urdu: "اگر ادائیگی کی قسم فی صد ہے تو فی صد کیا ہے؟ یاد رہے کہ ایسا کرنے سے مینیجر کو فی صد میں پیشگوئی کٹ جائے گی۔",
                        }}
                      />
                    )}
                    {valuePaymentTypeDropdown === "fixed" && (
                      <InputFieldWithHint
                        borderRadius={7}
                        label="Fixed (PKR)*"
                        fieldType="numeric"
                        value={values.fixed}
                        handleChange={handleChange("fixed")}
                        handleBlur={handleBlur("fixed")}
                        errorText={touched.fixed ? errors.fixed : ""}
                        hintTexts={{
                          english:
                            "If the payment type is fixed, what is the fixed amount? Keep in mind that by doing this the manager will get the advance payment cut in fixed amount.",
                          urdu: "اگر ادائیگی کی قسم مقررہ ہے تو مقررہ رقم کیا ہے؟ یاد رہے کہ ایسا کرنے سے مینیجر کو فیکس رقم میں پیشگوئی کٹ جائے گی۔",
                        }}
                      />
                    )}
                  </>

                  <View style={[styles.dropdown, {}]}>
                    <Text
                      style={[
                        styles.dropdownLabel,
                        { color: colors.textPrimary },
                      ]}
                    >
                      Who will Bring Tenant?*
                    </Text>
                    <DropDownPicker
                      {...dropdownStyles}
                      listMode="SCROLLVIEW"
                      theme={colors.dropDownTheme}
                      zIndex={1000}
                      zIndexInverse={6000}
                      open={openBringTenantsByDropdown}
                      value={valueBringTenantsByDropdown}
                      items={itemsBringTenantsByDropdown}
                      onOpen={onBringTenantsByDropdownOpen}
                      setOpen={setOpenBringTenantsByDropdown}
                      setValue={setBringTenantsByDropdown}
                      setItems={setItemsBringTenantsByDropdown}
                      placeholder="Who will Bring Tenant?*"
                    />
                    <HintPopup
                      top={34}
                      hintTexts={{
                        english: "Who will bring the tenant?",
                        urdu: "کرایہ دار کو کون لائے گا؟",
                      }}
                    />
                  </View>
                </>
              )}

              <InputFieldWithHint
                ref={rentAmountRef}
                returnKeyType="next"
                onSubmitEditing={() => specialTermsRef.current.focus()}
                borderRadius={7}
                label="Rent Amount (PKR)*"
                fieldType="numeric"
                value={values.rentAmount}
                handleChange={handleChange("rentAmount")}
                handleBlur={handleBlur("rentAmount")}
                errorText={touched.rentAmount ? errors.rentAmount : ""}
                hintTexts={{
                  english: "What is the rent amount?",
                  urdu: "کرایہ کی رقم کیا ہے؟",
                }}
              />

              <InputFieldWithHint
                ref={specialTermsRef}
                borderRadius={7}
                label="Special Terms"
                fieldType="text"
                value={values.specialTerms}
                handleChange={handleChange("specialTerms")}
                handleBlur={handleBlur("specialTerms")}
                errorText={touched.specialTerms ? errors.specialTerms : ""}
                hintTexts={{
                  english: "Any special terms?",
                  urdu: "کوئی خاص شرائط؟",
                }}
              />
              <View>
                <Checkbox
                  label="Let Manager Handle Paperwork"
                  isSelected={isLetManagerHandlePaperwork}
                  setIsSelected={setIsLetManagerHandlePapaerwork}
                />
                <HintPopup
                  top={12}
                  right={-25}
                  hintTexts={{
                    english: "Will the manager handle the paperwork?",
                    urdu: "کیا مینیجر کاغذات کا انتظام کرے گا؟",
                  }}
                />
              </View>
              <View style={{ height: 35 }} />
              {errorDropdowns && (
                <Text
                  style={[
                    styles.textBold,
                    {
                      color: colors.textRed,
                      textAlign: "center",
                      marginBottom: 20,
                    },
                  ]}
                >
                  Please select all dropdowns first!
                </Text>
              )}
              <ButtonGrey
                loading={loading}
                buttonText="Submit"
                fontSize={FontSizes.medium}
                width={BUTTON_WIDTH_MEDIUM}
                hasOwnOnPress={true}
                onPress={() => {
                  validateDropdowns();
                  handleSubmit();
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  fontRegular: {
    fontFamily: "OpenSansRegular",
  },
  fontBold: {
    fontFamily: "OpenSansBold",
  },
  dropdown: {
    marginBottom: 35,
  },
  dropdownLabel: {
    fontSize: FontSizes.extraSmall,
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default HireManagerRequestForm;
