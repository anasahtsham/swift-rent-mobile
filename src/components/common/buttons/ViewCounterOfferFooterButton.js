import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { useColors } from "../../../helpers/SetColors";

const ViewCounterOfferFooterButton = ({
  onPress,
  borderColor,
  isBold,
  buttonText,
  buttonHeight,
  buttonWidth,
  loading,
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
        {loading && (
          <ActivityIndicator size="small" color={colors.textPrimary} />
        )}
        {!loading && (
          <Text
            style={[
              isBold ? styles.fontBold : styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            {buttonText}
          </Text>
        )}
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

export default ViewCounterOfferFooterButton;
