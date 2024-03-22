import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Popover, { PopoverPlacement } from "react-native-popover-view";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { getColors } from "../../../helpers/SetColors";
import { opacityValueForButton } from "./../../../constants/index";
import InputField from "./InputField";

const InputFieldWithHint = React.forwardRef(
  (
    {
      isEditable,
      setIsEditable,
      canBeDisabled,
      borderRadius,
      textFieldIcon,
      fieldType,
      label,
      value,
      handleChange,
      handleBlur,
      errorText,
      hintTexts,
      returnKeyType,
      onSubmitEditing,
    },
    ref
  ) => {
    const colors = getColors();
    const { english: englishHintText, urdu: urudHintText } = hintTexts;
    const [hintText, setHintText] = useState(englishHintText);

    const inputRef = ref || useRef();
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: "auto",
        }}
      >
        <InputField
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          canBeDisabled={canBeDisabled}
          returnKeyType={returnKeyType}
          ref={inputRef}
          onSubmitEditing={onSubmitEditing}
          borderRadius={borderRadius}
          textFieldIcon={textFieldIcon}
          fieldType={fieldType}
          label={label}
          value={value}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorText={errorText}
        />
        {/* places the ? aligned to the center of the text field */}
        <View style={{ top: 12, right: -25, position: "absolute" }}>
          <Popover
            arrowShift={-0.2} // shifts arrow position upwards by a little, on default it was down a little
            offset={5} // adds gap between ? and popover
            popoverStyle={{
              padding: 10,
              backgroundColor: colors.hintBackground,
            }} // adds padding to the popover (the white box that opens up)
            placement={PopoverPlacement.LEFT} // opens the popover to the left
            from={
              <TouchableOpacity
                activeOpacity={opacityValueForButton}
                style={{
                  justifyContent: "center",
                  backgroundColor: colors.backgroundGrey,
                  borderRadius: 50,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.textBlack,
                    textAlign: "center",
                    width: 20,
                  }}
                >
                  ?
                </Text>
              </TouchableOpacity>
            }
          >
            <View>
              <Text
                style={{
                  fontFamily: "OpenSansRegular",
                  fontSize: FontSizes.small,
                  color: colors.textPrimary,
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                {hintText}
              </Text>
              <TouchableOpacity
                activeOpacity={opacityValueForButton}
                style={{
                  alignSelf: "center",
                  backgroundColor: colors.backgroundPrimary,
                  borderColor: colors.buttonBorderPrimary,
                  paddingVertical: 2,
                  borderWidth: 2,
                  borderRadius: 20,
                  width: 170,
                }}
                onPress={() =>
                  setHintText(
                    hintText === englishHintText
                      ? urudHintText
                      : englishHintText
                  )
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 170,
                  }}
                >
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      alignSelf: "center",
                    }}
                    tintColor={colors.iconPrimary}
                    source={icons.languageIcon}
                  />
                  <Text
                    style={{
                      fontFamily: "OpenSansRegular",
                      fontSize: FontSizes.small,
                      color: colors.textPrimary,
                      marginLeft: 5,
                    }}
                  >
                    Toggle Language
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Popover>
        </View>
      </View>
    );
  }
);

export default InputFieldWithHint;
