import * as _ from "lodash";

export const state = () => ({
  list: [],
  resource: null
})

export const actions = {
  createResource(context, resource) {
    return this.$axios.post(`/api/admin/resources/`, resource)
  },
  saveResource(context, { id, resource }) {
    return this.$axios.patch(`/api/admin/resources/${id}`, resource)
  },
  deleteResource(context, id) {
    return this.$axios.delete(`/api/admin/resources/${id}`)
  },
  fetchResource({ commit }, id) {
    return this.$axios.get(`/api/admin/resources/${id}`).then(response => {
      return commit("POPULATE_ROLE", response.data.result)
    })
  },
  fetchResourceList({ commit }) {
    return this.$axios.get('/api/admin/resources').then((response) => {
      return commit("POPULATE_ROLES", response.data.result)
    }).catch(error => {
      throw error
    })
  }
}

export const mutations = {
  POPULATE_ROLE(state, data) {
    state.resource = data
  },
  POPULATE_ROLES(state, data) {
    state.list = data
  }
}

export const getters = {
  resourceList(state) {
    return state.list
  },
  resource(state) {
    return state.resource
  }
}