import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { icons } from "../../helpers/ImageImports";

import { loadLanguage, loadTheme } from "../../helpers";

import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as DarkTheme from "../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../assets/themes/LoadingColorScheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { opacityValueForButton } from "../../constants";

const ManagerOffers = ({ navigation }) => {
  const [colors, setColors] = useState(LoadingTheme);

  //update theme on load
  useFocusEffect(() => {
    updateTheme();
  });

  const [languages, setLanguage] = useState(English);

  //a constant that stores the current theme so it can be used to conditionally change image tint color
  const [theme, setTheme] = useState(null);

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguage(language === "english" ? English : Urdu);
    });
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

  //update theme on clicking toggle theme button
  function updateTheme() {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
      setTheme(theme); // Store the theme in state for local use
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bodyBackground }}>
      <View
        style={[
          styles.header,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <View style={[styles.mainCard, { borderColor: colors.borderBlue }]}>
          <Text
            style={[
              styles.mainTitle,
              styles.fontBold,
              { fontSize: FontSizes.medium, color: colors.textPrimary },
            ]}
          >
            Manager Offer (3)
          </Text>
          <View style={styles.rightInRow}>
            <Text
              style={[
                styles.subTitle,
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Hiring for:
            </Text>
            <Text
              style={[
                styles.subTitle,
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Bringing Tenant/ Hiring Manager
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text
              style={[
                styles.subTitle,
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              SalaryType:
            </Text>
            <Text
              style={[
                styles.subTitle,
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              OneTime/ Salary/ Commission
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text
              style={[
                styles.subTitle,
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Period:
            </Text>
            <Text
              style={[
                styles.subTitle,
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Weekly/ Monthly
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text
              style={[
                styles.subTitle,
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              My Offer:
            </Text>
            <Text
              style={[
                styles.subTitle,
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              10,000/ 10
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1, marginBottom: 5 }}>
        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
        >
          <View style={styles.buttonHeaderContainer}>
            <Image
              style={styles.userIcon}
              source={icons.userIcon}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontBold,
                styles.buttonTitle,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Manager's Name
            </Text>
            <Image
              style={styles.expandArrowButton}
              source={icons.expandArrowButton}
              tintColor={theme === "light" ? "black" : "white"}
            />
          </View>

          <View style={[styles.ratingsRow]}>
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              4
            </Text>
            <Image
              style={styles.smallIcons}
              source={icons.like}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              1
            </Text>
            <Image
              style={styles.smallIcons}
              source={icons.dislike}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              (4)
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
            </View>
          </View>
          <View style={{ paddingTop: 15 }}>
            <View style={[styles.rightInRow, styles.cardSubText]}>
              <Text
                style={[
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                My Offer:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                10,000/ 10%
              </Text>
            </View>
            <View style={[styles.rightInRow, styles.cardSubText]}>
              <Text
                style={[
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Offer:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                21,000/ 21%
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text
                style={[
                  styles.fontBold,
                  styles.cardSubText,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Comment:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  styles.cardSubText,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Abay betay kuch nahi milay ga
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
        >
          <View style={styles.buttonHeaderContainer}>
            <Image
              style={styles.userIcon}
              source={icons.userIcon}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontBold,
                styles.buttonTitle,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Manager's Name
            </Text>
            <Image
              style={styles.expandArrowButton}
              source={icons.expandArrowButton}
              tintColor={theme === "light" ? "black" : "white"}
            />
          </View>

          <View style={[styles.ratingsRow]}>
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              4
            </Text>
            <Image
              style={styles.smallIcons}
              source={icons.like}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              1
            </Text>
            <Image
              style={styles.smallIcons}
              source={icons.dislike}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              (4)
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
            </View>
          </View>
          <View style={{ paddingTop: 15 }}>
            <View style={[styles.rightInRow, styles.cardSubText]}>
              <Text
                style={[
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                My Offer:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                10,000/ 10%
              </Text>
            </View>
            <View style={[styles.rightInRow, styles.cardSubText]}>
              <Text
                style={[
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Offer:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                21,000/ 21%
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text
                style={[
                  styles.fontBold,
                  styles.cardSubText,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Comment:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  styles.cardSubText,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Abay betay kuch nahi milay ga
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
        >
          <View style={styles.buttonHeaderContainer}>
            <Image
              style={styles.userIcon}
              source={icons.userIcon}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontBold,
                styles.buttonTitle,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Manager's Name
            </Text>
            <Image
              style={styles.expandArrowButton}
              source={icons.expandArrowButton}
              tintColor={theme === "light" ? "black" : "white"}
            />
          </View>

          <View style={[styles.ratingsRow]}>
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              4
            </Text>
            <Image
              style={styles.smallIcons}
              source={icons.like}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              1
            </Text>
            <Image
              style={styles.smallIcons}
              source={icons.dislike}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontRegular,
                styles.buttonTextWithIcons,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              (4)
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
              <Image
                style={styles.smallIcons}
                source={icons.star}
                tintColor={theme === "light" ? "black" : "white"}
              />
            </View>
          </View>
          <View style={{ paddingTop: 15 }}>
            <View style={[styles.rightInRow, styles.cardSubText]}>
              <Text
                style={[
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                My Offer:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                10,000/ 10%
              </Text>
            </View>
            <View style={[styles.rightInRow, styles.cardSubText]}>
              <Text
                style={[
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Offer:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                21,000/ 21%
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text
                style={[
                  styles.fontBold,
                  styles.cardSubText,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Comment:
              </Text>
              <Text
                style={[
                  styles.fontRegular,
                  styles.cardSubText,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Abay betay kuch nahi milay ga
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },

  header: {
    height: 200,
    width: "100%",
    padding: 10,
    paddingBottom: 15,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    alignSelf: "center",
  },
  mainCard: {
    height: 180,
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
  },
  mainTitle: {
    fontSize: FontSizes.small,
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: FontSizes.small,
    marginBottom: 5,
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ratingsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 64,
    marginTop: -22,
  },
  buttonHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userIcon: {
    width: 52,
    height: 52,
    marginTop: 5,
  },
  expandArrowButton: {
    width: 28,
    height: 28,
  },
  smallIcons: {
    width: 22,
    height: 22,
  },
  button: {
    height: "auto",
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
  },
  buttonTitle: {
    marginLeft: -80,
    marginTop: -15,
  },
  buttonTextWithIcons: { marginLeft: 8 },
  cardSubText: {
    fontSize: FontSizes.small,
    marginLeft: 10,
  },
});
export default ManagerOffers;
