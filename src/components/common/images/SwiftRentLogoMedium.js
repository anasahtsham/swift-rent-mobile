import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { loadTheme } from "../../../helpers";

import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";

const SwiftRentLogoMedium = () => {
  const [colors, setColors] = useState(DarkTheme);

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
      source={require("../../../assets/icons/logos/adaptive-icon.png")}
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
