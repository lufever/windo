import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
import {API_ROOT_LOCAL} from '../config'
import { getCookie,signOut,isLogin } from '../utils/authService'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  request.headers = request.headers || {}
  if (isLogin()) {
    request.headers.set('Authorization', 'Bearer '+ getCookie('token').replace(/(^\")|(\"$)/g, ''))
  }
  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
  })
})

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
export const AuthResource = Vue.resource(API_ROOT + 'auth{/id}')
export const ArticleResource = Vue.resource(API_ROOT + 'article{/id}{/action}')
export const DayReportListResource = Vue.resource(API_ROOT_LOCAL + 'daylyreport{/action}')
export const DayReportResource = Vue.resource(API_ROOT_LOCAL + 'daylyreport{/id}{/action}')
export const ProjectListResource = Vue.resource(API_ROOT_LOCAL + 'Project{/action}')
export const ProjectResource = Vue.resource(API_ROOT_LOCAL + 'Project{/id}{/action}')

export const EmployeeListResource = Vue.resource(API_ROOT_LOCAL + 'Employee{/action}')
export const EmployeeResource = Vue.resource(API_ROOT_LOCAL + 'Employee{/id}{/action}')


export const TagResource = Vue.resource(API_ROOT + 'tags{/id}')
export const CommentResource = Vue.resource(API_ROOT + 'comment{/id}{/controller}')
export const MobileResource = Vue.resource(API_ROOT + 'mobile{/id}')