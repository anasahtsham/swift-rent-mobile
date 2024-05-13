import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { useColors } from "../../../helpers/SetColors";
import { formatNumberToCrore } from "./../../../helpers/utils/index";

const RentHistoryCard = ({
  submittedOn,
  collectedOn,
  submittedAmount,
  collectedAmount,
}) => {
  const colors = useColors();

  return (
    <View
      style={[
        styles.rentHistoryCard,
        { backgroundColor: colors.backgroundPrimary },
      ]}
    >
      {collectedAmount && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: FontSizes.small,
              color: colors.textPrimary,
            }}
          >
            Collected Amount:
          </Text>
          <Text
            style={{
              fontSize: FontSizes.small,
              color: colors.textPrimary,
              fontWeight: "bold",
            }}
          >
            {formatNumberToCrore(collectedAmount)} PKR
          </Text>
        </View>
      )}

      {collectedOn && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: FontSizes.small,
              color: colors.textPrimary,
            }}
          >
            Collected On:
          </Text>
          <Text
            style={{
              fontSize: FontSizes.small,
              color: colors.textPrimary,
              fontWeight: "bold",
            }}
          >
            {collectedOn}
          </Text>
        </View>
      )}

      {submittedAmount && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
          >
            Submitted Amount:
          </Text>
          <Text
            style={{
              fontSize: FontSizes.small,
              color: colors.textPrimary,
              fontWeight: "bold",
            }}
          >
            {formatNumberToCrore(submittedAmount)} PKR
          </Text>
        </View>
      )}

      {submittedOn && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: FontSizes.small,
              color: colors.textPrimary,
            }}
          >
            Submitted On:
          </Text>
          <Text
            style={{
              fontSize: FontSizes.small,
              color: colors.textPrimary,
              fontWeight: "bold",
            }}
          >
            {submittedOn}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rentHistoryCard: {
    width: "90%",
    borderRadius: 15,
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
  },
});

export default RentHistoryCard;
