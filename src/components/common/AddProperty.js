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
import ButtonGrey from "./buttons/ButtonGrey";

const AddProperty = ({ navigation }) => {
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

  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState([
    { label: "Islamabad", value: "islamabad" },
    { label: "Rawalpindi", value: "rawalpindi" },
  ]);

  const [openSubArea, setOpenSubArea] = useState(false);
  const [valueSubArea, setValueSubArea] = useState(null);
  const [itemsSubArea, setItemsSubArea] = useState([
    { label: "D-10/2", value: "d-10/2" },
    { label: "E-7/4", value: "e-7/4" },
    { label: "F-11/3", value: "f-11/3" },
    { label: "G-9/1", value: "g-9/1" },
    { label: "H-12/2", value: "h-12/2" },
    { label: "I-8/4", value: "i-8/4" },
    { label: "D-13/1", value: "d-13/1" },
    { label: "E-6/3", value: "e-6/3" },
    { label: "F-8/2", value: "f-8/2" },
    { label: "G-10/4", value: "g-10/4" },
    { label: "H-7/1", value: "h-7/1" },
    { label: "I-11/4", value: "i-11/4" },
    { label: "D-12/3", value: "d-12/3" },
    { label: "E-8/1", value: "e-8/1" },
    { label: "F-9/4", value: "f-9/4" },
    { label: "G-6/2", value: "g-6/2" },
    { label: "H-11/3", value: "h-11/3" },
    { label: "I-7/1", value: "i-7/1" },
    { label: "D-9/4", value: "d-9/4" },
    { label: "E-13/2", value: "e-13/2" },
  ]);

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
            },
          ]}
        >
          Add Your Property Information
        </Text>
        <View style={{ width: "80%" }}>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
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
