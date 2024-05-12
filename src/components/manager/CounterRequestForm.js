import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import CounterRequestFormCard from "../common/cards/CounterRequestFormCard";
import CounterRequestFormFooter from "../common/footers/CounterRequestFormFooter";
import CounterRequestFormHeader from "../common/headers/CounterRequestFormHeader";

const CounterRequestForm = ({ navigation, route }) => {
  const { managerHireRequestID, ownerID } = route.params;
  const colors = useColors();
  const [loading, setLoading] = useState(true);

  //header data
  const [ownerName, setOwnerName] = useState("");
  const [address, setAddress] = useState("");
  const [oneTimePay, setOneTimePay] = useState("");
  const [purpose, setPurpose] = useState("");
  const [salaryFixed, setSalaryFixed] = useState("");
  const [salaryPercentage, setSalaryPercentage] = useState("");
  const [whoBringsTenant, setWhoBringsTenant] = useState("");
  const [rent, setRent] = useState("");
  const [specialCondition, setSpecialCondition] = useState("");
  const [needHelpWithLegalWork, setNeedHelpWithLegalWork] = useState(null);

  //body header data
  const [likes, setLikes] = useState(1);
  const [dislikes, setDislikes] = useState(1);
  const [ratings, setRatings] = useState(2);
  const [averageRating, setAverageRating] = useState(1);

  //body data
  const [ratingsData, setRatingsData] = useState([]);

  //footer data

  //header and footer data (both use these variables)
  const [salaryPaymentType, setSalaryPaymentType] = useState("");

  useEffect(() => {
    const data = {
      managerHireRequestID: managerHireRequestID,
    };

    axios
      .post(`${BASE_URL}/api/manager/detailed-hire-request`, data)
      .then((response) => {
        setOwnerName(response.data.ownerName);
        setAddress(response.data.propertyAddress);
        setOneTimePay(response.data.onetimepay);
        setSalaryPaymentType(response.data.salarypaymenttype);
        setSalaryFixed(response.data.salaryfixed);
        setSalaryPercentage(response.data.salarypercentage);
        setWhoBringsTenant(response.data.whobringstenant);
        setRent(response.data.rent);
        setSpecialCondition(response.data.specialcondition);
        setNeedHelpWithLegalWork(response.data.needhelpwithlegalwork);
        setPurpose(response.data.purpose);
      })
      .catch((error) => {
        Alert.alert("Error", "Something went wrong");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    axios
      .post(`${BASE_URL}/api/common/fetch-my-ratings`, {
        userID: ownerID,
        userType: "O",
      })
      .then((response) => {
        setRatingsData(response.data.success);
      })
      .catch((error) => {
        Alert.alert("Error", "Something went wrong");
        console.log(JSON.stringify(error.response, null, 2));
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
  }, []);

  const CounterRequestBodyHeader = (props) => {
    if (loading) {
      return <ActivityIndicator size="large" color={colors.iconWhite} />;
    }
    return (
      <>
        <Text
          style={[
            styles.ratingsTitle,
            styles.fontBold,
            { color: colors.textWhite, marginBottom: "2%" },
          ]}
        >
          Ratings
        </Text>
        <View style={styles.likesAndStarsRow}>
          <Text
            style={[
              {
                color: colors.textWhite,
                fontSize: FontSizes.small,
              },
            ]}
          >
            {ratingsData.filter((item) => item.ratingopinon === "L").length}
          </Text>
          <Image
            style={[styles.thumbsIcon]}
            source={icons.like}
            tintColor={colors.iconGreen}
          />

          <Text style={{ color: colors.textWhite, fontSize: FontSizes.small }}>
            {ratingsData.filter((item) => item.ratingopinon === "D").length}
          </Text>

          <Image
            style={styles.thumbsIcon}
            source={icons.dislike}
            tintColor={colors.iconRed}
          />
          <Text style={{ color: colors.textWhite, fontSize: FontSizes.small }}>
            ({ratingsData.length})
          </Text>
          <View style={styles.starIconContainer}>
            <Image
              style={styles.starIcon}
              source={
                ratingsData
                  .filter((item) => item.ratingstars)
                  .reduce((acc, item) => acc + Number(item.ratingstars), 0) /
                  ratingsData.length >=
                1
                  ? icons.star
                  : icons.starHollow
              }
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={
                ratingsData
                  .filter((item) => item.ratingstars)
                  .reduce((acc, item) => acc + Number(item.ratingstars), 0) /
                  ratingsData.length >=
                2
                  ? icons.star
                  : icons.starHollow
              }
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={
                ratingsData
                  .filter((item) => item.ratingstars)
                  .reduce((acc, item) => acc + Number(item.ratingstars), 0) /
                  ratingsData.length >=
                3
                  ? icons.star
                  : icons.starHollow
              }
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={
                ratingsData
                  .filter((item) => item.ratingstars)
                  .reduce((acc, item) => acc + Number(item.ratingstars), 0) /
                  ratingsData.length >=
                4
                  ? icons.star
                  : icons.starHollow
              }
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={
                ratingsData
                  .filter((item) => item.ratingstars)
                  .reduce((acc, item) => acc + Number(item.ratingstars), 0) /
                  ratingsData.length >=
                5
                  ? icons.star
                  : icons.starHollow
              }
              tintColor={colors.iconYellow}
            />
          </View>
        </View>
      </>
    );
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <CounterRequestFormHeader
        loading={loading}
        ownerName={ownerName}
        address={address}
        purpose={purpose}
        oneTimePay={oneTimePay}
        salaryPaymentType={salaryPaymentType}
        salaryFixed={salaryFixed}
        salaryPercentage={salaryPercentage}
        whoBringsTenant={whoBringsTenant}
        rent={rent}
        specialCondition={specialCondition}
        needHelpWithLegalWork={needHelpWithLegalWork}
      />
      <ScrollView
        style={{ paddingVertical: "3%" }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "90%" }}>
          <CounterRequestBodyHeader
            likes={likes}
            dislikes={dislikes}
            ratings={ratings}
            averageRating={averageRating}
          />
          {!loading && ratingsData.length === 0 && (
            <Text
              style={[
                styles.ratingsTitle,
                styles.fontRegular,
                {
                  color: colors.textWhite,
                  marginTop: "5%",
                  alignSelf: "center",
                },
              ]}
            >
              No Ratings To Show
            </Text>
          )}
          {ratingsData.map((rating) => (
            <CounterRequestFormCard
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
          ))}
          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
      <CounterRequestFormFooter
        managerHireRequestID={managerHireRequestID}
        loading={loading}
        navigation={navigation}
        salaryPaymentType={salaryPaymentType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  container: {
    flex: 1,
  },
  ratingsTitle: {
    fontSize: FontSizes.medium,
  },
  thumbsIcon: {
    height: 16,
    width: 16,
    justifyContent: "center",
  },
  likesAndStarsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
  },
  starIcon: {
    height: 20,
    width: 20,
  },
  starIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CounterRequestForm;
