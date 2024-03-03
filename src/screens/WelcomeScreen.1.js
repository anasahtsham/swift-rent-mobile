import React, { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { loadLanguage, loadTheme } from "../helpers";
import SwiftRentLogoMedium from "../components/common/SwiftRentLogoMedium";
import BigButtonGrey from "../components/common/BigButtonGrey";
import LanguageSelect from "../components/common/LanguageSelect";
import ThemeSetter from "../components/common/ThemeSetter";
import Header from "../components/common/header";
import * as FontSizes from "../assets/fonts/FontSizes";
import * as English from "../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../assets/fonts/displaytext/UR/ur-pack";
import * as DarkTheme from "../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../assets/colorScheme/defaultColorScheme";
import { styles } from "./WelcomeScreen";

export const WelcomeScreen = ({ navigation }) => {
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

  //update theme on click
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
          <SwiftRentLogoMedium />
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

        <View onTouchEnd={updateLanguage}>
          <LanguageSelect />
        </View>
      </View>
    </View>
  );
};
