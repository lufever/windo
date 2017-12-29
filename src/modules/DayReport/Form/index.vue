<template>
  <div class="article-box">
          <Button type="primary" @click="handleSave" class="margin-right-sm">保存</Button>
          <Button type="ghost" @click="$router.push('/dayreport')">返回</Button>
          <textarea ref="editor" v-model="formValidate.reports"  ></textarea>          
        
 
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
  // 映射 this.dayReport 为 store.state.dayReport
  'dayReport'
]),
 
//   computed: {
//     ...mapState(
//    {
//          dayReportDetail: ({dayReport}) => {  return dayReport.dayReportDetail}, 
//       user: ({auth}) => auth.user,
//       nextArticle: ({prenextArticle}) => prenextArticle.next,
//       prevArticle: ({prenextArticle}) => prenextArticle.prev,
//       commentList: ({commentList}) => commentList.items,
//       options: ({options}) => options.item,
//      aid: ({route}) => route.params.aid    
    
//   }
//   ),
//  },
  data () { 
        return { 
          formValidate: {
            reports_id: '',
            reports: ''
          },
          ruleValidate: {
            title: [
              {
                required: true,
                message: '标题不能为空'
              },
              {
                max: 100,
                message: '标题不能多于 100 个字'
              }
            ],
            reports: [
              {
                required: true,
                message: '内容不能为空'
              },
              {
                max: 2000,
                message: '内容长度过长'
              }
            ]
          }
        }
  },
  created () { 
 
    this.initData()
  },
  watch: {
    'dayReport.dayReportDetail': {
        handler (newVal) {
          let outData={reports_id:newVal.reports_id,reports:newVal.reports}
          this.$set(this, 'formValidate', outData)
        }
      },
    '$route': 'initData'
  },  
  methods:{
 

 
    // get (id) {
    //     this.$store.dispatch('getDayReport', {aid})
    //   },
    ...mapActions([
      'getDayReport',
      // 'getPrenext',
      // 'getCommentList',
      // 'toggleLike',
       'postDayReport',
       'putDayReport'
      // 'addReply'
    ]),
    initData(){
       const id = this.$route.params.id
       this.id=id;
       id && this.getDayReport(id)   
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
    handleSave(content){
      const {id, formValidate} = this
      const action = id ? 'putDayReport' : 'postDayReport'    
      //if(this.user && content.trim() !== ''){
  
        this[action]({id:this.$route.params.id, data: formValidate})
      //}
      },
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