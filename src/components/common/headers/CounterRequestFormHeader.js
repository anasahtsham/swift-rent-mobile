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

            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.fontRegular,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
              >
                Property Rent:{" "}
              </Text>
              <Text
                style={[
                  styles.fontBold,
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
              >
                {`${formatNumberToCrore(props.rent)}`}
              </Text>
            </View>

            {props.oneTimePay > 0 &&
              (props.salaryPaymentType !== "P" ||
                props.salaryPaymentType !== "F") && (
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={[
                      styles.fontRegular,
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                      },
                    ]}
                  >
                    One Time Pay:{" "}
                  </Text>
                  <Text
                    style={[
                      styles.fontBold,
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                      },
                    ]}
                  >
                    {`${formatNumberToCrore(props.oneTimePay)}`}
                  </Text>
                </View>
              )}

            {props.salaryPaymentType === "P" && (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    styles.fontRegular,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  Salary Percentage:{" "}
                </Text>
                <Text
                  style={[
                    styles.fontBold,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  {`${props.salaryPercentage}%`}
                </Text>
              </View>
            )}

            {props.salaryPaymentType === "F" && (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    styles.fontRegular,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  Salary Fixed:{" "}
                </Text>
                <Text
                  style={[
                    styles.fontBold,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  {`${formatNumberToCrore(props.salaryFixed)}`}
                </Text>
              </View>
            )}

            {(props.salaryPaymentType === "P" ||
              props.salaryPaymentType === "F") && (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    styles.fontRegular,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  Who Brings Tenant:{" "}
                </Text>
                <Text
                  style={[
                    styles.fontBold,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  {`${formatWhoBringsTenant(props.whoBringsTenant)}`}
                </Text>
              </View>
            )}

            {!!props.specialCondition && (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    styles.fontRegular,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  Special Condition:{" "}
                </Text>
                <Text
                  style={[
                    styles.fontBold,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  {`${props.specialCondition}`}
                </Text>
              </View>
            )}

            {props.needHelpWithLegalWork && (
              <Text
                style={[
                  styles.fontBold,
                  {
                    color: colors.textGreen,
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
