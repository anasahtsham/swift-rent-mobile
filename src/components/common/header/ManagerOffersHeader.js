import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { useColors } from "../../../helpers/SetColors";

const ManagerOffersHeader = () => {
  const colors = useColors();

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
          Manager Offer (3)
        </Text>
        <View style={styles.inRow}>
          <Text
            style={[
              styles.subTitle,
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Hiring for:{" "}
          </Text>
          <Text
            style={[
              styles.subTitle,
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Bringing Tenant/ Hiring Manager
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text
            style={[
              styles.subTitle,
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            SalaryType:{" "}
          </Text>
          <Text
            style={[
              styles.subTitle,
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            OneTime/ Salary/ Commission
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text
            style={[
              styles.subTitle,
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Salary Period:{" "}
          </Text>
          <Text
            style={[
              styles.subTitle,
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Weekly/ Monthly
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text
            style={[
              styles.subTitle,
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            My Offer:{" "}
          </Text>
          <Text
            style={[
              styles.subTitle,
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            10,000/ 10
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
    padding: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  mainCard: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 4,
  },
  mainTitle: { fontSize: FontSizes.medium, paddingBottom: 10 },
  subTitle: {
    fontSize: FontSizes.small,
    marginBottom: 5,
  },
  inRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default ManagerOffersHeader;
