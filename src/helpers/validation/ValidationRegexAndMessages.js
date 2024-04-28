// cant enter even 1 space or multiple
export const noSpacesRegex = /^\S*$/;
export const noSpacesMessage = "No spaces allowed";

export const noLeadingOrTrailingSpacesRegex = /^[^\s].*[^\s]$/;
export const noLeadingOrTrailingSpacesMessage = "No leading or trailing spaces";

export const noDoubleSpacesRegex = /^(?!.*  ).*$/;
export const noDoubleSpacesMessage = "No double spaces";

export const notOnlyNumbersRegex = /^(?!\d+$).*$/;
export const notOnlyNumbersMessage = "Can't be only numbers";

export const notOnlySpecialCharactersRegex = /^[a-zA-Z0-9\s]*$/;
export const notOnlySpecialCharactersMessage =
  "Can't be only special characters or symbols";

export const onlyNumbersRegex = /^[0-9]*$/;
export const onlyNumbersMessage = "Only numbers allowed";

export const requiredMessage = "This Field is required";

export const nameFirstCharacterUppercaseRegex = /^[A-Z][a-z]*$/;
export const nameFirstCharacterUppercaseMessage =
  "First character must be uppercase and the rest lowercase";

export const min3CharactersInt = 3;
export const min3CharactersMessage = `Name must be ${min3CharactersInt} characters or more`;

export const max50CharactersInt = 50;
export const max50CharactersMessage = `Name must be at most ${max50CharactersInt} characters`;

export const max500CharactersInt = 500;
export const max500CharactersMessage = `Description must be at most ${max500CharactersInt} characters`;

export const invalidDateMessage = "Invalid date format";

export const invalidEmailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const invalidEmailMessage = "Invalid email";

export const numberStartsWith03Regex = /^03\d*/;
export const numberStartsWith03Message = "Phone number must start with 03";

export const number11DigitsRegex = /^\d{11}$/;
export const number11DigitsMessage = "Phone number must be 11 digits";

// for the case of email and phone where it has to test one against the other
export const phoneRegex = /^03\d{9}$/;

export const invalidEmailOrPhone = "Invalid email or phone number";

export const passwordLengthRegex = /^.{8,}$/;
export const passwordLengthMessage = "Password must be 8 characters or more";

export const passwordsMustMatchMessage = "Passwords must match";

export const multipleOfHunderedRegex = /^([1-9][0-9]*00)$/;
export const multipleOfHunderedMessage = "Value must be a multiple of 100";

export const between1and100Regex = /^(100|[1-9][0-9]?)$/;
export const between1and100Message = "Value must be between 1 and 100";

export const between30and60Regex = /^[3-5][0-9]$|^60$/;
export const between30and60Message = "Value must be between 30 and 60";
