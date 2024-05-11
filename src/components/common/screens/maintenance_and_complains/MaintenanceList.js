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
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { useUserID } from "../../../../helpers/SetUserID";
import AllMaintenancesCard from "../../cards/AllMaintenancesCard";
import MaintenanceListHeader from "../../headers/MaintenanceListHeader";

const MaintenanceList = ({ navigation }) => {
  const userID = useUserID();
  const colors = useColors();
  const [loading, setLoading] = useState(true);
  const [maintenanceData, setMaintenanceData] = useState([]);
  const [totalMaintenanceExpenses, setTotalMaintenanceExpenses] = useState(0);
  const [totalMaintenances, setTotalMaintenances] = useState(0);

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
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <MaintenanceListHeader
        colors={colors}
        totalMaintenanceExpenses={totalMaintenanceExpenses}
        totalMaintenances={totalMaintenances}
      />

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
          All Maintenances
        </Text>
      </View>
      {loading && <ActivityIndicator size="large" color={colors.iconWhite} />}

      {!loading && maintenanceData.length === 0 && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={[
              styles.fontRegular,
              {
                fontSize: FontSizes.medium,
                color: colors.textWhite,
              },
            ]}
          >
            No maintenances to show
          </Text>
        </View>
      )}

      {!loading && maintenanceData.length > 0 && (
        <FlatList
          data={maintenanceData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.buttons}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      )}
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

export default MaintenanceList;
