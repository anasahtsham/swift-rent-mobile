import { useEffect, useState } from "react";
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

const SetColors = () => {
  const colors = useColors();
};

export default SetColors;
