import CustomError from "../model/CustomError.js";
import { validateEmail, validateName } from "../utils/functions.js";
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

    const isValidName = validateName(name);
    if (!isValidName) {
      return new CustomError("Digitar apenas letras");
    }

    return { hasError: false };
  }

  validateEmail(email) {
    if (!email) {
      return new CustomError("Campo vazio, coloque seu email.");
    }

    const isValidMail = validateEmail(email);
    if (!isValidMail) {
      return new CustomError("Email inválido.");
    }

    const userMailAlreadyExists = UserService.checkUserExistByEmail(email);
    if (userMailAlreadyExists) {
      return new CustomError("Email indisponível.");
    }
    return { hasError: false };
  }
}

export default new ValidationService();
