/*********** field icons *************/

import { icons } from "../ImageImports";

export const fieldIcons = {
  area: icons.areaIcon,
  height: icons.heightIcon,
  apartments: icons.apartments,
  balcony: icons.balconyIcon,
  bedrooms: icons.bedroomsIcon,
  floors: icons.floorsIcon,
  kitchens: icons.kitchensIcon,
  lounges: icons.loungesIcon,
  conferenceRooms: icons.conferenceRoomsIcon,
  offices: icons.officesIcon,
  shops: icons.shopsIcon,
  storeRooms: icons.storeRoomsIcon,
  toilets: icons.toiletsIcon,
  parkingCapacity: icons.parkingCapacityIcon,
  personCapacity: icons.personCapacityIcon,
};

/*********** checkbox icons *************/

export const checkboxIcons = {
  hasDayCare: icons.daycare,
  hasGarden: icons.garden,
  hasElectricity: icons.electricity,
  hasGas: icons.gas,
  hasLift: icons.lift,
  hasPrayerRoom: icons.prayerRoom,
  hasRoofAccess: icons.roofAccess,
  hasSafetyExit: icons.safetyExit,
  hasSeperateElectricityMeter: icons.electricityMeter,
  hasServantRooms: icons.servantRooms,
  hasWiFi: icons.wifi,
  hasAirConditioned: icons.airConditioned,
  isFurnished: icons.furnished,
  isShared: icons.shared,
};

/*********** field types *************/

// residential homes

export const housesFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Balcony", value: "balcony" },
  { label: "Bedrooms", value: "bedrooms" },
  { label: "Floors", value: "floors" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Lounges", value: "lounges" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const upperFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Balcony", value: "balcony" },
  { label: "Bedrooms", value: "bedrooms" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Lounges", value: "lounges" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const lowerFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Balcony", value: "balcony" },
  { label: "Bedrooms", value: "bedrooms" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Lounges", value: "lounges" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const flatFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Balcony", value: "balcony" },
  { label: "Bedrooms", value: "bedrooms" },
  { label: "Floors", value: "floors" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Lounges", value: "lounges" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const roomFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Balcony", value: "balcony" },
  { label: "Bedrooms", value: "bedrooms" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

// plots

export const commercialFieldTypes = [{ label: "Area Sq. Ft.", value: "area" }];

export const agricultureFieldTypes = [{ label: "Area Sq. Ft.", value: "area" }];

export const industrialFieldTypes = [{ label: "Area Sq. Ft.", value: "area" }];

//commercial

export const officeFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Balcony", value: "balcony" },
  { label: "Floors", value: "floors" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Lounges", value: "lounges" },
  { label: "Conference Rooms", value: "conferenceRooms" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const shopFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Balcony", value: "balcony" },
  { label: "Floors", value: "floors" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
  { label: "Height", value: "height" },
];

export const buildingFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Apartments", value: "apartments" },
  { label: "Floors", value: "floors" },
  { label: "Offices", value: "offices" },
  { label: "Shops", value: "shops" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
  { label: "Height", value: "height" },
];

export const warehouseFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
  { label: "Height", value: "height" },
];

export const factoryFieldTypes = [
  { label: "Area Sq. Ft.", value: "area" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Store Rooms", value: "storeRooms" },
  { label: "Toilets", value: "toilets" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
  { label: "Height", value: "height" },
];

/*********** checkboxes*************/

// residential

export const housesCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateElectricityMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Furnished", stateKey: "isFurnished" },
];

export const upperCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateElectricityMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Furnished", stateKey: "isFurnished" },
];

export const lowerCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateElectricityMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Furnished", stateKey: "isFurnished" },
];

export const flatCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateElectricityMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Furnished", stateKey: "isFurnished" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateElectricityMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Wi-Fi", stateKey: "hasWiFi" },
  { label: "Air Conditioned", stateKey: "hasAirConditioned" },
  { label: "Furnished", stateKey: "isFurnished" },
  { label: "Shared", stateKey: "isShared" },
];

export const roomCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateElectricityMeter",
  },
  { label: "Furnished", stateKey: "isFurnished" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateElectricityMeter",
  },
  { label: "Wi-Fi", stateKey: "hasWiFi" },
  { label: "Air Conditioned", stateKey: "hasAirConditioned" },
  { label: "Furnished", stateKey: "isFurnished" },
  { label: "Shared", stateKey: "isShared" },
];

// plots

export const commercialCheckboxes = [
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
];

export const agricultureCheckboxes = [
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
];

export const industrialCheckboxes = [
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
];

// commercial

export const officeCheckboxes = [
  { label: "Day Care", stateKey: "hasDayCare" },
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Prayer Room", stateKey: "hasPrayerRoom" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Wi-Fi", stateKey: "hasWiFi" },
  { label: "Air Conditioned", stateKey: "hasAirConditioned" },
  { label: "Furnished", stateKey: "isFurnished" },
  { label: "Shared", stateKey: "isShared" },
];

export const shopCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  { label: "Wi-Fi", stateKey: "hasWiFi" },
  { label: "Air Conditioned", stateKey: "hasAirConditioned" },
];

export const buildingCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
];

export const warehouseCheckboxes = [
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  { label: "Air Conditioned", stateKey: "hasAirConditioned" },
];

export const factoryCheckboxes = [
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  { label: "Air Conditioned", stateKey: "hasAirConditioned" },
];
