import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { loadTheme } from "../../../helpers";

import * as DarkTheme from "../../../assets/color_scheme/DarkColorScheme";
import * as DefaultTheme from "../../../assets/color_scheme/DefaultColorScheme";
import * as LoadingTheme from "../../../assets/color_scheme/LoadingColorScheme";

const SwiftRentLogoMedium = () => {
  const [colors, setColors] = useState(LoadingTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <Image
      tintColor={colors.logoPrimary}
      style={styles.SwiftRentLogoMedium}
      source={require("../../../assets/icons/favicons/adaptive-icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  SwiftRentLogoMedium: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    resizeMode: "contain",
  },
});

export default SwiftRentLogoMedium;
