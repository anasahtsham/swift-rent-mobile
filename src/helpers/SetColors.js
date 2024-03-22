import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { loadTheme } from ".";
import * as DarkTheme from "../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../assets/themes/LoadingColorScheme";

// These functions are used to set the colors accross the app

const useColors = () => {
  const [colors, setColors] = useState(LoadingTheme);

  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  colorsValue = colors;

  return colors;
};

export let colorsValue;

export const getColors = () => {
  const colors = useColors();
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

export const setColorsToDefault = async () => {
  try {
    await AsyncStorage.setItem("theme", "light");
  } catch (e) {
    console.log(e);
  }
};
