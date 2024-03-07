import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { opacityValueForButton } from "../../../constants";
import { loadLanguage, loadTheme, saveLanguage } from "../../../helpers";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import * as English from "../../../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../../../assets/fonts/displaytext/UR/ur-pack";
import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";

const LanguageSelect = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const [languages, setLanguage] = useState(English);
  const [colors, setColors] = useState(DarkTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguage(language === "english" ? English : Urdu);
      setIsEnglish(language === "english");
    });
  }, []);

  const toggleLanguage = () => {
    const newIsEnglish = !isEnglish; //the logic that makes the language toggle
    setIsEnglish(newIsEnglish);
    saveLanguage(newIsEnglish ? "english" : "urdu");
  };

  return (
    <TouchableOpacity
      onPress={toggleLanguage}
      style={[
        [
          styles.dropdownContainer,
          {
            backgroundColor: colors.backgroundGrey,
            borderColor: colors.borderGrey,
          },
        ],
      ]}
      activeOpacity={opacityValueForButton}
    >
      <Image
        source={require("../../../assets/icons/language.png")}
        style={styles.languageIcon}
      />
      <Text
        style={[
          styles.dropdownText,
          { color: colors.textBlack, fontSize: FontSizes.small },
        ]}
      >
        {isEnglish ? "Select Language" : "زبان منتخب کریں"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    paddingStart: 8,
    paddingEnd: 10,
    borderRadius: 100,
    borderWidth: 1.5,
    backgroundColor: "red",
  },
  dropdownText: {
    fontFamily: "OpenSansRegular",
    textAlign: "center",
  },
  languageIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  dropdownIcon: { width: 24, height: 24, marginLeft: 8 },
});

export default LanguageSelect;
