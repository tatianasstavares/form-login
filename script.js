const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");
const loginButton = document.querySelector(".button-submit");

loginButton.addEventListener("click", () => {
  alert(`Email : ${inputEmail.value} 
Senha: ${inputPassword.value}`);
});
