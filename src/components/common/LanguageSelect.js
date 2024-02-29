import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { opacityValueForButton } from "../../constants";
import { loadTheme } from "../../helpers";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";

const LanguageSelect = () => {
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <TouchableOpacity
      style={[
        [
          styles.dropdownContainer,
          { backgroundColor: colors.backgroundSecondary },
        ],
      ]}
      activeOpacity={opacityValueForButton}
    >
      <Image
        source={require("../../assets/icons/language.png")}
        style={styles.languageIcon}
      />
      <Text style={[styles.dropdownText, { color: colors.textQuaternary }]}>
        Select Language
      </Text>
      <Image
        source={require("../../assets/icons/dropdown.png")}
        style={styles.dropdownIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    borderRadius: 100,
    borderColor: "#cdcdcd",
    borderWidth: 1.5,
  },
  dropdownText: {
    fontFamily: "OpenSansRegular",
    textAlign: "center",
    fontSize: 16,
  },
  languageIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  dropdownIcon: { width: 24, height: 24, marginLeft: 8 },
});

export default LanguageSelect;
