import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { loadTheme } from ".";

import * as DarkTheme from "../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../assets/colorScheme/defaultColorScheme";

export const useColors = () => {
  const [colors, setColors] = useState(DefaultTheme);

  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return colors;
};

export const useColorsOnFocus = () => {
  const [colors, setColors] = useState(DefaultTheme);

  useFocusEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  });

  return colors;
};
