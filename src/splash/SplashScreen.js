import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loadTheme } from "../helpers";

import SwiftRentLogoLarge from "../components/common/images/SwiftRentLogoLarge";
import Header from "../components/common/header";
import * as FontSizes from "../assets/fonts/FontSizes";
import * as DarkTheme from "../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../assets/colorScheme/defaultColorScheme";

const SplashScreen = () => {
  //set theme
  const [colors, setColors] = useState(DefaultTheme);
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  // timer to send off from splash screen
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Welcome Screen"); // Navigate to Welcome Screen after 3 seconds
    }, 3000); // where 1000 milliseconds = 1 second

    // Clear the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.header}>
      <Header />
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <SwiftRentLogoLarge />

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.splashTextSwift,
              { color: colors.textDarkBlue, fontSize: FontSizes.extraLarge },
            ]}
          >
            Swift
          </Text>
          <Text
            style={[
              styles.splashTextRent,
              { color: colors.textLightBlue, fontSize: FontSizes.extraLarge },
            ]}
          >
            Rent
          </Text>
        </View>
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
  container: {
    flex: 0.99,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    position: "relative",
  },
  textContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  splashTextSwift: {
    textAlign: "right",
    width: "50%",
    fontFamily: "OpenSansBold",
  },
  splashTextRent: {
    textAlign: "left",
    width: "50%",
    fontFamily: "OpenSansBold",
  },
});

export default SplashScreen;
