import React, { useState, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { opacityValueForButton } from "../../constants";
import { saveTheme, loadTheme } from "../../helpers";

const ThemeSetter = () => {
  const [isSun, setIsSun] = useState(true);

  //checking on first run if theme is dark or light
  useEffect(() => {
    loadTheme().then((theme) => {
      //this declares a theme parameter and stores the
      //value (true/false) in it based on if lightmode is on or not
      setIsSun(theme === "light");
    });
  }, []);

  const toggleIcon = () => {
    const newIsSun = !isSun; //the logic that makes it toggle
    setIsSun(newIsSun);
    saveTheme(newIsSun ? "light" : "dark");
  };

  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={styles.container}
      onPress={toggleIcon}
    >
      <Image
        source={
          isSun
            ? require("../../assets/icons/sun.png")
            : require("../../assets/icons/moon.png")
        }
        style={styles.themeIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderRadius: 8,
    borderWidth: 2,
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  themeIcon: { width: 30, height: 30 },
});

export default ThemeSetter;