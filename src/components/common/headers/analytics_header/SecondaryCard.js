import { Image, Text, TouchableOpacity, View } from "react-native";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { icons } from "../../../../helpers/ImageImports";
import { styles } from "./styles";

const SecondaryCard = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={{ flex: 1 }}
    >
      <View
        style={[
          styles.receivedAndPendingRentsCard,
          styles.commonStylesForCards,
          {
            borderColor: colors.borderBlue,
            backgroundColor: colors.headerAndFooterBackground,
          },
        ]}
      >
        <Text
          style={[
            styles.textBold,
            styles.textMidSmall,
            { color: colors.textPrimary },
          ]}
        >
          {!!props.receivedRents ? "Received Rents" : ""}
          {!!props.rentsPaid ? "Rents Paid" : ""}
          {!!props.pendingRents ? "Pending Rents" : ""}
          {!!props.rentsPending ? "Rents Pending" : ""}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.textRegular,
              styles.textLarge,
              {
                color:
                  !!props.receivedRents || !!props.rentsPaid
                    ? colors.textGreen
                    : colors.textRed,
              },
            ]}
          >
            {props.receivedRents}
            {props.rentsPaid}
            {props.pendingRents}
            {props.rentsPending}
          </Text>
          <Image
            tintColor={colors.iconPrimary}
            style={{ width: 20, height: 20 }}
            source={icons.externalLink}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SecondaryCard;
