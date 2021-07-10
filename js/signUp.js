import ValidationService from "./services/ValidationService.js";

const loginButton = document.querySelector(".button-submit");
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

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  ValidationService.clearAllErrors([inputEmailError, inputNameError]);

  const data = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
    confirmPassword: inputConfirmPassword.value,
  };

  const { name, email } = data;

  const nameValidation = ValidationService.validateName(name);
  if (nameValidation.hasError) {
    inputNameError.textContent = nameValidation.errorMessage;
  }

  const mailValidation = ValidationService.validateEmail(email);
  if (mailValidation.hasError) {
    inputEmailError.textContent = mailValidation.errorMessage;
  }
});
