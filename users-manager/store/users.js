import * as _ from "lodash";

export const state = () => ({
  list: [],
  user: null
})

export const actions = {
  saveUser(context, { user, editedUser }) {
    let editedKeys = _.intersection(_.keysIn(user), _.keysIn(editedUser))
    if (editedKeys.length > 0) {
      this.$axios.patch(`/api/users/${user._id}`, editedUser)
    }
  },
  fetchUser({ commit }, id) {
    this.$axios.get(`/api/users/${id}`).then(response => {
      commit("POPULATE_USER", response.data.result)
    })
  },
  fetchUserList({ commit }) {
    this.$axios.get('/api/admin/users').then((response) => {
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