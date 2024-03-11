import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { inputStyles } from "./styles/CustomInputFieldStyles";

import { DateTimePickerModal } from "react-native-modal-datetime-picker";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";

const CustomTextField = (props) => {
  const {
    label,
    errorText,
    value,
    onBlur,
    onFocus,
    textFieldIcon,
    fieldType,
    handleChange,
    touched,
    errors,
    ...restOfProps
  } = props;

  const colors = useColors();

  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(fieldType === "password");
  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;
  let color = isFocused ? colors.borderBlue : colors.borderPrimary;
  let width = isFocused ? 4 : 1;

  //for date picker
  const [isPickerOpen, setPickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  let maxDate = new Date(
    new Date().getFullYear() - 18,
    new Date().getMonth(),
    new Date().getDate()
  );
  const [formattedDate, setFormattedDate] = useState(null);

  if (errorText) {
    color = "#B00020";
  }

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  const showDatePicker = () => {
    setPickerOpen(true);
    setIsFocused(true);
  };

  const hideDatePicker = () => {
    setPickerOpen(false);
    setIsFocused(false);
  };

  const handleConfirm = (date) => {
    console.log("is this work");
    let formatted = `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;
    setFormattedDate(formatted);
    hideDatePicker();
    setSelectedDate(date);
    // Create a custom event object and pass it to handleChange
    handleChange({ target: { name: "date", value: formatted } });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (fieldType === "date") {
          showDatePicker();
        } else {
          inputRef.current?.focus();
        }
      }}
    >
      <View style={inputStyles.mainContainer}>
        <View
          style={[
            inputStyles.textInputContainer,
            { borderColor: color, borderWidth: width },
          ]}
        >
          <View>
            <View style={inputStyles.container}>
              <View style={[inputStyles.inputContainer]}>
                <TextInput
                  editable={fieldType !== "date"}
                  secureTextEntry={isHidden}
                  keyboardType={
                    fieldType === "email-address" || fieldType === "phone-pad"
                      ? fieldType
                      : "default"
                  }
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
                  onChangeText={handleChange}
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
              {fieldType !== "password" && (
                <Image
                  tintColor={color}
                  source={textFieldIcon}
                  style={inputStyles.icon}
                />
              )}
              {fieldType === "password" && (
                <TouchableWithoutFeedback
                  onPress={() => setIsHidden(!isHidden)}
                >
                  <Image
                    tintColor={color}
                    source={
                      isHidden ? icons.hidePasswordIcon : icons.showPasswordIcon
                    }
                    style={inputStyles.icon}
                  />
                </TouchableWithoutFeedback>
              )}
              {fieldType === "date" && (
                <TouchableWithoutFeedback
                  onPress={() => setIsHidden(!isHidden)}
                >
                  <Image
                    tintColor={color}
                    source={icons.calendarIcon}
                    style={inputStyles.icon}
                  />
                </TouchableWithoutFeedback>
              )}
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
        {errors}
        {fieldType === "date" && (
          <DateTimePickerModal
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={maxDate}
            isVisible={isPickerOpen}
            mode="date"
            date={selectedDate}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomTextField;
