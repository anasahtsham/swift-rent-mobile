import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { icons } from "../../helpers/ImageImports";
import { useColorsOnFocus } from "../../helpers/SetColors";
import { exploreOffersData } from "../../helpers/data/ExploreOffersData";
import { cityData } from "../../helpers/data/PropertyInfoData";
import ExploreOffersButton from "../common/buttons/ExploreOffersButton";

const ExploreOffers = ({ navigation }) => {
  const colors = useColorsOnFocus();

  //dropdown initializors
  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState(cityData);

  const [openPurpose, setOpenPurpose] = useState(false);
  const [valuePurpose, setValuePurpose] = useState(null);
  const [itemsPurpose, setItemsPurpose] = useState([
    { label: "Acquiring Tenant", value: "acquiring_tenant" },
    { label: "Caretaking", value: "caretaking" },
    { label: "Leasing Property", value: "leasing_property" },
    { label: "All Purposes", value: "all_purposes" },
  ]);

  // dropdown functions
  const onCityOpen = useCallback(() => {
    setOpenPurpose(false);
    setHeaderHeight(260);
  }, []);

  const onPurposeOpen = useCallback(() => {
    setOpenCity(false);
    setHeaderHeight(340);
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

  const [headerHeight, setHeaderHeight] = useState("auto");

  const [searchText, setSearchText] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchTextRef = useRef();

  const originalData = exploreOffersData;
  const [filteredData, setFilteredData] = useState(originalData);
  useEffect(() => {
    let newData = originalData;

    if (valueCity === "islamabad") {
      newData = newData.filter((item) => item.address.includes("Islamabad"));
    }
    if (valueCity === "rawalpindi") {
      newData = newData.filter((item) => item.address.includes("Rawalpindi"));
    }
    if (valueCity === "all_cities") {
      newData = originalData;
    }

    if (valuePurpose === "acquiring_tenant") {
      newData = newData.filter((item) => {
        return item.purpose === "Acquiring Tenant";
      });
    }
    if (valuePurpose === "caretaking") {
      newData = newData.filter((item) => {
        return item.purpose === "Caretaking";
      });
    }
    if (valuePurpose === "leasing_property") {
      newData = newData.filter((item) => {
        return item.purpose === "Leasing Property";
      });
    }
    if (valuePurpose === "all_purposes") {
      newData = originalData;
    }

    setFilteredData(newData);
  }, [valueCity, valuePurpose]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setOpenPurpose(false);
        setOpenCity(false);
        setHeaderHeight("auto");
        Keyboard.dismiss();
      }}
    >
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
          <Pressable
            onPress={() => searchTextRef.current.focus()}
            style={[
              styles.searchField,
              {
                borderColor: isSearchFocused
                  ? colors.borderBlue
                  : colors.borderPrimary,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <TextInput
              ref={searchTextRef}
              style={{ color: colors.textPrimary }}
              placeholderTextColor={colors.textGrey}
              placeholder="Search by ID "
              onFocus={() => {
                setOpenCity(false);
                setOpenPurpose(false);
                setHeaderHeight("auto");
                setIsSearchFocused(true);
              }}
              onBlur={() => setIsSearchFocused(false)}
              onChangeText={setSearchText}
              value={searchText}
            />
            <Image
              source={icons.searchIcon}
              style={{ width: 24, height: 24 }}
              tintColor={colors.iconPrimary}
            />
          </Pressable>

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
                listItemContainerStyle={{
                  height: 50,
                }}
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
          data={filteredData.sort(
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
    </TouchableWithoutFeedback>
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
