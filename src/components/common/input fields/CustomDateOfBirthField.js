import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Image,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { loadTheme } from "../../../helpers";
import { inputStyles } from "./styles/CustomInputFieldStyles";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";

const CustomDateOfBirthField = (props) => {
  const [colors, setColors] = useState(DarkTheme);
  const [isPickerOpen, setPickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  let maxDate = new Date(
    new Date().getFullYear() - 18,
    new Date().getMonth(),
    new Date().getDate()
  );
  const [formattedDate, setFormattedDate] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

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

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!formattedDate ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, formattedDate]);

  const showDatePicker = () => {
    setPickerOpen(true);
    setIsFocused(true);
  };

  const hideDatePicker = () => {
    setPickerOpen(false);
    setIsFocused(false);
  };

  const handleConfirm = (date) => {
    let formatted = `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;
    setFormattedDate(formatted);
    hideDatePicker();
    setSelectedDate(date);
  };

  let color = isFocused ? colors.borderBlue : colors.borderPrimary;
  let width = isFocused ? 2 : 1;
  if (errorText) {
    color = "#B00020";
  }

  return (
    <TouchableWithoutFeedback onPress={showDatePicker}>
      <View style={[inputStyles.mainContainer, style]}>
        <View
          style={[
            inputStyles.textInputContainer,
            { borderColor: color, borderWidth: width },
          ]}
        >
          <View style={inputStyles.container}>
            <View style={[style, inputStyles.inputContainer]}>
              <TextInput
                ref={inputRef}
                style={[
                  inputStyles.input,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
                editable={false}
                value={formattedDate ? formattedDate : null}
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
                          outputRange: [-8, -25],
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
        {!!errorText && (
          <Text style={[inputStyles.error, { color: colors.textRed }]}>
            {errorText}
          </Text>
        )}
        <DateTimePickerModal
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={maxDate}
          isVisible={isPickerOpen}
          mode="date"
          date={selectedDate}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomDateOfBirthField;
