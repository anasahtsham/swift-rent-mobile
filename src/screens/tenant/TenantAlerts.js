import Alerts from "../../components/common/screens/alerts/Alerts";
import { alertsData } from "../../helpers/data/AlertsData";

const TenantAlerts = () => {
  return <Alerts alertsData={alertsData} />;
};

export default TenantAlerts;
