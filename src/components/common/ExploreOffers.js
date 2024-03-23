import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import OwnerHiringCard from "../../components/common/cards/OwnerHiringCard";
import OwnerHiringFooter from "../../components/common/footers/OwnerHiringFooter";
import OwnerHiringHeader from "../../components/common/headers/OwnerHiringHeader";
import { icons } from "../../helpers/ImageImports";
import { ratingsData } from "../../helpers/data/OwnerHiringData";
import { useColors } from "./../../helpers/SetColors";
import InputField from "./input_fields/InputField";

const ExploreOffers = ({ navigation }) => {
  const colors = useColors();

  const BodyHeader = (props) => {
    return (
      <>
        <Text
          style={[
            styles.managerRatingsTitle,
            styles.fontBold,
            { color: colors.textWhite, marginBottom: "2%" },
          ]}
        >
          Manager Ratings
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
            {props.likes}
          </Text>
          <Image
            style={[styles.thumbsIcon]}
            source={icons.like}
            tintColor={colors.iconGreen}
          />

          <Text style={{ color: colors.textWhite, fontSize: FontSizes.small }}>
            {props.dislikes}
          </Text>

          <Image
            style={styles.thumbsIcon}
            source={icons.dislike}
            tintColor={colors.iconRed}
          />
          <Text style={{ color: colors.textWhite, fontSize: FontSizes.small }}>
            ({props.ratings})
          </Text>
          <View style={styles.starIconContainer}>
            <Image
              style={styles.starIcon}
              source={props.averageRating >= 1 ? icons.star : icons.starHollow}
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={props.averageRating >= 2 ? icons.star : icons.starHollow}
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={props.averageRating >= 3 ? icons.star : icons.starHollow}
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={props.averageRating >= 4 ? icons.star : icons.starHollow}
              tintColor={colors.iconYellow}
            />
            <Image
              style={styles.starIcon}
              source={props.averageRating >= 5 ? icons.star : icons.starHollow}
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
      <View
        style={[styles.header, { backgroundColor: colors.backgroundPrimary }]}
      >
        <InputField
          onSubmitEditing={() => console.log("Submit editing")}
          canBeDisabled={true}
          isLeaseTill={false}
          label="Search by ID"
          errorText="Error occurred"
          value="Initial value"
          onBlur={() => console.log("Blur event")}
          onFocus={() => console.log("Focus event")}
          textFieldIcon={require("../../assets/icons/search-icon.png")}
          fieldType="text"
          handleChange={(event) => console.log("Change event", event)}
          touched={false}
          errors={false}
          borderRadius={20}
          isEditable={true}
          setIsEditable={(value) => console.log("Set editable", value)}
        />
      </View>
      <ScrollView
        style={{ paddingVertical: "3%" }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "90%" }}>
          <BodyHeader likes={4} dislikes={1} ratings={4} averageRating={3.6} />
          {ratingsData.map((owner, index) => (
            <OwnerHiringCard
              key={index}
              name={owner.name}
              userType={owner.userType}
              date={owner.date}
              isLiked={owner.isLiked}
              rating={owner.rating}
              comment={owner.comment}
            />
          ))}
          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
      <OwnerHiringFooter
        navigation={navigation}
        hiringPurpose="Manage Property/ Bring Tenant"
        salaryType="OneTime/ Salary/ Commission"
        salaryPeriod="Weekly/ Monthly/ Yearly"
        myOffer="10,000/ 10%"
        managersOffer="21,000/ 21%"
        managersComment="I will work for a higher price"
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
  header: {
    height: 120,
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  managerRatingsTitle: {
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

export default ExploreOffers;
