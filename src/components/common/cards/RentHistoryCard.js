import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { useColors } from "../../../helpers/SetColors";

const RentHistoryCard = ({ date, amount }) => {
  const colors = useColors();

  return (
    <View
      style={[
        styles.rentHistoryCard,
        { backgroundColor: colors.backgroundPrimary },
      ]}
    >
      <Text
        style={[
          styles.date,
          {
            fontSize: FontSizes.small,
            color: colors.textPrimary,
            fontWeight: "bold",
          },
        ]}
      >
        {date}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: FontSizes.small, color: colors.textPrimary }}>
          Amount:
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
            fontWeight: "bold",
          }}
        >
          {amount} PKR
        </Text>
      </View>
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
