import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { formatNumberToCrore } from "./../../../helpers/utils/index";

const PropertyMenuHeader = (props) => {
  const colors = props.colors;

  const formatPaymentStatus = (status) => {
    switch (status) {
      case "C":
        return "Collected";
      case "P":
        return "Pending";
      default:
        return status;
    }
  };

  if (props.loading) {
    return (
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.headerAndFooterBackground,
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          },
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
          <ActivityIndicator size="large" color={colors.textPrimary} />
        </View>
      </View>
    );
  }

  if (!!props.ownerName) {
    // if displaying to manager
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

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Owner Name:{" "}
            </Text>
            <Text
              style={[
                styles.nestedText,
                { color: colors.textPrimary, fontWeight: "bold" },
              ]}
            >
              {props.ownerName}
            </Text>
          </View>

          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Rent Status:{" "}
            </Text>
            <Text style={[styles.nestedText, { color: colors.textGreen }]}>
              {formatPaymentStatus(props.rentStatus)}
            </Text>
          </View>

          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Total Income
            </Text>
            <Text style={[styles.nestedText, { color: colors.textGreen }]}>
              {formatNumberToCrore(props.totalIncome)}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  if (!!props.ownerName) {
    // if displaying to tenant
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

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Owner Name:{" "}
            </Text>
            <Text
              style={[
                styles.nestedText,
                { color: colors.textPrimary, fontWeight: "bold" },
              ]}
            >
              {props.ownerName}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Manager Name:{" "}
            </Text>
            <Text
              style={[
                styles.nestedText,
                { color: colors.textPrimary, fontWeight: "bold" },
              ]}
            >
              {props.managerName}
            </Text>
          </View>

          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Rent Status:{" "}
            </Text>
            <Text style={[styles.nestedText, { color: colors.textGreen }]}>
              {formatPaymentStatus(props.rentStatus)}
            </Text>
          </View>

          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Total Submitted Rent
            </Text>
            <Text style={[styles.nestedText, { color: colors.textGreen }]}>
              {formatNumberToCrore(props.totalSubmittedRent)}
            </Text>
          </View>
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
            Tenant Payment Status
          </Text>
          <Text style={[styles.nestedText, { color: colors.textGreen }]}>
            {formatPaymentStatus(props.tenantPaymentStatus)}
          </Text>
        </View>
        {!!props.managerPaymentStatus && (
          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Manager Payment Status
            </Text>
            <Text style={[styles.nestedText, { color: colors.textGreen }]}>
              {formatPaymentStatus(props.managerPaymentStatus)}
            </Text>
          </View>
        )}

        <View style={styles.inRow}>
          <Text style={[styles.topCardTopText, { color: colors.textPrimary }]}>
            Total Revenue
          </Text>
          <Text style={[styles.nestedText, { color: colors.textGreen }]}>
            {formatNumberToCrore(props.totalPropertyRevenue)}
          </Text>
        </View>
        <View style={styles.inRow}>
          <Text style={[styles.topCardTopText, { color: colors.textPrimary }]}>
            Maintenance Expenses
          </Text>
          <Text style={[styles.nestedText, { color: colors.textRed }]}>
            {formatNumberToCrore(props.totalMaintenanceCost)}
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
            {formatNumberToCrore(
              props.totalPropertyRevenue - props.totalMaintenanceCost
            )}
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
