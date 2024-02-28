import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { opacityValueForButton } from "../../constants";
import * as DarkTheme from "../../assets/colorScheme/defaultColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/darkColorScheme";

const ThemeSetter = () => {
  const [isSun, setIsSun] = useState(true);

  const toggleIcon = () => {
    setIsSun(!isSun);
  };

  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={styles.container}
      onPress={toggleIcon}
    >
      <Image
        source={
          isSun
            ? require("../../assets/icons/sun.png")
            : require("../../assets/icons/moon.png")
        }
        style={styles.themeIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderRadius: 8,
    borderWidth: 2,
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  themeIcon: { width: 30, height: 30 },
});

export default ThemeSetter;
