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
            Manger Offer (3)
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
      <ScrollView style={{ flex: 1 }}>
        <View
          style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
        >
          <View style={styles.inRow}>
            <Image
              style={styles.userIcon}
              source={icons.userIcon}
              tintColor={theme === "light" ? "black" : "white"}
            />
            <Text
              style={[
                styles.fontBold,
                styles.cardTitle,
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

          <View
            style={[
              styles.inRow,
              { alignItems: "center", marginLeft: 55, marginTop: -20 },
            ]}
          >
            <Text
              style={[
                styles.fontRegular,
                styles.textWithIcons,
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
                styles.textWithIcons,
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
                styles.textWithIcons,
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
            <View style={styles.rightInRow}>
              <Text
                style={[
                  styles.cardSubText,
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                My Offer:
              </Text>
              <Text
                style={[
                  styles.cardSubText,
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                10,000/ 10%
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text
                style={[
                  styles.cardSubText,
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Offer:
              </Text>
              <Text
                style={[
                  styles.cardSubText,
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
                  styles.cardSubText,
                  styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Manager's Comment:
              </Text>
              <Text
                style={[
                  styles.cardSubText,
                  styles.fontRegular,
                  { fontSize: FontSizes.small, color: colors.textPrimary },
                ]}
              >
                Abay betay kuch nahi milay ga
              </Text>
            </View>
          </View>
        </View>
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
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    alignSelf: "center",
  },
  mainCard: {
    height: 180,
    borderRadius: 20,
    margin: 10,
    borderWidth: 3,
  },
  mainTitle: {
    fontSize: FontSizes.small,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: FontSizes.small,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  inRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  userIcon: {
    width: 48,
    height: 48,
    marginTop: 5,
  },
  expandArrowButton: {
    width: 28,
    height: 28,
    marginTop: 2,
    marginLeft: 110,
  },
  smallIcons: {
    width: 22,
    height: 22,
    marginTop: 5,
  },
  card: {
    height: "auto",
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
    paddingTop: 5,
    paddingLeft: 10,
  },
  cardTitle: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  textWithIcons: {
    paddingHorizontal: 6,
  },
  cardSubText: {
    fontSize: FontSizes.small,
    paddingBottom: 5,
    paddingLeft: 2,
    paddingRight: 5,
  },
});
export default ManagerOffers;
