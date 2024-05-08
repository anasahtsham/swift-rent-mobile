import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

export const ComplainsCard = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();

  const formatComplaintStatus = (status) => {
    switch (status) {
      case "P":
        return "Pending";
      case "A":
        return "Acknowledged";
      default:
        return null;
    }
  };

  const formatUserType = (type) => {
    switch (type) {
      case "T":
        return "Tenant";
      case "O":
        return "Owner";
      case "M":
        return "Maintenance";
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={
        props.complaintStatus === "P" && !!props.senderName
          ? OPACITY_VALUE_FOR_BUTTON
          : 1
      }
      onPress={() => {
        if (props.complaintStatus === "P" && !!props.senderName) {
          navigation.navigate("View Complain", {
            complaintID: props.complaintID,
            fullAddress: props.fullAddress,
            senderName: props.senderName,
            senderType: props.senderType,
            createdOn: props.createdOn,
            complaintTitle: props.complaintTitle,
            complaintDescription: props.complaintDescription,
          });
        }
      }}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={[
              styles.fontBold,
              {
                color: colors.textPrimary,
                fontSize: FontSizes.medium,
              },
            ]}
          >
            {props.complaintTitle}
          </Text>

          {props.complaintStatus === "P" && !!props.senderName && (
            <Image
              tintColor={colors.textPrimary}
              style={{ width: 20, height: 20 }}
              source={icons.externalLink}
            />
          )}
        </View>

        {!!props.complaintDescription && (
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.complaintDescription}
          </Text>
        )}

        {!!props.fullAddress && (
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.fullAddress}
          </Text>
        )}

        {!!props.senderName && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Sender:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.senderName} ({formatUserType(props.senderType)})
            </Text>
          </View>
        )}

        {!!props.receiverName && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Receiver:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.receiverName} ({formatUserType(props.receiverType)})
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Created On:{" "}
          </Text>
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.createdOn}
          </Text>
        </View>

        {!!props.complaintResolvedOn && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Resolved on:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.complaintResolvedOn}
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Status:{" "}
          </Text>
          <Text
            style={[
              styles.fontBold,
              {
                color:
                  props.complaintStatus === "P"
                    ? colors.textRed
                    : colors.textGreen,
              },
            ]}
          >
            {formatComplaintStatus(props.complaintStatus)}
          </Text>
        </View>

        {!!props.receiverRemark && (
          <View style={{}}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Acknowledgement Remark:
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textGreen,
                },
              ]}
            >
              {props.receiverRemark}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fontBold: {
    fontFamily: "OpenSansBold",
    fontSize: FontSizes.small,
  },
  fontRegular: {
    fontFamily: "OpenSansRegular",
    fontSize: FontSizes.small,
  },
});

export default ComplainsCard;
