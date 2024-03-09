import TenantAlerts from "../../../screens/tenantScreens/TenantAlerts";
import TenantAnalytics from "../../../screens/tenantScreens/TenantAnalytics";
import TenantProfile from "../../../screens/tenantScreens/TenantProfile";
import TenantRentals from "../../../screens/tenantScreens/TenantRentals";
import TabNavigator from "./TabNavigator";
const TenantNavigator = () => {
  return (
    <TabNavigator
      screen1="Analytics"
      component1={TenantAnalytics}
      screen2="Rentals"
      component2={TenantRentals}
      screen3="Alers"
      component3={TenantAlerts}
      screen4="Profile"
      component4={TenantProfile}
    />
  );
};

export default TenantNavigator;
