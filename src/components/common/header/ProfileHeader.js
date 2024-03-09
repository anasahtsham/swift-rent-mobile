import { Image, StyleSheet, Text, View } from "react-native";

import * as FontSizes from "../../../assets/fonts/FontSizes";

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
            source={require("../../../assets/icons/userIcon.png")}
            style={styles.userImage}
          />
          <Text
            style={[
              styles.userName,
              { color: colors.textPrimary, fontSize: FontSizes.medium },
            ]}
          >
            Ibrahim Ahtsham
          </Text>
        </View>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.small,
          }}
        >
          +92 317 0572192
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.small,
          }}
        >
          ibrahimahtsham2002@gmail.com
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
