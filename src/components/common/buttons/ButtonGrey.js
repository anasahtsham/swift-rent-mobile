import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import { loadTheme } from "../../../helpers";
import { opacityValueForButton } from "../../../constants";

import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const ButtonGrey = (props) => {
  const [colors, setColors] = useState(DefaultTheme);

  if (props.fontSize === undefined) {
    throw new Error('The prop "fontSize" is required in ButtonGrey component');
  }

  if (props.width === undefined) {
    throw new Error('The prop "width" is required in ButtonGrey component');
  }

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
          width: props.width,
        },
      ]}
      onPress={handlePress}
      activeOpacity={opacityValueForButton}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: colors.textBlack,
            fontSize: props.fontSize,
          },
        ]}
      >
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    borderWidth: 1.5,
  },
  buttonText: {
    fontSize: FontSizes.small,
    fontFamily: "OpenSansRegular",
    textAlign: "center",
  },
});

export default ButtonGrey;
