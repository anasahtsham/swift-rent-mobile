import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { useColors } from "../../../helpers/SetColors";
import { formatNumberToCrore } from "../../../helpers/utils/index";

const ManagerOffersCard = (props) => {
  const colors = useColors();
  const navigation = useNavigation();
  const [acceptLoading, setAcceptLoading] = useState(false);
  const [rejectLoading, setRejectLoading] = useState(false);

  //interview handlers and api calls
  const interviewManager = async () => {
    setAcceptLoading(true);
    try {
      await axios.post(`${BASE_URL}/api/owner/interview-counter-request`, {
        managerCounterRequestID: props.managerCounterRequestID,
      });
      Alert.alert("Interview Requested", "Interview request sent successfully");
      props.fetchData();
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.log(JSON.stringify(error.response, null, 2));
    } finally {
      setAcceptLoading(false);
    }
  };

  const handleInterview = () => {
    Alert.alert(
      "Interview Manager",
      "Are you sure you want to interview this manager?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Interview",
          onPress: () => {
            interviewManager();
          },
        },
      ]
    );
  };

  //accept offer handlers and api calls
  const acceptOffer = async () => {
    setAcceptLoading(true);
    try {
      await axios.post(`${BASE_URL}/api/owner/accept-counter-request`, {
        managerCounterRequestID: props.managerCounterRequestID,
      });
      Alert.alert("Accepted", "Manager offer accepted successfully");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.log(JSON.stringify(error.response, null, 2));
    } finally {
      setAcceptLoading(false);
    }
  };

  const handleAccept = () => {
    Alert.alert("Hire Manager", "Are you sure you want to hire this manager?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Hire",
        onPress: () => {
          acceptOffer();
        },
      },
    ]);
  };

  const rejectOffer = async () => {
    setRejectLoading(true);
    try {
      await axios.post(`${BASE_URL}/api/owner/reject-counter-request`, {
        managerCounterRequestID: props.managerCounterRequestID,
      });
      Alert.alert("Rejected", "Manager offer rejected successfully");
      props.fetchData();
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.log(JSON.stringify(error.response, null, 2));
    } finally {
      setRejectLoading(false);
    }
  };

  const handleReject = () => {
    Alert.alert(
      "Reject Manager Offer",
      "Are you sure you want to reject this manager offer?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Reject",
          onPress: () => {
            rejectOffer();
          },
        },
      ]
    );
  };

  return (
    <View
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View style={[styles.buttonHeaderContainer, {}]}>
        <View style={{ width: "80%" }}>
          <Text
            style={[
              styles.fontBold,
              {
                fontSize: FontSizes.medium,
                color: colors.textPrimary,
              },
            ]}
          >
            {props.managerName}
          </Text>
        </View>

        <TouchableOpacity
          style={{ alignContent: "center", justifyContent: "center" }}
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
          onPress={() => {
            navigation.navigate("View Manager Ratings", {
              managerID: props.managerID,
              managerName: props.managerName,
            });
          }}
        >
          <Text
            style={[
              styles.fontRegular,
              {
                color: colors.textDarkBlue,
                fontSize: FontSizes.small,
                textAlign: "center",
              },
            ]}
          >
            View
          </Text>
          <Text
            style={[
              styles.fontRegular,
              {
                color: colors.textDarkBlue,
                fontSize: FontSizes.small,
                textAlign: "center",
              },
            ]}
          >
            Ratings
          </Text>
        </TouchableOpacity>
      </View>

      {/* after header */}

      <View style={{ marginTop: 5 }}>
        {!!props.oneTimePay && (
          <View style={[styles.inRow, styles.cardSubText]}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              One Time Pay:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${formatNumberToCrore(props.oneTimePay)} PKR`}
            </Text>
          </View>
        )}

        {!!props.salaryFixed && (
          <View style={[styles.inRow, styles.cardSubText]}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Fixed:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${formatNumberToCrore(props.salaryFixed)} PKR`}
            </Text>
          </View>
        )}

        {!!props.salaryPercentage && (
          <View style={[styles.inRow, styles.cardSubText]}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Percentage:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${props.salaryPercentage}%`}
            </Text>
          </View>
        )}

        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Rent:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {`${formatNumberToCrore(props.rent)} PKR`}
          </Text>
        </View>

        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Counter Request On:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.counterRequestOn}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 5,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor:
              props.counterRequestStatus === "P"
                ? colors.borderBlue
                : colors.borderGreen,
            borderRadius: 20,
            borderWidth: 4,
            alignContent: "center",
            justifyContent: "center",
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
          onPress={() => {
            props.counterRequestStatus === "P"
              ? handleInterview()
              : handleAccept();
          }}
        >
          {acceptLoading && (
            <ActivityIndicator size="small" color={colors.textPrimary} />
          )}
          {!acceptLoading && (
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              {props.counterRequestStatus === "P" ? "Interview" : "Hire"}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: colors.borderRed,
            borderRadius: 20,
            borderWidth: 4,
            alignContent: "center",
            justifyContent: "center",
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
          onPress={() => handleReject()}
        >
          {rejectLoading && (
            <ActivityIndicator size="small" color={colors.textPrimary} />
          )}
          {!rejectLoading && (
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              Reject
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  button: {
    height: "auto",
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
  },
  buttonHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  ratingsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    width: 22,
    height: 22,
  },
  cardSubText: {
    fontSize: FontSizes.small,
    marginBottom: 5,
  },
});

export default ManagerOffersCard;
