import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MainCard from "./analytics_header/MainCard";
import SecondaryCard from "./analytics_header/SecondaryCard";

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

  if (props.loading) {
    return (
      <View
        style={[
          {
            paddingVertical: 10,
            paddingHorizontal: 10,
            paddingBottom: 15,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            alignItems: "center",
            width: "100%",
            backgroundColor: colors.headerAndFooterBackground,
          },
        ]}
      >
        <View
          style={{
            borderColor: colors.borderBlue,
            borderWidth: 4,
            borderRadius: 20,
            padding: 20,
            alignSelf: "center",
          }}
        >
          <ActivityIndicator size="large" color={colors.textPrimary} />
        </View>
      </View>
    );
  }

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
          commission={props.commission}
          maintenanceCost={props.maintenanceCost}
          totalProperties={props.totalProperties}
          managedProperties={props.managedProperties}
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
