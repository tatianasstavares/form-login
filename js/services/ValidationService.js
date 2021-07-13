import CustomError from "../model/CustomError.js";
import { validateEmailRegex, validateNameRegex, validatePasswordIsNumber, comparePasswords } from "../utils/functions.js";
import UserService from "./UserService.js";

class ValidationService {
  clearAllErrors(errors) {
    errors.forEach((error) => {
      error.textContent = "";
    });
  }

  validateName(name) {
    if (!name) {
      return new CustomError("Campo vazio, coloque seu nome.");
    }

    const isValidName = validateNameRegex(name);
    if (!isValidName) {
      return new CustomError("Digitar apenas letras");
    }

    return { hasError: false };
  }

  validateEmail(email) {
    if (!email) {
      return new CustomError("Campo vazio, coloque seu email.");
    }

    const isValidMail = validateEmailRegex(email);
    if (!isValidMail) {
      return new CustomError("Email inválido.");
    }

    const userMailAlreadyExists = UserService.checkUserExistByEmail(email);
    if (userMailAlreadyExists) {
      return new CustomError("Email indisponível.");
    }
    return { hasError: false };
  }

  validatePassword(password) {
    if (!password) {
      return new CustomError("Campo vazio, coloque a password")
    }
    const isValidPassword = validatePasswordIsNumber(password);
    if (!isValidPassword) {
      return new CustomError("Senha inválida")
    }
    return { hasError: false}
  }
  validateConfirmPassword (password,newPassword) {
    if (!newPassword) {
      return new CustomError("Campo vazio, coloque a nova password")
    }
    const isValidConfirmPassword = comparePasswords(password, newPassword)
    if (!isValidConfirmPassword) {
      return new CustomError("Passwords não são iguais.")
    }
    return { hasError: false }
  }
}

export default new ValidationService();
