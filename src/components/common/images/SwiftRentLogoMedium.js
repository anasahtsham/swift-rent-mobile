import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import * as DarkTheme from "../../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../../assets/themes/LoadingColorScheme";
import { loadTheme } from "../../../helpers";

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
