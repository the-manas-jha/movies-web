import { USER_KEY, JWT_KEY } from './constant'


export function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  console.log('Data saved to local storage');
}

export function saveAuthData(user, jwt) {
  setInLocalStorage(USER_KEY, user);
  setInLocalStorage(JWT_KEY, jwt);
}

export function clearAuthData() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(JWT_KEY);
  console.log('Auth data cleared from local storage');
}