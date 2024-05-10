import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { useColorsOnFocus } from "../../../../helpers/SetColors";
import AnalyticsButton from "../../buttons/AnalyticsButton";
import AnalyticsHeader from "../../headers/AnalyticsHeader";

const Analytics = (props) => {
  const navigation = useNavigation();
  const colors = useColorsOnFocus();

  const renderItem = ({ item: data }) => (
    <AnalyticsButton
      colors={colors}
      key={data.id}
      month={data.currentdate}
      incomingPayment={data.rentcollected}
      commissionEarned={data.commissionEarned}
      outgoingPayment={data.maintenancecost}
      properties={data.properties}
      backgroundColor={colors.backgroundRed}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AnalyticsHeader
        loading={props.loading}
        month={props.month}
        totalRentsPaid={props.totalRentsPaid}
        rentals={props.rentals}
        rentsCollected={props.rentsCollected}
        commission={props.commission}
        maintenanceCost={props.maintenanceCost}
        totalProperties={props.totalProperties}
        managedProperties={props.managedProperties}
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

      {props.loading && (
        <ActivityIndicator size="large" color={colors.textWhite} />
      )}

      {!props.loading && (
        <FlatList
          data={props.analyticsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.buttons}
          ListFooterComponent={<View style={{ height: 70 }} />}
        />
      )}
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
