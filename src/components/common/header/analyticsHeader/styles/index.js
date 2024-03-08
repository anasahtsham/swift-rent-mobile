import { StyleSheet } from "react-native";
import * as FontSizes from "../../../../../assets/fonts/FontSizes";

export const styles = StyleSheet.create({
  textRegular: { fontFamily: "OpenSansRegular" },
  textBold: { fontFamily: "OpenSansBold" },
  textSmall: { fontSize: FontSizes.small },
  textMedium: { fontSize: FontSizes.medium },

  commonStylesForCards: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    elevation: 10,
  },
  recievedAndPendingRentsCard: {
    flex: 1,
    justifyContent: "space-between",
  },
});
