import api from '../../api'
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
  dayReport: []
}


 
const actions = {
  getDayReportList({ commit }, {options, isAdd=false}){
    commit(REQUEST_DAYREPORT_LIST)
    api.Geteh_dayly_reportsByMonth(options).then(response => {
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
  getReport ({ commit },id,user){
    api.Geteh_dayly_reports(id).then(response => {
      if(response.ok){
        //let isLike = false
  
  
        // if(user){
        //   user.likes.map(item=>{
        //     if(item.toString() === article._id){
        //       isLike = true
        //     }
        //   })
        // }
        commit('GET_DAYREPORT', {data:response.data} 
          )
        // commit('GET_ARTICLE_DETAIL', {
        //   articleDetail: {... response.data}
        // })
        // commit(ARTICLE_DETAIL, {
        //   articleDetail: {...article,isLike:isLike}
        // })
      }
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
          state.dayReport ={...state.dayReport,...payload} 
    
        //state.item ={...state.item,...actionResult.articleDetail} 
  },
  [REQUEST_DAYREPORT_LIST](state){
    state.isFetching = true
  },
  [GET_DAYREPORT_LIST](state,action){
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