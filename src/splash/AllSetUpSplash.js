import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";

import { useColors } from "../helpers/SetColors";

import * as FontSizes from "../assets/fonts/FontSizes";

const AllSetUpSplash = ({ route }) => {
  const { userType, firstName, lastName, date, email, phoneNumber, password } =
    route.params;

  console.log("userType: ", userType);
  console.log("firstName: ", firstName);
  console.log("lastName: ", lastName);
  console.log("date: ", date);
  console.log("email: ", email);
  console.log("phoneNumber: ", phoneNumber);
  console.log("password: ", password);

  let userScreen = "";

  if (userType === "owner") {
    userScreen = "Owner Navigator";
  } else if (userType === "manager") {
    userScreen = "Manager Navigator";
  } else if (userType === "tenant") {
    userScreen = "Tenant Navigator";
  }
  //set theme
  const colors = useColors();

  // timer to send off from splash screen
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(userScreen); // Navigate to Welcome Screen after 3 seconds
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
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
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
  splashText: {
    textAlign: "center",
    fontFamily: "OpenSansBold",
  },
});

export default AllSetUpSplash;
