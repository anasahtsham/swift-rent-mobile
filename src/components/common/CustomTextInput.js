import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, Image } from "react-native";
import { loadTheme } from "../../helpers";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  hideContent,
  textFieldIcon,
}) => {
  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    // <TextInput
    //   placeholderTextColor={colors.textGrey}
    //   style={[
    //     styles.input,
    //     {
    //       backgroundColor: colors.backgroundPrimary,
    //       borderColor: colors.borderPrimary,
    //       color: colors.textPrimary,
    //       fontSize: FontSizes.small,
    //     },
    //   ]}
    //   value={value}
    //   onChangeText={onChangeText}
    //   placeholder={placeholder}
    // />

    <View style={styles.container}>
      <TextInput
        secureTextEntry={hideContent}
        placeholderTextColor={colors.textGrey}
        style={[
          styles.input,
          {
            backgroundColor: colors.backgroundPrimary,
            borderColor: colors.borderPrimary,
            color: colors.textPrimary,
            fontSize: FontSizes.small,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {console.log(JSON.stringify(textFieldIcon))}
      <Image source={textFieldIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "OpenSansRegular",
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default CustomTextInput;
