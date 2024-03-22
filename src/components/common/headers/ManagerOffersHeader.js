import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { getColors } from "../../../helpers/SetColors";

const ManagerOffersHeader = (props) => {
  const colors = getColors();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View style={[styles.mainCard, { borderColor: colors.borderBlue }]}>
        <Text
          style={[
            styles.mainTitle,
            styles.fontBold,
            { color: colors.textPrimary },
          ]}
        >
          Manager Offer ({props.managerOffersAmount})
        </Text>
        <View style={styles.inRow}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Hiring for:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.hiringFor}
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            SalaryType:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.salaryType}
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Salary Period:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.salaryPeriod}
          </Text>
        </View>
        <View style={[styles.inRow, { marginBottom: 0 }]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            My Offer:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.myOffer}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },

  header: {
    padding: 15,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  mainCard: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 4,
  },
  mainTitle: { fontSize: FontSizes.medium, paddingBottom: 10 },
  inRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
});

export default ManagerOffersHeader;
