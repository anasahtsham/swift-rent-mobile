import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";

const HeaderButton = ({
  colors,
  borderColor,
  children,
  onPress,
  isSelected,
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={opacityValueForButton}
    style={[
      styles.headerButton,
      {
        borderColor: borderColor,
        backgroundColor: isSelected ? colors.selectedBackground : "transparent",
      },
    ]}
  >
    <Text
      style={{
        color: colors.textPrimary,
        fontSize: FontSizes.small,
        fontFamily: isSelected ? "OpenSansBold" : "OpenSansRegular",
      }}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

const AlertsHeader = (props) => {
  const colors = props.colors;
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View
        style={[
          styles.userInfoContainer,
          {
            borderColor: colors.borderBlue,
            backgroundColor: colors.headerAndFooterBackground,
          },
        ]}
      >
        <View style={styles.userInfo}>
          <Text
            style={[
              styles.userName,
              { color: colors.textPrimary, fontSize: FontSizes.medium },
            ]}
          >
            Notifications {props.notificationsAmount}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <HeaderButton
            onPress={() => props.onHeaderButtonPress("Maintenance")}
            colors={colors}
            borderColor={colors.borderRed}
            isSelected={props.selectedTypes.includes("Maintenance")}
          >
            Maintenance
          </HeaderButton>
          <HeaderButton
            onPress={() => props.onHeaderButtonPress("Complains")}
            colors={colors}
            borderColor={colors.borderYellow}
            isSelected={props.selectedTypes.includes("Complains")}
          >
            Complains
          </HeaderButton>
          <HeaderButton
            onPress={() => props.onHeaderButtonPress("Rent")}
            colors={colors}
            borderColor={colors.borderGreen}
            isSelected={props.selectedTypes.includes("Rent")}
          >
            Rent
          </HeaderButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  headerButton: {
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  userInfoContainer: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    width: "90%",
    elevation: 10,
  },
  userInfo: { flexDirection: "row" },
  userImage: { width: 50, height: 50 },
  userName: { marginLeft: 10, fontSize: 20 },
});

export default AlertsHeader;
