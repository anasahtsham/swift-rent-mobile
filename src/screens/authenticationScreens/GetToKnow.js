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
import CustomTextInput from "../../components/common/CustomTextInput";
import SwiftRentLogoMedium from "../../components/common/SwiftRentLogoMedium";
import SmallButtonGrey from "../../components/common/SmallButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../../assets/fonts/displaytext/UR/ur-pack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const GetToKnow = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [error, setError] = useState(null);

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
              <SwiftRentLogoMedium />
              <Text
                style={[
                  styles.text,
                  { fontSize: FontSizes.large, color: colors.textLightBlue },
                ]}
              >
                {languages.letsGetToKnowYou}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextInput
                value={firstName}
                label={languages.firstName}
                textFieldIcon={icons.userIcon}
                errorText={error}
                onChangeText={(text) => setFirstName(text)}
              />
              <CustomTextInput
                value={lastName}
                label={languages.lastName}
                textFieldIcon={icons.userIcon}
                errorText={error}
                onChangeText={(text) => setLastName(text)}
              />
              <CustomTextInput
                value={DOB}
                label={languages.DOB}
                textFieldIcon={icons.calendarIcon}
                errorText={error}
                onChangeText={(text) => setDOB(text)}
              />
            </View>

            {/* dont remove below comment */}

            {/* <View>
              <Button
                title="Set error"
                onPress={() => setError("This field is required.")}
              />
              <Button title="Remove error" onPress={() => setError("")} />
            </View> */}

            <View style={styles.buttonsContainer}>
              <SmallButtonGrey
                buttonText={languages.back}
                destinationScreen="Who Are You"
                navigation={navigation}
              />
              <SmallButtonGrey
                buttonText={languages.next}
                destinationScreen="Contact Info"
                navigation={navigation}
              />
            </View>
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

export default GetToKnow;
