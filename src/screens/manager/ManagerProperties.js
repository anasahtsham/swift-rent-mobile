import Properties from "../../components/common/screens/properties/Properties";
import { propertiesData } from "../../helpers/data/PropertiesData";

const ManagerProperties = () => {
  return <Properties isManager={true} propertiesData={propertiesData} />;
};

export default ManagerProperties;
