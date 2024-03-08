import { Image, Text, View } from "react-native";
import { useColorsOnFocus } from "../../../../helpers/SetColors";
import { styles } from "./styles";

const PendingRentsCard = () => {
  const colors = useColorsOnFocus();
  return (
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
      <Text style={[styles.textBold, styles.textSmall]}>Pending Rents</Text>
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
            styles.textMedium,
            {
              color: colors.textRed,
            },
          ]}
        >
          5
        </Text>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../../assets/icons/external-link.png")}
        />
      </View>
    </View>
  );
};

export default PendingRentsCard;
