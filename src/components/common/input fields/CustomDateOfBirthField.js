import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { loadTheme } from "../../../helpers";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import * as DarkTheme from "../../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../../assets/colorScheme/defaultColorScheme";

const CustomDateOfBirthField = (props) => {
  const [colors, setColors] = useState(DefaultTheme);
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
  if (errorText) {
    color = "#B00020";
  }

  return (
    <TouchableWithoutFeedback onPress={showDatePicker}>
      <View style={[styles.mainContainer, style]}>
        <View style={[styles.textInputContainer, { borderColor: color }]}>
          <View style={styles.container}>
            <View style={[style, styles.inputContainer]}>
              <TextInput
                ref={inputRef}
                style={[
                  styles.input,
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
                          outputRange: [0, -30],
                        }),
                      },
                      {
                        translateX: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-8, -5],
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
        </View>
        {!!errorText && (
          <Text style={[styles.error, { color: colors.textRed }]}>
            {errorText}
          </Text>
        )}
        <DateTimePickerModal
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={maxDate}
          isDarkModeEnabled={true}
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

const styles = StyleSheet.create({
  mainContainer: {
    width: "85%",
    marginBottom: 30,
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 25,
  },
  container: {
    flexDirection: "row",
  },
  inputContainer: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  input: { flex: 1 },
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

export default CustomDateOfBirthField;
