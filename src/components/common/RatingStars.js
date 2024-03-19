import React, { useEffect } from "react";
import {
  BackHandler,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../../helpers/ImageImports";

import { useColors } from "../../helpers/SetColors";

const RatingStars = ({
  rating,
  setRating,
  starHeight = 30,
  starWidth = 30,
}) => {
  const colors = useColors();

  //update language on load
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
    <View style={styles.starsContainer}>
      {[...Array(5)].map((_, i) => (
        <TouchableOpacity
          style={{ padding: 5 }}
          key={i}
          onPress={() => setRating(i + 1)}
        >
          <Image
            style={{ width: starWidth, height: starHeight }}
            source={icons.star}
            tintColor={i < rating ? colors.iconYellow : colors.iconGrey}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingStars;

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
