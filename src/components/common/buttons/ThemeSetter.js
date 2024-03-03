import { useState, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { opacityValueForButton } from "../../../constants";
import { saveTheme, loadTheme } from "../../../helpers";
import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";

const ThemeSetter = () => {
  const [isSun, setIsSun] = useState(true);
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
      setIsSun(theme === "light");
    });
  });

  const toggleIcon = () => {
    const newIsSun = !isSun; //the logic that makes the image icon toggle
    setIsSun(newIsSun);
    saveTheme(newIsSun ? "light" : "dark");
  };

  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundPrimary,
          borderColor: colors.borderPrimary,
        },
      ]}
      onPress={toggleIcon}
    >
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
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  themeIcon: { width: 30, height: 30 },
});

export default ThemeSetter;
