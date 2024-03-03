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
import CustomTextInput from "../../components/common/CustomTextInput";
import SwiftRentLogoMedium from "../../components/common/SwiftRentLogoMedium";
import BigButtonGrey from "../../components/common/BigButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../../assets/fonts/displaytext/UR/ur-pack";

const SetUpPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

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
              <Text
                style={[
                  styles.text,
                  { fontSize: FontSizes.large, color: colors.textLightBlue },
                ]}
              >
                {languages.nowLetsSetUpYourPassword}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextInput
                value={confirmPassword}
                label={languages.password}
                textFieldIcon={icons.passwordFieldIcon}
                isPasswordField={true}
                errorText={passwordError}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <CustomTextInput
                value={password}
                label={languages.confirmPassword}
                textFieldIcon={icons.userIcon}
                isPasswordField={true}
                errorText={confirmPasswordError}
                onChangeText={(text) => setPassword(text)}
              />

              {/* dont remove below comment */}

              {/* <View>
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
                <Button
                  title="Set error"
                  onPress={() =>
                    setConfirmPasswordError(languages.thisFieldIsRequired)
                  }
                />
                <Button
                  title="Remove error"
                  onPress={() => setConfirmPasswordError("")}
                />
              </View> */}
            </View>

            <BigButtonGrey
              buttonText={languages.login}
              customStyle={styles.customButton}
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
    width: "80%",
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

export default SetUpPassword;
