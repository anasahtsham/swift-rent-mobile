import { Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import {
  BackHandler,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import {
  cityData,
  propertySubTypeData,
  propertyTypeData,
  subSectorData,
} from "../../helpers/data/PropertyInfoData";
import { addPropertySchema } from "../../helpers/validation/ValidationSchemas";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import InputField from "../../components/common/input_fields/InputField";

const ResidentialHome = ({ navigation }) => {
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

  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState(cityData);

  const [openSubArea, setOpenSubArea] = useState(false);
  const [valueSubArea, setValueSubArea] = useState(null);
  const [itemsSubArea, setItemsSubArea] = useState(subSectorData);

  const [openPropertyType, setOpenPropertyType] = useState(false);
  const [valuePropertyType, setValuePropertyType] = useState(null);
  const [itemsPropertyType, setItemsPropertyType] = useState(propertyTypeData);

  const [openPropertySubType, setOpenPropertySubType] = useState(false);
  const [valuePropertySubType, setValuePropertySubType] = useState(null);
  const [itemsPropertySubType, setItemsPropertySubType] = useState([]);

  const [errorDropdowns, setErrorDropdowns] = useState(false);

  const [openBedrooms, setOpenBedrooms] = useState(false);
  const [valueBedrooms, setValueBedrooms] = useState(null);
  const [itemsBedrooms, setItemsBedrooms] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    // Add more items if needed
  ]);

  const [openToilets, setOpenToilets] = useState(false);
  const [valueToilets, setValueToilets] = useState(null);
  const [itemsToilets, setItemsToilets] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    // Add more items if needed
  ]);

  const [openWaterAvailability, setOpenWaterAvailability] = useState(false);
  const [valueWaterAvailability, setValueWaterAvailability] = useState(null);
  const [itemsWaterAvailability, setItemsWaterAvailability] = useState([
    { label: "Boring", value: "boring" },
    { label: "Water Supply", value: "water_supply" },
    { label: "Tanker Supply", value: "tanker_supply" },
  ]);

  const [openKitchen, setOpenKitchen] = useState(false);
  const [valueKitchen, setValueKitchen] = useState(null);
  const [itemsKitchen, setItemsKitchen] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    // Add more items if needed
  ]);
  // set property sub type items based on property type
  useEffect(() => {
    if (
      !!valueCity &&
      !!valueSubArea &&
      !!valuePropertyType &&
      !!valuePropertySubType
    ) {
      setErrorDropdowns(false);
    }
    if (valuePropertyType) {
      switch (valuePropertyType) {
        case "residential_homes":
          setItemsPropertySubType(propertySubTypeData.residential_homes);
          break;
        case "plots":
          setItemsPropertySubType(propertySubTypeData.plots);
          break;
        case "commercial":
          setItemsPropertySubType(propertySubTypeData.commercial);
          break;
        default:
          setItemsPropertySubType([]);
      }
    } else {
      setItemsPropertySubType([]);
    }
  }, [valuePropertyType, valueCity, valuePropertySubType, valueSubArea]);

  //close all other dropdowns when one is opened
  const onCityOpen = useCallback(() => {
    setOpenSubArea(false);
    setOpenPropertyType(false);
    setOpenPropertySubType(false);
  }, []);

  const onSubAreaOpen = useCallback(() => {
    setOpenPropertyType(false);
    setOpenPropertySubType(false);
  }, []);

  const onPropertyTypeOpen = useCallback(() => {
    setOpenSubArea(false);
    setOpenPropertySubType(false);
  }, []);

  const onPropertySubTypeOpen = useCallback(() => {
    setOpenSubArea(false);
    setOpenPropertyType(false);
  }, []);

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

  return (
    <Formik
      initialValues={{
        area: "",
        street: "",
        building: "",
      }}
      validationSchema={addPropertySchema}
      onSubmit={(values) => {
        // check if all dropdowns are set
        if (!!valueSubArea && !!valuePropertyType && !!valuePropertySubType) {
          navigation.navigate("Add Property", {
            subArea: valueSubArea,
            street: values.street,
            building: values.building,
            propertyType: valuePropertyType,
            propertySubType: valuePropertySubType,
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
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenSubArea(false);
              setOpenPropertyType(false);
              setOpenPropertySubType(false);
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
                Residential Home
              </Text>
              <View style={{ width: "80%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: -35,
                  }}
                >
                  <View style={{ flex: 1, marginRight: 10 }}>
                    <InputField
                      borderRadius={7}
                      label="Area sq. ft."
                      fieldType="numeric"
                      value={values.area}
                      handleChange={handleChange("area")}
                      handleBlur={handleBlur("area")}
                      errorText={touched.street ? errors.street : ""}
                      onPressIn={() => {
                        setOpenSubArea(false);
                        setOpenPropertyType(false);
                        setOpenPropertySubType(false);
                      }}
                    />
                  </View>

                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <InputField
                      borderRadius={7}
                      label="Portion #"
                      fieldType="numeric"
                      value={values.street}
                      handleChange={handleChange("street")}
                      handleBlur={handleBlur("street")}
                      errorText={touched.street ? errors.street : ""}
                      onPressIn={() => {
                        setOpenSubArea(false);
                        setOpenPropertyType(false);
                        setOpenPropertySubType(false);
                      }}
                    />
                  </View>
                </View>

                <View style={styles.dropdownContainer}>
                  <DropDownPicker
                    {...dropdownStyles}
                    theme={colors.dropDownTheme}
                    zIndex={3000}
                    zIndexInverse={2000}
                    open={openPropertyType}
                    value={valuePropertyType}
                    items={itemsPropertyType}
                    onOpen={onPropertyTypeOpen}
                    setOpen={setOpenPropertyType}
                    setValue={setValuePropertyType}
                    setItems={setItemsPropertyType}
                    placeholder="Property Type"
                  />
                </View>
                <View style={styles.dropdownContainer}>
                  <DropDownPicker
                    {...dropdownStyles}
                    searchable={true}
                    searchPlaceholder="Search Sub Area"
                    listParentLabelStyle={{
                      fontWeight: "bold",
                    }}
                    categorySelectable={false}
                    theme={colors.dropDownTheme}
                    zIndex={2500}
                    zIndexInverse={3500}
                    open={openSubArea}
                    value={valueSubArea}
                    items={itemsSubArea}
                    onOpen={onSubAreaOpen}
                    setOpen={setOpenSubArea}
                    setValue={setValueSubArea}
                    setItems={setItemsSubArea}
                    placeholder="Sub Area"
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flex: 1, marginRight: 10, marginBottom: 20 }}>
                    <DropDownPicker
                      {...dropdownStyles}
                      theme={colors.dropDownTheme}
                      zIndex={2000}
                      zIndexInverse={3000}
                      open={openBedrooms}
                      value={valueBedrooms}
                      items={itemsBedrooms}
                      setOpen={setOpenBedrooms}
                      setValue={setValueBedrooms}
                      setItems={setItemsBedrooms}
                      placeholder="Bedrooms"
                    />
                  </View>

                  <View style={{ flex: 1, marginLeft: 10, marginBottom: 20 }}>
                    <DropDownPicker
                      {...dropdownStyles}
                      theme={colors.dropDownTheme}
                      zIndex={2000}
                      zIndexInverse={3000}
                      open={openToilets}
                      value={valueToilets}
                      items={itemsToilets}
                      setOpen={setOpenToilets}
                      setValue={setValueToilets}
                      setItems={setItemsToilets}
                      placeholder="Toilets"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flex: 1, marginRight: 10, marginBottom: 20 }}>
                    <DropDownPicker
                      {...dropdownStyles}
                      theme={colors.dropDownTheme}
                      zIndex={1500}
                      zIndexInverse={3000}
                      open={openWaterAvailability}
                      value={valueWaterAvailability}
                      items={itemsWaterAvailability}
                      setOpen={setOpenWaterAvailability}
                      setValue={setValueWaterAvailability}
                      setItems={setItemsWaterAvailability}
                      placeholder="Water Availability"
                    />
                  </View>

                  <View style={{ flex: 1, marginLeft: 10, marginBottom: 20 }}>
                    <DropDownPicker
                      {...dropdownStyles}
                      theme={colors.dropDownTheme}
                      zIndex={1500}
                      zIndexInverse={2500}
                      open={openKitchen}
                      value={valueKitchen}
                      items={itemsKitchen}
                      setOpen={setOpenKitchen}
                      setValue={setValueKitchen}
                      setItems={setItemsKitchen}
                      placeholder="Kitchen"
                    />
                  </View>
                </View>

                <View
                  style={[
                    {
                      flexDirection: "row",
                      height: 80,
                    },
                  ]}
                ></View>

                {!!valuePropertyType && (
                  <View style={styles.dropdownContainer}>
                    <DropDownPicker
                      {...dropdownStyles}
                      style={dropdownStyles.style}
                      theme={colors.dropDownTheme}
                      zIndex={1000}
                      zIndexInverse={4000}
                      open={openPropertySubType}
                      value={valuePropertySubType}
                      items={itemsPropertySubType}
                      onOpen={onPropertySubTypeOpen}
                      setOpen={setOpenPropertySubType}
                      setValue={setValuePropertySubType}
                      setItems={setItemsPropertySubType}
                      placeholder="Property Sub Type"
                    />
                  </View>
                )}
                {errorDropdowns && (
                  <Text
                    style={[
                      styles.textBold,
                      { color: colors.textRed, textAlign: "center" },
                    ]}
                  >
                    Please select all dropdowns first!
                  </Text>
                )}
              </View>

              <ButtonGrey
                buttonText="Next"
                fontSize={FontSizes.medium}
                width={buttonWidthMedium}
                isSubmitButton={true}
                onPress={handleSubmit}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    marginBottom: 20,
  },
});

export default ResidentialHome;
