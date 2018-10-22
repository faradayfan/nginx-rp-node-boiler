import axios from 'axios'

export default function ({ route, store, redirect }) {
  if (!store.getters["identity/isAuthenticated"]) {
    return redirect('/login')
  }
}