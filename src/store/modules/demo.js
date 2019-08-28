import * as types from '../mutation-types';

// Initial state
const state = {'example': false};

// Getters
/* eslint-disable no-shadow */
const getters = {'getExample': state => state.example};

// Actions
const actions = {
  changeExample({commit}) {
    commit(types.CHANGE_EXAMPLE);
  }
};

// Mutations
/* eslint-disable no-param-reassign  */
const mutations = {
  [types.CHANGE_EXAMPLE](state) {
    state.example = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
