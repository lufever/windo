import {UserResource,AuthResource,ArticleResource,DayReportListResource,DayReportResource,ProjectListResource,ProjectResource,EmployeeListResource,EmployeeResource
  ,TagResource,MobileResource,CommentResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({id:'local'},data)
  },
  getSnsLogins: function () {
    return UserResource.get({id:'snsLogins'})
  },
  getMe: function () {
    return UserResource.get({id:'me'})
  },
  mdUser: function (data) {
    return UserResource.update({id:'mdUser'},data)
  },
  getTagList:function () {
    return TagResource.get({id: 'getFrontTagList'})
  },
  getApps:function () {
    return MobileResource.get({id: 'getApps'})
  },
  //article
  getIndexImage:function () {
    return ArticleResource.get({id:'getIndexImage'})
  },
  getFrontArticleList:function (options) {
    return ArticleResource.get({id: 'getFrontArticleList', ...options})
  },
  getDayReportList:function (options) {
    return DayReportListResource.get({action: 'Geteh_dayly_reports', ...options})
  },
  getDayReport:function (id) {
    return DayReportResource.get({id: id, action: 'Geteh_dayly_reports'})
  },
  postDayReport:function (data) {
    return DayReportResource.save({ action: 'Posteh_dayly_reports'},data)
  },
  putDayReport:function (id,data) { 
    return DayReportResource.update({id: id, action: 'Puteh_dayly_reports'},data)
  },


  getProjectList:function (options) {
    return ProjectListResource.get({action: 'Geteh_project', ...options})
  },
  getProject:function (id) {
    return ProjectResource.get({id: id, action: 'Geteh_project'})
  },
  postProject:function (data) {
    return ProjectResource.save({ action: 'Posteh_project'},data)
  },
  putProject:function (id,data) { 
    return ProjectResource.update({id: id, action: 'Puteh_project'},data)
  },

  getEmployeeList:function (options) {
    return EmployeeListResource.get({action: 'Geteh_employee', ...options})
  },
  getEmployee:function (id) {
    return EmployeeResource.get({id: id, action: 'Geteh_employee'})
  },
  postEmployee:function (data) {
    return EmployeeResource.save({ action: 'Posteh_employee'},data)
  },
  putEmployee:function (id,data) { 
    return EmployeeResource.update({id: id, action: 'Puteh_employee'},data)
  },

  getFrontArticleCount:function () {
    return ArticleResource.get({id: 'getFrontArticleCount'})
  },
  toggleLike:function (id) {
    return ArticleResource.update({id:id,controller:'toggleLike'},{})
  },
  getPrenext:function (id,options) {
    return ArticleResource.get({id:id,controller: 'getPrenext', ...options})
  },
  //comment
  getFrontCommentList:function (id) {
    return CommentResource.get({id:id,controller: 'getFrontCommentList'})
  },
  addNewComment:function (data) {
    return CommentResource.save({id:'addNewComment'},data)
  },
  addNewReply: function (id,data) {
    return CommentResource.save({id:id, controller:'addNewReply'},data)
  },
  delComment:function (id) {
    return CommentResource.remove({id:id})
  },
  delReply: function (id,data) {
    return CommentResource.update({id:id, controller:'delReply'},data)
  }
}