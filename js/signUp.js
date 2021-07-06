/**
 * Validação de input (required)
 * comparação das passwords
 * Verificação de email já existente
 * incluir os dados no array
 * Fazer com que o formulário não apareça e sim uma mensagem de cadastro concluído.
 */

// Funções que validam os campos separadamente

const inputName = document.querySelector(".input-name");
const inputNameError = document.querySelector(".input-name-error");

const inputEmail = document.querySelector(".input-email");
const inputEmailError = document.querySelector(".input-email-error");

const inputPassword = document.querySelector(".input-password");
const inputConfirmPassword = document.querySelector(".input-confirm-password");
const inputPasswordError = document.querySelector(".input-password-error");
const inputPasswordConfirmError = document.querySelector(
  ".input-password-confirm-error"
);

const loginButton = document.querySelector(".button-submit");

const dataArray = [];

const validateName = (name) => /^[A-Za-z ]+$/.test(name);

const validateEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const validatePasswordIsNumber = (password) => /^\d{8,}$/.test(password);

const validatePassword = (password) =>
  password.value === inputConfirmPassword.value;

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  let isAllValid = true;
  const dataInput = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  console.log(dataInput);

  // if (validateName(dataInput.name)) {
  //   inputNameError.style.display = "none";
  // } else {
  //   inputNameError.textContent = "Nome inválido, insira apenas letras";
  //   isAllValid = false;
  // }

  // if (validateEmail(dataInput.email)) {
  //   inputEmailError.style.display = "none";
  // } else {
  //   inputEmailError.textContent = "Email inválido";
  //   isAllValid = false;
  // }

  if (validatePasswordIsNumber(dataInput.password)) {
    inputPasswordError.style.display = "none";
  } else {
    inputPasswordError.textContent = "Senha inválida";
    isAllValid = false;
  }
  if (validatePassword(inputConfirmPassword)) {
    inputPasswordConfirmError.style.display = "none";
  } else {
    inputPasswordConfirmError.textContent = "As senhas não são iguais.";
    isAllValid = false;
  }

  if (isAllValid) {
    return dataArray.push(dataInput);
  }
});

console.log(dataArray);
