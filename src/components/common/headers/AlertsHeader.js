import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";

// R = Rent, L = Lease, C = Complaint, A = Admin

const HeaderButton = ({
  colors,
  borderColor,
  children,
  onPress,
  isSelected,
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={OPACITY_VALUE_FOR_BUTTON}
    style={[
      styles.headerButton,
      {
        borderColor: borderColor,
        borderWidth: isSelected ? 3 : 1,
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
          styles.notificationsContainer,
          {
            borderColor: colors.borderBlue,
            backgroundColor: colors.headerAndFooterBackground,
          },
        ]}
      >
        <Text
          style={[
            styles.headerTitle,
            { color: colors.textPrimary, fontSize: FontSizes.medium },
          ]}
        >
          Notifications {props.notificationsAmount}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: 5,
          }}
        >
          <HeaderButton
            onPress={() => props.onHeaderButtonPress("R")}
            colors={colors}
            borderColor={colors.borderGreen}
            isSelected={props.selectedTypes.includes("R")}
          >
            Rent
          </HeaderButton>
          <HeaderButton
            onPress={() => props.onHeaderButtonPress("L")}
            colors={colors}
            borderColor={colors.borderBlue}
            isSelected={props.selectedTypes.includes("L")}
          >
            Lease
          </HeaderButton>
          <HeaderButton
            onPress={() => props.onHeaderButtonPress("C")}
            colors={colors}
            borderColor={colors.borderPurple}
            isSelected={props.selectedTypes.includes("C")}
          >
            Complains
          </HeaderButton>
          <HeaderButton
            onPress={() => props.onHeaderButtonPress("A")}
            colors={colors}
            borderColor={colors.borderRed}
            isSelected={props.selectedTypes.includes("A")}
          >
            Admin
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
    width: "auto",
    height: 30,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    borderRadius: 10,
  },
  notificationsContainer: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    width: "90%",
    elevation: 10,
  },
  userInfo: { flexDirection: "row" },
  headerTitle: { fontSize: FontSizes.medium, fontFamily: "OpenSansBold" },
});

export default AlertsHeader;
