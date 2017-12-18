import api from '../../api'
import {
  DAYREPORT_LIST,
  ADD_ARTICLE_LIST,
  REQUEST_ARTICLE_LIST,
  GET_ARTICLE_LIST_FAILURE
} from '../types'

const state = {
  isFetching: false,
  isMore: true,
  dayReportList: []
}


 
const actions = {
  getDayReportList({ commit }, {options, isAdd=false}){
    commit(REQUEST_ARTICLE_LIST)
    api.Geteh_dayly_reportsByMonth(options).then(response => {
      if(!response.ok){
        return commit(GET_ARTICLE_LIST_FAILURE)
      }
      const json = response.data  
      const isMore = !(json.length < options.itemsPerPage)
      isAdd
        ? commit(ADD_ARTICLE_LIST,{
          dayReportList: json,
          isMore:isMore
        })
        : commit(DAYREPORT_LIST,{
          dayReportList: json,
          isMore:isMore
        })
    }, response => {
      commit(GET_ARTICLE_LIST_FAILURE)
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
  [REQUEST_ARTICLE_LIST](state){
    state.isFetching = true
  },
  [DAYREPORT_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    state.dayReportList = action.dayReportList
  },
  [GET_ARTICLE_LIST_FAILURE](state){
    state.isFetching = false
  },
  [ADD_ARTICLE_LIST](state,action){
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