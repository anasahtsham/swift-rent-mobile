import { Image, Text, View } from "react-native";
import { useColorsOnFocus } from "../../../../helpers/SetColors";
import { styles } from "./styles";

const MainCard = () => {
  const colors = useColorsOnFocus();
  const InfoRow = ({ title, value, imageSource, tintColor }) => {
    return (
      <View>
        <Text style={[styles.textRegular, styles.textSmall]}>{title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            tintColor={tintColor}
            style={{ width: 20, height: 20, marginRight: 5 }}
            source={imageSource}
          />
          <Text
            style={[
              styles.textBold,
              styles.textSmall,
              {
                marginRight: 5,
              },
            ]}
          >
            {value}
          </Text>
          <Text style={[styles.textRegular, styles.textSmall]}>PKR</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={[
        styles.commonStylesForCards,
        {
          borderColor: colors.borderBlue,
          backgroundColor: colors.headerAndFooterBackground,
        },
      ]}
    >
      <Text style={[styles.textBold, styles.textMedium]}>September 2024</Text>
      <InfoRow
        title="Rents Collected"
        value="117,000"
        imageSource={require("../../../../assets/icons/up-long-arrow.png")}
        tintColor={colors.iconGreen}
      />
      <InfoRow
        title="Maintenance Costs"
        value="11,000"
        imageSource={require("../../../../assets/icons/down-long-arrow.png")}
        tintColor={colors.iconRed}
      />
      <View>
        <Text style={[styles.textRegular, styles.textSmall]}>
          Total Properties
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[styles.textBold, styles.textSmall]}>25</Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../../assets/icons/external-link.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default MainCard;
