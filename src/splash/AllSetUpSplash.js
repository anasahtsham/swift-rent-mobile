import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../assets/fonts/FontSizes";
import { getColors } from "../helpers/SetColors";

const AllSetUpSplash = ({ route }) => {
  const { userType, firstName, lastName, date, email, phoneNumber, password } =
    route.params; // getting all the values needed to register the user from the previous screens

  console.log("\n\n\n\n\nuserType: ", userType);
  console.log("firstName: ", firstName);
  console.log("lastName: ", lastName);
  console.log("date: ", date);
  console.log("email: ", email);
  console.log("phoneNumber: ", phoneNumber);
  console.log("password: ", password);

  let userScreen = ""; // setting the user based on the user type at registration

  if (userType === "owner") {
    userScreen = "Owner Navigator";
  } else if (userType === "manager") {
    userScreen = "Manager Navigator";
  } else if (userType === "tenant") {
    userScreen = "Tenant Navigator";
  }

  //set theme
  const colors = getColors();

  // timer to send off from splash screen
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: userScreen }],
        })
      );
    }, 3000);

    const backAction = () => {
      return true; // This will prevent the back action
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    clearTimeout(); // clear the timer when the component unmounts to prevent memory leaks
    return () => backHandler.remove();
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
