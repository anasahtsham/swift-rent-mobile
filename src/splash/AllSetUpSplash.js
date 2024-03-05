import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loadTheme } from "../helpers";

import Header from "../components/common/header";
import * as FontSizes from "../assets/fonts/FontSizes";
import * as DarkTheme from "../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../assets/colorScheme/defaultColorScheme";

const AllSetUpSplash = () => {
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
      navigation.replace("Owner Tab Navigator"); // Navigate to Welcome Screen after 3 seconds
    }, 3000); // where 1000 milliseconds = 1 second

    const backAction = () => {
      return true; // This will prevent the back action
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();

    // Clear the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.splashText,
              {
                color: colors.textLightBlue,
                fontSize: FontSizes.extraExtraLarge,
              },
            ]}
          >
            You’re all set!
          </Text>
        </View>
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
  splashText: {
    textAlign: "center",
    fontFamily: "OpenSansBold",
  },
});

export default AllSetUpSplash;
