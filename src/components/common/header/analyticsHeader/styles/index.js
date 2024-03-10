import { StyleSheet } from "react-native";
import * as FontSizes from "../../../../../assets/fonts/FontSizes";

export const styles = StyleSheet.create({
  textRegular: { fontFamily: "OpenSansRegular" },
  textBold: { fontFamily: "OpenSansBold" },
  textExtraSmall: { fontSize: FontSizes.extraSmall },
  textSmall: { fontSize: FontSizes.small },
  textMidSmall: { fontSize: FontSizes.midSmall },
  textMedium: { fontSize: FontSizes.medium },
  textLarge: { fontSize: FontSizes.large },

  commonStylesForCards: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
  },
  receivedAndPendingRentsCard: {
    flex: 1,
    justifyContent: "space-between",
  },
});
