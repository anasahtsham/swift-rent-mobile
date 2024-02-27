import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [loaded] = useFonts({
    OpenSansBold: require("./fontFiles/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./fontFiles/OpenSans-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return loaded;
};
