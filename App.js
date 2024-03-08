import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";
import { setLanguageToEnglish } from "./src/helpers/SetLanguages";

import SplashScreen from "./src/splash/SplashScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/authenticationScreens/LoginScreen";
import WhoAreYou from "./src/screens/authenticationScreens/WhoAreYou";
import GetToKnow from "./src/screens/authenticationScreens/GetToKnow";
import ContactInfo from "./src/screens/authenticationScreens/ContactInfo";
import LoginAs from "./src/screens/authenticationScreens/LoginAs";
import ForgotPassword from "./src/screens/authenticationScreens/ForgotPassword";
import RegisterAs from "./src/screens/authenticationScreens/RegisterAs";
import SetUpPassword from "./src/screens/authenticationScreens/SetUpPassword";
import AllSetUpSplash from "./src/splash/AllSetUpSplash";
import OwnerTabNavigator from "./src/components/owner/OwnerTabNavigator";
import SettingScreen from "./src/components/common/SettingScreen";
import ChangePassword from "./src/components/common/ChangePassword";
import FAQScreen from "./src/components/common/FAQScreen";
import OwnerAnalytics from "./src/screens/ownerScreens/OwnerAnalytics";

const Stack = createStackNavigator();

export default function App() {
  setLanguageToEnglish();
  if (useCustomFonts()) {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Owner Analytics"
        >
          {/* Authentication Screens */}
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
          <Stack.Screen name="Login Screen" component={LoginScreen} />
          <Stack.Screen name="Who Are You" component={WhoAreYou} />
          <Stack.Screen name="Get To Know" component={GetToKnow} />
          <Stack.Screen name="Contact Info" component={ContactInfo} />
          <Stack.Screen name="Login As" component={LoginAs} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          <Stack.Screen name="Register As" component={RegisterAs} />
          <Stack.Screen name="Set Up Password" component={SetUpPassword} />
          <Stack.Screen name="All Set Up" component={AllSetUpSplash} />
          <Stack.Screen name="Setting Screen" component={SettingScreen} />
          <Stack.Screen name="Change Password" component={ChangePassword} />
          <Stack.Screen name="FAQ Screen" component={FAQScreen} />
          {/* Owner Tab Navigator */}
          <Stack.Screen
            name="Owner Tab Navigator"
            component={OwnerTabNavigator}
          />
          {/* Owner Screens*/}
          <Stack.Screen name="Owner Analytics" component={OwnerAnalytics} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
