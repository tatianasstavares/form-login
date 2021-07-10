export const helloWorld = "Hello World";

const USER_KEY = "@users";

export const getUsersFromLocalstorage = () => {
  const users = localStorage.getItem(USER_KEY);
  return JSON.parse(users) || [];
};

export const saveUsersInLocalstorage = (user) => {
  const users = getUsersFromLocalstorage();
  users.push(user);

  localStorage.setItem(USER_KEY, JSON.stringify(users));

  return users;
};

export const validateName = (name) => /^[A-Za-z ]+$/.test(name);

export const validateEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
export const validatePasswordIsNumber = (password) => /^\d{8,}$/.test(password);

export const comparePasswords = (password, confirmPassword) =>
  password === confirmPassword;
