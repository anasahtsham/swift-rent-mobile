import React, { useState, useEffect } from "react";
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { loadTheme } from "../../helpers";
import { icons } from "../../helpers/ImageImports";

import Header from "../../components/common/header";
import CustomTextInput from "../../components/common/CustomTextInput";
import SwiftRentLogoMedium from "../../components/common/SwiftRentLogoMedium";
import BigButtonGrey from "../../components/common/BigButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
                {English.enterYourDetails}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextInput
                value={emailOrPhone}
                label={English.emailOrNumber}
                textFieldIcon={icons.userIcon}
                style={styles.textField}
                errorText={error}
                onChangeText={(text) => setEmailOrPhone(text)}
              />
              <CustomTextInput
                value={password}
                label={English.password}
                textFieldIcon={icons.passwordFieldIcon}
                style={styles.textField}
                errorText={error}
                onChangeText={(text) => setPassword(text)}
              />

              {/* dont remove below comment */}

              {/* <View>
                <Button
                  title="Set error"
                  onPress={() => setError("This field is required.")}
                />
                <Button title="Remove error" onPress={() => setError("")} />
              </View> */}

              <Text
                style={{
                  fontSize: FontSizes.small,
                  color: colors.textPrimary,
                }}
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
  textField: {
    marginBottom: 10,
    width: "80%",
  },
});

export default LoginScreen;