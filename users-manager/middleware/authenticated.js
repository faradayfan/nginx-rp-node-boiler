import axios from 'axios'


export default function ({ route, store, redirect }) {
  if (!store.getters["identity/isAuthenticated"]) {
    const jwt = window.localStorage.getItem("jwt")
    if (jwt) {
      store.dispatch("identity/authorize", jwt)
    } else {
      return redirect('/login')
    }

  }
}