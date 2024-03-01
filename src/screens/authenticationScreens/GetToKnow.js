import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { loadTheme } from "../../helpers";
import { icons } from "../../helpers/ImageImports";

import Header from "../../components/common/header";
import CustomTextInput from "../../components/common/CustomTextInput";
import SwiftRentLogo150 from "../../components/common/SwiftRentLogo150";
import BigButtonGrey from "../../components/common/BigButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";

const GetToKnow = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <Header />
        <View style={styles.mainContainer}>
          <View
            style={[
              styles.container,
              { backgroundColor: colors.backgroundPrimary },
            ]}
          >
            <View style={styles.logoAndTextContainer}>
              <SwiftRentLogo150 />
              <Text
                style={[
                  styles.text,
                  { fontSize: FontSizes.large, color: colors.textLightBlue },
                ]}
              >
                {English.letsGetToKnowYou}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextInput
                value={username}
                onChangeText={setUsername}
                placeholder={English.firstName}
                textFieldIcon={icons.userIcon}
              />
              <CustomTextInput
                value={password}
                onChangeText={setPassword}
                placeholder={English.lastName}
                textFieldIcon={icons.userIcon}
              />
              <CustomTextInput
                value={password}
                onChangeText={setPassword}
                placeholder={English.lastName}
                textFieldIcon={icons.userIcon}
              />

              <Text
                style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
              >
                {English.forgotPassword}
              </Text>
            </View>

            <BigButtonGrey
              buttonText={English.login}
              customStyle={styles.customButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: { backgroundColor: "red", flex: 1 },
  scrollViewContainer: { backgroundColor: "green" },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  logoAndTextContainer: {
    alignItems: "center",
    width: "50%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: { width: "90%", alignItems: "center" },
  customButton: {
    width: "40%",
  },
});

export default GetToKnow;
