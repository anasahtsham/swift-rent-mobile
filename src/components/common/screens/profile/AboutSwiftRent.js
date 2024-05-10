import React, { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { useColors } from "../../../../helpers/SetColors";
import ButtonGrey from "../../buttons/ButtonGrey";

const AboutSwiftRent = ({ navigation }) => {
  const colors = useColors();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View style={styles.headerTextContainer}>
        <Text
          style={[
            styles.text,
            { fontSize: FontSizes.large, color: colors.textPrimary },
          ]}
        >
          About SwiftRent
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
            textAlign: "center",
            marginTop: 20,
            width: 300,
            flexWrap: "wrap",
          }}
        >
          Swift Rent is an application aimed at streamlining rent collection
          processes. It lets property owners, property managers, and tenants to
          have an application strictly related to their rental business, making
          it easy for the owners, managers, and tenants to view all their rental
          related developments at a glance.
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: FontSizes.large,
            color: colors.textPrimary,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          Development Team
        </Text>

        <Text
          style={{
            fontSize: FontSizes.medium,
            color: colors.textPrimary,
          }}
        >
          Anas Ahtsham
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
          }}
        >
          mh.anasahtsham@gmail.com
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
            marginBottom: 20,
          }}
        >
          +92 319 0504935
        </Text>

        <Text
          style={{
            fontSize: FontSizes.medium,
            color: colors.textPrimary,
          }}
        >
          Ibrahim Ahtsham
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
          }}
        >
          ibrahimahtsham2002@gmail.com
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
            marginBottom: 20,
          }}
        >
          +92 317 0572192
        </Text>

        <Text
          style={{
            fontSize: FontSizes.medium,
            color: colors.textPrimary,
          }}
        >
          Abdullah Shahid
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
          }}
        >
          abdullahshahid.isb@gmail.com
        </Text>
        <Text
          style={{
            fontSize: FontSizes.small,
            color: colors.textPrimary,
          }}
        >
          +92 312 5094820
        </Text>
      </View>

      <ButtonGrey
        fontSize={FontSizes.small}
        width="30%"
        buttonText="Go Back"
        destinationScreen="Profile"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerTextContainer: {
    alignItems: "center",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
});

export default AboutSwiftRent;
