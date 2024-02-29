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

        <Pressable
          style={styles.loginTextContainer}
          onTouchEnd={() => navigation.navigate("Login Screen")}
        >
          <Text
            style={[styles.alreadyLoggedText, { color: colors.textPrimary }]}
          >
            {English.alreadyHaveAnAccount}
          </Text>
          <Text style={[styles.loginText, { color: colors.textTertiary }]}>
            {English.login}
          </Text>
        </Pressable>

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
    width: 220,
    justifyContent: "space-between",
  },
  alreadyLoggedText: {
    fontFamily: "OpenSansRegular",
    flex: 100,
  },
  loginText: {
    fontFamily: "OpenSansBold",
    flex: 25,
  },
});

export default WelcomeScreen;
