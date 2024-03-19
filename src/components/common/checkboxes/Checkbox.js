import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";

const Checkbox = (props) => {
  const colors = useColors();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 7,
        borderColor: colors.borderPrimary,
        borderWidth: 1,
        height: 45,
        paddingHorizontal: 15,
      }}
    >
      <Text style={{ color: colors.textPrimary, fontSize: FontSizes.small }}>
        {props.label}
      </Text>
      <TouchableOpacity
        activeOpacity={opacityValueForButton}
        onPress={() => props.setIsSelected(!props.isSelected)}
      >
        <Image
          tintColor={props.isSelected ? colors.iconGreen : colors.iconGrey}
          style={{ width: 30, height: 30 }}
          source={icons.checkIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Checkbox;
