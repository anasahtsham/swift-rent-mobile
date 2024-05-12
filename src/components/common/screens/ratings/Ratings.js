import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import {
  borderBlue,
  borderGreen,
  borderRed,
} from "../../../../assets/themes/DarkColorScheme";
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import RatingsButton from "../../buttons/RatingsButton";
import { useUserID } from "./../../../../helpers/SetUserID";
import { useUserType } from "./../../../../helpers/SetUserType";

const Ratings = ({ navigation }) => {
  const colors = useColors();
  const userID = useUserID();
  const userType = useUserType();
  const [loading, setLoading] = useState(true);

  const [currentScreen, setCurrentScreen] = useState("My Ratings");

  const [dataToBeRendered, setDataToBeRendered] = useState([]);

  useFocusEffect(
    useCallback(() => {
      console.log("Ratings Screen Focused");
      if (userType && userID) {
        setLoading(true);
        let url = "";

        if (currentScreen === "My Ratings") {
          url = `${BASE_URL}/api/common/fetch-my-ratings`;
        } else if (currentScreen === "Given Ratings") {
          url = `${BASE_URL}/api/common/fetch-given-ratings`;
        } else if (currentScreen === "Pending Ratings") {
          url = `${BASE_URL}/api/common/fetch-pending-ratings`;
        }

        const data = {
          userID: userID,
          userType: userType,
        };

        axios
          .post(url, data)
          .then((response) => {
            setDataToBeRendered(response.data.success);
          })
          .catch((error) => {
            Alert.alert("Error", "Something went wrong");
            console.log(JSON.stringify(error.response, null, 2));
          })
          .finally(() => {
            setLoading(false);
          });
      }

      const backAction = () => {
        navigation.goBack();
        return true; // This will prevent the app from closing
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return () => backHandler.remove();
    }, [currentScreen, userID, userType]) // dependencies
  );

  const renderItem = ({ item: rating }) => (
    <RatingsButton
      colors={colors}
      key={rating.id}
      ratingID={rating.id}
      currentScreen={currentScreen}
      userName={rating.username}
      userType={rating.usertype}
      address={rating.address}
      rating={rating.ratingstars}
      ratingOpinon={rating.ratingopinon}
      remarks={rating.ratingcomment}
      ratedOn={rating.ratedon || rating.ratingstartdate}
      contractDays={rating.contractdays}
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

      {loading && <ActivityIndicator size="large" color={colors.iconWhite} />}

      {!loading && dataToBeRendered.length === 0 && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.fontRegular,
              {
                fontSize: FontSizes.medium,
                color: colors.textWhite,
              },
            ]}
          >
            No ratings to show
          </Text>
        </View>
      )}

      {!loading && (
        <FlatList
          data={dataToBeRendered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.buttons}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      )}

      <View style={{ height: 100 }} />

      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "13%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default Ratings;
