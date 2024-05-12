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
import {
  borderGreen,
  borderRed,
} from "../../../../assets/themes/DarkColorScheme";
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { useUserID } from "../../../../helpers/SetUserID";
import {
  rentsPaidData,
  rentsPendingData,
} from "../../../../helpers/data/RentsData";
import RentsCard from "../../cards/RentsCard";
import { useUserType } from "./../../../../helpers/SetUserType";

const Rents = ({ navigation, route }) => {
  const userID = useUserID();
  const userType = useUserType();
  const colors = useColors();
  const { header } = route.params;
  const [loading, setLoading] = useState(true);

  const [dataToBeRendered, setDataToBeRendered] = useState([]);

  let firstButtonText = "";
  let secondButtonText = "";

  if (header === "Received Rents" || header === "Pending Rents") {
    firstButtonText = "Received Rents";
    secondButtonText = "Pending Rents";
  } else {
    firstButtonText = "Rents Paid";
    secondButtonText = "Rents Pending";
  }

  useEffect(() => {
    setLoading(true);

    if (userID && userType) {
      if (userType === "O") {
        if (header === "Received Rents") {
          axios
            .post(`${BASE_URL}/api/owner/paid-list`, { ownerID: userID })
            .then((response) => {
              setDataToBeRendered(response.data.paidRents);
            })
            .catch((error) => {
              Alert.alert("Error", "Something went wrong");
              console.log(JSON.stringify(error.response, null, 2));
            })
            .finally(() => {
              setLoading(false);
            });
        }
        if (header === "Pending Rents") {
          axios
            .post(`${BASE_URL}/api/owner/pending-list`, { ownerID: userID })
            .then((response) => {
              setDataToBeRendered(response.data.pendingRents);
            })
            .catch((error) => {
              Alert.alert("Error", "Something went wrong");
              console.log(JSON.stringify(error.response, null, 2));
            })
            .finally(() => {
              setLoading(false);
            });
        }
      }

      if (userType === "M") {
        if (header === "Received Rents") {
          axios
            .post(`${BASE_URL}/api/manager/paid-list`, { managerID: userID })
            .then((response) => {
              setDataToBeRendered(response.data.paidRents);
            })
            .catch((error) => {
              Alert.alert("Error", "Something went wrong");
              console.log(JSON.stringify(error.response, null, 2));
            })
            .finally(() => {
              setLoading(false);
            });
        }
        if (header === "Pending Rents") {
          axios
            .post(`${BASE_URL}/api/manager/pending-list`, {
              managerID: userID,
            })
            .then((response) => {
              setDataToBeRendered(response.data.pendingRents);
            })
            .catch((error) => {
              Alert.alert("Error", "Something went wrong");
              console.log(JSON.stringify(error.response, null, 2));
            })
            .finally(() => {
              setLoading(false);
            });
        }
      }

      if (header === "Rents Paid") {
        setDataToBeRendered(rentsPaidData);
      }
      if (header === "Rents Pending") {
        setDataToBeRendered(rentsPendingData);
      }
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
  }, [header, userID, userType]);

  const renderItem = ({ item: rent }) => (
    <RentsCard
      header={header}
      colors={colors}
      key={rent.id}
      address={rent.propertyaddress}
      tenant={rent.tenantname}
      amountCollected={rent.rentamount}
      createdOn={rent.createdon}
    />
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
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

      {loading && <ActivityIndicator size="large" color={colors.iconWhite} />}

      {!loading && dataToBeRendered.length === 0 && (
        <Text
          style={{
            color: colors.textWhite,
            fontSize: FontSizes.medium,
            textAlign: "center",
          }}
        >
          No data to show
        </Text>
      )}

      {!loading && dataToBeRendered.length > 0 && (
        <FlatList
          data={dataToBeRendered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.buttons}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      )}

      <View style={{ height: 70 }} />

      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
          style={[styles.button, { borderColor: borderGreen }]}
          onPress={() => {
            if (header === "Received Rents" || header === "Pending Rents") {
              navigation.navigate("Rents", { header: "Received Rents" });
            } else {
              navigation.navigate("Rents", { header: "Rents Paid" });
            }
          }}
        >
          <Text
            style={[
              header === "Received Rents" || header === "Rents Paid"
                ? styles.fontBold
                : styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            {firstButtonText}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
          style={[styles.button, { borderColor: borderRed }]}
          onPress={() => {
            if (header === "Received Rents" || header === "Pending Rents") {
              navigation.navigate("Rents", { header: "Pending Rents" });
            } else {
              navigation.navigate("Rents", { header: "Rents Pending" });
            }
          }}
        >
          <Text
            style={[
              header === "Pending Rents" || header === "Rents Pending"
                ? styles.fontBold
                : styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            {secondButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default Rents;
