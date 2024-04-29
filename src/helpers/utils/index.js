const date = new Date();
const month = date.toLocaleString("default", { month: "long" });
const year = date.getFullYear();
export const formatedMonthYear = `${month} ${year}`;

export const formatUserTypeToFullForm = (userType) => {
  switch (userType) {
    case "O":
      return "Owner";
    case "M":
      return "Manager";
    case "T":
      return "Tenant";
    default:
      return "Unknown";
  }
};

// This function is used to format the number to a more readable format and also so that it does not take too much space

export function formatNumberToCrore(num) {
  num = Number(num);
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1) + " Crore";
  } else {
    return num.toLocaleString();
  }
}

export function formatNumberToThousands(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num;
  }
}
