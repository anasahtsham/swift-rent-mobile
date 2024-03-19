import { Formik } from "formik";
import { useCallback, useState } from "react";
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
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import Checkbox from "../../components/common/checkboxes/Checkbox";
import HintPopup from "../../components/common/popups/HintPopup";
import { buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { ratingScreenSchema } from "../../helpers/validation/ValidationSchemas";
import InputFieldWithHint from "./../../components/common/input_fields/InputFieldWithHint";

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

  //Purpose of Hire Dropdown
  const [openPurposeOfHireDropdown, setOpenPurposeOfHireDropdown] =
    useState(false);
  const [valuePurposeOfHireDropdown, setPurposeOfHireDropdown] = useState(null);
  const [itemsPurposeOfHireDropdown, setItemsPurposeOfHireDropdown] = useState([
    { label: "Find Tenant", value: "find_tenant" },
    { label: "Manage Property", value: "manage_property" },
  ]);

  //Manager Type Of Income Dropdown
  const [openManagerTypeOfIncomeDropdown, setOpenManagerTypeOfIncomeDropdown] =
    useState(false);
  const [valueManagerTypeOfIncomeDropdown, setManagerTypeOfIncomeDropdown] =
    useState(null);
  const [
    itemsManagerTypeOfIncomeDropdown,
    setItemsManagerTypeOfIncomeDropdown,
  ] = useState([
    { label: "By Owner", value: "by_owner" },
    { label: "Self Salaried", value: "self_salaried" },
  ]);

  // Maintenance By Dropdown
  const [openMaintenanceByDropdown, setOpenMaintenanceByDropdown] =
    useState(false);
  const [valueMaintenanceByDropdown, setMaintenanceByDropdown] = useState(null);
  const [itemsMaintenanceByDropdown, setItemsMaintenanceByDropdown] = useState([
    { label: "By Owner", value: "by_owner" },
    { label: "By Manager", value: "by_manager" },
    { label: "Both", value: "both" },
  ]);

  // Complains By Dropdown
  const [openComplainsByDropdown, setOpenComplainsByDropdown] = useState(false);
  const [valueComplainsByDropdown, setComplainsByDropdown] = useState(null);
  const [itemsComplainsByDropdown, setItemsComplainsByDropdown] = useState([
    { label: "By Owner", value: "by_owner" },
    { label: "By Manager", value: "by_manager" },
    { label: "Both", value: "both" },
  ]);

  // Payment Type Dropdown
  const [openPaymentTypeDropdown, setOpenPaymentTypeDropdown] = useState(false);
  const [valuePaymentTypeDropdown, setPaymentTypeDropdown] = useState(null);
  const [itemsPaymentTypeDropdown, setItemsPaymentTypeDropdown] = useState([
    { label: "Percentage", value: "percentage" },
    { label: "Fixed", value: "fixed" },
  ]);

  const [errorDropdowns, setErrorDropdowns] = useState(false);

  //dropdown open functions
  const onPurposeOfHireDropdownOpen = useCallback(() => {
    setOpenManagerTypeOfIncomeDropdown(false);
    setOpenMaintenanceByDropdown(false);
    setOpenComplainsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  }, []);
  const onManagerTypeOfIncomeDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenMaintenanceByDropdown(false);
    setOpenComplainsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  }, []);
  const onMaintenanceByDropdownOpen = useCallback(() => {
    setOpenManagerTypeOfIncomeDropdown(false);
    setOpenPurposeOfHireDropdown(false);
    setOpenComplainsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  }, []);
  const onComplainsByDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenManagerTypeOfIncomeDropdown(false);
    setOpenMaintenanceByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  }, []);
  const onPaymentTypeDropdownOpen = useCallback(() => {
    setOpenPurposeOfHireDropdown(false);
    setOpenManagerTypeOfIncomeDropdown(false);
    setOpenMaintenanceByDropdown(false);
    setOpenComplainsByDropdown(false);
  }, []);

  const handleCloseAllDropdowns = () => {
    setOpenPurposeOfHireDropdown(false);
    setOpenManagerTypeOfIncomeDropdown(false);
    setOpenMaintenanceByDropdown(false);
    setOpenComplainsByDropdown(false);
    setOpenPaymentTypeDropdown(false);
  };

  //checkboxes
  const [isLetManagerHandlePaperwork, setIsLetManagerHandlePapaerwork] =
    useState(false);

  return (
    <Formik
      initialValues={{
        managerOneTimeFee: "",
        rentAmount: "",
        specialTerms: "",
        percentage: "",
        fixed: "",
        rentPeriod: "",
      }}
      validationSchema={ratingScreenSchema}
      onSubmit={(values) => {
        setErrorDropdowns(false);

        if (!valuePurposeOfHireDropdown) {
          setErrorDropdowns(true);
        }
        if (valuePurposeOfHireDropdown === "manage_property") {
          if (!valueManagerTypeOfIncomeDropdown) {
            setErrorDropdowns(true);
          } else if (!valuePaymentTypeDropdown) {
            setErrorDropdowns(true);
          }
          if (!valueMaintenanceByDropdown) {
            setErrorDropdowns(true);
          }
          if (!valueComplainsByDropdown) {
            setErrorDropdowns(true);
          }
        }
        // check if all dropdowns are set
        console.log("\npurpose:", !valuePurposeOfHireDropdown);
        console.log("type income:", !valueManagerTypeOfIncomeDropdown);
        console.log("maintenance by:", !valueMaintenanceByDropdown);
        console.log("complains by:", !valueComplainsByDropdown);
        console.log("payment type:", !valuePaymentTypeDropdown);

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
                <DropDownPicker
                  {...dropdownStyles}
                  listMode="SCROLLVIEW"
                  theme={colors.dropDownTheme}
                  zIndex={5000}
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

              {valuePurposeOfHireDropdown === "find_tenant" && (
                <InputFieldWithHint
                  borderRadius={7}
                  label="Manager One Time Fee"
                  fieldType="numeric"
                  value={values.managerOneTimeFee}
                  handleChange={handleChange("managerOneTimeFee")}
                  handleBlur={handleBlur("managerOneTimeFee")}
                  errorText={
                    touched.managerOneTimeFee ? errors.managerOneTimeFee : ""
                  }
                  hintTexts={{
                    english: "English Hint Text",
                    urdu: "Urdu Hint Text",
                  }}
                />
              )}

              {valuePurposeOfHireDropdown === "manage_property" && (
                <>
                  <View style={[styles.dropdown, {}]}>
                    <DropDownPicker
                      {...dropdownStyles}
                      listMode="SCROLLVIEW"
                      theme={colors.dropDownTheme}
                      zIndex={4000}
                      zIndexInverse={2000}
                      open={openManagerTypeOfIncomeDropdown}
                      value={valueManagerTypeOfIncomeDropdown}
                      items={itemsManagerTypeOfIncomeDropdown}
                      onOpen={onManagerTypeOfIncomeDropdownOpen}
                      setOpen={setOpenManagerTypeOfIncomeDropdown}
                      setValue={setManagerTypeOfIncomeDropdown}
                      setItems={setItemsManagerTypeOfIncomeDropdown}
                      placeholder="Manager Type Of Income"
                    />
                    <HintPopup
                      hintTexts={{
                        english: "English Hint Text",
                        urdu: "Urdu Hint Text",
                      }}
                    />
                  </View>

                  {valueManagerTypeOfIncomeDropdown === "by_owner" && (
                    <>
                      <View style={[styles.dropdown, {}]}>
                        <DropDownPicker
                          {...dropdownStyles}
                          listMode="SCROLLVIEW"
                          theme={colors.dropDownTheme}
                          zIndex={3000}
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
                          errorText={
                            touched.percentage ? errors.percentage : ""
                          }
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
                  )}

                  {valueManagerTypeOfIncomeDropdown === "self_salaried" && (
                    <InputFieldWithHint
                      borderRadius={7}
                      label="Rent Period"
                      fieldType="text"
                      value={values.rentPeriod}
                      handleChange={handleChange("rentPeriod")}
                      handleBlur={handleBlur("rentPeriod")}
                      errorText={touched.rentPeriod ? errors.rentPeriod : ""}
                      hintTexts={{
                        english: "English Hint Text",
                        urdu: "Urdu Hint Text",
                      }}
                    />
                  )}

                  <View style={[styles.dropdown, {}]}>
                    <DropDownPicker
                      {...dropdownStyles}
                      listMode="SCROLLVIEW"
                      theme={colors.dropDownTheme}
                      zIndex={2000}
                      zIndexInverse={4000}
                      open={openMaintenanceByDropdown}
                      value={valueMaintenanceByDropdown}
                      items={itemsMaintenanceByDropdown}
                      onOpen={onMaintenanceByDropdownOpen}
                      setOpen={setOpenMaintenanceByDropdown}
                      setValue={setMaintenanceByDropdown}
                      setItems={setItemsMaintenanceByDropdown}
                      placeholder="Maintenance Managed By"
                    />
                    <HintPopup
                      hintTexts={{
                        english: "English Hint Text",
                        urdu: "Urdu Hint Text",
                      }}
                    />
                  </View>

                  <View style={[styles.dropdown, {}]}>
                    <DropDownPicker
                      {...dropdownStyles}
                      listMode="SCROLLVIEW"
                      theme={colors.dropDownTheme}
                      zIndex={1000}
                      zIndexInverse={5000}
                      open={openComplainsByDropdown}
                      value={valueComplainsByDropdown}
                      items={itemsComplainsByDropdown}
                      onOpen={onComplainsByDropdownOpen}
                      setOpen={setOpenComplainsByDropdown}
                      setValue={setComplainsByDropdown}
                      setItems={setItemsComplainsByDropdown}
                      placeholder="Complains Managed By"
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

              <Checkbox
                label="Let Manager Handle Paperwork"
                isSelected={isLetManagerHandlePaperwork}
                setIsSelected={setIsLetManagerHandlePapaerwork}
              />
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
                width={buttonWidthMedium}
                isSubmitButton={true}
                onPress={() => {
                  if (!!valuePurposeOfHireDropdown) {
                    setErrorDropdowns(false);
                  } else {
                    setErrorDropdowns(true);
                  }
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
});

export default HireManagerRequestForm;
