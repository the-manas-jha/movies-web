import store from '../store';
import { getDataFromLocalStorage } from '../helper';

export default function localStorageMiddleware({ next }) {
  const user = getDataFromLocalStorage('user');
  const jwt = getDataFromLocalStorage('jwt');

  if (user && jwt) {
    store.commit('auth/setUser', user);
    store.commit('auth/setJwt', jwt);
  }

  return next();
}