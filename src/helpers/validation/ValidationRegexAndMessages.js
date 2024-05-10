// cant enter even 1 space or multiple
export const noSpacesRegex = /^\S*$/;
export const noSpacesMessage = "No spaces allowed";
export const noLeadingOrTrailingSpacesRegex = /^[^\s].*[^\s]$/;
export const noLeadingOrTrailingSpacesMessage = "No spaces at start or end";
export const noSpecialCharacterAtStartOrEndRegex = /^[^\W_].*[^\W_]$/;
export const noSpecialCharacterAtStartOrEndMessage =
  "No special characters at start or end";
export const noDoubleSpacesRegex = /^(?!.*  ).*$/;
export const noDoubleSpacesMessage = "No double spaces";
export const noSpecialCharactersExceptHyphenSpaceOrPeriodRegex =
  /^[a-zA-Z0-9\s.-]*$/;
export const noSpecialCharactersExceptHyphenSpaceOrPeriodMessage =
  "No special characters except hyphen, space or period";

export const notOnlyNumbersRegex = /^(?!\d+$).*$/;
export const notOnlyNumbersMessage = "Can't be only numbers";
export const notOnlySpecialCharactersRegex =
  /^(?![!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$).*$/;
export const notOnlySpecialCharactersMessage =
  "Can't be only special characters or symbols";
export const notOnlySpecialCharactersAndNumbersRegex =
  /^(?![!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]*$).*$/;
export const notOnlySpecialCharactersAndNumbersMessage =
  "Can't be only special characters or symbols or numbers";
export const notOnlySpacesRegex = /^(?!\s+$).*$/;
export const notOnlySpacesMessage = "Can't be only spaces";

export const onlyNumbersRegex = /^[0-9]*$/;
export const onlyNumbersMessage = "Only numbers allowed";

export const requiredMessage = "This Field is required";

export const nameFirstCharacterUppercaseRegex = /^[A-Z]/;
export const nameFirstCharacterUppercaseMessage = "First word must be capital.";

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

export const from1To100Regex = /^(100|[1-9][0-9]?)$/;
export const from1To100Message = "Value must be from 1 to 100";
export const from1To99Regex = /^([1-9][0-9]?)$/;
export const from1To99Message = "Value must be from 1 to 99";
export const from1To1200Regex =
  /^(1[01][0-9][0-9]|1[2][00]|[1-9][0-9]{0,2}|1200)$/;
export const from1To1200Message = "Value must be from 1 to 1200";

export const between30and60Regex = /^[3-5][0-9]$|^60$/;
export const between30and60Message = "Value must be between 30 and 60";
