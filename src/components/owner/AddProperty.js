import axios from "axios";
import { Formik } from "formik";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { BASE_URL, buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { addPropertySchema } from "../../helpers/validation/ValidationSchemas";
import ButtonGrey from "../common/buttons/ButtonGrey";
import InputField from "../common/input_fields/InputField";

const AddProperty = ({ navigation }) => {
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
  const [itemsCity, setItemsCity] = useState([]);

  const [openArea, setOpenArea] = useState(false);
  const [valueArea, setValueArea] = useState(null);
  const [originalItemsArea, setOriginalItemsArea] = useState([]);
  const [itemsArea, setItemsArea] = useState([]);

  const [openPropertyType, setOpenPropertyType] = useState(false);
  const [valuePropertyType, setValuePropertyType] = useState(null);
  const [itemsPropertyType, setItemsPropertyType] = useState([]);

  const [openPropertySubType, setOpenPropertySubType] = useState(false);
  const [valuePropertySubType, setValuePropertySubType] = useState(null);
  const [originalItemsPropertySubType, setOriginalItemsPropertySubType] =
    useState({});
  const [itemsPropertySubType, setItemsPropertySubType] = useState([]);

  // populate dropdowns with data from the server
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/owner/fetch-property-data`)
      .then((response) => {
        const data = response.data;
        setItemsCity(data.cities);
        setItemsArea(data.areas);
        setOriginalItemsArea(data.areas); // Store the original data
        setItemsPropertyType(data.propertyTypes);
        setOriginalItemsPropertySubType(data.propertySubTypes); // Store the original data
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const [errorDropdowns, setErrorDropdowns] = useState(false);

  const buildingRef = useRef();

  // set property sub type items based on property type
  useEffect(() => {
    if (
      !!valueCity &&
      !!valueArea &&
      !!valuePropertyType &&
      !!valuePropertySubType
    ) {
      setErrorDropdowns(false);
    }
    if (valuePropertyType) {
      setItemsPropertySubType(
        originalItemsPropertySubType[valuePropertyType] || []
      );
    } else {
      setItemsPropertySubType([]);
    }
    if (valueCity) {
      const cityAreas = originalItemsArea.filter(
        (area) => area.cityID === valueCity
      );
      setItemsArea(cityAreas);
    } else {
      setItemsArea([]);
    }
  }, [valueCity, valueArea, valuePropertyType, valuePropertySubType]);

  //close all other dropdowns when one is opened
  const onCityOpen = useCallback(() => {
    setOpenArea(false);
    setOpenPropertyType(false);
    setOpenPropertySubType(false);
  }, []);

  const onAreaOpen = useCallback(() => {
    setOpenCity(false);
    setOpenPropertyType(false);
    setOpenPropertySubType(false);
  }, []);

  const onPropertyTypeOpen = useCallback(() => {
    setOpenCity(false);
    setOpenArea(false);
    setOpenPropertySubType(false);
  }, []);

  const onPropertySubTypeOpen = useCallback(() => {
    setOpenCity(false);
    setOpenArea(false);
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

  const getLabel = (items, value) => {
    return items.reduce((acc, item) => {
      if (item.value === value) {
        return item.label;
      }
      return acc;
    }, "");
  };

  return (
    <Formik
      initialValues={{
        street: "",
        building: "",
      }}
      validationSchema={addPropertySchema}
      onSubmit={(values) => {
        const filteredPropertyTypeLabel = getLabel(
          itemsPropertyType,
          valuePropertyType
        );
        const filteredPropertySubTypeLabel = getLabel(
          itemsPropertySubType,
          valuePropertySubType
        );

        // check if all dropdowns are set
        if (
          !!valueCity &&
          !!valueArea &&
          !!valuePropertyType &&
          !!valuePropertySubType
        ) {
          navigation.navigate("Add Property Info", {
            areaID: valueArea,
            propertySubTypeID: valuePropertySubType,
            street: values.street,
            building: values.building,
            propertyTypeLabel: filteredPropertyTypeLabel,
            propertySubTypeLabel: filteredPropertySubTypeLabel,
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
              setOpenCity(false);
              setOpenArea(false);
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
                Add Your Property Information
              </Text>
              <View style={{ width: "80%", marginBottom: 50 }}>
                <View style={styles.dropdownContainer}>
                  <DropDownPicker
                    {...dropdownStyles}
                    theme={colors.dropDownTheme}
                    zIndex={4000}
                    zIndexInverse={1000}
                    open={openCity}
                    value={valueCity}
                    items={itemsCity}
                    onOpen={onCityOpen}
                    setOpen={setOpenCity}
                    setValue={setValueCity}
                    setItems={setItemsCity}
                    placeholder="City"
                  />
                </View>
                {!!valueCity && (
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
                      zIndex={3000}
                      zIndexInverse={2000}
                      open={openArea}
                      value={valueArea}
                      items={itemsArea}
                      onOpen={onAreaOpen}
                      setOpen={setOpenArea}
                      setValue={setValueArea}
                      setItems={setItemsArea}
                      placeholder="Sub Area"
                    />
                  </View>
                )}

                <View style={styles.dropdownContainer}>
                  <DropDownPicker
                    {...dropdownStyles}
                    theme={colors.dropDownTheme}
                    zIndex={2000}
                    zIndexInverse={3000}
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
                <View
                  style={[
                    {
                      flexDirection: "row",
                      height: 80,
                    },
                  ]}
                >
                  <View style={{ flex: 1 }}>
                    <InputField
                      borderRadius={7}
                      label="Street#"
                      fieldType="numeric"
                      value={values.street}
                      handleChange={handleChange("street")}
                      handleBlur={handleBlur("street")}
                      errorText={touched.street ? errors.street : ""}
                      onSubmitEditing={() => buildingRef.current.focus()}
                      returnKeyType="next"
                      onPressIn={() => {
                        setOpenCity(false);
                        setOpenArea(false);
                        setOpenPropertyType(false);
                        setOpenPropertySubType(false);
                      }}
                    />
                  </View>

                  <View style={{ width: 10 }} />

                  <View style={{ flex: 1 }}>
                    <InputField
                      ref={buildingRef}
                      borderRadius={7}
                      label="Building#"
                      fieldType="numeric"
                      value={values.building}
                      handleChange={handleChange("building")}
                      handleBlur={handleBlur("building")}
                      errorText={touched.building ? errors.building : ""}
                      onPressIn={() => {
                        setOpenCity(false);
                        setOpenArea(false);
                        setOpenPropertyType(false);
                        setOpenPropertySubType(false);
                      }}
                      onSubmitEditing={handleSubmit}
                    />
                  </View>
                </View>
              </View>

              <ButtonGrey
                buttonText="Next"
                fontSize={FontSizes.medium}
                width={buttonWidthMedium}
                hasOwnOnPress={true}
                onPress={() => {
                  if (
                    !!valueCity &&
                    !!valueArea &&
                    !!valuePropertyType &&
                    !!valuePropertySubType
                  ) {
                    setErrorDropdowns(false);
                  } else {
                    setErrorDropdowns(true);
                  }
                  handleSubmit();
                }}
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
    marginBottom: 10,
  },
});

export default AddProperty;
