import store from "../store";

const restrictedRoutes = ['login', 'register', 'forgot'];

export default function auth({ to, next }) {
  let isLoggedIn = store.getters['auth/isLoggedIn'];

  if (isLoggedIn) {
    if (restrictedRoutes.includes(to.name)) {
      return next('/'); 
    } else {
      return next();
    }
  } else {
    if (restrictedRoutes.includes(to.name)) {
      return next();
    } else {
      return next('/login');
    }
  }
}