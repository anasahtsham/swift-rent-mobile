import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { useColorsOnFocus } from "../../helpers/SetColors";
import AnalyticsButton from "./buttons/AnalyticsButton";
import AnalyticsHeader from "./header/AnalyticsHeader";

const Analytics = (props) => {
  const navigation = useNavigation();
  const colors = useColorsOnFocus();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AnalyticsHeader
        month={props.month}
        totalRentsPaid={props.totalRentsPaid}
        rentals={props.rentals}
        rentsCollected={props.rentsCollected}
        maintenanceCost={props.maintenanceCost}
        totalProperties={props.totalProperties}
        receivedRents={props.receivedRents}
        pendingRents={props.pendingRents}
        rentsPaid={props.rentsPaid}
        rentsPending={props.rentsPending}
        tenantScrollHeader={props.tenantScrollHeader}
        colors={colors}
      />
      <View
        style={{ paddingTop: 20, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        <Text
          style={{
            fontFamily: "OpenSansBold",
            fontSize: FontSizes.medium,
            color: colors.textWhite,
          }}
        >
          {!!props.tenantScrollHeader
            ? props.tenantScrollHeader
            : "Monthly Reports"}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {props.analyticsData.map((data) => (
            <AnalyticsButton
              colors={colors}
              key={data.id}
              month={data.month}
              incomingPayment={data.incomingPayment}
              outgoingPayment={data.outgoingPayment}
              properties={data.properties}
              backgroundColor={colors.backgroundRed}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={{ height: 70 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    alignSelf: "center",
    width: "90%",
  },
});

export default Analytics;
