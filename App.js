import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";
import SplashScreen from "./src/splash/SplashScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const loaded = useCustomFonts();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash Screen"
      >
        <Stack.Screen name="Splash Screen" component={SplashScreen} />
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
