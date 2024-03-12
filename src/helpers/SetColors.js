import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { loadTheme } from ".";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DarkTheme from "../assets/color_scheme/DarkColorScheme";
import * as DefaultTheme from "../assets/color_scheme/DefaultColorScheme";
import * as LoadingTheme from "../assets/color_scheme/LoadingColorScheme";

export const useColors = () => {
  const [colors, setColors] = useState(LoadingTheme);

  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return colors;
};

export const useColorsOnFocus = () => {
  const [colors, setColors] = useState(LoadingTheme);

  useFocusEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  });

  return colors;
};

export const setColorsToDark = async () => {
  try {
    await AsyncStorage.setItem("theme", "dark");
  } catch (e) {
    console.log(e);
  }
};
