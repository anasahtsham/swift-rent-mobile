import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { loadTheme } from "../../helpers";

import Header from "../../components/common/header";
import CustomTextInput from "../../components/common/CustomTextInput";
import SwiftRentLogo150 from "../../components/common/SwiftRentLogo150";
import BigButtonGrey from "../../components/common/BigButtonGrey";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  const [colors, setColors] = useState(DefaultTheme);
  const fonts = FontSizes;

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header />
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
              { fontSize: fonts.large, color: colors.textTertiary },
            ]}
          >
            {English.enterYourDetails}
          </Text>
        </View>

        <View style={styles.textInputsContainer}>
          <CustomTextInput
            value={username}
            onChangeText={setUsername}
            placeholder={English.emailOrNumber}
          />
          <CustomTextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          <Text
            style={[{ fontSize: FontSizes.small, color: colors.textPrimary }]}
          >
            {English.forgotPassword}
          </Text>
        </View>

        <BigButtonGrey buttonText={English.login} style={styles.button} />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  logoAndTextContainer: {
    alignItems: "center",
  },
  text: { fontFamily: "OpenSansBold" },
  textInputsContainer: { width: 330, alignItems: "center" },
  button: {
    width: "40%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
