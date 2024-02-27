import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [loaded] = useFonts({
    OpenSansBold: require("./OpenSans-Bold.ttf"),
    OpenSansRegular: require("./OpenSans-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return loaded;
};
