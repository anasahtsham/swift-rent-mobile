import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const MonthReportHeader = (props) => {
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
          styles.headerCard,
          {
            backgroundColor: colors.backgroundPrimary,
            borderColor: colors.borderBlue,
          },
        ]}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.medium,
            fontFamily: "OpenSansBold",
            marginBottom: 20,
          }}
        >
          December 2024 Report
        </Text>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={styles.rightInRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Rents Collected
            </Text>
            <Text style={[styles.nestedText, { color: colors.textGreen }]}>
              +2000000
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Maintenance Expenses
            </Text>
            <Text style={[styles.nestedText, { color: colors.textRed }]}>
              -8500
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 2,
              backgroundColor: colors.backgroundSecondary,
              alignSelf: "center",
              marginVertical: 10,
            }}
          />
          <View style={styles.rightInRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Total Profit
            </Text>
            <Text style={[styles.nestedText, { color: colors.textPrimary }]}>
              191500
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 10,
  },
  headerCard: {
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  topCardTopText: {
    fontSize: FontSizes.small,
    textAlign: "left",
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nestedText: {
    fontSize: FontSizes.small,
    textAlign: "left",
  },
  currencyStyles: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
  },
  monthNameText: {
    fontWeight: "bold",
    fontSize: FontSizes.small,
  },
  monthNameTextNested: {
    fontWeight: "bold",
    fontSize: FontSizes.small,
  },
  topCardRowEnd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowImageDimensions: {
    height: 20,
    width: 20,
  },
  barGraphImageDimensions: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
});

export default MonthReportHeader;
