import { Image, Text, TouchableOpacity, View } from "react-native";

import { opacityValueForButton } from "../../../../constants";
import { icons } from "../../../../helpers/ImageImports";
import { styles } from "./styles";

const ReceivedRentsCard = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={opacityValueForButton}
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
            styles.textSmall,
            { color: colors.textPrimary },
          ]}
        >
          Received Rents
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
                color: colors.textGreen,
              },
            ]}
          >
            {props.receivedRents}
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

export default ReceivedRentsCard;
