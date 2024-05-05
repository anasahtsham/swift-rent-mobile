import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { useColors } from "../../../helpers/SetColors";
import { formatNumberToCrore } from "./../../../helpers/utils/index";

const CounterRequestFormHeader = (props) => {
  const colors = useColors();

  const formatWhoBringsTenant = (whoBringsTenant) => {
    switch (whoBringsTenant) {
      case "O":
        return "Owner";
      case "M":
        return "Manager";
      case "B":
        return "Both";
      default:
        return "None";
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
        <View
          style={[
            styles.headerCard,
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              borderColor: colors.borderBlue,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={[
                styles.fontBold,
                { color: colors.textPrimary, fontSize: FontSizes.medium },
              ]}
            >
              {`${props.ownerName}`}
            </Text>
          </View>

          <View>
            <Text
              style={[
                styles.fontRegular,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              {`${props.address}`}
            </Text>

            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                  textAlign: "center",
                },
              ]}
            >
              {`${
                props.purpose === "C"
                  ? "Hiring For Caretaking"
                  : "Hiring For Acquiring Tenant"
              }`}
            </Text>

            {props.oneTimePay > 0 &&
              (props.salaryPaymentType !== "P" ||
                props.salaryPaymentType !== "F") && (
                <Text
                  style={[
                    styles.fontRegular,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  {`One Time Pay: ${formatNumberToCrore(props.oneTimePay)}`}
                </Text>
              )}

            {props.salaryPaymentType === "P" && (
              <Text
                style={[
                  styles.fontRegular,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
              >
                {`Salary Percentage: ${props.salaryPercentage}%`}
              </Text>
            )}

            {props.salaryPaymentType === "F" && (
              <Text
                style={[
                  styles.fontRegular,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
              >
                {`Salary Fixed: ${formatNumberToCrore(props.salaryFixed)}`}
              </Text>
            )}

            {(props.salaryPaymentType === "P" ||
              props.salaryPaymentType === "F") && (
              <Text
                style={[
                  styles.fontRegular,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
              >
                {`Who Brings Tenant: ${formatWhoBringsTenant(
                  props.whoBringsTenant
                )}`}
              </Text>
            )}

            <Text
              style={[
                styles.fontRegular,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              {`Rent: ${formatNumberToCrore(props.rent)}`}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              {`Special Condition: ${props.specialCondition}`}
            </Text>
            {props.needHelpWithLegalWork && (
              <Text
                style={[
                  styles.fontBold,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
              >
                {`Owner wants help with legal work`}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  headerCard: {
    width: "100%",
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
});

export default CounterRequestFormHeader;
