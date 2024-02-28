import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SwiftRentLogo250 from "../components/common/SwiftRentLogo250";
import * as darkTheme from "../assets/colorScheme/darkColorScheme";
import * as defaultTheme from "../assets/colorScheme/defaultColorScheme";

const SplashScreen = () => {
  const colors = darkTheme;
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Welcome Screen"); // Navigate to Welcome Screen after 3 seconds
    }, 3000); // where 1000 milliseconds = 1 second

    // Clear the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <SwiftRentLogo250 />
      <View style={styles.textContainer}>
        <Text style={[styles.splashTextSwift, { color: colors.textSecondary }]}>
          Swift
        </Text>
        <Text style={[styles.splashTextRent, { color: colors.textTertiary }]}>
          Rent
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  splashTextSwift: {
    flex: 1,
    textAlign: "right",
    fontFamily: "OpenSansBold",
    fontSize: 50,
  },
  splashTextRent: {
    flex: 1,
    textAlign: "left",
    fontFamily: "OpenSansBold",
    fontSize: 50,
  },
});

export default SplashScreen;
