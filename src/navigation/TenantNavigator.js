import TenantAlerts from "../screens/tenant_screens/TenantAlerts";
import TenantAnalytics from "../screens/tenant_screens/TenantAnalytics";
import TenantProfile from "../screens/tenant_screens/TenantProfile";
import TenantRentals from "../screens/tenant_screens/TenantRentals";
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
