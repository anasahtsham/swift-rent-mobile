import { Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { opacityValueForButton } from "../../../../constants/index";
import { formatNumber } from "../../../../helpers";
import { icons } from "../../../../helpers/ImageImports";
import { styles } from "./styles";

const MainCard = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();
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
          {!!props.rentsCollected && (
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
          {!!props.rentsCollected && (
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
      onPress={() => {
        if (!!props.rentsCollected) {
          navigation.navigate("Owner Analytical Report");
        }
      }}
      activeOpacity={!!props.rentsCollected ? opacityValueForButton : 1}
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
            styles.textSmall,
            { color: colors.textPrimary },
          ]}
        >
          {props.month}
        </Text>
        {!!props.rentsCollected && (
          <InfoRow
            title="Rents Collected"
            value={formatNumber(props.rentsCollected)}
            imageSource={icons.downLongArrow}
            tintColor={colors.iconGreen}
          />
        )}
        {!!props.rentsCollected && (
          <InfoRow
            title="Maintenance Costs"
            value={formatNumber(props.maintenanceCost)}
            imageSource={icons.upLongArrow}
            tintColor={colors.iconRed}
          />
        )}
        {!!props.rentsPaid && (
          <InfoRow
            title="Rents Paid"
            value={formatNumber(props.rentsPaid)}
            imageSource={icons.upLongArrow}
            tintColor={colors.iconRed}
          />
        )}
        {!!props.rentsPaid && (
          <View>
            <InfoRow
              title="Rentals"
              value={props.rentals}
              imageSource={icons.upLongArrow}
              tintColor={colors.iconRed}
            />
            <View style={{ height: 40 }}></View>
          </View>
        )}

        {!!props.rentsCollected && (
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
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MainCard;
