import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";

const Checkbox = (props) => {
  const colors = useColors();
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      onPress={() => props.setIsSelected(!props.isSelected)}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 7,
          borderColor: colors.borderPrimary,
          borderWidth: 1,
          height: 45,
          width: "100%",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            tintColor={props.isSelected ? colors.iconGreen : colors.iconGrey}
            source={props.checkboxIcon}
            style={{ height: 30, width: 30, marginRight: 10 }}
          />
          <Text
            style={{
              color: props.isSelected ? colors.textPrimary : colors.textGrey,
              fontSize: FontSizes.small,
            }}
          >
            {props.label}
          </Text>
        </View>
        <Image
          tintColor={props.isSelected ? colors.iconGreen : colors.iconGrey}
          style={{ width: 30, height: 30 }}
          source={icons.checkIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
