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
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL, opacityValueForButton } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import PropertyMaintenancesButton from "../common/buttons/PropertyMaintenancesButton";
import { useUserID } from "./../../helpers/SetUserID";

const PropertyMaintenances = ({ navigation, route }) => {
  const { propertyID } = route.params;
  const colors = useColors();
  const userID = useUserID();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userID) {
      const data = {
        ownerID: userID,
        propertyID: propertyID,
      };

      console.log(data);

      axios
        .post(`${BASE_URL}/api/owner/display-maintenance-reports`, data)
        .then((response) => {
          setData(response.data.maintenanceReports);
        })
        .catch((error) => {
          Alert.alert("Error", error.message);
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

  const renderItem = ({ item: list }) => (
    <PropertyMaintenancesButton
      colors={colors}
      key={list.id}
      title={list.title}
      description={list.description}
      cost={list.cost}
      date={list.date}
    />
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <View
        style={[
          styles.header,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Add Maintenance Report", {
              propertyID: propertyID,
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
            + New Maintenance
          </Text>
        </TouchableOpacity>
      </View>

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
          Previous Maintenances
        </Text>
      </View>
      {loading && <ActivityIndicator size="large" color={colors.textPrimary} />}
      <FlatList
        data={data}
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

export default PropertyMaintenances;
