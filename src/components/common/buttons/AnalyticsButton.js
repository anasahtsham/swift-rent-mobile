import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { opacityValueForButton } from "../../../constants";
import { useColorsOnFocus } from "../../../helpers/SetColors";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { formatNumber } from "../../../helpers";

export const AnalyticsButton = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <Text
        style={{
          fontFamily: "OpenSansBold",
          fontSize: FontSizes.small,
          color: colors.textPrimary,
        }}
      >
        {props.month}
      </Text>
      <Image
        tintColor={colors.iconGreen}
        source={icons.downLongArrow}
        style={{ width: 20, height: 20 }}
      />
      <Text
        style={{
          fontFamily: "OpenSansRegular",
          fontSize: FontSizes.small,
          color: colors.textPrimary,
        }}
      >
        {formatNumber(props.income)}
      </Text>
      <Image
        tintColor={colors.iconRed}
        source={icons.upLongArrow}
        style={{ width: 20, height: 20 }}
      />
      <Text
        style={{
          fontFamily: "OpenSansRegular",
          fontSize: FontSizes.small,
          color: colors.textPrimary,
        }}
      >
        {formatNumber(props.outcome)}
      </Text>
      <Image
        tintColor={colors.iconPrimary}
        source={icons.externalLink}
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AnalyticsButton;
