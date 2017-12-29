import {
  CHANGE_OPTIONS
} from '../types'

const state = {item: {empid: 35, month:'2017-12',deptId:'3'}}

const actions = {
  changeOptions({ commit },options){
    commit(CHANGE_OPTIONS, { options: options })
  }
}

const mutations = {
  [CHANGE_OPTIONS](state, action) {
    state.item = {...state.item, ...action.options}
  }
}

export default {
  state,
  actions,
  mutations
}