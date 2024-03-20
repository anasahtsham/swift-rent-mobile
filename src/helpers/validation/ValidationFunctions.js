export const validateEmail = (email) => {
  if (!email) {
    return true; // don't show "Invalid email" error when email is empty
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^03\d{9}$/;
  return phoneRegex.test(phoneNumber);
};

export const validatePasswordLength = (password) => {
  // Check if password is at least 8 characters long
  return password.length >= 8;
};

export const checkEmptySpace = (password) => {
  // Check if password contains any whitespace
  return !/\s/.test(password);
};
