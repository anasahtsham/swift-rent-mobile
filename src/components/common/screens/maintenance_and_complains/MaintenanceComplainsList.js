import { useEffect } from "react";
import {
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { complainsData } from "../../../../helpers/data/ComplainsListData";
import { maintenanceData } from "../../../../helpers/data/MaintenanceData";
import { MaintenanceComplainsListButton } from "../../buttons/MaintenanceComplainsListButton";

const MaintenanceComplainsList = ({ navigation, route }) => {
  const colors = useColors();
  const { header } = route.params;

  let dataToBeRendered = [];

  if (header === "Maintenance" || header === "My Requests") {
    dataToBeRendered = maintenanceData;
  }
  if (header === "Complains" || header === "My Complains") {
    dataToBeRendered = complainsData;
  }

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const renderItem = ({ item: list }) => (
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

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
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
            activeOpacity={opacityValueForButton}
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
            activeOpacity={opacityValueForButton}
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
      <FlatList
        data={dataToBeRendered}
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
