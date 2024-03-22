import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useColors } from "../helpers/SetColors";

import * as FontSizes from "../assets/fonts/FontSizes";

const CustomFooterButton = ({
  onPress,
  borderColor,
  isBold,
  buttonText,
  buttonHeight,
  buttonWidth,
}) => {
  const colors = useColors();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        { borderColor, height: buttonHeight, width: buttonWidth },
      ]}
      onPress={onPress}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={[
            isBold ? styles.fontBold : styles.fontRegular,
            { color: colors.textPrimary, fontSize: FontSizes.small },
          ]}
        >
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  container: {
    flex: 1,
  },
  buttons: {
    alignSelf: "center",
    width: "90%",
  },
  button: {
    borderRadius: 20,
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default CustomFooterButton;
