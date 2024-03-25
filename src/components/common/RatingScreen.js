import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../../helpers/ImageImports";

import * as FontSizes from "../../assets/fonts/FontSizes";

import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { ratingScreenSchema } from "../../helpers/validation/ValidationSchemas";
import RatingStars from "./RatingStars";
import ButtonGrey from "./buttons/ButtonGrey";

const RatingScreen = ({ navigation, route }) => {
  const colors = useColors();
  const {
    userNameValue = "Default User Name",
    userTypeValue = "Default User Type",
    addressValue = "Default Address",
    ratingValue = 0,
    isLikedValue = false,
    remarksValue = "",
  } = route.params || {};

  useEffect(() => {
    if (ratingValue) {
      setRating(ratingValue);
    }
    if (isLikedValue) {
      setIsLiked(isLikedValue);
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
  }, []);

  //state to store the rating
  const [rating, setRating] = useState(0);

  //state to store the choice of thumbs up or down
  const [isLiked, setIsLiked] = useState(null);

  return (
    <Formik
      initialValues={{ remark: !!remarksValue ? remarksValue : "" }}
      validationSchema={ratingScreenSchema}
      onSubmit={() => {
        navigation.goBack();
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
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
            <View style={[styles.cardHeader, {}]}>
              <View style={{ justifyContent: "space-between", width: "60%" }}>
                <Text
                  style={[
                    styles.fontBold,
                    { color: colors.textPrimary, fontSize: FontSizes.medium },
                  ]}
                >
                  {!!userNameValue ? userNameValue : "User Name"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  height: "90%",
                }}
              >
                <Text
                  style={[
                    styles.fontBold,
                    {
                      color: colors.textGreen,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  {!!userTypeValue ? userTypeValue : "User Type"}
                </Text>
              </View>
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
              Describe Your Expirience
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
            fontSize={FontSizes.medium}
            width={buttonWidthMedium}
            buttonText="Submit"
            isSubmitButton={true}
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
