import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { formatNumberToCrore } from "../../../../helpers/utils";
import AnalyticalReportHeader from "../../headers/AnalyticalReportHeader";
import { useUserID } from "./../../../../helpers/SetUserID";

const AnalyticalReport = () => {
  const ownerID = useUserID();
  const colors = useColors();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const [monthNames, setMonthNames] = useState([]);
  const [totalRevenues, setTotalRevenues] = useState([]);
  const [totalMaintenanceCosts, setTotalMaintenanceCosts] = useState([]);

  const [totalProperties, setTotalProperties] = useState(0);
  const [totalPropertiesOnRent, setTotalPropertiesOnRent] = useState(0);
  const [totalVacantProperties, setTotalVacantProperties] = useState(0);
  const [totalManagedProperties, setTotalManagedProperties] = useState(0);

  const [totalMaintenanceRequests, setTotalMaintenanceRequests] = useState(0);
  const [totalCostOfMaintenances, setTotalCostOfMaintenances] = useState(0);

  const [totalComplaintsReceived, setTotalComplaintsReceived] = useState(0);
  const [totalComplaintsSent, setTotalComplaintsSent] = useState(0);
  const [totalPendingReceivedComplains, setTotalPendingReceivedComplains] =
    useState(0);
  const [totalResolvedReceivedComplains, setTotalResolvedReceivedComplains] =
    useState(0);

  useEffect(() => {
    if (ownerID) {
      axios
        .post(`${BASE_URL}/api/owner/detailed-analytics`, { ownerID })
        .then((response) => {
          setMonthNames(response.data.monthNames);
          setTotalRevenues(response.data.totalCollectedRents);
          setTotalMaintenanceCosts(response.data.totalMaintenanceCosts);

          setTotalProperties(
            response.data.propertiesStatus.totalregisteredproperties
          );
          setTotalPropertiesOnRent(
            response.data.propertiesStatus.totalpropertiesonrent
          );
          setTotalVacantProperties(
            response.data.propertiesStatus.vacantproperties
          );
          setTotalManagedProperties(
            response.data.propertiesStatus.managedproperties
          );

          setTotalMaintenanceRequests(
            response.data.maintenanceStatistics.totalmaintenancerequests
          );
          setTotalCostOfMaintenances(
            response.data.maintenanceStatistics.totalcostofmaintenance
          );

          setTotalComplaintsReceived(
            response.data.complaintsStatistics.totalcomplaintsreceived
          );
          setTotalComplaintsSent(
            response.data.complaintsStatistics.totalcomplaintssent
          );
          setTotalPendingReceivedComplains(
            response.data.complaintsStatistics.totalpendingreceivedcomplaints
          );
          setTotalResolvedReceivedComplains(
            response.data.complaintsStatistics.totalresolvedreceivedcomplaints
          );
        })
        .catch((error) => {
          Alert.alert("Error", "Something went wrong");
          console.log(JSON.stringify(error.response, null, 2));
        })
        .finally(() => {
          setLoading(false);
        });
    }

    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [ownerID]);

  // Either this below component can be renaamed merged or placed inside a new file to foloow component design practices:
  const Card = ({ title, colors, data }) => (
    <View
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
    >
      <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
        {title}
      </Text>
      {data.map((item, index) => (
        <View key={index} style={styles.rightInRow}>
          <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
            {item.label}
          </Text>
          <Text
            style={[
              styles.cardFetchableData,
              { color: item.color || colors.textPrimary },
            ]}
          >
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );

  if (loading) {
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
          <ActivityIndicator size="large" color={colors.textWhite} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.bodyBackground, flex: 1 }}>
      {!loading && (
        <AnalyticalReportHeader
          monthNames={monthNames}
          totalRevenues={totalRevenues}
          totalMaintenanceCosts={totalMaintenanceCosts}
          colors={colors}
        />
      )}

      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.bodyBackground },
        ]}
      >
        <ScrollView>
          <Card
            title="Properties Status"
            colors={colors}
            data={[
              { label: "Total Registered Properties", value: totalProperties },
              {
                label: "Total Properties on Rent",
                value: totalPropertiesOnRent,
                color: colors.textGreen,
              },
              {
                label: "Vacant Properties",
                value: totalVacantProperties,
                color: colors.textRed,
              },
              { label: "Managed Properties", value: totalManagedProperties },
            ]}
          />
          <Card
            title="Maintenance"
            colors={colors}
            data={[
              {
                label: "Total Maintenance Requests",
                value: totalMaintenanceRequests,
              },
              {
                label: "Total Cost of Maintenances",
                value: formatNumberToCrore(totalCostOfMaintenances),
                color: colors.textRed,
              },
            ]}
          />
          <Card
            title="Complaints"
            colors={colors}
            data={[
              {
                label: "Total Complaints Received",
                value: totalComplaintsReceived,
              },
              {
                label: "Total Complaints Sent",
                value: totalComplaintsSent,
              },
              {
                label: "Total Pending Received Complains",
                value: totalPendingReceivedComplains,
                color: colors.textRed,
              },
              {
                label: "Total Resolved Received Complains",
                value: totalResolvedReceivedComplains,
                color: colors.textGreen,
              },
            ]}
          />
          <View style={{ height: 350 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AnalyticalReport;

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },

  topCard: {
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },

  topCardTopTextContainer: {
    paddingTop: "2%",
  },
  topCardTopText: {
    fontSize: FontSizes.small,
    paddingLeft: "4%",
    textAlign: "left",
  },

  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nestedText: {
    fontSize: FontSizes.small,
    paddingLeft: "6%",
    textAlign: "left",
    marginRight: "10%",
  },
  currencyStyles: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
    paddingLeft: "1%",
  },

  monthNameText: {
    paddingTop: "1%",
    fontWeight: "bold",
    fontSize: FontSizes.small,
  },
  monthNameTextNested: {
    fontWeight: "bold",
    fontSize: FontSizes.small,
  },
  topCardRowEnd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
  },
  arrowImageDimensions: {
    height: 20,
    width: 20,
    marginLeft: "12%",
  },
  barGraphImageDimensions: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignSelf: "center",
  },

  bottomContainer: {
    borderRadius: 20,
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    alignSelf: "center",
    paddingBottom: 10,
    width: "90%",
    marginTop: 10,
    padding: 10,
  },

  cardMainText: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
  },
  cardSubText: {
    fontSize: FontSizes.small,
  },
  cardFetchableData: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: FontSizes.small,
  },
});
