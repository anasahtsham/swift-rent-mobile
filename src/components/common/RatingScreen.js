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
import { getColors } from "../../helpers/SetColors";
import { ratingScreenSchema } from "../../helpers/validation/ValidationSchemas";
import RatingStars from "./RatingStars";
import ButtonGrey from "./buttons/ButtonGrey";

const RatingScreen = ({ navigation }) => {
  const colors = getColors();

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

  //state to store the rating
  const [rating, setRating] = useState(0);

  //state to store the choice of thumbs up or down
  const [isLiked, setIsLiked] = useState(null);

  return (
    <Formik
      initialValues={{ description: "" }}
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
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.userIcon}
                  source={icons.userIcon}
                  tintColor={colors.iconPrimary}
                />
              </View>
              <View style={{ justifyContent: "space-between" }}>
                <Text
                  style={[
                    styles.fontBold,
                    { color: colors.textPrimary, fontSize: FontSizes.medium },
                  ]}
                >
                  Gulzaar
                </Text>
                <Text
                  style={[
                    styles.addressLineText,
                    styles.fontRegular,
                    { color: colors.textPrimary, fontSize: FontSizes.small },
                  ]}
                >
                  House 540, Street 321,
                </Text>
                <Text
                  style={[
                    styles.addressLineText,
                    styles.fontRegular,
                    {
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    },
                  ]}
                >
                  G-11/1, Islamabad
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "right",
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
                  Manager
                </Text>
              </View>
            </View>
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
              multiline={true}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              style={[
                styles.descriptionBox,
                {
                  color: colors.textPrimary,
                  borderColor: !errors.description
                    ? colors.borderPrimary
                    : colors.borderRed,
                },
              ]}
            />
            <View
              style={{
                height: !errors.description ? 18 : 0,
              }}
            />
            {errors.description && (
              <Text style={{ color: colors.textRed, marginLeft: 10 }}>
                {errors.description}
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
