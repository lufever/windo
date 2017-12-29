import api from '../../api'
import {showMsg} from '../actions'
import {
  GET_EMPLOYEE_LIST, 
  REQUEST_EMPLOYEE_LIST,
  GET_EMPLOYEE_LIST_FAILURE,
  GET_EMPLOYEE,
  ADD_EMPLOYEE_LIST
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  employeeList: [],
  employee: []
}


 
const actions = {
  getEmployeeList({ commit }, {options, isAdd=false}){
    commit(REQUEST_EMPLOYEE_LIST)
    api.getEmployeeList(options).then(response => {
      if(!response.ok){
        return commit(GET_EMPLOYEE_LIST_FAILURE)
      }
      const json = response.data  
      const isMore = !(json.length < options.itemsPerPage)
      isAdd
        ? commit(ADD_EMPLOYEE_LIST,{
          employeeList: json,
          isMore:isMore
        })
        : commit(GET_EMPLOYEE_LIST,{
          employeeList: json,
          isMore:isMore
        })
    }, response => {
      commit(GET_EMPLOYEE_LIST_FAILURE)
    })
  },
  getEmployee ({ commit },id,user){
    api.getEmployee(id).then(response => {
      if(response.ok){      
        let json=response.data   
        commit(GET_EMPLOYEE, {employee:json} 
          )   
      }
    })
  }, 
  putEmployee(store,{id,data}){  
    api.putEmployee(id,data).then(response => {
      if(!response.ok){
        return showMsg(store,response.data.error_msg || '修改失败!')
      }
      showMsg(store,'修改成功!','success')
  
    }, response => {
      showMsg(store,response.data.error_msg || '修改失败!')
    })
  }
}

 
const mutations = {
 [GET_EMPLOYEE](state, payload) {

      //  state.article = actionResult
          state.employee ={...state.employee,...payload.employee} 
  
        //state.item ={...state.item,...actionResult.articleDetail} 
  },
  [REQUEST_EMPLOYEE_LIST](state){
    state.isFetching = true
  },
  GET_EMPLOYEE_LIST(state,payload){
 
    state.isFetching = false
    state.isMore = payload.isMore
    state.employeeList = payload.employeeList
  },
  [GET_EMPLOYEE_LIST_FAILURE](state){
    state.isFetching = false
  },
  [ADD_EMPLOYEE_LIST](state,payload){
    state.isFetching = false
    state.isMore = payload.isMore
    state.employeeList = [...state.employeeList, ...payload.employeeList]
  }
 

}

export default {
  state,
  actions,
  mutations
}