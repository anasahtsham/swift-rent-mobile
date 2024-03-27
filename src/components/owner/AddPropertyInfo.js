import axios from "axios";
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
import { BASE_URL, buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { useUserID } from "../../helpers/SetUserID";
import ButtonGrey from "../common/buttons/ButtonGrey";
import Checkbox from "../common/checkboxes/Checkbox";
import InputField from "../common/input_fields/InputField";
import {
  agricultureCheckboxes,
  agricultureFieldTypes,
  apartmentCheckboxes,
  apartmentFieldTypes,
  buildingCheckboxes,
  buildingFieldTypes,
  checkboxIcons,
  commercialCheckboxes,
  commercialFieldTypes,
  factoryCheckboxes,
  factoryFieldTypes,
  fieldIcons,
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
  const userID = useUserID();

  const {
    areaID,
    propertySubTypeID,
    street,
    building,
    propertyTypeLabel,
    propertySubTypeLabel,
  } = route.params;

  // console.log("areaID: ", areaID);
  // console.log("propertySubTypeID: ", propertySubTypeID);
  // console.log("street: ", street);
  // console.log("building: ", building);
  // console.log("propertyTypeLabel: ", propertyTypeLabel);
  // console.log("propertySubTypeLabel: ", propertySubTypeLabel);

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
      { label: "Boring", value: "B" },
      { label: "Water Truck", value: "T" },
      { label: "Water Supply", value: "S" },
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

  switch (propertySubTypeID) {
    case 1:
      checkboxes = housesCheckboxes;
      fieldNames = housesFieldTypes;
      break;
    case 2:
      checkboxes = upperCheckboxes;
      fieldNames = upperFieldTypes;
      break;
    case 3:
      checkboxes = lowerCheckboxes;
      fieldNames = lowerFieldTypes;
      break;
    case 4:
      checkboxes = apartmentCheckboxes;
      fieldNames = apartmentFieldTypes;
      break;
    case 5:
      checkboxes = roomCheckboxes;
      fieldNames = roomFieldTypes;
      break;
    case 6:
      checkboxes = commercialCheckboxes;
      fieldNames = commercialFieldTypes;
      break;
    case 7:
      checkboxes = agricultureCheckboxes;
      fieldNames = agricultureFieldTypes;
      break;
    case 8:
      checkboxes = industrialCheckboxes;
      fieldNames = industrialFieldTypes;
      break;
    case 9:
      checkboxes = officeCheckboxes;
      fieldNames = officeFieldTypes;
      break;
    case 10:
      checkboxes = shopCheckboxes;
      fieldNames = shopFieldTypes;
      break;
    case 11:
      checkboxes = buildingCheckboxes;
      fieldNames = buildingFieldTypes;
      break;
    case 12:
      checkboxes = warehouseCheckboxes;
      fieldNames = warehouseFieldTypes;
      break;
    case 13:
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
          // console.log("\n\n");

          // // Log each value of fieldNames
          // fieldNames.map((field) => {
          //   console.log(field.value, values[field.value]);
          // });

          // console.log("\n");

          // // Log each value of checkboxes
          // checkboxes.map((checkbox) => {
          //   console.log(checkbox.stateKey, checkboxStates[checkbox.stateKey]);
          // });

          // Create an object that contains all the form data
          const formData = {
            userID: userID.toString(),
            areaID: areaID.toString(),
            propertySubTypeID: propertySubTypeID.toString(),
            street: street.toString(),
            building: building.toString(),
            ...Object.fromEntries(
              Object.entries(values).map(([key, value]) => [
                key,
                value === ""
                  ? "0"
                  : isNaN(parseInt(value))
                  ? value
                  : parseInt(value).toString(),
              ])
            ),
            ...Object.fromEntries(
              Object.entries(checkboxStates).map(([key, value]) => [
                key,
                value.toString(),
              ])
            ),
            WaterAvailabilityType: valueWaterAvailabilityDropdown,
          };

          console.log(formData);

          // Send a POST request to the API endpoint with the form data
          axios
            .post(`${BASE_URL}/api/owner/add-property`, formData)
            .then((response) => {
              console.log(response.data);
              navigation.pop(2);
            })
            .catch((error) => {
              console.error(error);
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
                    fontSize: FontSizes.large,
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
                    textFieldIcon={fieldIcons[field.value]}
                  />
                ))}
                {checkboxes.map((checkbox, index) => (
                  <React.Fragment key={index}>
                    <Checkbox
                      checkboxIcon={checkboxIcons[checkbox.stateKey]}
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
                buttonText="Finish"
                fontSize={FontSizes.medium}
                width={buttonWidthMedium}
                hasOwnOnPress={true}
                onPress={() => {
                  if (!!valueWaterAvailabilityDropdown) {
                    setErrorDropdowns(false);
                  } else {
                    setErrorDropdowns(true);
                  }
                  handleSubmit();
                }}
              />
              <View style={{ height: 20 }} />
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
