import axios from 'axios'


export default function ({ store, redirect }) {
  if (!store.getters["identity/isAuthenticated"]) {
    const jwt = window.localStorage.getItem("jwt")
    if (jwt) {
      return store.dispatch("identity/authorize", jwt)
        .catch(error => {
          store.dispatch("identity/logout")
          return redirect('/login')
        })
    } else {
      return redirect('/login')
    }
  }
}