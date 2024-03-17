import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { DateTimePickerModal } from "react-native-modal-datetime-picker";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";

const InputField = forwardRef((props, ref) => {
  const {
    canBeDisabled,
    isLeaseTill,
    nextInput,
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
    borderRadius,
    ...restOfProps
  } = props;

  const colors = useColors();

  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(fieldType === "password");

  const inputRef = ref || useRef();
  const focusAnim = useRef(new Animated.Value(0)).current;
  let color = isFocused ? colors.borderBlue : colors.borderPrimary;
  let width = isFocused ? 3 : 1;

  //for date picker
  const [isPickerOpen, setPickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  let maxDate = new Date(
    new Date().getFullYear() - 18,
    new Date().getMonth(),
    new Date().getDate()
  );
  let minDate = new Date(
    new Date().getFullYear() - 100,
    new Date().getMonth(),
    new Date().getDate()
  );

  if (isLeaseTill) {
    maxDate = null;
  }
  if (isLeaseTill) {
    minDate = new Date();
  }

  if (errorText) {
    color = colors.textRed;
  }

  useEffect(() => {
    console.log("editable:", isEditable);
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value, isEditable]);

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
    hideDatePicker();
    setSelectedDate(date);

    handleChange({ target: { name: "date", value: formatted } });
  };

  const [isEditable, setIsEditable] = useState(false);

  // useEffect(() => {
  //   if (fieldType === "date" || canBeDisabled) {
  //     setIsEditable(false);
  //     console.log("Editable:", isEditable);
  //   } else {
  //     setIsEditable(true);
  //   }
  // }, []);

  return (
    <View style={[styles.mainContainer, { height: 65 }]}>
      <Pressable
        onPress={() => {
          if (fieldType === "date") {
            showDatePicker();
          } else {
            inputRef.current?.focus();
          }
        }}
        style={[
          styles.textInputContainer,
          {
            borderColor: color,
            borderWidth: width,
            borderRadius: !!borderRadius ? borderRadius : 25,
            height: 42,
          },
        ]}
      >
        <View style={[styles.textAndImageContainer]}>
          <View style={[styles.inputContainer]}>
            <TextInput
              editable={
                canBeDisabled ? isEditable : fieldType === "date" ? false : true
              }
              secureTextEntry={isHidden}
              keyboardType={
                fieldType === "email-address" ||
                fieldType === "phone-pad" ||
                fieldType === "numeric"
                  ? fieldType
                  : "default"
              }
              style={[
                styles.input,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
              ref={inputRef}
              onSubmitEditing={() => nextInput?.current?.focus()}
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
              style={{
                position: "absolute",
                paddingHorizontal: 8,
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
              }}
            >
              <Text
                style={{
                  width: "120%",
                  fontSize: FontSizes.small,
                  color,
                }}
              >
                {label}
                {errorText ? "*" : ""}
              </Text>
            </Animated.View>
          </View>
          {fieldType !== "password" && (
            <Image
              tintColor={color}
              source={textFieldIcon}
              style={styles.icon}
            />
          )}
          {fieldType === "password" && (
            <TouchableWithoutFeedback onPress={() => setIsHidden(!isHidden)}>
              <Image
                tintColor={color}
                source={
                  isHidden ? icons.hidePasswordIcon : icons.showPasswordIcon
                }
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
          )}
          {canBeDisabled && (
            <TouchableWithoutFeedback
              onPress={() => setIsEditable(!isEditable)}
            >
              <Image
                tintColor={isEditable ? colors.iconGreen : colors.iconRed}
                source={isEditable ? icons.checkIcon : icons.crossIcon}
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
          )}
          {fieldType === "date" && (
            <Image
              tintColor={color}
              source={icons.calendarIcon}
              style={styles.icon}
            />
          )}
        </View>
      </Pressable>
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
      {fieldType === "date" && (
        <DateTimePickerModal
          minimumDate={minDate}
          maximumDate={maxDate}
          isVisible={isPickerOpen}
          mode="date"
          date={selectedDate}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 25,
  },
  textAndImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: { width: "100%", padding: 0 },
  error: {
    marginTop: 4,
    marginLeft: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default InputField;
