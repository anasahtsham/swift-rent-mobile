import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { loadTheme } from "../../helpers";

import Header from "../../components/common/header";
import SwiftRentLogoMedium from "../../components/common/SwiftRentLogoMedium";
import BigButtonGrey from "../../components/common/BigButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as Urdu from "../../asssets/fonts/displaytext/UR/ur-pack";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";

const WhoAreYou = ({ navigation }) => {
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  const [languages, setLanguages] = useState(English);

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguages(language === "english" ? English : Urdu);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <View style={styles.logoAndTextContainer}>
          <SwiftRentLogoMedium />
          <Text
            style={[
              styles.text,
              { fontSize: FontSizes.large, color: colors.textLightBlue },
            ]}
          >
            {English.whoAreYou}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <BigButtonGrey
            buttonText={English.propertyOwner}
            customStyle={styles.customButton}
            destinationScreen="Get To Know"
            navigation={navigation}
          />
          <BigButtonGrey
            buttonText={English.propertyManager}
            customStyle={[styles.customButton, { height: "25%" }]}
            destinationScreen="Get To Know"
            navigation={navigation}
          />
          <BigButtonGrey
            buttonText={English.tenant}
            customStyle={styles.customButton}
            destinationScreen="Get To Know"
            navigation={navigation}
          />
        </View>
        <Text style={{ fontSize: FontSizes.small, color: colors.textPrimary }}>
          {English.createNewRoleOnExistingCredentials}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  logoAndTextContainer: {
    alignItems: "center",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  buttonsContainer: {
    width: "90%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  customButton: {
    width: "70%",
    height: "15%",
  },
});

export default WhoAreYou;
