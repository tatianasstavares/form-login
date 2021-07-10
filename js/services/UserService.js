import {
  getUsersFromLocalstorage,
  saveUsersInLocalstorage,
} from "../utils/functions.js";

class UserService {
  getUsers() {
    return getUsersFromLocalstorage();
  }

  getUsersByEmail(wantedEmail) {
    const users = this.getUsers();
    return users.find((user) => user.email === wantedEmail);
  }

  checkUserExistByEmail(wantedEmail) {
    const users = this.getUsers();
    return users.some((user) => user.email === wantedEmail);
  }

  createNewUser(newUser) {
    const userAlreadyExist = this.getUsersByEmail(newUser.email);
    if (userAlreadyExist) {
      console.error("Tratar erro de usuário existente.");
    } else {
      saveUsersInLocalstorage(newUser);
    }
  }
}

export default new UserService();
