
export default function ({ store, redirect }) {
  if (!store.getters["identity/isAdmin"]) {
    return redirect('/')
  }
}