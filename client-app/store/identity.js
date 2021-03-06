export const state = () => ({
  loginStatus: undefined
})

export const actions = {
  login({ commit, dispatch, }, data) {
    return this.$axios
      .post('/api/auth-service/auth/jwt/authenticate', data)
      .then(response => {
        return dispatch('authorize', response.data.result.jwt)
      }).catch(error => {
        throw error
      })
  },
  authorize({ commit }, jwt) {
    this.$axios.setHeader("authorization", jwt)
    localStorage.setItem("jwt", jwt)
    return this.$axios.get('/api/auth-service/auth/jwt/authorize')
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.result.user))
        commit('SET_LOGIN_STATUS', { jwt, ...response.data.result })
      })
  },
  logout({ commit }) {
    this.$axios.setHeader("authorization", null)
    localStorage.setItem("jwt", null)
    localStorage.setItem("user", null)
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
  },
  isAdmin(state) {
    return Boolean(state && state.loginStatus && state.loginStatus.isAdmin)
  }
}