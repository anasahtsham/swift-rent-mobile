import TenantAlerts from "../screens/tenant/TenantAlerts";
import TenantAnalytics from "../screens/tenant/TenantAnalytics";
import TenantProfile from "../screens/tenant/TenantProfile";
import TenantRentals from "../screens/tenant/TenantRentals";
import TabNavigator from "./TabNavigator";

// This is the navigation bar that is used when the user type is tenant

const TenantNavigator = () => {
  return (
    <TabNavigator
      screen1="Analytics"
      component1={TenantAnalytics}
      screen2="Rentals"
      component2={TenantRentals}
      screen3="Alerts"
      component3={TenantAlerts}
      screen4="Profile"
      component4={TenantProfile}
    />
  );
};

export default TenantNavigator;
