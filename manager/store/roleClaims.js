import * as _ from "lodash";

export const state = () => ({
  list: [],
  roleClaim: null
})

export const actions = {
  createRoleClaim(context, roleClaim) {
    return this.$axios.post(`/api/admin/role-claims/`, roleClaim)
  },
  saveRoleClaim(context, { id, roleClaim }) {
    return this.$axios.patch(`/api/admin/role-claims/${id}`, roleClaim)
  },
  deleteRoleClaim(context, id) {
    return this.$axios.delete(`/api/admin/role-claims/${id}`)
  },
  fetchRoleClaim({ commit }, id) {
    return this.$axios.get(`/api/admin/role-claims/${id}`).then(response => {
      return commit("POPULATE_ROLE_CLAIM", response.data.result)
    })
  },
  fetchRoleClaimList({ commit }) {
    return this.$axios.get('/api/admin/role-claims').then((response) => {
      return commit("POPULATE_ROLE_CLAIMS", response.data.result)
    }).catch(error => {
      throw error
    })
  }
}

export const mutations = {
  POPULATE_ROLE_CLAIM(state, data) {
    state.roleClaim = data
  },
  POPULATE_ROLE_CLAIMS(state, data) {
    state.list = data
  }
}

export const getters = {
  roleClaimList(state) {
    return state.list
  },
  roleClaim(state) {
    return state.roleClaim
  }
}