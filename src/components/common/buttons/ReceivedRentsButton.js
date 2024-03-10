import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { opacityValueForButton } from "../../../constants";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import { formatNumber } from "./../../../helpers/index";

export const ReceivedRentsButton = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.address}
        </Text>

        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.city}
        </Text>

        {!!props.manager && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Manager:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.manager}
            </Text>
          </View>
        )}

        {!!props.tenant && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Rented To:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.tenant}
            </Text>
          </View>
        )}

        {!!props.amountCollected && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Collected:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textGreen,
                },
              ]}
            >
              {formatNumber(props.amountCollected)}{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              PKR
            </Text>
          </View>
        )}

        {!!props.rentPaid && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Paid:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textGreen,
                },
              ]}
            >
              {formatNumber(props.rentPaid)}{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              PKR
            </Text>
          </View>
        )}

        {!!props.rentAmount && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Rent:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textRed,
                },
              ]}
            >
              {formatNumber(props.rentAmount)}{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              PKR
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
  icon: {
    width: 20,
    height: 20,
  },
});

export default ReceivedRentsButton;
