import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Popover, { PopoverPlacement } from "react-native-popover-view";
import { useColors } from "../../../helpers/SetColors";
import InputField from "./InputField";

const InputFieldWithHint = ({
  textFieldIcon,
  fieldType,
  label,
  value,
  handleChange,
  handleBlur,
  errorText,
  hintTexts,
}) => {
  const colors = useColors();
  const { english: englishHintText, spanish: spanishHintText } = hintTexts;
  const [hintText, setHintText] = useState(englishHintText);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: "auto",
      }}
    >
      <InputField
        textFieldIcon={textFieldIcon}
        fieldType={fieldType}
        label={label}
        value={value}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errorText={errorText}
      />
      {/* places the ? aligned to the center of the text field */}
      <View style={{ marginBottom: 55, marginLeft: 10 }}>
        <Popover
          arrowShift={-0.2} // shifts arrow position upwards by a little, on default it was down a little
          offset={5} // adds gap between ? and popover
          popoverStyle={{ padding: 10 }} // adds padding to the popover (the white box that opens up)
          placement={PopoverPlacement.LEFT} // opens the popover to the left
          from={
            <TouchableOpacity
              style={{
                justifyContent: "center",
                backgroundColor: "grey",
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: colors.textWhite,
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
            <Text>{hintText}</Text>
            <Button
              onPress={() =>
                setHintText(
                  hintText === englishHintText
                    ? spanishHintText
                    : englishHintText
                )
              }
              title="Toggle language"
            />
          </View>
        </Popover>
      </View>
    </View>
  );
};

export default InputFieldWithHint;
