import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { opacityValueForButton } from "../../constants";
import { useEffect, useState } from "react";
import { loadTheme } from "../../helpers";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";

const BigButtonBlue = (props) => {
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors.backgroundGrey,
          borderColor: colors.borderGrey,
        },
        props.customStyle,
      ]}
      activeOpacity={opacityValueForButton}
    >
      <Text style={[styles.buttonText, { color: colors.textBlack }]}>
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "60%",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 100,
    borderWidth: 1.5,
  },
  buttonText: {
    fontFamily: "OpenSansRegular",
    textAlign: "center",
    fontSize: 25,
  },
});

export default BigButtonBlue;
