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

import BigButtonGrey from "../components/common/buttons/BigButtonGrey";
import LanguageSelect from "../components/common/buttons/LanguageSelect";
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

  //update language on click
  function updateLanguage() {
    loadLanguage().then((language) => {
      setLanguage(language === "english" ? English : Urdu);
    });
  }

  return (
    <View style={styles.header}>
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
            {languages.welcomeTo}
          </Text>
          <Text
            style={[
              styles.welcomeText,
              { color: colors.textLightBlue, fontSize: FontSizes.large },
            ]}
          >
            {languages.swiftRent}
          </Text>
        </View>

        <View style={styles.buttonAndLoginContainer}>
          <BigButtonGrey
            buttonText={languages.getStarted}
            customStyle={{ width: 270 }}
            destinationScreen="Who Are You"
            navigation={navigation}
          />

          <Pressable
            style={styles.loginTextContainer}
            onTouchEnd={() => navigation.navigate("Login As")}
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

        {/* <View onTouchEnd={updateLanguage}>
          <LanguageSelect />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "flex-end",
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
  logoAndTextContainer: {
    alignItems: "center",
  },
  SwiftRentLogoMedium: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    resizeMode: "contain",
  },
  welcomeText: {
    fontFamily: "OpenSansBold",
  },
  buttonAndLoginContainer: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginTextContainer: {
    padding: 10,
    flexDirection: "row",
    width: "60%",
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
