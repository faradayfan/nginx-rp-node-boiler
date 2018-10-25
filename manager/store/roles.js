import * as _ from "lodash";

export const state = () => ({
  list: [],
  role: null
})

export const actions = {
  createRole(context, role) {
    return this.$axios.post(`/api/admin/roles/`, role)
  },
  saveRole(context, { id, role }) {
    return this.$axios.patch(`/api/admin/roles/${id}`, role)
  },
  deleteRole(context, id) {
    return this.$axios.delete(`/api/admin/roles/${id}`)
  },
  fetchRole({ commit }, id) {
    return this.$axios.get(`/api/admin/roles/${id}`).then(response => {
      return commit("POPULATE_ROLE", response.data.result)
    })
  },
  fetchRoleList({ commit }) {
    return this.$axios.get('/api/admin/roles').then((response) => {
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
  roleList(state) {
    return state.list
  },
  role(state) {
    return state.role
  }
}