import TabNavigator from "./TabNavigator";
import Alerts from "./../Alerts";
import Analytics from "./../Analytics";
import Profile from "./../Profile";
import Properties from "./../Properties";
const TenantNavigator = () => {
  return (
    <TabNavigator
      screen1="Analytics"
      component1={Analytics}
      screen2="Rentals"
      component2={Properties}
      screen3="Alers"
      component3={Alerts}
      screen4="Profile"
      component4={Profile}
    />
  );
};

export default TenantNavigator;
