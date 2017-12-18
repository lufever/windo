import api from '../../api'
import {
  //ARTICLE_DETAIL,
  // TOGGLE_LIKE
} from '../types'

const state = {
  article:{},
  articles:{}
}
// actions
const actions = {
  getReportDetail ({ commit },id,user){
    api.getArticleDetail(id).then(response => {
      if(response.ok){
        //let isLike = false

 
        // if(user){
        //   user.likes.map(item=>{
        //     if(item.toString() === article._id){
        //       isLike = true
        //     }
        //   })
        // }
        commit('GET_ARTICLE_DETAIL', {data:response.data} 
          )
        // commit('GET_ARTICLE_DETAIL', {
        //   articleDetail: {... response.data}
        // })
        // commit(ARTICLE_DETAIL, {
        //   articleDetail: {...article,isLike:isLike}
        // })
      }
    })
  },
  // toggleLike({ commit }, id){
  //   api.toggleLike(id).then(response => {
  //     const json = response.data
  //     if(response.ok){
  //       commit(TOGGLE_LIKE, { 
  //         like_count: json.count,
  //         isLike: json.isLike 
  //       })
  //     }
  //   })
  // }
}

const mutations = {
  GET_ARTICLE_DETAIL(state, actionResult) {

  //  state.article = actionResult
      state.article ={...state.article,...actionResult} 

    //state.item ={...state.item,...actionResult.articleDetail} 
  }
  // [ARTICLE_DETAIL](state,action){
  //   state.article = {...state.item, ...action.articleDetail }
  // },
  // [TOGGLE_LIKE](state,action){
  //   state.item = {...state.item, isLike:action.isLike, like_count: action.like_count}
  // }
}

export default {
  state,
  actions,
  mutations
}