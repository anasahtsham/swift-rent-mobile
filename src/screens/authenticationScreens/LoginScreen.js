import React, { useState, useEffect } from "react";
import {
  Button,
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { loadLanguage, loadTheme } from "../../helpers";
import { icons } from "../../helpers/ImageImports";

import Header from "../../components/common/header";
import CustomTextField from "../../components/common/input fields/CustomTextField";
import CustomPasswordField from "../../components/common/input fields/CustomPasswordField";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../../assets/fonts/displaytext/UR/ur-pack";
import { buttonWidthMedium } from "../../constants";

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [emailOrPhoneError, setEmailOrPhoneError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleLogin = () => {
    // Handle login logic here
  };

  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  const [languages, setLanguages] = useState(English);

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguages(language === "english" ? English : Urdu);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Header />
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
        extraScrollHeight={10}
      >
        <View style={styles.mainContainer}>
          <View
            style={[
              styles.container,
              { backgroundColor: colors.backgroundPrimary },
            ]}
          >
            <View style={styles.logoAndTextContainer}>
              <SwiftRentLogoMedium />
              <Text
                style={[
                  styles.text,
                  { fontSize: FontSizes.large, color: colors.textLightBlue },
                ]}
              >
                {languages.enterYourDetails}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextField
                value={emailOrPhone}
                label={languages.emailOrPhone}
                textFieldIcon={icons.userIcon}
                errorText={emailOrPhoneError}
                onChangeText={(text) => setEmailOrPhone(text)}
              />
              <CustomPasswordField
                value={password}
                label={languages.password}
                errorText={passwordError}
                onChangeText={(text) => setPassword(text)}
              />

              {/* dont remove below comment */}

              {/* <View>
                <Button
                  title="Set error"
                  onPress={() =>
                    setEmailOrPhoneError(languages.thisFieldIsRequired)
                  }
                />
                <Button
                  title="Remove error"
                  onPress={() => setEmailOrPhoneError("")}
                />
                <Button
                  title="Set error"
                  onPress={() =>
                    setPasswordError(languages.thisFieldIsRequired)
                  }
                />
                <Button
                  title="Remove error"
                  onPress={() => setPasswordError("")}
                />
              </View> */}

              <Pressable
                onTouchEnd={() => navigation.navigate("Forgot Password")}
              >
                <Text
                  style={{
                    fontSize: FontSizes.small,
                    color: colors.textLightBlue,
                    padding: 10,
                  }}
                >
                  {languages.forgotPassword}
                </Text>
              </Pressable>
            </View>

            <ButtonGrey
              width={buttonWidthMedium}
              fontSize={FontSizes.medium}
              buttonText={languages.login}
              destinationScreen="Login As"
              navigation={navigation}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaViewContainer: { flex: 1 },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  container: {
    flex: 1,
    height: Dimensions.get("window").height - 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  logoAndTextContainer: {
    alignItems: "center",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "90%",
    height: "30%",
    alignItems: "center",
  },
  customButton: {
    width: "40%",
  },
});

export default LoginScreen;
