import { Formik } from "formik";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BackHandler,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import ButtonGrey from "../common/buttons/ButtonGrey";
import Checkbox from "../common/checkbox/Checkbox";
import InputField from "../common/input_fields/InputField";
import {
  agricultureCheckboxes,
  agricultureFieldTypes,
  buildingCheckboxes,
  buildingFieldTypes,
  commercialCheckboxes,
  commercialFieldTypes,
  factoryCheckboxes,
  factoryFieldTypes,
  flatCheckboxes,
  flatFieldTypes,
  housesCheckboxes,
  housesFieldTypes,
  industrialCheckboxes,
  industrialFieldTypes,
  lowerCheckboxes,
  lowerFieldTypes,
  officeCheckboxes,
  officeFieldTypes,
  roomCheckboxes,
  roomFieldTypes,
  shopCheckboxes,
  shopFieldTypes,
  upperCheckboxes,
  upperFieldTypes,
  warehouseCheckboxes,
  warehouseFieldTypes,
} from "./../../helpers/data/AddPropertyInfoData";

let fieldNames = [];

const AddPropertyInfo = ({ navigation, route }) => {
  const {
    city,
    subArea,
    street,
    building,
    propertyType,
    propertyTypeLabel,
    propertySubType,
    propertySubTypeLabel,
  } = route.params;

  const colors = useColors();
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  //drop down initializations

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

  const [openWaterAvailabilityDropdown, setOpenWaterAvailabilityDropdown] =
    useState(false);
  const [valueWaterAvailabilityDropdown, setValueWaterAvailabilityDropdown] =
    useState(null);
  const [itemsWaterAvailabilityDropdown, setItemsWaterAvailabilityDropdown] =
    useState([
      { label: "Boring", value: "boring" },
      { label: "Water Truck", value: "water_truck" },
      { label: "Water Supply", value: "water_supply" },
    ]);

  const [errorDropdowns, setErrorDropdowns] = useState(false);

  //dropdown error handling
  useEffect(() => {
    if (!!valueWaterAvailabilityDropdown) {
      setErrorDropdowns(false);
    }
  }, [valueWaterAvailabilityDropdown]);

  //dropdown open functions
  const onWaterAvailabilityDropdownOpen = useCallback(() => {}, []);

  const [checkboxStates, setCheckboxStates] = useState({
    hasDayCare: false,
    hasGarden: false,
    hasElectricity: false,
    hasGas: false,
    hasLift: false,
    hasPrayerRoom: false,
    hasRoofAccess: false,
    hasSafetyExit: false,
    hasSeperateElectricityMeter: false,
    hasServantRooms: false,
    hasWiFi: false,
    hasAirConditioned: false,
    isFurnished: false,
    isShared: false,
  });

  let checkboxes = [];

  switch (propertySubType) {
    case "house":
      checkboxes = housesCheckboxes;
      fieldNames = housesFieldTypes;
      break;
    case "upper_floor":
      checkboxes = upperCheckboxes;
      fieldNames = upperFieldTypes;
      break;
    case "lower_floor":
      checkboxes = lowerCheckboxes;
      fieldNames = lowerFieldTypes;
      break;
    case "flat":
      checkboxes = flatCheckboxes;
      fieldNames = flatFieldTypes;
      break;
    case "room":
      checkboxes = roomCheckboxes;
      fieldNames = roomFieldTypes;
      break;
    case "commercial":
      checkboxes = commercialCheckboxes;
      fieldNames = commercialFieldTypes;
      break;
    case "agriculture":
      checkboxes = agricultureCheckboxes;
      fieldNames = agricultureFieldTypes;
      break;
    case "industrial":
      checkboxes = industrialCheckboxes;
      fieldNames = industrialFieldTypes;
      break;
    case "office":
      checkboxes = officeCheckboxes;
      fieldNames = officeFieldTypes;
      break;
    case "shop":
      checkboxes = shopCheckboxes;
      fieldNames = shopFieldTypes;
      break;
    case "building":
      checkboxes = buildingCheckboxes;
      fieldNames = buildingFieldTypes;
      break;
    case "warehouse":
      checkboxes = warehouseCheckboxes;
      fieldNames = warehouseFieldTypes;
      break;
    case "factory":
      checkboxes = factoryCheckboxes;
      fieldNames = factoryFieldTypes;
      break;
    default:
      break;
  }

  const refs = useRef(fieldNames.map(() => React.createRef()));

  const focusNextField = (index) => {
    if (index < fieldNames.length - 1) {
      refs.current[index + 1].current.focus();
    }
  };

  const [validationSchema, setValidationSchema] = useState(yup.object());

  useEffect(() => {
    setValidationSchema(
      yup.object().shape(
        fieldNames.reduce((prev, curr) => {
          prev[curr.value] = yup
            .string()
            .matches(/^[0-9]*$/, "Only digits allowed and no spaces");
          return prev;
        }, {})
      )
    );
  }, [fieldNames]);

  return (
    <Formik
      initialValues={fieldNames.reduce(
        (prev, curr) => ({ ...prev, [curr.value]: "" }),
        {}
      )}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // check if all dropdowns are set
        if (!!valueWaterAvailabilityDropdown) {
          console.log("\n\n");

          // Log each value of fieldNames
          fieldNames.map((field) => {
            console.log(field.value, values[field.value]);
          });

          console.log("\n");

          // Log each value of checkboxes
          checkboxes.map((checkbox) => {
            console.log(checkbox.stateKey, checkboxStates[checkbox.stateKey]);
          });
          navigation.navigate("Add Property Info", {
            city: city,
            subArea: subArea,
            street: street,
            building: building,
            propertyType: propertyType,
            propertySubType: propertySubType,
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
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenWaterAvailabilityDropdown(false);
              Keyboard.dismiss();
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
                  styles.textBold,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.medium,
                    textAlign: "center",
                    width: "80%",
                    marginBottom: 50,
                  },
                ]}
              >
                {"\n"}
                {propertyTypeLabel}
                {"\n"}
                {propertySubTypeLabel}
              </Text>
              <View style={{ width: "80%" }}>
                <View style={styles.dropdownContainer}>
                  <DropDownPicker
                    {...dropdownStyles}
                    listMode="SCROLLVIEW"
                    theme={colors.dropDownTheme}
                    zIndex={4000}
                    zIndexInverse={1000}
                    open={openWaterAvailabilityDropdown}
                    value={valueWaterAvailabilityDropdown}
                    items={itemsWaterAvailabilityDropdown}
                    onOpen={onWaterAvailabilityDropdownOpen}
                    setOpen={setOpenWaterAvailabilityDropdown}
                    setValue={setValueWaterAvailabilityDropdown}
                    setItems={setItemsWaterAvailabilityDropdown}
                    placeholder="Water Availibility"
                  />
                </View>
                <View style={{ height: errorDropdowns ? 0 : 20 }} />
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
                {fieldNames.map((field, index) => (
                  <InputField
                    key={field.value}
                    ref={refs.current[index]}
                    borderRadius={7}
                    label={field.label}
                    fieldType="numeric"
                    value={values[field.value]}
                    handleChange={handleChange(field.value)}
                    handleBlur={handleBlur(field.value)}
                    errorText={touched[field.value] ? errors[field.value] : ""}
                    onSubmitEditing={() => focusNextField(index)}
                    returnKeyType={
                      index < fieldNames.length - 1 ? "next" : "done"
                    }
                    onPressIn={() => {
                      setOpenWaterAvailabilityDropdown(false);
                    }}
                  />
                ))}
                {checkboxes.map((checkbox, index) => (
                  <React.Fragment key={index}>
                    <Checkbox
                      isSelected={checkboxStates[checkbox.stateKey]}
                      setIsSelected={(newValue) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          [checkbox.stateKey]: newValue,
                        }))
                      }
                      label={checkbox.label}
                    />
                    <View style={{ height: 35 }} />
                  </React.Fragment>
                ))}
              </View>

              <ButtonGrey
                buttonText="Next"
                fontSize={FontSizes.medium}
                width={buttonWidthMedium}
                isSubmitButton={true}
                onPress={() => {
                  if (!!valueWaterAvailabilityDropdown) {
                    setErrorDropdowns(false);
                  } else {
                    setErrorDropdowns(true);
                  }
                  handleSubmit();
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBold: {
    fontFamily: "OpenSansBold",
    fontSize: FontSizes.small,
  },
  textRegular: {
    fontFamily: "OpenSansRegular",
    fontSize: FontSizes.small,
  },
  dropdownContainer: {
    marginBottom: 10,
  },
});

export default AddPropertyInfo;
