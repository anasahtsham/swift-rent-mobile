import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { icons } from "../../../../helpers/ImageImports";
import { opacityValueForButton } from "../../../../constants/index";
import { formatNumber } from "../../../../helpers";

const MainCard = (props) => {
  const colors = props.colors;
  const InfoRow = ({ title, value, imageSource, tintColor }) => {
    return (
      <View>
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
                color: colors.textPrimary,
              },
            ]}
          >
            {value}
          </Text>
          <Text
            style={[
              styles.textRegular,
              styles.textExtraSmall,
              { color: colors.textPrimary },
            ]}
          >
            PKR
          </Text>
        </View>
      </View>
    );
  };
  return (
    <TouchableOpacity activeOpacity={opacityValueForButton}>
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
            styles.textSmall,
            { color: colors.textPrimary },
          ]}
        >
          September 2024
        </Text>
        <InfoRow
          title="Rents Collected"
          value={formatNumber(110900)}
          imageSource={icons.downLongArrow}
          tintColor={colors.iconGreen}
        />
        <InfoRow
          title="Maintenance Costs"
          value={formatNumber(110900)}
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
              25
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
