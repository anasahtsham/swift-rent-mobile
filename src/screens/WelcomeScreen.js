import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  BackHandler,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FontSizes from "../assets/fonts/FontSizes";
import * as DarkTheme from "../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../assets/themes/LoadingColorScheme";
import ButtonGrey from "../components/common/buttons/ButtonGrey";
import ThemeSetter from "../components/common/buttons/ThemeSetter";
import { buttonWidthMedium } from "../constants";
import { loadTheme } from "../helpers";
import { useLanguages } from "./../helpers/SetLanguages";

const WelcomeScreen = ({ navigation }) => {
  const [colors, setColors] = useState(LoadingTheme); //declaring state so that it can be updated when toggle button is pressed for theme

  //update theme on load

  const languages = useLanguages();

  //prevent back button from going back to splash screen and back to the profile screen after logging out
  useFocusEffect(
    //using useFocusEffect so that the back button is only disabled for this screen and doest disable it for all the screens that are being navigated to from this screen
    useCallback(() => {
      updateTheme(); //update theme on first load
      const onBackPress = () => {
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => backHandler.remove();
    }, [])
  );

  //update theme on clicking toggle theme button
  function updateTheme() {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.themeButtonContainer}>
        <ThemeSetter onPress={updateTheme} />
      </View>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <View style={styles.logoAndTextContainer}>
          <Image
            tintColor={colors.logoPrimary}
            style={styles.SwiftRentLogoMedium}
            source={require("../assets/icons/favicons/adaptive-icon.png")}
          />
          <Text
            style={[
              styles.welcomeText,
              { color: colors.textLightBlue, fontSize: FontSizes.large },
            ]}
          >
            {languages.welcomeToSwiftRent}
          </Text>
        </View>

        <View style={styles.buttonAndLoginContainer}>
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.getStarted}
            destinationScreen="Who Are You"
            navigation={navigation}
          />
          <Pressable
            style={styles.loginTextContainer}
            onTouchEnd={() => navigation.navigate("Login Screen")}
          >
            <Text
              style={[
                styles.alreadyLoggedText,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              {languages.alreadyHaveAnAccount}
            </Text>
            <Text
              style={[
                styles.loginText,
                { color: colors.textLightBlue, fontSize: FontSizes.small },
              ]}
            >
              {languages.login}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },
  themeButtonContainer: {
    marginEnd: 20,
    position: "absolute",
    right: 0,
    top: 50,
    zIndex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
  },
  SwiftRentLogoMedium: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    resizeMode: "contain",
  },
  logoAndTextContainer: {
    alignItems: "center",
    width: "70%",
  },
  welcomeText: {
    fontFamily: "OpenSansBold",
    textAlign: "center",
  },
  buttonAndLoginContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    flex: 0.25,
  },
  loginTextContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  alreadyLoggedText: {
    fontFamily: "OpenSansRegular",
    marginEnd: "1%",
  },
  loginText: {
    fontFamily: "OpenSansBold",
  },
});

export default WelcomeScreen;
