import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { opacityValueForButton } from "../../../../constants/index";
import { formatNumber } from "../../../../helpers";
import { icons } from "../../../../helpers/ImageImports";
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
      onPress={() => {
        if (!!props.rentsCollected) {
          navigation.navigate("Analytical Report");
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
            styles.textMidSmall,
            { color: colors.textPrimary, marginBottom: 20 },
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
        {!!props.commission && (
          <InfoRow
            title="Commission"
            value={formatNumber(props.commission)}
            imageSource={icons.downLongArrow}
            tintColor={colors.iconGreen}
          />
        )}
        {!!props.maintenanceCost && (
          <InfoRow
            title="Maintenance Costs"
            value={formatNumber(props.maintenanceCost)}
            imageSource={icons.upLongArrow}
            tintColor={colors.iconRed}
          />
        )}
        {!!props.totalRentsPaid && (
          <InfoRow
            title="Rents Paid"
            value={formatNumber(props.totalRentsPaid)}
            imageSource={icons.upLongArrow}
            tintColor={colors.iconRed}
          />
        )}
        {!!props.managedProperties && (
          <View>
            <InfoRow
              title="Manged Properties"
              value={props.managedProperties}
              imageSource={icons.upLongArrow}
              tintColor={colors.iconRed}
            />
            <View style={{ height: 40 }}></View>
          </View>
        )}
        {!!props.totalRentsPaid && (
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
