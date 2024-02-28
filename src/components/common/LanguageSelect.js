import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { opacityValueForButton } from "../../constants";

const LanguageSelect = () => {
  return (
    <TouchableOpacity
      style={styles.dropdownContainer}
      activeOpacity={opacityValueForButton}
    >
      <Image
        source={require("../../assets/icons/language.png")}
        style={styles.languageIcon}
      />
      <Text style={styles.dropdownText}>Select Language</Text>
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
    backgroundColor: "#e5e5e5",
    borderRadius: 100,
    borderColor: "#cdcdcd",
    borderWidth: 1.5,
  },
  dropdownText: {
    fontFamily: "OpenSansRegular",
    color: "#06283d",
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
