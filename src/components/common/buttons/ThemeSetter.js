import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import * as DarkTheme from "../../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../../assets/themes/LoadingColorScheme";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { loadTheme, saveTheme } from "../../../helpers";
import { icons } from "./../../../helpers/ImageImports";

const ThemeSetter = (props) => {
  const [isSun, setIsSun] = useState(true);
  const [colors, setColors] = useState(LoadingTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
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
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
        source={isSun ? icons.sunIcon : icons.moonIcon}
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
    elevation: 5,
  },
  themeIcon: { width: 30, height: 30 },
});

export default ThemeSetter;
