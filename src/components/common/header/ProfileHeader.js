import { Image, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";

const ProfileHeader = (props) => {
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
          <Image
            tintColor={colors.textPrimary}
            source={icons.userIcon}
            style={styles.userImage}
          />
          <Text
            style={[
              styles.userName,
              { color: colors.textPrimary, fontSize: FontSizes.medium },
            ]}
          >
            {props.userName}
          </Text>
        </View>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.small,
          }}
        >
          {props.phone}
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.small,
          }}
        >
          {props.email}
        </Text>
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
  userInfo: { flexDirection: "row" },
  userImage: { width: 50, height: 50 },
  userName: { marginLeft: 10 },
});

export default ProfileHeader;
