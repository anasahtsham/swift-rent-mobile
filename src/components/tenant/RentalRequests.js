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
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import RentalRequestsButton from "../common/buttons/RentalRequestsButton";
import { useUserID } from "./../../helpers/SetUserID";

const RentalRequests = ({ navigation }) => {
  const colors = useColors();
  const userID = useUserID();

  const [rentalRequestsData, setRentalRequestsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRentalRequests = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/tenant/lease-request`,
          { tenantID: userID }
        );
        setRentalRequestsData(response.data.leaseRequests);
      } catch (error) {
        Alert.alert("Error", error.message);
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    if (userID !== null) {
      fetchRentalRequests();
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

  const renderItem = ({ item: rentRequest }) => (
    <RentalRequestsButton
      colors={colors}
      key={rentRequest.id}
      propertyLeaseID={rentRequest.id}
      address={rentRequest.address}
      registrarName={rentRequest.registrarname}
      registrarType={rentRequest.registrartype}
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
          Rental Requests
        </Text>
      </View>
      {loading && <ActivityIndicator size="large" color={colors.textPrimary} />}
      <FlatList
        data={rentalRequestsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.buttons}
        ListFooterComponent={<View style={{ height: 10 }} />}
      />
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
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default RentalRequests;
