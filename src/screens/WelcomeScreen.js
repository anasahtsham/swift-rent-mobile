import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { loadTheme } from "../helpers";

import SwiftRentLogo250 from "../components/common/SwiftRentLogo250";
import BigButtonGrey from "../components/common/BigButtonGrey";
import LanguageSelect from "../components/common/LanguageSelect";
import ThemeSetter from "../components/common/ThemeSetter";
import Header from "../components/common/header";

import * as FontSizes from "../assets/fonts/FontSizes";
import * as English from "../assets/fonts/displaytext/EN/en-pack";
import * as DarkTheme from "../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../assets/colorScheme/defaultColorScheme";

const WelcomeScreen = ({ navigation }) => {
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
          <SwiftRentLogo250 />
          <Text
            style={[
              styles.welcomeText,
              { color: colors.textLightBlue, fontSize: FontSizes.large },
            ]}
          >
            {English.welcomeTo}
          </Text>
          <Text
            style={[
              styles.welcomeText,
              { color: colors.textLightBlue, fontSize: FontSizes.large },
            ]}
          >
            {English.swiftRent}
          </Text>
        </View>

        <View style={styles.buttonAndLoginContainer}>
          <BigButtonGrey
            buttonText={English.getStarted}
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
              {English.alreadyHaveAnAccount}
            </Text>
            <Text
              style={[
                styles.loginText,
                { color: colors.textLightBlue, fontSize: FontSizes.small },
              ]}
            >
              {English.login}
            </Text>
          </Pressable>
        </View>

        <LanguageSelect />
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
  welcomeText: {
    fontFamily: "OpenSansBold",
  },
  buttonAndLoginContainer: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginTextContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  alreadyLoggedText: {
    fontFamily: "OpenSansRegular",
  },
  loginText: {
    fontFamily: "OpenSansBold",
  },
});

export default WelcomeScreen;
