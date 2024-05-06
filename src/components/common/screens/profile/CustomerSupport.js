import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
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
import { BASE_URL, opacityValueForButton } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { useUserID } from "../../../../helpers/SetUserID";
import { useUserType } from "../../../../helpers/SetUserType";
import { CustomerSupportCard } from "./../../cards/CustomerSupportCard";

const CustomerSupport = ({ navigation }) => {
  const colors = useColors();
  const userID = useUserID();
  const userType = useUserType();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const convertStatus = (status) => {
    switch (status) {
      case "P":
        return "Pending";
      case "I":
        return "In-Progress";
      case "S":
        return "Solved";
      case "R":
        return "Rejected";
      default:
        return status;
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchCustomerSupportStatus = async () => {
        if (userID && userType) {
          try {
            const response = await axios.post(
              `${BASE_URL}/api/common/customer-support-status`,
              { userID, userType }
            );
            setData(
              response.data.customerSupportRequests.map((request) => ({
                ...request,
                status: convertStatus(request.status),
              }))
            );
          } catch (error) {
            Alert.alert("Error", "Something went wrong");
          } finally {
            setLoading(false);
          }
        }
      };

      fetchCustomerSupportStatus();

      const backAction = () => {
        navigation.goBack();
        return true; // This will prevent the app from closing
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [userID, userType])
  );

  const renderItem = ({ item: list }) => (
    <CustomerSupportCard
      colors={colors}
      key={list.id}
      title={list.title}
      description={list.description}
      submittedOn={list.createdon}
      solvedOn={list.complaintsolvedon}
      complaintStatus={list.status}
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
            navigation.navigate("Problem Form", {
              headerText: "Customer Support",
              userID: userID,
              userType: userType,
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
            + New Ticket
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
          Previous Tickets
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

export default CustomerSupport;

// navigation.navigate("Problem Form", {
//     headerText: "Customer Support",
//     userID: userID,
//     userType: userType,
//   })
