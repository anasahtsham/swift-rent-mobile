import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { complainsData } from "../../../../helpers/data/ComplainsListData";
import { MaintenanceComplainsListButton } from "../../buttons/MaintenanceComplainsListButton";
import AllMaintenancesCard from "../../cards/AllMaintenancesCard";
import { useUserID } from "./../../../../helpers/SetUserID";
import MaintenanceComplainsListHeader from "./../../headers/MaintenanceComplainsListHeader";

const MaintenanceComplainsList = ({ navigation, route }) => {
  const userID = useUserID();
  const colors = useColors();
  const { header } = route.params;
  const [loading, setLoading] = useState(true);
  const [maintenanceData, setMaintenanceData] = useState([]);
  const [totalMaintenanceExpenses, setTotalMaintenanceExpenses] = useState(0);
  const [totalMaintenances, setTotalMaintenances] = useState(0);

  if (header === "Complains") {
    dataToBeRendered = complainsData;
  }

  useEffect(() => {
    if (userID) {
      axios
        .post(`${BASE_URL}/api/owner/display-all-maintenace-reports`, {
          ownerID: userID,
        })
        .then((response) => {
          setMaintenanceData(response.data.maintenanceReports);
          setTotalMaintenanceExpenses(response.data.totalMaintenanceCost);
          setTotalMaintenances(response.data.totalMaintenanceReports);
        })
        .catch((error) => {
          Alert.alert("Error", error.response.data.alert);
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
  }, [userID]);

  const renderItem = ({ item: list }) => {
    if (header === "Maintenance") {
      return (
        <AllMaintenancesCard
          colors={colors}
          key={list.id}
          title={list.title}
          description={list.description}
          address={list.address}
          cost={list.cost}
          date={list.date}
        />
      );
    } else {
      return (
        <MaintenanceComplainsListButton
          colors={colors}
          key={list.id}
          address={list.address}
          owner={list.owner}
          manager={list.manager}
          tenant={list.tenant}
          maintenanceStatus={list.maintenanceStatus}
          complaintStatus={list.complaintStatus}
          onPress={() =>
            navigation.navigate("View Maintenance And Complains", {
              headerTitle: !!list.maintenanceStatus
                ? "Maintenance Request"
                : "Complain",
            })
          }
        />
      );
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <MaintenanceComplainsListHeader
        colors={colors}
        totalMaintenanceExpenses={totalMaintenanceExpenses}
        totalMaintenances={totalMaintenances}
      />
      {header === "My Requests" && (
        <View
          style={[
            styles.header,
            { backgroundColor: colors.headerAndFooterBackground },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Problem Form", {
                headerText: "Submit Maintenance Request",
              })
            }
            activeOpacity={OPACITY_VALUE_FOR_BUTTON}
            style={[
              styles.blueBorderCard,
              {
                borderColor: colors.borderBlue,
                backgroundColor: colors.headerAndFooterBackground,
              },
            ]}
          >
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: FontSizes.medium,
                textAlign: "center",
              }}
            >
              + Request Maintenance
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {header === "My Complains" && (
        <View
          style={[
            styles.header,
            { backgroundColor: colors.headerAndFooterBackground },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Problem Form", {
                headerText: "Submit Complain",
              })
            }
            activeOpacity={OPACITY_VALUE_FOR_BUTTON}
            style={[
              styles.blueBorderCard,
              {
                borderColor: colors.borderBlue,
                backgroundColor: colors.headerAndFooterBackground,
              },
            ]}
          >
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: FontSizes.medium,
                textAlign: "center",
              }}
            >
              + New Complain
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{ paddingTop: 20, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        <Text
          style={[
            styles.fontBold,
            {
              fontSize: FontSizes.medium,
              color: colors.textWhite,
            },
          ]}
        >
          {header}
        </Text>
      </View>
      {loading && <ActivityIndicator size="large" color={colors.textPrimary} />}
      <FlatList
        data={header === "Maintenance" ? maintenanceData : dataToBeRendered}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.buttons}
        ListFooterComponent={<View style={{ height: 10 }} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  blueBorderCard: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    width: "90%",
    elevation: 10,
  },
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  container: {
    flex: 1,
  },
  buttons: {
    alignSelf: "center",
    width: "90%",
  },
  button: {
    borderRadius: 20,
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  footer: {
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default MaintenanceComplainsList;
