import { useEffect, useState } from "react";
import {
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import {
  borderBlue,
  borderGreen,
  borderRed,
} from "../../assets/themes/DarkColorScheme";
import { opacityValueForButton } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import {
  givenRatings,
  myRatings,
  pendingRatings,
} from "../../helpers/data/RatingsData";
import RatingsButton from "./buttons/RatingsButton";

const Ratings = ({ navigation }) => {
  const colors = useColors();

  const [currentScreen, setCurrentScreen] = useState("My Ratings");

  let dataToBeRendered = [];

  if (currentScreen === "My Ratings") {
    dataToBeRendered = myRatings;
  } else if (currentScreen === "Given Ratings") {
    dataToBeRendered = givenRatings;
  } else if (currentScreen === "Pending Ratings") {
    dataToBeRendered = pendingRatings;
  }

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

  const renderItem = ({ item: rating }) => (
    <RatingsButton
      colors={colors}
      key={rating.id}
      userName={rating.userName}
      userType={rating.userType}
      address={rating.address}
      rating={rating.rating}
      isLiked={rating.isLiked}
      remarks={rating.remarks}
    />
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <View
        style={{ paddingTop: 20, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        <Text
          style={[
            styles.fontBold,
            {
              fontSize: FontSizes.medium,
              color: colors.textWhite,
            },
          ]}
        >
          {currentScreen}
        </Text>
      </View>
      <FlatList
        data={dataToBeRendered}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.buttons}
        ListFooterComponent={<View style={{ height: 10 }} />}
      />
      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: borderGreen }]}
          onPress={() => {
            setCurrentScreen("My Ratings");
          }}
        >
          <Text
            style={[
              currentScreen === "My Ratings"
                ? styles.fontBold
                : styles.fontRegular,
              {
                color: colors.textPrimary,
                fontSize: FontSizes.small,
                flexWrap: "wrap",
                textAlign: "center",
              },
            ]}
          >
            My Ratings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: borderBlue }]}
          onPress={() => {
            setCurrentScreen("Given Ratings");
          }}
        >
          <Text
            style={[
              currentScreen === "Given Ratings"
                ? styles.fontBold
                : styles.fontRegular,
              {
                color: colors.textPrimary,
                fontSize: FontSizes.small,
                flexWrap: "wrap",
                textAlign: "center",
              },
            ]}
          >
            Given Ratings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: borderRed }]}
          onPress={() => {
            setCurrentScreen("Pending Ratings");
          }}
        >
          <Text
            style={[
              currentScreen === "Pending Ratings"
                ? styles.fontBold
                : styles.fontRegular,
              {
                color: colors.textPrimary,
                fontSize: FontSizes.small,
                flexWrap: "wrap",
                textAlign: "center",
              },
            ]}
          >
            Pending Ratings
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  container: {
    flex: 1,
  },
  buttons: {
    alignSelf: "center",
    width: "90%",
  },
  button: {
    justifyContent: "center",
    height: "80%",
    width: "30%",
    borderRadius: 20,
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  footer: {
    height: "13%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default Ratings;
