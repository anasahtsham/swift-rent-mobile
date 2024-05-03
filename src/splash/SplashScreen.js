import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../assets/fonts/FontSizes";
import SwiftRentLogoLarge from "../components/common/images/SwiftRentLogoLarge";
import { saveUserID, saveUserType } from "../helpers";
import { useColors } from "../helpers/SetColors";
import { BASE_URL } from "./../constants/index";
import { useUserID } from "./../helpers/SetUserID";
import { useUserType } from "./../helpers/SetUserType";

const SplashScreen = ({ navigation }) => {
  //set theme
  const colors = useColors();
  const [loading, setLoading] = useState(true);

  const userID = useUserID();
  const userType = useUserType();

  // timer to send off from splash screen
  useEffect(() => {
    if (userID && userType) {
      axios
        .post(`${BASE_URL}/api/auth/check-ban`, { userID: userID })
        .then((response) => {
          if (response.data.isBanned === true) {
            saveUserID("");
            saveUserType("");
            Alert.alert(
              "User Banned",
              "You have been banned from the system. Please contact the admin at swiftrent2023@gmail.com for more information."
            );

            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Welcome Screen" }],
              })
            );
          } else {
            switch (userType) {
              case "O":
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Owner Navigator" }],
                  })
                );
                break;
              case "M":
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Manager Navigator" }],
                  })
                );
                break;
              case "T":
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Tenant Navigator" }],
                  })
                );
                break;
              default:
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Welcome Screen" }],
                  })
                );
                break;
            }
          }
        })
        .catch((error) => {
          Alert.alert("Error", error.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Welcome Screen" }],
        })
      );
    }, 10000); // where 1000 milliseconds = 1 second

    // Clear the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigation, userID, userType]);

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <SwiftRentLogoLarge />

      <View style={[styles.textContainer, { marginBottom: 30 }]}>
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
      {loading && (
        <ActivityIndicator size="large" color={colors.textDarkBlue} />
      )}
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
