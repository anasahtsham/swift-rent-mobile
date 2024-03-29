import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const PropertyMenuHeader = (props) => {
  const colors = props.colors;
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View
        style={[
          styles.topCard,
          {
            borderColor: colors.borderBlue,
          },
        ]}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.medium,
            fontFamily: "OpenSansBold",
            marginBottom: 10,
          }}
        >
          {props.propertyAddress}
        </Text>
        <View style={styles.inRow}>
          <Text style={[styles.topCardTopText, { color: colors.textPrimary }]}>
            This Month's Rent Status
          </Text>
          <Text style={[styles.nestedText, { color: colors.textGreen }]}>
            Collected
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text style={[styles.topCardTopText, { color: colors.textPrimary }]}>
            Rents Collected
          </Text>
          <Text style={[styles.nestedText, { color: colors.textGreen }]}>
            +200000
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text style={[styles.topCardTopText, { color: colors.textPrimary }]}>
            Maintenance Expenses
          </Text>
          <Text style={[styles.nestedText, { color: colors.textRed }]}>
            -8500
          </Text>
        </View>

        <View // This is the line between the top and bottom card
          style={{
            width: "90%",
            height: 2,
            backgroundColor: colors.backgroundSecondary,
            alignSelf: "center",
            marginVertical: 10,
          }}
        />

        <View style={styles.inRow}>
          <Text style={[styles.topCardTopText, { color: colors.textPrimary }]}>
            Total Profit
          </Text>
          <Text style={[styles.nestedText, { color: colors.textPrimary }]}>
            191500
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  topCard: {
    width: "90%",
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  topCardTopText: {
    fontSize: FontSizes.small,
    textAlign: "left",
  },
  inRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  nestedText: {
    fontSize: FontSizes.small,
    textAlign: "left",
  },
});

export default PropertyMenuHeader;
