import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import ViewManagerRatingsButton from "../common/buttons/ViewManagerRatingsButton";

const ViewManagerRatings = ({ navigation, route }) => {
  const { managerID, managerName } = route.params;
  const colors = useColors();
  const [loading, setLoading] = useState(true);

  const [dataToBeRendered, setDataToBeRendered] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .post(`${BASE_URL}/api/common/fetch-my-ratings`, {
        userID: managerID,
        userType: "M",
      })
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

    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [managerID]);

  const renderItem = ({ item: rating }) => (
    <ViewManagerRatingsButton
      colors={colors}
      key={rating.id}
      ratingID={rating.id}
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
          {managerName}'s Ratings
        </Text>
      </View>

      {loading && <ActivityIndicator size="large" color={colors.textPrimary} />}

      {!loading && (
        <FlatList
          data={dataToBeRendered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.buttons}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      )}
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

export default ViewManagerRatings;
