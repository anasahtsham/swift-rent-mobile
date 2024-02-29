import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { opacityValueForButton } from "../../constants";
import { useEffect, useState } from "react";
import { loadTheme } from "../../helpers";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";

const BigButton = (props) => {
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.backgroundSecondary }]}
      activeOpacity={opacityValueForButton}
    >
      <Text style={[styles.buttonText, { color: colors.textQuaternary }]}>
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "60%",
    paddingVertical: 2,
    borderRadius: 100,
    borderColor: "#cdcdcd",
    borderWidth: 1.5,
  },
  buttonText: {
    fontFamily: "OpenSansRegular",
    textAlign: "center",
    fontSize: 25,
  },
});

export default BigButton;
