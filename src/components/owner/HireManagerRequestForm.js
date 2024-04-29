import { Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BUTTON_WIDTH_MEDIUM } from "../../constants";
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

const HireManagerRequestForm = ({ navigation }) => {
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
    { label: "Leasing Property", value: "leasing_property" },
  ]);

  // Rent Collection By Dropdown
  const [openRentCollectionByDropdown, setOpenRentCollectionByDropdown] =
    useState(false);
  const [valueRentCollectionByDropdown, setRentCollectionByDropdown] =
    useState(null);
  const [itemsRentCollectionByDropdown, setItemsRentCollectionByDropdown] =
    useState([
      { label: "Manager", value: "by_manager" },
      { label: "Both", value: "both" },
    ]);

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

  // Payment Type Dropdown
  const [openPaymentTypeDropdown, setOpenPaymentTypeDropdown] = useState(false);
  const [valuePaymentTypeDropdown, setPaymentTypeDropdown] = useState(null);
  const [itemsPaymentTypeDropdown, setItemsPaymentTypeDropdown] = useState([
    { label: "Percentage", value: "percentage" },
    { label: "Fixed", value: "fixed" },
  ]);

  // Rent Period Dropdown
  const [openRentPeriodDropdown, setOpenRentPeriodDropdown] = useState(false);
  const [valueRentPeriodDropdown, setRentPeriodDropdown] = useState(null);
  const [itemsRentPeriodDropdown, setItemsRentPeriodDropdown] = useState([
    { label: "Monthly", value: "monthly" },
    { label: "Yearly", value: "yearly" },
  ]);

  const [errorDropdowns, setErrorDropdowns] = useState(false);

  //dropdown open functions
  const onPurposeOfHireDropdownOpen = useCallback(() => {
    setOpenRentCollectionByDropdown(false);
    setOpenBringTenantsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
    setOpenRentPeriodDropdown(false);
  }, []);
  const onRentCollectionByDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenBringTenantsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
    setOpenRentPeriodDropdown(false);
  }, []);
  const onBringTenantsByDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenRentCollectionByDropdown(false);
    setOpenPaymentTypeDropdown(false);
    setOpenRentPeriodDropdown(false);
  }, []);
  const onPaymentTypeDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenRentCollectionByDropdown(false);
    setOpenBringTenantsByDropdown(false);
    setOpenRentPeriodDropdown(false);
  }, []);
  const onRentPeriodDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenRentCollectionByDropdown(false);
    setOpenBringTenantsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  }, []);

  const handleCloseAllDropdowns = () => {
    setOpenPurposeOfHireDropdown(false);
    setOpenRentCollectionByDropdown(false);
    setOpenBringTenantsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
    setOpenRentPeriodDropdown(false);
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
    // console.log("rentPeriod", !valueRentPeriodDropdown);
    // console.log("RentCollectionBy", !valueRentCollectionByDropdown);
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
      if (!valueRentCollectionByDropdown || !valueBringTenantsByDropdown) {
        setErrorDropdowns(true);
      }
    } else if (valuePurposeOfHireDropdown === "leasing_property") {
      // Check if the 'Rent Period' dropdown value is not selected
      if (!valueRentPeriodDropdown) {
        setErrorDropdowns(true);
      }
    }
  }

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
          console.log("form is valid");
          navigation.navigate("Hire Manager Request Form");
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
                  Purpose Of Hire
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
                  placeholder="Purpose Of Hire"
                />
                <HintPopup
                  hintTexts={{
                    english: "English Hint Text",
                    urdu: "Urdu Hint Text",
                  }}
                />
              </View>

              {valuePurposeOfHireDropdown === "acquire_tenant" && (
                <InputFieldWithHint
                  borderRadius={7}
                  label="Agent One Time Fee"
                  fieldType="numeric"
                  value={values.agentOneTimeFee}
                  handleChange={handleChange("agentOneTimeFee")}
                  handleBlur={handleBlur("agentOneTimeFee")}
                  errorText={
                    touched.agentOneTimeFee ? errors.agentOneTimeFee : ""
                  }
                  hintTexts={{
                    english: "English Hint Text",
                    urdu: "Urdu Hint Text",
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
                        Payment Type
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
                        placeholder="Payment Type"
                      />
                      <HintPopup
                        hintTexts={{
                          english: "English Hint Text",
                          urdu: "Urdu Hint Text",
                        }}
                      />
                    </View>
                    {valuePaymentTypeDropdown === "percentage" && (
                      <InputFieldWithHint
                        borderRadius={7}
                        label="Percentage"
                        fieldType="numeric"
                        value={values.percentage}
                        handleChange={handleChange("percentage")}
                        handleBlur={handleBlur("percentage")}
                        errorText={touched.percentage ? errors.percentage : ""}
                        hintTexts={{
                          english: "English Hint Text",
                          urdu: "Urdu Hint Text",
                        }}
                      />
                    )}
                    {valuePaymentTypeDropdown === "fixed" && (
                      <InputFieldWithHint
                        borderRadius={7}
                        label="Fixed"
                        fieldType="numeric"
                        value={values.fixed}
                        handleChange={handleChange("fixed")}
                        handleBlur={handleBlur("fixed")}
                        errorText={touched.fixed ? errors.fixed : ""}
                        hintTexts={{
                          english: "English Hint Text",
                          urdu: "Urdu Hint Text",
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
                      Rent Collected By
                    </Text>
                    <DropDownPicker
                      {...dropdownStyles}
                      listMode="SCROLLVIEW"
                      theme={colors.dropDownTheme}
                      zIndex={2000}
                      zIndexInverse={5000}
                      open={openRentCollectionByDropdown}
                      value={valueRentCollectionByDropdown}
                      items={itemsRentCollectionByDropdown}
                      onOpen={onRentCollectionByDropdownOpen}
                      setOpen={setOpenRentCollectionByDropdown}
                      setValue={setRentCollectionByDropdown}
                      setItems={setItemsRentCollectionByDropdown}
                      placeholder="Rent Collected By"
                    />
                    <HintPopup
                      hintTexts={{
                        english: "English Hint Text",
                        urdu: "Urdu Hint Text",
                      }}
                    />
                  </View>

                  <View style={[styles.dropdown, {}]}>
                    <Text
                      style={[
                        styles.dropdownLabel,
                        { color: colors.textPrimary },
                      ]}
                    >
                      Who will Bring Tenant?
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
                      placeholder="Who will Bring Tenant?"
                    />
                    <HintPopup
                      hintTexts={{
                        english: "English Hint Text",
                        urdu: "Urdu Hint Text",
                      }}
                    />
                  </View>
                </>
              )}

              {valuePurposeOfHireDropdown === "leasing_property" && (
                <View style={[styles.dropdown, {}]}>
                  <Text
                    style={[
                      styles.dropdownLabel,
                      { color: colors.textPrimary },
                    ]}
                  >
                    Rent Period
                  </Text>
                  <DropDownPicker
                    {...dropdownStyles}
                    listMode="SCROLLVIEW"
                    theme={colors.dropDownTheme}
                    zIndex={3000}
                    zIndexInverse={4000}
                    open={openRentPeriodDropdown}
                    value={valueRentPeriodDropdown}
                    items={itemsRentPeriodDropdown}
                    onOpen={onRentPeriodDropdownOpen}
                    setOpen={setOpenRentPeriodDropdown}
                    setValue={setRentPeriodDropdown}
                    setItems={setItemsRentPeriodDropdown}
                    placeholder="Rent Period"
                  />
                  <HintPopup
                    hintTexts={{
                      english: "English Hint Text",
                      urdu: "Urdu Hint Text",
                    }}
                  />
                </View>
              )}

              <InputFieldWithHint
                borderRadius={7}
                label="Rent Amount"
                fieldType="numeric"
                value={values.rentAmount}
                handleChange={handleChange("rentAmount")}
                handleBlur={handleBlur("rentAmount")}
                errorText={touched.rentAmount ? errors.rentAmount : ""}
                hintTexts={{
                  english: "English Hint Text",
                  urdu: "Urdu Hint Text",
                }}
              />

              <InputFieldWithHint
                borderRadius={7}
                label="Special Terms"
                fieldType="text"
                value={values.specialTerms}
                handleChange={handleChange("specialTerms")}
                handleBlur={handleBlur("specialTerms")}
                errorText={touched.specialTerms ? errors.specialTerms : ""}
                hintTexts={{
                  english: "English Hint Text",
                  urdu: "Urdu Hint Text",
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
                    english: "English Hint Text",
                    urdu: "Urdu Hint Text",
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
