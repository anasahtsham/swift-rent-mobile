import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";
import { setLanguageToEnglish } from "./src/helpers/SetLanguages";

import ChangePassword from "./src/components/common/ChangePassword";
import FAQScreen from "./src/components/common/FAQScreen";
import Rents from "./src/components/common/Rents";
import SettingScreen from "./src/components/common/SettingScreen";
import ManagerNavigator from "./src/components/common/footer/ManagerNavigator";
import OwnerNavigator from "./src/components/common/footer/OwnerNavigator";
import TenantNavigator from "./src/components/common/footer/TenantNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ContactInfo from "./src/screens/authenticationScreens/ContactInfo";
import ForgotPassword from "./src/screens/authenticationScreens/ForgotPassword";
import GetToKnow from "./src/screens/authenticationScreens/GetToKnow";
import LoginAs from "./src/screens/authenticationScreens/LoginAs";
import LoginScreen from "./src/screens/authenticationScreens/LoginScreen";
import RegisterAs from "./src/screens/authenticationScreens/RegisterAs";
import SetUpPassword from "./src/screens/authenticationScreens/SetUpPassword";
import WhoAreYou from "./src/screens/authenticationScreens/WhoAreYou";
import OwnerAnalyticalReport from "./src/screens/ownerScreens/OwnerAnalyticalReport";
import OwnerHiring from "./src/screens/ownerScreens/OwnerHiring";
import AllSetUpSplash from "./src/splash/AllSetUpSplash";
import SplashScreen from "./src/splash/SplashScreen";
import RatingScreen from "./src/screens/ownerScreens/RatingScreen";

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
          initialRouteName="Rating Screen"
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
          {/* Tab Navigator */}
          <Stack.Screen name="Owner Navigator" component={OwnerNavigator} />
          <Stack.Screen name="Tenant Navigator" component={TenantNavigator} />
          <Stack.Screen name="Manager Navigator" component={ManagerNavigator} />
          {/* Owner Screens*/}
          <Stack.Screen name="Setting Screen" component={SettingScreen} />
          <Stack.Screen name="Change Password" component={ChangePassword} />
          <Stack.Screen name="FAQ Screen" component={FAQScreen} />
          <Stack.Screen name="Rents" component={Rents} />
          <Stack.Screen name="Owner Hiring" component={OwnerHiring} />
          <Stack.Screen name="Rating Screen" component={RatingScreen} />
          <Stack.Screen
            name="Owner Analytical Report"
            component={OwnerAnalyticalReport}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
