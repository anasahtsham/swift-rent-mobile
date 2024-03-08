import { Image, Text, TouchableOpacity, View } from "react-native";
import { useColorsOnFocus } from "../../../../helpers/SetColors";
import { styles } from "./styles";
import { icons } from "../../../../helpers/ImageImports";
import { opacityValueForButton } from "../../../../constants";

const PendingRentsCard = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity activeOpacity={opacityValueForButton} style={{ flex: 1 }}>
      <View
        style={[
          styles.recievedAndPendingRentsCard,
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
          Pending Rents
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
                color: colors.textRed,
              },
            ]}
          >
            5
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

export default PendingRentsCard;
