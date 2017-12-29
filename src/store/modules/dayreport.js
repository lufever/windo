import api from '../../api'
import {showMsg} from '../actions'
import {
  GET_DAYREPORT_LIST,
  ADD_DAYREPORT_LIST,
  REQUEST_DAYREPORT_LIST,
  GET_DAYREPORT_LIST_FAILURE,
  GET_DAYREPORT
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  dayReportList: [],
  dayReportDetail: []
}


 
const actions = {
  getDayReportList({ commit }, {options, isAdd=false}){
    commit(REQUEST_DAYREPORT_LIST)
    api.getDayReportList(options).then(response => {
      if(!response.ok){
        return commit(GET_DAYREPORT_LIST_FAILURE)
      }
      const json = response.data  
      const isMore = !(json.length < options.itemsPerPage)
      isAdd
        ? commit(ADD_DAYREPORT_LIST,{
          dayReportList: json,
          isMore:isMore
        })
        : commit(GET_DAYREPORT_LIST,{
          dayReportList: json,
          isMore:isMore
        })
    }, response => {
      commit(GET_DAYREPORT_LIST_FAILURE)
    })
  },
  getDayReport ({ commit },id,user){
    api.getDayReport(id).then(response => {
      if(response.ok){      
        let json=response.data   
        commit('GET_DAYREPORT', {dayReportDetail:json} 
          )   
      }
    })
  },
  postDayReport(store,data){
    api.postDayReport(data).then(response => {
      if(!response.ok){
        return showMsg(store,response.data.error_msg || '添加失败!')
      }
      showMsg(store,'添加成功!','success')
    }, response => {
      showMsg(store,response.data.error_msg || '添加失败!')
    })
  },
  putDayReport(store,{id,data}){  
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

// const actions = {
//   getArticleList({ commit }, {options, isAdd=false}){
//     commit(REQUEST_ARTICLE_LIST)
//     api.getFrontArticleList(options).then(response => {
//       if(!response.ok){
//         return commit(GET_ARTICLE_LIST_FAILURE)
//       }
//       const json = response.data
//       const isMore = !(json.data.length < options.itemsPerPage)
//       isAdd
//         ? commit(ADD_ARTICLE_LIST,{
//           articleList: json.data,
//           isMore:isMore
//         })
//         : commit(ARTICLE_LIST,{
//           articleList: json.data,
//           isMore:isMore
//         })
//     }, response => {
//       commit(GET_ARTICLE_LIST_FAILURE)
//     })
//   }
// }

const mutations = {
 [GET_DAYREPORT](state, payload) {

      //  state.article = actionResult
          state.dayReportDetail ={...state.dayReportDetail,...payload.dayReportDetail} 
  
        //state.item ={...state.item,...actionResult.articleDetail} 
  },
  [REQUEST_DAYREPORT_LIST](state){
    state.isFetching = true
  },
  GET_DAYREPORT_LIST(state,action){
 
    state.isFetching = false
    state.isMore = action.isMore
    state.dayReportList = action.dayReportList
  },
  [GET_DAYREPORT_LIST_FAILURE](state){
    state.isFetching = false
  },
  [ADD_DAYREPORT_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    state.dayReportList = [...state.dayReportList, ...action.dayReportList]
  }
 

}

export default {
  state,
  actions,
  mutations
}