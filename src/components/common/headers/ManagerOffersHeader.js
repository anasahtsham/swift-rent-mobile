import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { useColors } from "../../../helpers/SetColors";
import { formatNumberToCrore } from "../../../helpers/utils";

const ManagerOffersHeader = (props) => {
  const colors = useColors();

  const formatPurpose = (purpose) => {
    switch (purpose) {
      case "A":
        return "Acquire Tenant";
      case "C":
        return "Caretaking";
      default:
        return "";
    }
  };

  const formatPaymentType = (paymentType) => {
    switch (paymentType) {
      case "P":
        return "Percentage";
      case "F":
        return "Fixed";
      default:
        return "";
    }
  };

  const formatWhoBringsTenant = (whoBringsTenant) => {
    switch (whoBringsTenant) {
      case "B":
        return "Both";
      case "M":
        return "Manager";
      case "O":
        return "Owner";
      default:
        return "";
    }
  };

  if (props.loading) {
    return (
      <View
        style={[
          styles.header,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <View style={[styles.mainCard, { borderColor: colors.borderBlue }]}>
          <ActivityIndicator size="large" color={colors.textPrimary} />
        </View>
      </View>
    );
  }

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
          Manager Offers ({props.managerOffersAmount})
        </Text>

        <View style={styles.inRow}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Purpose:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {formatPurpose(props.purpose)}
          </Text>
        </View>

        {props.oneTimePay === 0 && (
          <View style={styles.inRow}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              One Time Pay:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${formatNumberToCrore(props.oneTimePay)} PKR`}
            </Text>
          </View>
        )}

        {!!props.salaryPaymentType && (
          <View style={styles.inRow}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Payment Type:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {formatPaymentType(props.salaryPaymentType)}
            </Text>
          </View>
        )}

        {!!props.salaryFixed && (
          <View style={styles.inRow}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Fixed:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${formatNumberToCrore(props.salaryFixed)} PKR`}
            </Text>
          </View>
        )}

        {!!props.salaryPercentage && (
          <View style={styles.inRow}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Percentage:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${props.salaryPercentage}%`}
            </Text>
          </View>
        )}

        {!!props.whoBringsTenant && (
          <View style={styles.inRow}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Who Brings Tenant:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {formatWhoBringsTenant(props.whoBringsTenant)}
            </Text>
          </View>
        )}

        {!!props.rent && (
          <View style={styles.inRow}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Rent:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${formatNumberToCrore(props.rent)} PKR`}
            </Text>
          </View>
        )}

        {!!props.specialCondition && (
          <View style={styles.inRow}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Special Condition:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {props.specialCondition}
            </Text>
          </View>
        )}

        {!!props.needHelpWithLegalWork && (
          <Text
            style={[
              styles.fontBold,
              {
                fontSize: FontSizes.small,
                color: colors.textGreen,
              },
            ]}
          >
            Need Help With Legal Work
          </Text>
        )}
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
