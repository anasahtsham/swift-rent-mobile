import { StyleSheet, View } from "react-native";
import { useColorsOnFocus } from "../../../helpers/SetColors";

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

  recievedAndPendingRentsContainer: { flex: 1, flexDirection: "column" },
});

export default AnalyticsHeader;
