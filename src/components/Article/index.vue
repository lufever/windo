<template>
  <div class="article-box">
 
      <div class="article-container">
               <!-- <h1 class="title" >{{ article.reports_id }}</h1>  -->
                              <!-- <h1 class="title" >{{ reports_id }}</h1> 
        <span>{{ reports_id ? '编辑' : '新增' }}</span> -->

        <!-- <div class="counts">
          <span class="views-count">阅读{{articleDetail.visit_count}}</span>
          <span class="comments-count">评论{{articleDetail.comment_count}}</span>
          <span class="likes-count">喜欢{{articleDetail.like_count}}</span>
        </div>  -->
      <!-- <textarea v-html="reports"> </div>      </textarea> -->
      </div>
    
 
    <!-- <Like :like-count="articleDetail.like_count" :is-like="articleDetail.isLike"></Like> -->
    <!-- <Prenext :prev-article="prevArticle" :next-article="nextArticle"></Prenext>
    <Comment :comment-list="commentList" :user="user"></Comment>
    <Loginmodal ref='modal'></Loginmodal>
    <Scrolltop></Scrolltop> -->
  </div>
</template>
<script>
// import ArtickeContent from './content.vue'
// import Comment from './comment.vue'
// import Prenext from './prenext.vue'
// import Like from './like.vue'
// import Loginmodal from '../Login/modal.vue'
// import Scrolltop from '../Scrolltop/index.vue'
import { mapState,mapActions } from 'vuex'

export default {
  //components: { ArtickeContent,Like,Prenext,Comment,Scrolltop,Loginmodal },
   // components: { ArtickeContent },
computed: mapState([
  // 映射 this.articleDetail 为 store.state.articleDetail
  'articleDetail'
]),

  //computed: {
    //...mapState(
   //{
   
     //articleDetail: ({articleDetail}) => articleDetail.item,
      // user: ({auth}) => auth.user,
      // nextArticle: ({prenextArticle}) => prenextArticle.next,
      // prevArticle: ({prenextArticle}) => prenextArticle.prev,
      // commentList: ({commentList}) => commentList.items,
      //options: ({options}) => options.item,
     // aid: ({route}) => route.params.aid    
    
  //}
  //),
 // },
  // data () {

     
  //     return {
  //       reports_id: '3',
  //       formValidate: {
  //         title: '',
  //         content: ''
  //       },
  //       ruleValidate: {
  //         title: [
  //           {
  //             required: true,
  //             message: '标题不能为空'
  //           },
  //           {
  //             max: 100,
  //             message: '标题不能多于 100 个字'
  //           }
  //         ],
  //         content: [
  //           {
  //             required: true,
  //             message: '内容不能为空'
  //           },
  //           {
  //             max: 2000,
  //             message: '内容长度过长'
  //           }
  //         ]
  //       }
  //     }
  //   },
  created () {
    this.initData()

  },
  watch: {
    '$route': 'initData'
  },  
  methods:{
    ...mapActions([
      'getReportDetail',
      // 'getPrenext',
      // 'getCommentList',
      // 'toggleLike',
      // 'addComment',
      // 'addReply'
    ]),
    initData(){
       const aid = this.$route.params.aid
       aid && this.getReportDetail(aid)
    console.log(this)
      // this.getPrenext(aid)
      // this.getCommentList(aid)
      //this.getReportDetail(aid, this.user)
    }, 
    // openLoginModal(){
    //   this.$refs.modal.showModal()
    // },
    // handleToggleLike(){
    //   if(this.user){
    //     this.toggleLike(this.$route.params.aid)
    //   }
    // },
    // handleSubmitComment(content){
    //   if(this.user && content.trim() !== ''){
    //     this.addComment({aid:this.$route.params.aid, content: content})
    //   }else{
    //     this.openLoginModal()
    //   }
    // },
    // handleShowReply(content){
    //   //判断是否登录.未登录则弹出登录框.
    //   if(this.user && content.trim() !== ''){
    //     this.addComment({aid:this.$route.params.aid, content: content})
    //   }else{
    //     this.openLoginModal()
    //   }
    // },
    // handleSubmitReply(cid,content){
    //   if(this.user && content.trim() !== ''){
    //     this.addReply({cid:cid,data:{content:content}})
    //   }else{
    //     this.openLoginModal()
    //   }
    // }
  }
}
</script>