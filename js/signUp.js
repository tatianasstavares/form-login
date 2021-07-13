import User from "./model/User.js";
import ValidationService from "./services/ValidationService.js";

const signUpButton = document.querySelector(".button-submit");
const inputName = document.querySelector(".input-name");
const inputNameError = document.querySelector(".input-name-error");
const inputEmail = document.querySelector(".input-email");
const inputEmailError = document.querySelector(".input-email-error");
const inputPassword = document.querySelector(".input-password");
const inputPasswordError = document.querySelector(".input-password-error");
const inputConfirmPassword = document.querySelector(".input-confirm-password");
const inputConfirmPasswordError = document.querySelector(
  ".input-confirm-password-error"
);

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();

  ValidationService.clearAllErrors([inputEmailError, inputNameError,inputPasswordError,inputConfirmPasswordError]);
  
  const user = new User({
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
    confirmPassword: inputConfirmPassword.value
  });

  const { name, email, password, confirmPassword } = user;

  const nameValidation = ValidationService.validateName(name);
  if (nameValidation.hasError) {
    inputNameError.textContent = nameValidation.errorMessage;
  }

  const mailValidation = ValidationService.validateEmail(email);
  if (mailValidation.hasError) {
    inputEmailError.textContent = mailValidation.errorMessage;
  }

  const passwordValidation = ValidationService.validatePassword(password);
  if (passwordValidation.hasError) {
    inputPasswordError.textContent = passwordValidation.errorMessage;
  }

  const passwordConfirmValidation = ValidationService.validateConfirmPassword(password, confirmPassword);
  if (passwordConfirmValidation.hasError) {
    inputConfirmPasswordError.textContent = passwordConfirmValidation.errorMessage;
  }
});
