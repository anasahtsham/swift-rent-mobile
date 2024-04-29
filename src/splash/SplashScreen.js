import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../assets/fonts/FontSizes";
import SwiftRentLogoLarge from "../components/common/images/SwiftRentLogoLarge";
import { useColors } from "../helpers/SetColors";
import { useUserID } from "./../helpers/SetUserID";
import { useUserType } from "./../helpers/SetUserType";

const SplashScreen = ({ navigation }) => {
  //set theme
  const colors = useColors();

  const userID = useUserID();
  const userType = useUserType();

  // timer to send off from splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      if (userID === null) {
        navigation.navigate("Welcome Screen");
      }
      if (userType === "O") {
        navigation.navigate("Owner Navigator");
      }
      if (userType === "M") {
        navigation.navigate("Manager Navigator");
      }
      if (userType === "T") {
        navigation.navigate("Tenant Navigator");
      }
    }, 3000); // where 1000 milliseconds = 1 second

    // Clear the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigation, userID, userType]);

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
