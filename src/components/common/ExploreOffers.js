import React, { useCallback, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import OwnerHiringCard from "../../components/common/cards/OwnerHiringCard";
import OwnerHiringFooter from "../../components/common/footers/OwnerHiringFooter";
import OwnerHiringHeader from "../../components/common/headers/OwnerHiringHeader";
import { icons } from "../../helpers/ImageImports";
import { ratingsData } from "../../helpers/data/OwnerHiringData";
import { useColors, useColorsOnFocus } from "./../../helpers/SetColors";
import InputField from "./input_fields/InputField";
import { TextInput } from "react-native-gesture-handler";
import { iconPrimary } from "../../assets/themes/DarkColorScheme";
import ExploreOffersCard from "./cards/ExploreOffersCard";
import ExploreOffersButton from "./buttons/ExploreOffersButton";
import { exploreOffersData } from "../../helpers/data/ExploreOffersData";
import { FlatList } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { cityData } from "../../helpers/data/PropertyInfoData";

const ExploreOffers = ({ navigation }) => {
  const colors = useColorsOnFocus();
  const [headerHeight, setHeaderHeight] = useState("auto");
  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState(cityData);

  const [openPurpose, setOpenPurpose] = useState(false);
  const [valuePurpose, setValuePurpose] = useState(null);
  const [itemsPurpose, setItemsPurpose] = useState([
    { label: "Manage Property", value: "manage_property" },
    { label: "Bring Tenant", value: "bring_tenant" },
  ]);

  const onCityOpen = useCallback(() => {
    setOpenPurpose(false);
    setHeaderHeight("30%");
  }, []);

  const onPurposeOpen = useCallback(() => {
    setOpenCity(false);
    setHeaderHeight("30%");
  }, []);

  const onCityClose = useCallback(() => {
    if (!openPurpose) {
      setHeaderHeight("auto");
    }
  }, [openPurpose]);

  const onPurposeClose = useCallback(() => {
    if (!openCity) {
      setHeaderHeight("auto");
    }
  }, [openCity]);
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

  return (
    <View
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.headerAndFooterBackground,
            height: headerHeight,
          },
        ]}
      >
        <View
          style={[
            styles.searchField,
            {
              borderColor: colors.borderPrimary,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <TextInput
            style={{ color: colors.textPrimary }}
            placeholderTextColor={colors.textGrey}
            placeholder="Search by ID "
          />
          <Image
            source={icons.searchIcon}
            style={{ width: 24, height: 24 }}
            tintColor={colors.iconPrimary}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <View style={{ width: "40%" }}>
            <DropDownPicker
              {...dropdownStyles}
              zIndex={1000}
              open={openCity}
              value={valueCity}
              items={itemsCity}
              onOpen={onCityOpen}
              onClose={onCityClose}
              setOpen={setOpenCity}
              setValue={setValueCity}
              setItems={setItemsCity}
              placeholder="City"
            />
          </View>
          <View style={{ width: "40%" }}>
            <DropDownPicker
              {...dropdownStyles}
              zIndex={1000}
              open={openPurpose}
              value={valuePurpose}
              items={itemsPurpose}
              onOpen={onPurposeOpen}
              onClose={onPurposeClose}
              setOpen={setOpenPurpose}
              setValue={setValuePurpose}
              setItems={setItemsPurpose}
              placeholder="Purpose"
            />
          </View>
        </View>
      </View>

      <FlatList
        style={{ flex: 1, marginBottom: 5 }}
        data={exploreOffersData.sort(
          (firstOffer, secondOffer) =>
            secondOffer.averageRating - firstOffer.averageRating
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ExploreOffersButton
            ownerName={item.ownerName}
            likes={item.likes}
            dislikes={item.dislikes}
            ratings={item.ratings}
            averageRating={item.averageRating}
            address={item.address}
            purpose={item.purpose}
            offer={item.offer}
            colors={colors}
          />
        )}
      />

      <View style={{ height: 60 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },
  searchField: {
    width: "100%",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 20,
    fontSize: FontSizes.small,
  },
  managerRatingsTitle: {
    fontSize: FontSizes.medium,
  },
  thumbsIcon: {
    height: 16,
    width: 16,
    justifyContent: "center",
  },
  likesAndStarsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
  },
  starIcon: {
    height: 20,
    width: 20,
  },
  starIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ExploreOffers;
