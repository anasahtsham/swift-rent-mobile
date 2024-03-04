import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { loadLanguage, loadTheme } from "../../helpers";

import Header from "../../components/common/header";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as Urdu from "../../assets/fonts/displaytext/UR/ur-pack";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import { buttonWidthMedium } from "../../constants";

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
            {languages.whoAreYou}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.propertyOwner}
            destinationScreen="Get To Know"
            navigation={navigation}
          />
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.propertyManager}
            destinationScreen="Get To Know"
            navigation={navigation}
          />
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.tenant}
            destinationScreen="Get To Know"
            navigation={navigation}
          />
        </View>
        <Pressable onTouchEnd={() => navigation.navigate("Register As")}>
          <Text
            style={[
              {
                fontSize: FontSizes.small,
                color: colors.textLightBlue,
                padding: 10,
              },
            ]}
          >
            {languages.createNewRoleOnExistingCredentials}
          </Text>
        </Pressable>
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
