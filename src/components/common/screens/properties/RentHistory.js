import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import RentHistoryCard from "../../cards/RentHistoryCard";
import { useUserID } from "./../../../../helpers/SetUserID";
import { useUserType } from "./../../../../helpers/SetUserType";

const RentHistory = ({ route }) => {
  const { propertyID } = route.params;
  const userID = useUserID();
  const userType = useUserType();
  const colors = useColors();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const [rentHistoryData, setRentHistoryData] = useState([]);

  useEffect(() => {
    if (userID && userType) {
      const data = {
        userID: userID,
        userType: userType,
        propertyID: propertyID,
      };

      axios
        .post(`${BASE_URL}/api/common/rent-history`, data)
        .then((response) => {
          setRentHistoryData(response.data.rentHistory);
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
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [userID, userType]);

  const renderItem = ({ item }) => {
    return (
      <RentHistoryCard
        submittedOn={item.submittedon}
        collectedOn={item.collectedon}
        submittedAmount={item.submittedamount}
        collectedAmount={item.collectedamount}
      />
    );
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: colors.bodyBackground, padding: 10 }}
    >
      <Text style={[styles.title, { color: colors.textWhite }]}>
        Rent History
      </Text>

      {loading && <ActivityIndicator size="large" color={colors.iconWhite} />}

      {!loading && rentHistoryData.length === 0 && (
        <Text
          style={{
            color: colors.textWhite,
            fontSize: FontSizes.medium,
            textAlign: "center",
            marginTop: 50,
          }}
        >
          No rent history found
        </Text>
      )}

      {!loading && rentHistoryData.length > 0 && (
        <FlatList
          data={rentHistoryData}
          renderItem={renderItem}
          keyExtractor={(index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },

  rentHistoryCardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rentHistoryCard: {
    width: "90%",
    borderRadius: 15,
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
  },

  title: {
    fontSize: FontSizes.medium,
    fontWeight: "bold",
  },

  date: {
    textAlign: "left",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RentHistory;
