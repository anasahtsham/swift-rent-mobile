import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { opacityValueForButton } from "../../../constants";
import { useEffect, useState } from "react";
import { loadTheme } from "../../../helpers";

import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const BigButtonGrey = (props) => {
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  const handlePress = () => {
    props.navigation.navigate(props.destinationScreen);
  };

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
      onPress={handlePress}
      activeOpacity={opacityValueForButton}
    >
      <Text
        style={[
          styles.buttonText,
          { color: colors.textBlack, fontSize: FontSizes.medium },
        ]}
      >
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
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "OpenSansRegular",
    textAlign: "center",
  },
});

export default BigButtonGrey;
