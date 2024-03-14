import { useCallback, useEffect, useState } from "react";
import {
  BackHandler,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
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
import ButtonGrey from "./buttons/ButtonGrey";

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

  const onPropertySubTypeOpen = useCallback(() => {
    setOpenCity(false);
    setOpenSubArea(false);
    setOpenPropertyType(false);
  }, []);

  useEffect(() => {
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
  }, [valuePropertyType]);

  const onCityOpen = useCallback(() => {
    setOpenSubArea(false);
    setOpenPropertyType(false);
    setOpenPropertySubType(false);
  }, []);

  const onSubAreaOpen = useCallback(() => {
    setOpenCity(false);
    setOpenPropertyType(false);
    setOpenPropertySubType(false);
  }, []);

  const onPropertyTypeOpen = useCallback(() => {
    setOpenCity(false);
    setOpenSubArea(false);
    setOpenPropertySubType(false);
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setOpenCity(false);
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
            Add Your Property Information
          </Text>
          <View style={{ width: "80%", marginBottom: 50 }}>
            <View style={styles.dropdownContainer}>
              <DropDownPicker
                {...dropdownStyles}
                searchPlaceholderTextColor={colors.textGreen}
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
              style={[
                styles.dropdownContainer,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View style={{ width: "45%" }}>
                <Text style={[styles.labelText, { color: colors.textPrimary }]}>
                  Street #
                </Text>
                <TextInput
                  onPressIn={() => {
                    setOpenCity(false);
                    setOpenSubArea(false);
                    setOpenPropertyType(false);
                    setOpenPropertySubType(false);
                  }}
                  placeholder="Street #"
                  placeholderTextColor={colors.textGrey}
                  style={[
                    styles.textFieldInput,
                    {
                      color: colors.textPrimary,
                      borderColor: colors.buttonBorderPrimary,
                      backgroundColor: colors.textInputFieldBackground,
                    },
                  ]}
                />
              </View>

              <View style={{ width: "45%" }}>
                <Text style={[styles.labelText, { color: colors.textPrimary }]}>
                  Building #
                </Text>
                <TextInput
                  onPressIn={() => {
                    setOpenCity(false);
                    setOpenSubArea(false);
                    setOpenPropertyType(false);
                    setOpenPropertySubType(false);
                  }}
                  placeholder="Building #"
                  placeholderTextColor={colors.textGrey}
                  style={[
                    styles.textFieldInput,
                    {
                      color: colors.textPrimary,
                      borderColor: colors.buttonBorderPrimary,
                      backgroundColor: colors.textInputFieldBackground,
                    },
                  ]}
                />
              </View>
            </View>
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
            {!(!valuePropertyType || valuePropertyType === "hotel_room") && (
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
          </View>
          <ButtonGrey
            buttonText="Next"
            fontSize={FontSizes.medium}
            width={buttonWidthMedium}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    marginVertical: 10,
  },
  labelText: {
    fontFamily: "OpenSansRegular",
    fontSize: FontSizes.extraSmall,
    marginLeft: 10,
    marginBottom: 5,
  },
  textFieldInput: {
    width: "100%",
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});

export default AddProperty;
