import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MainCard from "./analyticsHeader/MainCard";
import SecondaryCard from "./analyticsHeader/SecondaryCard";

const AnalyticsHeader = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();

  const goToTopRentsScreen = () => {
    if (!!props.receivedRents) {
      navigation.navigate("Rents", { header: "Received Rents" });
    } else {
      navigation.navigate("Rents", { header: "Rents Paid" });
    }
  };

  const goToBottomRentsScreen = () => {
    if (!!props.pendingRents) {
      navigation.navigate("Rents", { header: "Pending Rents" });
    } else {
      navigation.navigate("Rents", { header: "Rents Pending" });
    }
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
          totalRentsPaid={props.totalRentsPaid}
          rentals={props.rentals}
          rentsCollected={props.rentsCollected}
          maintenanceCost={props.maintenanceCost}
          totalProperties={props.totalProperties}
          colors={colors}
        />
      </View>
      <View style={styles.receivedAndPendingRentsContainer}>
        <SecondaryCard
          onPress={goToTopRentsScreen}
          receivedRents={props.receivedRents}
          rentsPaid={props.rentsPaid}
          colors={colors}
        />
        <View style={{ height: 10 }}></View>
        <SecondaryCard
          onPress={goToBottomRentsScreen}
          pendingRents={props.pendingRents}
          rentsPending={props.rentsPending}
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
