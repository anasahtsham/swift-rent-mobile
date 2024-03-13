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
          styles.topCard,
          {
            backgroundColor: colors.backgroundPrimary,
            borderColor: colors.borderBlue,
          },
        ]}
      >
        <View style={styles.topCardTopTextContainer}>
          <View style={styles.rightInRow}>
            <Text
              style={{
                fontSize: FontSizes.medium,
                fontFamily: "OpenSansBold",
                marginBottom: 20,
              }}
            >
              December 2024 Report
            </Text>
          </View>
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
        </View>
        <View
          style={{
            width: 280,
            height: 2,
            backgroundColor: colors.backgroundSecondary,
            alignSelf: "center",
            marginVertical: 10,
          }}
        ></View>
        <View style={styles.rightInRow}>
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
    paddingBottom: 10,
  },
  topCard: {
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  topCardTopTextContainer: {
    paddingTop: "2%",
  },
  topCardTopText: {
    fontSize: FontSizes.small,
    paddingLeft: "4%",
    textAlign: "left",
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nestedText: {
    fontSize: FontSizes.small,
    paddingLeft: "6%",
    textAlign: "left",
    marginRight: "10%",
  },
  currencyStyles: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
    paddingLeft: "1%",
  },
  monthNameText: {
    paddingTop: "1%",
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
    paddingTop: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
  },
  arrowImageDimensions: {
    height: 20,
    width: 20,
    marginLeft: "12%",
  },
  barGraphImageDimensions: {
    height: 100,
    width: 100,
    marginTop: "2%",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default MonthReportHeader;
