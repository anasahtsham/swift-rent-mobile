import ExploreOffers from "../components/manager/ExploreOffers";
import ManagerAlerts from "../screens/manager/ManagerAlerts";
import ManagerAnalytics from "../screens/manager/ManagerAnalytics";
import ManagerProfile from "../screens/manager/ManagerProfile";
import ManagerProperties from "../screens/manager/ManagerProperties";
import TabNavigator from "./TabNavigator";

// This is the navigation bar that is used when the user type is manager

const ManagerNavigator = () => {
  return (
    <TabNavigator
      screen1="Analytics"
      component1={ManagerAnalytics}
      screen2="Properties"
      component2={ManagerProperties}
      exploreOffersScreen="ExploreOffers"
      componentExploreOffers={ExploreOffers}
      screen3="Alerts"
      component3={ManagerAlerts}
      screen4="Profile"
      component4={ManagerProfile}
    />
  );
};

export default ManagerNavigator;
