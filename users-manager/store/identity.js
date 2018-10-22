export const state = () => ({
  loginStatus: undefined
})

export const actions = {
  login({ commit, dispatch, }, data) {
    return this.$axios
      .post('/api/auth/jwt/authenticate', data)
      .then(response => {
        commit('SET_LOGIN_STATUS', response.data.result)
        this.$axios.setHeader("authorization", response.data.result.jwt)
        return this.$axios.get('/api/auth/jwt/authorize', { headers: { authorization: response.data.result.jwt } })
      })
      .then((response) => {
        commit('SET_LOGIN_STATUS', response.data.result)
      })
      .catch(error => {
        throw error
      })
  },
  logout({ commit }) {
    return commit('SET_LOGIN_STATUS')
  }
}

export const mutations = {
  SET_LOGIN_STATUS(state, payload) {
    if (payload) {
      state.loginStatus = {
        ...state.loginStatus,
        ...payload
      }
    } else {
      state.loginStatus = undefined
    }
  }
}

export const getters = {
  jwt(state) {
    return state.loginStatus ? state.loginStatus.jwt : undefined
  },
  isAuthenticated(state) {
    return Boolean(state.loginStatus && state.loginStatus.jwt && state.loginStatus.user)
  }
}