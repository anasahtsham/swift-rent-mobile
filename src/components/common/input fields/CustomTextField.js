import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import { loadTheme } from "../../../helpers";
import { inputStyles } from "./styles/CustomInputFieldStyles";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";

const CustomTextField = (props) => {
  const [colors, setColors] = useState(DarkTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  const {
    label,
    errorText,
    value,
    style,
    onBlur,
    onFocus,
    textFieldIcon,
    isPasswordField,
    keyboardType,
    ...restOfProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? colors.borderBlue : colors.borderPrimary;
  let width = isFocused ? 2 : 1;

  if (errorText) {
    color = "#B00020";
  }

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={inputStyles.mainContainer}>
        <View
          style={[
            inputStyles.textInputContainer,
            { borderColor: color, borderWidth: width },
          ]}
        >
          <View>
            <View style={inputStyles.container}>
              <View style={[style, inputStyles.inputContainer]}>
                <TextInput
                  keyboardType={keyboardType}
                  secureTextEntry={isPasswordField}
                  style={[
                    inputStyles.input,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                  ref={inputRef}
                  value={value}
                  onBlur={(event) => {
                    setIsFocused(false);
                    onBlur?.(event);
                  }}
                  onFocus={(event) => {
                    setIsFocused(true);
                    onFocus?.(event);
                  }}
                  {...restOfProps}
                />
                <Animated.View
                  style={[
                    inputStyles.labelContainer,
                    {
                      backgroundColor: colors.backgroundPrimary,
                      transform: [
                        {
                          scale: focusAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0.75],
                            // scale (size) of text
                          }),
                        },
                        {
                          translateY: focusAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -30],
                            // [start position on y axis, ending position on y axis]
                          }),
                        },
                        {
                          translateX: focusAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-8, -5],
                            // [start position on x axis, ending position on x axis]
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <Text style={{ fontSize: FontSizes.small, color }}>
                    {label}
                    {errorText ? "*" : ""}
                  </Text>
                </Animated.View>
              </View>

              <Image
                tintColor={color}
                source={textFieldIcon}
                style={inputStyles.icon}
              />
            </View>
          </View>
        </View>
        {!!errorText && (
          <Text
            style={[
              inputStyles.error,
              {
                color: colors.textRed,

                fontSize: FontSizes.extraSmall,
              },
            ]}
          >
            {errorText}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomTextField;
