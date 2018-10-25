import * as _ from "lodash";

export const state = () => ({
  list: [],
  role: null
})

export const actions = {
  createRoleClaim(context, role) {
    return this.$axios.post(`/api/admin/role-claims/`, role)
  },
  saveRoleClaim(context, { id, role }) {
    return this.$axios.patch(`/api/admin/role-claims/${id}`, role)
  },
  deleteRoleClaim(context, id) {
    return this.$axios.delete(`/api/admin/role-claims/${id}`)
  },
  fetchRoleClaim({ commit }, id) {
    return this.$axios.get(`/api/admin/role-claims/${id}`).then(response => {
      return commit("POPULATE_ROLE", response.data.result)
    })
  },
  fetchRoleClaimList({ commit }) {
    return this.$axios.get('/api/admin/role-claims').then((response) => {
      return commit("POPULATE_ROLES", response.data.result)
    }).catch(error => {
      throw error
    })
  }
}

export const mutations = {
  POPULATE_ROLE(state, data) {
    state.role = data
  },
  POPULATE_ROLES(state, data) {
    state.list = data
  }
}

export const getters = {
  roleClaimList(state) {
    return state.list
  },
  roleClaim(state) {
    return state.role
  }
}