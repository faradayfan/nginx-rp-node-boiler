import * as _ from "lodash";

export const state = () => ({
  list: [],
  user: null
})

export const actions = {
  createUser(context, user) {
    console.log(user)
    return this.$axios.post(`/api/admin/users/`, user)
  },
  saveUser(context, { id, user }) {
    return this.$axios.patch(`/api/admin/users/${id}`, user)
  },
  deleteUser(context, id) {
    return this.$axios.delete(`/api/admin/users/${id}`)
  },
  fetchUser({ commit }, id) {
    return this.$axios.get(`/api/admin/users/${id}`).then(response => {
      commit("POPULATE_USER", response.data.result)
    })
  },
  fetchUserList({ commit }) {
    return this.$axios.get('/api/admin/users').then((response) => {
      commit("POPULATE_USERS", response.data.result)
    }).catch(error => {
      throw error
    })
  }
}

export const mutations = {
  POPULATE_USER(state, data) {
    state.user = data
  },
  POPULATE_USERS(state, data) {
    state.list = data
  }
}

export const getters = {
  userList(state) {
    return state.list
  },
  user(state) {
    return state.user
  }
}