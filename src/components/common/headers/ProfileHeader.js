import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { formatUserTypeToFullForm } from "../../../helpers/utils";

const ProfileHeader = (props) => {
  const colors = props.colors;

  if (props.loading) {
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
          <ActivityIndicator size="large" color={colors.textPrimary} />
        </View>
      </View>
    );
  }

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
        <Text
          style={[
            {
              color: colors.textPrimary,
              fontSize: FontSizes.medium,
              fontFamily: "OpenSansBold",
            },
          ]}
        >
          {formatUserTypeToFullForm(props.userType)}
        </Text>

        <Text
          style={[
            {
              color: colors.textPrimary,
              fontSize: FontSizes.medium,
              fontFamily: "OpenSansBold",
            },
          ]}
        >
          {`${props.userName}`}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: FontSizes.small,
              marginBottom: 5,
            }}
          >
            {`Phone: `}
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: FontSizes.small,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            {`${props.phone}`}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: FontSizes.small,
              marginBottom: 5,
            }}
          >
            {`Email: `}
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: FontSizes.small,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            {`${props.email}`}
          </Text>
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
  userInfoContainer: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    width: "90%",
    elevation: 10,
  },
  userNameAndPFP: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userImage: { width: 50, height: 50 },
});

export default ProfileHeader;
