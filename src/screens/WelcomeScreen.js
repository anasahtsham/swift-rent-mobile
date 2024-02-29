import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { loadTheme } from "../helpers";

import SwiftRentLogo250 from "../components/common/SwiftRentLogo250";
import BigButton from "../components/common/BigButton";
import LanguageSelect from "../components/common/LanguageSelect";
import ThemeSetter from "../components/common/ThemeSetter";
import Header from "../components/common/header";

import * as English from "../assets/fonts/displaytext/EN/en-pack";
import * as DarkTheme from "../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../assets/colorScheme/defaultColorScheme";
const WelcomeScreen = () => {
  const [colors, setColors] = useState(DefaultTheme);

  useEffect(() => {
    setInterval(() => {
      loadTheme().then((theme) => {
        setColors(theme === "light" ? DefaultTheme : DarkTheme);
      });
    }, 1);
  });

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.themeContainer}>
        <ThemeSetter setColors={setColors} />
      </View>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <SwiftRentLogo250 />

        <View>
          <Text style={[styles.welcomeText, { color: colors.textTertiary }]}>
            {English.welcomeTo}
          </Text>
          <Text style={[styles.welcomeText, { color: colors.textTertiary }]}>
            {English.swiftRent}
          </Text>
        </View>

        <BigButton buttonText={English.getStarted} />

        <Pressable style={styles.loginTextContainer}>
          <Text
            style={[styles.alreadyLoggedText, { color: colors.textPrimary }]}
          >
            {English.alreadyHaveAnAccount}
          </Text>
          <Text style={styles.loginText}>{English.login}</Text>
        </Pressable>

        <LanguageSelect />
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
  themeContainer: {
    marginEnd: 20,
    position: "absolute",
    right: 0,
    top: 50,
    zIndex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  welcomeText: {
    fontFamily: "OpenSansBold",
    fontSize: 40,
    textAlign: "center",
  },
  loginTextContainer: {
    flexDirection: "row",
  },
  alreadyLoggedText: { fontFamily: "OpenSansRegular" },
  loginText: {
    color: "#47b5ff",
    fontFamily: "OpenSansBold",
  },
});

export default WelcomeScreen;
