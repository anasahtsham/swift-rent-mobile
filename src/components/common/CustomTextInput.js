import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import * as FontSizes from "../../assets/fonts/FontSizes";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import { loadTheme } from "../../helpers";

const CustomTextInput = (props) => {
  const [colors, setColors] = useState(DefaultTheme);

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
  if (errorText) {
    color = "#B00020";
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <View>
          <View
            style={[
              styles.container,
              {
                borderColor: color,
              },
            ]}
          >
            <View style={style}>
              <TextInput
                style={[
                  styles.input,
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
                  styles.labelContainer,
                  {
                    backgroundColor: colors.backgroundPrimary,
                    transform: [
                      {
                        scale: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.75],
                        }),
                      },
                      {
                        translateY: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [13, -18],
                        }),
                      },
                      {
                        translateX: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -20],
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
              style={styles.icon}
            />
          </View>
          {!!errorText && (
            <Text
              style={[
                styles.error,
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    marginBottom: 50,
  },
  container: {
    paddingHorizontal: 15,
    borderWidth: 2.5,
    borderRadius: 25,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { marginTop: 10 },
  labelContainer: {
    position: "absolute",
    paddingHorizontal: 8,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default CustomTextInput;
