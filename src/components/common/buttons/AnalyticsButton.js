import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { formatNumberToCrore } from "../../../helpers/utils";

export const AnalyticsButton = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      // onPress={() => {
      //   props.navigation.navigate("Month Report");
      // }}
      // activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      activeOpacity={1}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <Text
        style={{
          fontFamily: "OpenSansBold",
          fontSize: FontSizes.small,
          color: colors.textPrimary,
        }}
      >
        {props.month}
      </Text>
      {!!props.incomingPayment && (
        <Image
          tintColor={colors.iconGreen}
          source={icons.downLongArrow}
          style={{ width: 20, height: 20 }}
        />
      )}

      {!!props.incomingPayment && (
        <Text
          style={{
            fontFamily: "OpenSansRegular",
            fontSize: FontSizes.small,
            color: colors.textPrimary,
          }}
        >
          {formatNumberToCrore(props.incomingPayment)}
        </Text>
      )}

      {!!props.commissionEarned && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            tintColor={colors.iconGreen}
            source={icons.downLongArrow}
            style={{ width: 20, height: 20 }}
          />
          <Text
            style={{
              fontFamily: "OpenSansRegular",
              fontSize: FontSizes.small,
              color: colors.textPrimary,
            }}
          >
            {formatNumberToCrore(props.commissionEarned)}
          </Text>
        </View>
      )}

      {!!props.properties && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            tintColor={colors.iconPrimary}
            source={icons.home}
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
          <Text
            style={{
              fontFamily: "OpenSansRegular",
              fontSize: FontSizes.small,
              color: colors.textPrimary,
            }}
          >
            {props.properties}
          </Text>
        </View>
      )}

      {!!props.incomingPayment && (
        <Image
          tintColor={colors.iconRed}
          source={icons.upLongArrow}
          style={{ width: 20, height: 20 }}
        />
      )}

      {(!!props.outgoingPayment || !!props.outcome) && (
        <Text
          style={{
            fontFamily: "OpenSansRegular",
            fontSize: FontSizes.small,
            color: colors.textPrimary,
          }}
        >
          {!!props.outgoingPayment
            ? formatNumberToCrore(props.outgoingPayment)
            : formatNumberToCrore(props.outcome)}
          {!!props.incomingPayment ? "" : " PKR"}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AnalyticsButton;
