import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../assets/fonts/FontSizes";
import { useColors } from "../helpers/SetColors";

const AllSetUpSplash = ({ route }) => {
  const { userType } = route.params;

  let userScreen = ""; // setting the user based on the user type at registration

  if (userType === "O") {
    userScreen = "Owner Navigator";
  } else if (userType === "M") {
    userScreen = "Manager Navigator";
  } else if (userType === "T") {
    userScreen = "Tenant Navigator";
  }

  //set theme
  const colors = useColors();

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
