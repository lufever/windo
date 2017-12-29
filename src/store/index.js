import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import apps from './modules/apps'
import dayReport from './modules/dayreport'
import project from './modules/project'
import employee from './modules/employee'
import prenextArticle from './modules/article.prenext'
// import dayReportDetail from './modules/dayreport.detail'
import auth from './modules/auth'
import commentList from './modules/comment.list'
import globalVal from './modules/global.val'
import options from './modules/options'
import logins from './modules/logins'
import tagList from './modules/tag.list'
import showmsg from './modules/showmsg'
import * as actions from './actions'
import * as getters from './getters'


const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    apps,
    dayReport,
    project,
    employee,
    prenextArticle,
    auth,
    commentList,
    globalVal,
    options,
    logins,
    tagList,
    showmsg
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
