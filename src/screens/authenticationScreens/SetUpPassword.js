import React, { useState, useEffect } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { loadLanguage, loadTheme } from "../../helpers";

import Header from "../../components/common/header";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../../assets/fonts/displaytext/UR/ur-pack";
import CustomPasswordField from "../../components/common/input fields/CustomPasswordField";
import { buttonWidthMedium } from "../../constants";

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
              <CustomPasswordField
                value={confirmPassword}
                label={languages.password}
                errorText={passwordError}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <CustomPasswordField
                value={password}
                label={languages.confirmPassword}
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

            <ButtonGrey
              width={buttonWidthMedium}
              fontSize={FontSizes.medium}
              buttonText={languages.continueText}
              destinationScreen="All Set Up"
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
