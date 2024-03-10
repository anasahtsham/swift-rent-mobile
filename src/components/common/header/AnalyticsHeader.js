import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MainCard from "./analyticsHeader/MainCard";
import PendingRentsCard from "./analyticsHeader/PendingRentsCard";
import ReceivedRentsCard from "./analyticsHeader/ReceivedRentsCard";

const AnalyticsHeader = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();

  const goToPendingRents = () => {
    navigation.navigate("Pending Rents");
  };

  const goToReceivedRents = () => {
    navigation.navigate("Received Rents");
  };

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
          rentsPaid={props.rentsPaid}
          rentals={props.rentals}
          rentsCollected={props.rentsCollected}
          maintenanceCost={props.maintenanceCost}
          totalProperties={props.totalProperties}
          colors={colors}
        />
      </View>
      <View style={styles.receivedAndPendingRentsContainer}>
        <ReceivedRentsCard
          onPress={() => {
            if (!!props.rentsCollected) {
              goToReceivedRents();
            }
          }}
          receivedRents={props.receivedRents}
          colors={colors}
        />
        <View style={{ height: 10 }}></View>
        <PendingRentsCard
          onPress={() => {
            if (!!props.rentsCollected) {
              goToPendingRents();
            }
          }}
          pendingRents={props.pendingRents}
          colors={colors}
        />
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

  receivedAndPendingRentsContainer: { flex: 1, flexDirection: "column" },
});

export default AnalyticsHeader;
