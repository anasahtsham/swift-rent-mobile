import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";

export const CustomerSupportCard = (props) => {
  const colors = props.colors;
  return (
    <View style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}>
      <View>
        <Text
          style={[
            styles.fontBold,
            {
              color: colors.textPrimary,
              fontSize: FontSizes.medium,
              marginBottom: 5,
            },
          ]}
        >
          {props.title}
        </Text>

        {!!props.description && (
          <Text
            style={[
              styles.fontBold,
              {
                color: colors.textPrimary,
                marginBottom: 5,
              },
            ]}
          >
            {props.description}
          </Text>
        )}

        <View
          style={{ flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }}
        >
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Submitted On:{" "}
          </Text>
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.submittedOn}
          </Text>
        </View>

        {props.complaintStatus === "Solved" && (
          <View
            style={{ flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }}
          >
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Solved On:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.solvedOn}
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Status:{" "}
          </Text>
          <Text
            //statuses Pending, Solved, In-Progress, Rejected
            style={[
              styles.fontBold,
              {
                color:
                  props.complaintStatus === "Rejected"
                    ? colors.textRed
                    : props.complaintStatus === "Solved"
                    ? colors.textGreen
                    : props.complaintStatus === "In-Progress"
                    ? colors.textDarkBlue
                    : colors.textPrimary,
              },
            ]}
          >
            {props.complaintStatus}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
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

export default CustomerSupportCard;
