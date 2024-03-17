import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
  hintText,
}) => {
  const colors = useColors();
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
      <View style={{ marginBottom: 55, marginLeft: 10 }}>
        <Popover
          arrowShift={-0.2}
          offset={5}
          popoverStyle={{ padding: 10 }}
          placement={PopoverPlacement.LEFT}
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
          <Text>{hintText}</Text>
        </Popover>
      </View>
    </View>
  );
};

export default InputFieldWithHint;
