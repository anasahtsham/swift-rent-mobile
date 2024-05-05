/*********** field icons *************/

import { icons } from "../ImageImports";

export const fieldIcons = {
  areaSqft: icons.areaSqftIcon,
  height: icons.heightIcon,
  noOfApartment: icons.apartments,
  noOfBalcony: icons.balconyIcon,
  noOfBedroom: icons.bedroomsIcon,
  noOfFloor: icons.floorsIcon,
  noOfKitchen: icons.kitchensIcon,
  noOfLounge: icons.loungesIcon,
  noOfConferenceRoom: icons.conferenceRoomsIcon,
  noOfOffice: icons.officesIcon,
  noOfShops: icons.shopsIcon,
  noOfStoreRoom: icons.storeRoomsIcon,
  noOfToilet: icons.toiletsIcon,
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
  hasSeperateMeter: icons.electricityMeter,
  hasServantRooms: icons.servantRooms,
  hasWiFi: icons.wifi,
  isAirConditioned: icons.airConditioned,
  isFurnished: icons.furnished,
  isShared: icons.shared,
};

/*********** field types *************/

// residential homes

export const housesFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Balconies", value: "noOfBalcony" },
  { label: "No. Of Bedrooms", value: "noOfBedroom" },
  { label: "No. Of Floors", value: "noOfFloor" },
  { label: "No. Of Kitchens", value: "noOfKitchen" },
  { label: "No. Of Lounges", value: "noOfLounge" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const upperFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Balconies", value: "noOfBalcony" },
  { label: "No. Of Bedrooms", value: "noOfBedroom" },
  { label: "No. Of Kitchens", value: "noOfKitchen" },
  { label: "No. Of Lounges", value: "noOfLounge" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const lowerFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Balconies", value: "noOfBalcony" },
  { label: "No. Of Bedrooms", value: "noOfBedroom" },
  { label: "No. Of Kitchens", value: "noOfKitchen" },
  { label: "No. Of Lounges", value: "noOfLounge" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const apartmentFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Balconies", value: "noOfBalcony" },
  { label: "No. Of Bedrooms", value: "noOfBedroom" },
  { label: "No. Of Floors", value: "noOfFloor" },
  { label: "No. Of Kitchens", value: "noOfKitchen" },
  { label: "No. Of Lounges", value: "noOfLounge" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const roomFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Balconies", value: "noOfBalcony" },
  { label: "No. Of Bedrooms", value: "noOfBedroom" },
  { label: "No. Of Kitchens", value: "noOfKitchen" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

// plots

export const commercialFieldTypes = [{ label: "Marla", value: "areaSqft" }];

export const agricultureFieldTypes = [{ label: "Marla", value: "areaSqft" }];

export const industrialFieldTypes = [{ label: "Marla", value: "areaSqft" }];

//commercial

export const officeFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Balconies", value: "noOfBalcony" },
  { label: "No. Of Floors", value: "noOfFloor" },
  { label: "No. Of Kitchens", value: "noOfKitchen" },
  { label: "No. Of Lounges", value: "noOfLounge" },
  { label: "No. Of Conference Rooms", value: "noOfConferenceRoom" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
];

export const shopFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Balconies", value: "noOfBalcony" },
  { label: "No. Of Floors", value: "noOfFloor" },
  { label: "No. Of Kitchens", value: "noOfKitchen" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
  { label: "Height", value: "height" },
];

export const buildingFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Apartments", value: "noOfApartment" },
  { label: "No. Of Floors", value: "noOfFloor" },
  { label: "No. Of Offices", value: "noOfOffice" },
  { label: "No. Of Shops", value: "noOfShops" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
  { label: "Height", value: "height" },
];

export const warehouseFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Toilets", value: "noOfToilet" },
  { label: "Parking Capacity", value: "parkingCapacity" },
  { label: "Person Capacity", value: "personCapacity" },
  { label: "Height", value: "height" },
];

export const factoryFieldTypes = [
  { label: "Marla", value: "areaSqft" },
  { label: "No. Of Kitchen", value: "noOfKitchen" },
  { label: "No. Of Store Rooms", value: "noOfStoreRoom" },
  { label: "No. Of Toilets", value: "noOfToilet" },
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
    stateKey: "hasSeperateMeter",
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
    stateKey: "hasSeperateMeter",
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
    stateKey: "hasSeperateMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Furnished", stateKey: "isFurnished" },
];

export const apartmentCheckboxes = [
  { label: "Garden", stateKey: "hasGarden" },
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Furnished", stateKey: "isFurnished" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateMeter",
  },
  { label: "Servant Rooms", stateKey: "hasServantRooms" },
  { label: "Wi-Fi", stateKey: "hasWiFi" },
  { label: "Air Conditioned", stateKey: "isAirConditioned" },
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
    stateKey: "hasSeperateMeter",
  },
  { label: "Furnished", stateKey: "isFurnished" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  {
    label: "Seperate Electricity Meter",
    stateKey: "hasSeperateMeter",
  },
  { label: "Wi-Fi", stateKey: "hasWiFi" },
  { label: "Air Conditioned", stateKey: "isAirConditioned" },
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
  { label: "Air Conditioned", stateKey: "isAirConditioned" },
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
  { label: "Air Conditioned", stateKey: "isAirConditioned" },
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
  { label: "Air Conditioned", stateKey: "isAirConditioned" },
];

export const factoryCheckboxes = [
  { label: "Electricity", stateKey: "hasElectricity" },
  { label: "Gas", stateKey: "hasGas" },
  { label: "Lift", stateKey: "hasLift" },
  { label: "Roof Access", stateKey: "hasRoofAccess" },
  { label: "Safety Exit", stateKey: "hasSafetyExit" },
  { label: "Air Conditioned", stateKey: "isAirConditioned" },
];
