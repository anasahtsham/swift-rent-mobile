import React, { useState, useEffect, useRef } from "react";
import {
  Button, //dont remove till integration
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { loadTheme, loadLanguage } from "../../helpers";
import { icons } from "../../helpers/ImageImports";

import Header from "../../components/common/header";
import CustomTextField from "../../components/common/input fields/CustomTextField";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import SmallButtonGrey from "../../components/common/buttons/SmallButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../../assets/fonts/displaytext/UR/ur-pack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ForgotPassword = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [code, setCode] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const [emailOrPhoneError, setEmailOrPhoneError] = useState(null);
  const [codeError, setCodeError] = useState(null);
  const [newPassError, setNewPassError] = useState(null);
  const [confirmNewPassError, setConfirmNewPassError] = useState(null);

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
        extraScrollHeight={2500}
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
                  { fontSize: FontSizes.large, color: colors.textPrimary },
                ]}
              >
                {languages.resetYourPassword}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextField
                value={emailOrPhone}
                label={languages.emailOrPhone}
                errorText={emailOrPhoneError}
                onChangeText={(text) => setEmailOrPhone(text)}
              />
              <CustomTextField
                value={code}
                label={languages.code}
                errorText={codeError}
                onChangeText={(text) => setCode(text)}
              />
              <CustomTextField
                value={newPass}
                label={languages.newPassword}
                isPasswordField={true}
                errorText={newPassError}
                onChangeText={(text) => setNewPass(text)}
              />
              <CustomTextField
                value={confirmNewPass}
                label={languages.confirmNewPassword}
                isPasswordField={true}
                errorText={confirmNewPassError}
                onChangeText={(text) => setConfirmNewPass(text)}
              />
            </View>

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
                onPress={() => setCodeError(languages.thisFieldIsRequired)}
              />
              <Button title="Remove error" onPress={() => setCodeError("")} />
              <Button
                title="Set error"
                onPress={() => setNewPassError(languages.thisFieldIsRequired)}
              />
              <Button
                title="Remove error"
                onPress={() => setNewPassError("")}
              />
              <Button
                title="Set error"
                onPress={() =>
                  setConfirmNewPassError(languages.thisFieldIsRequired)
                }
              />
              <Button
                title="Remove error"
                onPress={() => setConfirmNewPassError("")}
              />
            </View> */}

            <SmallButtonGrey
              buttonText={languages.change}
              destinationScreen="Contact Info"
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
    justifyContent: "space-around",
    position: "relative",
  },
  logoAndTextContainer: {
    alignItems: "center",
    width: "70%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "90%",
    height: "30%",
    alignItems: "center",
  },
  dobContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-evenly",
  },
});

export default ForgotPassword;
