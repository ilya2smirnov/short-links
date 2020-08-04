export let username = "";
export let password = "";

export function setUserPass(newUser, newPass) {
  username = newUser;
  password = newPass;
}

export function setUsername(newUsername) {
  username = newUsername;
}

export function setPassword(newPassword) {
  password = newPassword;
}
