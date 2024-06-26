import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";
import AnalyticalReport from "./src/components/common/screens/analytics/AnalyticalReport";
import MonthReport from "./src/components/common/screens/analytics/MonthReport";
import Rents from "./src/components/common/screens/analytics/Rents";
import Complains from "./src/components/common/screens/maintenance_and_complains/Complains";
import MaintenanceList from "./src/components/common/screens/maintenance_and_complains/MaintenanceList";
import ProblemForm from "./src/components/common/screens/maintenance_and_complains/ProblemForm";
import ViewComplain from "./src/components/common/screens/maintenance_and_complains/ViewComplain";
import AboutSwiftRent from "./src/components/common/screens/profile/AboutSwiftRent";
import ChangePassword from "./src/components/common/screens/profile/ChangePassword";
import CustomerSupport from "./src/components/common/screens/profile/CustomerSupport";
import FAQScreen from "./src/components/common/screens/profile/FAQScreen";
import SettingScreen from "./src/components/common/screens/profile/SettingScreen";
import PropertyMenu from "./src/components/common/screens/properties/PropertyMenu";
import RentHistory from "./src/components/common/screens/properties/RentHistory";
import VerifiyDocumentation from "./src/components/common/screens/properties/VerifyDocumentation";
import CollectRent from "./src/components/common/screens/properties/rent_collection/CollectRent";
import SendOnlineRentVerificationRequest from "./src/components/common/screens/properties/rent_collection/SendOnlineRentVerificationRequest";
import VerifyOnlinePayment from "./src/components/common/screens/properties/rent_collection/VerifyOnlinePayment";
import RatingScreen from "./src/components/common/screens/ratings/RatingScreen";
import Ratings from "./src/components/common/screens/ratings/Ratings";
import CounterRequestForm from "./src/components/manager/CounterRequestForm";
import ExploreOffers from "./src/components/manager/ExploreOffers";
import AddMaintenanceReport from "./src/components/owner/AddMaintenanceReport";
import AddProperty from "./src/components/owner/AddProperty";
import AddPropertyInfo from "./src/components/owner/AddPropertyInfo";
import HireManagerRequestForm from "./src/components/owner/HireManagerRequestForm";
import ManagerOffers from "./src/components/owner/ManagerOffers";
import PropertyMaintenances from "./src/components/owner/PropertyMaintenances";
import RegisterTenant from "./src/components/owner/RegisterTenant";
import TerminateLease from "./src/components/owner/TerminateLease";
import ViewManagerRatings from "./src/components/owner/ViewManagerRatings";
import RentalRequestAgreementForm from "./src/components/tenant/RentalRequestAgreementForm";
import RentalRequests from "./src/components/tenant/RentalRequests";
import { setLanguageToEnglish } from "./src/helpers/SetLanguages";
import ManagerNavigator from "./src/navigation/ManagerNavigator";
import OwnerNavigator from "./src/navigation/OwnerNavigator";
import TenantNavigator from "./src/navigation/TenantNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ContactInfo from "./src/screens/authentication/ContactInfo";
import ForgotPassword from "./src/screens/authentication/ForgotPassword";
import GetToKnow from "./src/screens/authentication/GetToKnow";
import LoginAs from "./src/screens/authentication/LoginAs";
import LoginScreen from "./src/screens/authentication/LoginScreen";
import RegisterAs from "./src/screens/authentication/RegisterAs";
import SetUpPassword from "./src/screens/authentication/SetUpPassword";
import WhoAreYou from "./src/screens/authentication/WhoAreYou";
import AllSetUpSplash from "./src/splash/AllSetUpSplash";
import SplashScreen from "./src/splash/SplashScreen";
import TestScreen from "./src/tests/TestScreen";

const Stack = createStackNavigator();

export default function App() {
  setLanguageToEnglish();
  if (useCustomFonts()) {
    return (
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#000" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash Screen"
        >
          {/* Authentication Screens */}
          <Stack.Screen name="Test Screen" component={TestScreen} />
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

          {/* Tab Navigators */}
          <Stack.Screen name="Owner Navigator" component={OwnerNavigator} />
          <Stack.Screen name="Tenant Navigator" component={TenantNavigator} />
          <Stack.Screen name="Manager Navigator" component={ManagerNavigator} />

          {/* Common Screens */}
          <Stack.Screen name="FAQ Screen" component={FAQScreen} />
          <Stack.Screen name="Change Password" component={ChangePassword} />
          <Stack.Screen name="Setting Screen" component={SettingScreen} />
          <Stack.Screen name="Rating Screen" component={RatingScreen} />
          <Stack.Screen name="Problem Form" component={ProblemForm} />
          <Stack.Screen
            name="Verify Documentation"
            component={VerifiyDocumentation}
          />
          <Stack.Screen name="Ratings" component={Ratings} />
          <Stack.Screen name="Customer Support" component={CustomerSupport} />
          <Stack.Screen name="Rents" component={Rents} />
          <Stack.Screen name="Complains" component={Complains} />
          <Stack.Screen name="View Complain" component={ViewComplain} />
          <Stack.Screen
            name="Send Online Rent Verification Request"
            component={SendOnlineRentVerificationRequest}
          />
          <Stack.Screen name="Collect Rent" component={CollectRent} />
          <Stack.Screen
            name="Verify Online Payment"
            component={VerifyOnlinePayment}
          />
          <Stack.Screen name="About Swift Rent" component={AboutSwiftRent} />

          {/* Owner Screens */}
          <Stack.Screen name="Property Menu" component={PropertyMenu} />
          <Stack.Screen name="Analytical Report" component={AnalyticalReport} />
          <Stack.Screen name="Month Report" component={MonthReport} />
          <Stack.Screen name="Add Property" component={AddProperty} />
          <Stack.Screen name="Maintenance List" component={MaintenanceList} />
          <Stack.Screen name="Register Tenant" component={RegisterTenant} />
          <Stack.Screen name="Rent History" component={RentHistory} />
          <Stack.Screen name="Manager Offers" component={ManagerOffers} />
          <Stack.Screen name="Add Property Info" component={AddPropertyInfo} />
          <Stack.Screen
            name="Hire Manager Request Form"
            component={HireManagerRequestForm}
          />
          <Stack.Screen
            name={"Property Maintenances"}
            component={PropertyMaintenances}
          />
          <Stack.Screen
            name={"Add Maintenance Report"}
            component={AddMaintenanceReport}
          />
          <Stack.Screen name="Terminate Lease" component={TerminateLease} />
          <Stack.Screen
            name="View Manager Ratings"
            component={ViewManagerRatings}
          />

          {/* Manager Screens */}
          <Stack.Screen name="Explore Offers" component={ExploreOffers} />
          <Stack.Screen
            name="Counter Request Form"
            component={CounterRequestForm}
          />

          {/* Tenant Screens */}
          <Stack.Screen name="Rental Requests" component={RentalRequests} />
          <Stack.Screen
            name="Rental Request Agreement Form"
            component={RentalRequestAgreementForm}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
