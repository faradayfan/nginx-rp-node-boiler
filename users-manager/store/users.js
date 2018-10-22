export const state = () => ({
  list: []
})

export const actions = {
  fetchUserList({ commit }) {
    this.$axios.get('/api/admin/users').then((response) => {
      commit("POPULATE_USERS", response.data.result)
    }).catch(error => {
      throw error
    })
  }
}

export const mutations = {
  POPULATE_USERS(state, data) {
    state.list = data
  }
}

export const getters = {
  userList(state) {
    return state.list
  }
}