import { StyleSheet, View } from "react-native";

import MainCard from "./analyticsHeader/MainCard";
import RecievedRentsCard from "./analyticsHeader/RecievedRentsCard";
import PendingRentsCard from "./analyticsHeader/PendingRentsCard";

const AnalyticsHeader = (props) => {
  const colors = props.colors;

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View style={styles.mainCardContainer}>
        <MainCard
          month={props.month}
          rentsCollected={props.rentsCollected}
          maintenanceCost={props.maintenanceCost}
          totalProperties={props.totalProperties}
          colors={colors}
        />
      </View>
      <View style={styles.recievedAndPendingRentsContainer}>
        <RecievedRentsCard
          recievedRents={props.recievedRents}
          colors={colors}
        />
        <View style={{ height: 10 }}></View>
        <PendingRentsCard pendingRents={props.pendingRents} colors={colors} />
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
