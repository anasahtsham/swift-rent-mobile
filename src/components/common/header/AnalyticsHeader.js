import { Image, StyleSheet, Text, View } from "react-native";
import { useColorsOnFocus } from "../../../helpers/SetColors";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import MainCard from "./analyticsHeader/MainCard";
import RecievedRentsCard from "./analyticsHeader/RecievedRentsCard";
import PendingRentsCard from "./analyticsHeader/PendingRentsCard";

const AnalyticsHeader = () => {
  const colors = useColorsOnFocus();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View style={styles.mainCardContainer}>
        <MainCard />
      </View>
      <View style={styles.recievedAndPendingRentsContainer}>
        <RecievedRentsCard />
        <View style={{ height: 10 }}></View>
        <PendingRentsCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textRegular: { fontFamily: "OpenSansRegular" },
  textBold: { fontFamily: "OpenSansBold" },
  textSmall: { fontSize: FontSizes.small },
  textMedium: { fontSize: FontSizes.medium },

  header: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  mainCardContainer: { flex: 1, marginRight: 10 },

  commonStylesForCards: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    elevation: 10,
  },

  recievedAndPendingRentsContainer: { flex: 1, flexDirection: "column" },

  RecievedRentsCard: {
    flex: 1,
    justifyContent: "space-between",
  },
  PendingRentsCard: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default AnalyticsHeader;
