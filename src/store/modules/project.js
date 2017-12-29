import api from '../../api'
import {showMsg} from '../actions'
import {
  GET_PROJECT_LIST, 
  REQUEST_PROJECT_LIST,
  GET_PROJECT_LIST_FAILURE,
  GET_PROJECT,
  ADD_PROJECT_LIST
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  projectList: [],
  project: []
}


 
const actions = {
  getProjectList({ commit }, {options, isAdd=false}){
    commit(REQUEST_PROJECT_LIST)
    api.getProjectList(options).then(response => {
      if(!response.ok){
        return commit(GET_PROJECT_LIST_FAILURE)
      }
      const json = response.data  
      const isMore = !(json.length < options.itemsPerPage)
      isAdd
        ? commit(ADD_PROJECT_LIST,{
          projectList: json,
          isMore:isMore
        })
        : commit(GET_PROJECT_LIST,{
          projectList: json,
          isMore:isMore
        })
    }, response => {
      commit(GET_PROJECT_LIST_FAILURE)
    })
  },
  getProject ({ commit },id,user){
    api. getProject(id).then(response => {
      if(response.ok){      
        let json=response.data   
        commit(GET_PROJECT, {project:json} 
          )   
      }
    })
  },
  postProject(store,data){
    api.postDayReport(data).then(response => {
      if(!response.ok){
        return showMsg(store,response.data.error_msg || '添加失败!')
      }
      showMsg(store,'添加成功!','success')
    }, response => {
      showMsg(store,response.data.error_msg || '添加失败!')
    })
  },
  putProject(store,{id,data}){  
    api.putDayReport(id,data).then(response => {
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
 [GET_PROJECT](state, payload) {

      //  state.article = actionResult
          state.project ={...state.project,...payload.project} 
  
        //state.item ={...state.item,...actionResult.articleDetail} 
  },
  [REQUEST_PROJECT_LIST](state){
    state.isFetching = true
  },
  GET_PROJECT_LIST(state,payload){
 
    state.isFetching = false
    state.isMore = payload.isMore
    state.projectList = payload.projectList
  },
  [GET_PROJECT_LIST_FAILURE](state){
    state.isFetching = false
  },
  [ADD_PROJECT_LIST](state,payload){
    state.isFetching = false
    state.isMore = payload.isMore
    state.projectList = [...state.projectList, ...payload.projectList]
  }
 

}

export default {
  state,
  actions,
  mutations
}