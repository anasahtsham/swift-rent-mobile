import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL, BUTTON_WIDTH_MEDIUM } from "../../../../constants";
import { icons } from "../../../../helpers/ImageImports";
import { useColors } from "../../../../helpers/SetColors";
import { formatUserTypeToFullForm } from "../../../../helpers/utils";
import { ratingScreenSchema } from "../../../../helpers/validation/RatingScreenValidation";
import ButtonGrey from "../../buttons/ButtonGrey";
import RatingStars from "./RatingStars";

const RatingScreen = ({ route }) => {
  const colors = useColors();
  const navigation = useNavigation();
  const {
    ratingID = 0,
    userNameValue = "User Name",
    userTypeValue = "User Type",
    addressValue = "Address",
    ratingValue = 1,
    isLikedValue = false,
    remarksValue = "",
    editRating = false,
  } = route.params || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setRating(ratingValue);

    setIsLiked(isLikedValue);

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

  //state to store the rating
  const [rating, setRating] = useState(1);

  //state to store the choice of thumbs up or down
  const [isLiked, setIsLiked] = useState(null);

  return (
    <Formik
      initialValues={{ remark: !!remarksValue ? remarksValue : "" }}
      validationSchema={ratingScreenSchema}
      onSubmit={(values) => {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to submit the rating?",
          [
            {
              text: "Cancel",
              onPress: () => setLoading(false),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setLoading(true);

                const data = {
                  ratingID: ratingID,
                  ratingStars: rating,
                  ratingOpinon: isLiked ? "L" : "D",
                  ratingComment: values.remark,
                };

                if (editRating) {
                  axios
                    .post(`${BASE_URL}/api/common/edit-rating`, data)
                    .then(() => {
                      Alert.alert("Success", "Rating edited successfully");
                      navigation.goBack();
                    })
                    .catch((error) => {
                      Alert.alert("Error", "Something went wrong");
                      console.log(JSON.stringify(error.response, null, 2));
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                } else {
                  axios
                    .post(`${BASE_URL}/api/common/submit-rating`, data)
                    .then(() => {
                      Alert.alert("Success", "Rating submitted successfully");
                      navigation.goBack();
                    })
                    .catch((error) => {
                      Alert.alert("Error", "Something went wrong");
                      console.log(JSON.stringify(error.response, null, 2));
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }
              },
            },
          ],
          { cancelable: false }
        );
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          style={{
            flex: 1,
            backgroundColor: colors.bodyBackground,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={[
              styles.ratingCard,
              { backgroundColor: colors.headerAndFooterBackground },
            ]}
          >
            <View style={[styles.cardHeader, { flexDirection: "row" }]}>
              <Text
                style={[
                  styles.fontBold,
                  { color: colors.textPrimary, fontSize: FontSizes.medium },
                ]}
              >
                {!!userNameValue ? userNameValue : "User Name"}
              </Text>

              <Text
                style={[
                  styles.fontBold,
                  { color: colors.textGreen, fontSize: FontSizes.small },
                ]}
              >
                {!!userTypeValue
                  ? formatUserTypeToFullForm(userTypeValue)
                  : "User Type"}
              </Text>
            </View>

            <Text
              style={[
                styles.addressLineText,
                styles.fontRegular,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              {!!addressValue ? addressValue : "Address"}
            </Text>

            <Text
              style={[
                styles.descriptionTitle,
                styles.fontRegular,

                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              Describe Your Experience
            </Text>

            <TextInput
              placeholder="Remarks"
              placeholderTextColor={colors.textGrey}
              multiline={true}
              onChangeText={handleChange("remark")}
              onBlur={handleBlur("remark")}
              value={values.remark}
              style={[
                styles.descriptionBox,
                {
                  color: colors.textPrimary,
                  borderColor: !errors.remark
                    ? colors.borderPrimary
                    : colors.borderRed,
                },
              ]}
            />
            <View
              style={{
                height: !errors.remark ? 18 : 0,
              }}
            />
            {errors.remark && (
              <Text style={{ color: colors.textRed, marginLeft: 10 }}>
                {errors.remark}
              </Text>
            )}
            <View style={{ justifyContent: "space-between", marginTop: 10 }}>
              <RatingStars rating={rating} setRating={setRating} />

              <View style={styles.thumbsContainer}>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => setIsLiked(true)}
                >
                  <Image
                    style={[styles.thumbsIcon, {}]}
                    source={icons.like}
                    tintColor={
                      isLiked === true ? colors.iconGreen : colors.iconGrey
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => setIsLiked(false)}
                >
                  <Image
                    style={styles.thumbsIcon}
                    source={icons.dislike}
                    tintColor={
                      isLiked === false ? colors.iconRed : colors.iconGrey
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <ButtonGrey
            loading={loading}
            fontSize={FontSizes.medium}
            width={BUTTON_WIDTH_MEDIUM}
            buttonText="Submit"
            hasOwnOnPress={true}
            onPress={handleSubmit}
          />
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  ratingCard: {
    borderRadius: 20,
    width: "90%",
    padding: 15,
    marginBottom: 50,
  },
  personTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addressLineText: {
    fontSize: FontSizes.extraSmall,
  },
  userIcon: {
    width: 55,
    height: 55,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionTitle: {
    fontSize: FontSizes.small,
    marginVertical: 10,
  },
  descriptionBox: {
    height: 100,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    verticalAlign: "top",
    fontSize: FontSizes.small,
  },
  thumbsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  thumbsIcon: {
    width: 25,
    height: 25,
  },
});
export default RatingScreen;
