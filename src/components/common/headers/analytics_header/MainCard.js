import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../../constants/index";
import { icons } from "../../../../helpers/ImageImports";
import { formatNumberToCrore } from "../../../../helpers/utils";
import { styles } from "./styles";

const MainCard = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();
  const InfoRow = ({ title, value, imageSource, tintColor }) => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text
          style={[
            styles.textRegular,
            styles.textSmall,
            { color: colors.textPrimary },
          ]}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {(title === "Rents Collected" ||
            title === "Commission" ||
            title === "Maintenance Costs") && (
            <Image
              tintColor={tintColor}
              style={{ width: 20, height: 20, marginRight: 5 }}
              source={imageSource}
            />
          )}

          <Text
            style={[
              styles.textBold,
              styles.textSmall,
              {
                marginRight: 5,
                color: colors.textPrimary,
              },
            ]}
          >
            {value}
          </Text>
          {(title === "Rents Collected" ||
            title === "Commission" ||
            title === "Maintenance Costs") && (
            <Text
              style={[
                styles.textRegular,
                styles.textExtraSmall,
                { color: colors.textPrimary },
              ]}
            >
              PKR
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity
      // onPress={() => {
      //   if (!!props.rentsCollected) {
      //     navigation.navigate("Analytical Report");
      //   }
      // }}
      // activeOpacity={!!props.rentsCollected ? OPACITY_VALUE_FOR_BUTTON : 1}.
      onPress={() => {
        navigation.navigate("Analytical Report");
      }}
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
    >
      <View
        style={[
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
            { color: colors.textPrimary, marginBottom: 20 },
          ]}
        >
          {props.month}
        </Text>

        <InfoRow
          title="Rents Collected"
          value={formatNumberToCrore(props.rentsCollected)}
          imageSource={icons.downLongArrow}
          tintColor={colors.iconGreen}
        />

        <InfoRow
          title="Maintenance Costs"
          value={formatNumberToCrore(props.maintenanceCost)}
          imageSource={icons.upLongArrow}
          tintColor={colors.iconRed}
        />

        <View>
          <Text
            style={[
              styles.textRegular,
              styles.textSmall,
              { color: colors.textPrimary },
            ]}
          >
            Total Properties
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
                styles.textBold,
                styles.textSmall,
                { color: colors.textPrimary },
              ]}
            >
              {props.totalProperties}
            </Text>
            <Image
              tintColor={colors.iconPrimary}
              style={{ width: 20, height: 20 }}
              source={icons.externalLink}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MainCard;
