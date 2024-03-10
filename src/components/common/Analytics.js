import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { useColorsOnFocus } from "../../helpers/SetColors";

import AnalyticsButton from "./buttons/AnalyticsButton";
import AnalyticsHeader from "./header/AnalyticsHeader";

import * as FontSizes from "../../assets/fonts/FontSizes";

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
          Monthly Reports
        </Text>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {props.dummyData.map((data) => (
            <AnalyticsButton
              colors={colors}
              key={data.id}
              month={data.month}
              income={data.incomingPayment}
              outcome={data.outgoingPayment}
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
