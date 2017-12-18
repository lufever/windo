import {UserResource,AuthResource,ArticleResource,DayReportResource,TagResource,MobileResource,CommentResource} from './resources'

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
  Geteh_dayly_reportsByMonth:function (options) {
    return DayReportResource.get({id: 'Geteh_dayly_reportsByMonth', ...options})
  },
  getFrontArticleCount:function () {
    return ArticleResource.get({id: 'getFrontArticleCount'})
  },
  Geteh_dayly_reports:function (id) {
    return DayReportResource.get({id: id, controller: 'Geteh_dayly_reports'})
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