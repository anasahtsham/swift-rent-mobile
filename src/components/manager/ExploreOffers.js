import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColorsOnFocus } from "../../helpers/SetColors";
import ExploreOffersButton from "../common/buttons/ExploreOffersButton";

const ExploreOffers = ({ navigation }) => {
  const colors = useColorsOnFocus();
  const [loading, setLoading] = useState(true);

  //dropdown initializors
  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState([]);
  // city values from API to be used in filtering
  const [cityValuesFromAPI, setCityValuesFromAPI] = useState([
    {
      cityname: "islamabad",
    },
    {
      cityname: "rawalpindi",
    },
  ]);

  const [openPurpose, setOpenPurpose] = useState(false);
  const [valuePurpose, setValuePurpose] = useState(null);
  const [itemsPurpose, setItemsPurpose] = useState([
    { label: "Acquiring Tenant", value: "acquiring_tenant" },
    { label: "Caretaking", value: "caretaking" },
    { label: "All Purposes", value: "all_purposes" },
  ]);

  // dropdown functions
  const onCityOpen = useCallback(() => {
    setOpenPurpose(false);
    setHeaderHeight("100%");
  }, []);

  const onPurposeOpen = useCallback(() => {
    setOpenCity(false);
    setHeaderHeight("100%");
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

  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState(originalData);

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${BASE_URL}/api/manager/view-hire-requests`)
        .then((response) => {
          setOriginalData(response.data);
        })
        .catch((error) => {
          Alert.alert("Error", error.response.data);
        })
        .finally(() => {
          setLoading(false);
        });

      axios
        .get(`${BASE_URL}/api/manager/get-cities`)
        .then((response) => {
          setCityValuesFromAPI(response.data);
        })
        .catch((error) => {
          Alert.alert("Error", error.response.data);
        })
        .finally(() => {
          setLoading(false);
        });

      axios
        .get(`${BASE_URL}/api/manager/get-cities-dropdown`)
        .then((response) => {
          setItemsCity(response.data);
        })
        .catch((error) => {
          Alert.alert("Error", error.response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [])
  );

  useEffect(() => {
    let newData = originalData;

    let cities = cityValuesFromAPI.map((cityObj) => cityObj.cityname);

    if (valueCity) {
      if (cities.includes(valueCity.toLowerCase())) {
        newData = newData.filter((item) =>
          item.propertyAddress.toLowerCase().includes(valueCity.toLowerCase())
        );
      }
      if (valueCity === "all_cities") {
        newData = originalData;
      }
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
    if (valuePurpose === "all_purposes") {
      newData = originalData;
    }

    setFilteredData(newData);
  }, [valueCity, valuePurpose, originalData, cityValuesFromAPI]);

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
          <TouchableOpacity
            style={{
              marginBottom: 10,
              padding: 5,
              borderRadius: 20,
              borderColor: colors.borderBlue,
              borderWidth: 3,
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
            }}
            // onPress={() => {
            //   navigation.navigate("Home");
            // }}
            activeOpacity={OPACITY_VALUE_FOR_BUTTON}
          >
            <Text
              style={[
                styles.fontRegular,
                {
                  fontSize: FontSizes.medium,
                  color: colors.textPrimary,
                  textAlign: "center",
                },
              ]}
            >
              My Counter Offers
            </Text>
            <Image
              source={icons.externalLink}
              tintColor={colors.textPrimary}
              style={{
                height: 20,
                width: 20,
                alignSelf: "center",
                marginTop: 5,
              }}
            />
          </TouchableOpacity>

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

        {loading && (
          <ActivityIndicator size="large" color={colors.textPrimary} />
        )}

        {originalData.length === 0 && !loading && (
          <Text
            style={[
              styles.fontBold,
              {
                fontSize: FontSizes.medium,
                color: colors.textPrimary,
                textAlign: "center",
                marginTop: 20,
              },
            ]}
          >
            No offers available
          </Text>
        )}

        <FlatList
          style={{ flex: 1, marginBottom: 5 }}
          data={filteredData.sort(
            (firstOffer, secondOffer) =>
              secondOffer.averageRating - firstOffer.averageRating
          )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ExploreOffersButton
              id={item.id}
              ownerName={item.ownerName}
              propertyAddress={item.propertyAddress}
              purpose={item.purpose}
              likes={item.likes}
              dislikes={item.dislikes}
              ratings={item.ratings}
              averageRating={item.averageRating}
              address={item.address}
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
