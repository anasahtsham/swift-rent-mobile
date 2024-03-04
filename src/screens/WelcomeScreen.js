import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { loadLanguage, loadTheme } from "../helpers";
import { buttonWidthMedium } from "../constants";

import ButtonGrey from "../components/common/buttons/ButtonGrey";
import ThemeSetter from "../components/common/buttons/ThemeSetter";
import Header from "../components/common/header";

import * as FontSizes from "../assets/fonts/FontSizes";
import * as English from "../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../assets/fonts/displaytext/UR/ur-pack";
import * as DarkTheme from "../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../assets/colorScheme/defaultColorScheme";

const WelcomeScreen = ({ navigation }) => {
  const [languages, setLanguage] = useState(English);
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  //update theme on click
  function updateTheme() {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguage(language === "english" ? English : Urdu);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.themeButtonContainer} onTouchEnd={updateTheme}>
        <ThemeSetter setColors={setColors} />
      </View>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <View style={styles.logoAndTextContainer}>
          <Image
            tintColor={colors.logoPrimary}
            style={styles.SwiftRentLogoMedium}
            source={require("../assets/icons/logos/adaptive-icon.png")}
          />
          <Text
            style={[
              styles.welcomeText,
              { color: colors.textLightBlue, fontSize: FontSizes.large },
            ]}
          >
            {languages.welcomeToSwiftRent}
          </Text>
        </View>

        <View style={styles.buttonAndLoginContainer}>
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.getStarted}
            destinationScreen="Who Are You"
            navigation={navigation}
          />
          <Pressable
            style={styles.loginTextContainer}
            onTouchEnd={() => navigation.navigate("Login Screen")}
          >
            <Text
              style={[
                styles.alreadyLoggedText,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              {languages.alreadyHaveAnAccount}
            </Text>
            <Text
              style={[
                styles.loginText,
                { color: colors.textLightBlue, fontSize: FontSizes.small },
              ]}
            >
              {languages.login}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },
  themeButtonContainer: {
    marginEnd: 20,
    position: "absolute",
    right: 0,
    top: 50,
    zIndex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
  },
  SwiftRentLogoMedium: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    resizeMode: "contain",
  },
  logoAndTextContainer: {
    alignItems: "center",
    width: "70%",
  },
  welcomeText: {
    fontFamily: "OpenSansBold",
    textAlign: "center",
  },
  buttonAndLoginContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    flex: 0.25,
  },
  loginTextContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  alreadyLoggedText: {
    fontFamily: "OpenSansRegular",
    marginEnd: "1%",
  },
  loginText: {
    fontFamily: "OpenSansBold",
  },
});

export default WelcomeScreen;
