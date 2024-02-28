import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as darkTheme from "../assets/colorScheme/darkColorScheme";
import * as defaultTheme from "../assets/colorScheme/defaultColorScheme";

const SplashScreen = () => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? darkTheme : defaultTheme;
  console.log(colorScheme);
  console.log(colors.backgroundPrimary);
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
      <Image
        style={styles.splashIcon}
        source={require("../assets/icons/adaptive-icon.png")}
      />
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
  splashIcon: {
    width: 250,
    height: 250,
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
