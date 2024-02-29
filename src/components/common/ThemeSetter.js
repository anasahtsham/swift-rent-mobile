import React, { useState, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { opacityValueForButton } from "../../constants";
import { saveTheme, loadTheme } from "../../helpers";

const ThemeSetter = () => {
  const [isSun, setIsSun] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {loadTheme()==="light" ? setIsSun(true) : setIsSun(false);
  //   }, 1000);
  // });

  useEffect(() => {
    loadTheme().then(theme => {
      setIsSun(theme === "light");
    });
  }, []);

  // const toggleIcon = () => {
  //   setIsSun(!isSun);
  //   saveTheme(isSun? "dark": "light");
  // };
  const toggleIcon = () => {
    const newIsSun = !isSun;
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
  },
  themeIcon: { width: 30, height: 30 },
});

export default ThemeSetter;
