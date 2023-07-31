function isValid(value) {
  return value && value.trim() !== "";
}

function validCredentials(email, password) {
  return email && email.includes("@") && password && password.trim().length > 5;
}

function emailIsConfirmed(email, confirmEmail) {
  return email === confirmEmail;
}

function userDetailsAreValid(email, password, name, street, postal, city) {
  return (
    validCredentials(email, password) &&
    isValid(name) &&
    isValid(street) &&
    isValid(postal) &&
    isValid(city)
  );
}

export default {
  userDetailsAreValid: userDetailsAreValid,
  emailIsConfirmed: emailIsConfirmed,
};
