import { useState, useEffect, useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { opacityValueForButton } from "../../../constants";
import { saveTheme, loadTheme } from "../../../helpers";

import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const ThemeSetter = (props) => {
  const [isSun, setIsSun] = useState(true);
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setIsSun(theme === "light");
    });
  });

  const toggleIcon = () => {
    const newIsSun = !isSun; //the logic that makes the image icon toggle
    saveTheme(newIsSun ? "light" : "dark");
    loadTheme().then((theme) => {
      props.onPress(setColors(theme === "light" ? DefaultTheme : DarkTheme));
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundPrimary,
          borderColor: colors.borderPrimary,
          width: props.width,
        },
      ]}
      onPress={toggleIcon}
    >
      <Text style={{ fontSize: FontSizes.small, color: colors.textPrimary }}>
        {props.text}
      </Text>
      <Image
        tintColor={colors.textPrimary}
        source={
          isSun
            ? require("../../../assets/icons/sun.png")
            : require("../../../assets/icons/moon.png")
        }
        style={styles.themeIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  themeIcon: { width: 30, height: 30 },
});

export default ThemeSetter;
