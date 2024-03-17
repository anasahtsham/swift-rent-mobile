import Alerts from "../../components/common/Alerts";
import { alertsData } from "../../helpers/data/AlertsData";

const OwnerAlerts = () => {
  return <Alerts alertsData={alertsData} />;
};

export default OwnerAlerts;
