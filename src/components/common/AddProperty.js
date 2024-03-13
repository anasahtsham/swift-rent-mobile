import { useCallback, useEffect, useState } from "react";
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { subSectorData } from "../../helpers/data/SectorsData";
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
  const [itemsCity, setItemsCity] = useState([
    { label: "Islamabad", value: "islamabad" },
    { label: "Rawalpindi", value: "rawalpindi" },
  ]);

  const [openSubArea, setOpenSubArea] = useState(false);
  const [valueSubArea, setValueSubArea] = useState(null);
  const [itemsSubArea, setItemsSubArea] = useState(subSectorData);

  const [openPropertyType, setOpenPropertyType] = useState(false);
  const [valuePropertyType, setValuePropertyType] = useState(null);
  const [itemsPropertyType, setItemsPropertyType] = useState([
    { label: "Residential Homes", value: "residential_homes" },
    { label: "Plots", value: "plots" },
    { label: "Commercial", value: "commercial" },
    { label: "Hotel Room", value: "hotel_room" },
  ]);

  const onCityOpen = useCallback(() => {
    setOpenSubArea(false);
    setOpenPropertyType(false);
  }, []);

  const onSubAreaOpen = useCallback(() => {
    setOpenCity(false);
    setOpenPropertyType(false);
  }, []);

  const onPropertyTypeOpen = useCallback(() => {
    setOpenCity(false);
    setOpenSubArea(false);
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
    <TouchableWithoutFeedback
      onPress={() => {
        setOpenCity(false);
        setOpenSubArea(false);
        setOpenPropertyType(false);
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
            },
          ]}
        >
          Add Your Property Information
        </Text>
        <View style={{ width: "80%" }}>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              {...dropdownStyles}
              searchPlaceholderTextColor={colors.textGreen}
              theme={colors.dropDownTheme}
              zIndex={3000}
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
              zIndex={2000}
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
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              {...dropdownStyles}
              theme={colors.dropDownTheme}
              zIndex={1000}
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
        </View>
        <ButtonGrey
          buttonText="Next"
          fontSize={FontSizes.medium}
          width={buttonWidthMedium}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
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
});

export default AddProperty;
