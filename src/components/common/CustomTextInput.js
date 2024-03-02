import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, Image } from "react-native";
import { loadTheme } from "../../helpers";
import { icons } from "../../helpers/ImageImports";

import * as FontSizes from "../../assets/fonts/FontSizes";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  hideContent,
  textFieldIcon,
  customStyle,
}) => {
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundPrimary,
          borderColor: colors.borderPrimary,
        },
        customStyle,
      ]}
    >
      <TextInput
        secureTextEntry={hideContent}
        placeholderTextColor={colors.textGrey}
        style={[
          styles.input,
          {
            color: colors.textPrimary,
            fontSize: FontSizes.small,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />

      <Image
        tintColor={colors.iconPrimary}
        source={textFieldIcon}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "OpenSansRegular",
    width: "80%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 25,
    height: 45,
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
    width: "80%",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default CustomTextInput;
