<template>
  <div>
    <div class="container-fluid main-box">
      <div class="row">
        <!-- <Sidebar :index-img="indexImg"></Sidebar> -->
        <div class="col-sm-7 col-sm-offset-3 main-content">
          <!-- <Tags :tag-list="tagList" :options="options" :is-fetching="isFetching"></Tags> -->
          <DayReportList :dayreport-list="dayReportList"></DayReportList>
          <!-- <Loadmore v-if="articleList.length > 0 && isMore" :options="options" :is-more="isMore" :is-fetching="isFetching"></Loadmore> -->
        </div>
      </div>
    </div>
    <!-- <Footerbar></Footerbar> -->
  </div>
</template>
<script>
// import Sidebar from './sidebar.vue'
// import Tags from './tags.vue'
import DayReportList from './dayreportlist.vue'
//import Loadmore from './loadmore.vue'
// import Footerbar from './footer.vue'
import { mapState,mapActions } from 'vuex'

export default {
 // components:{ Sidebar,Footerbar,Tags,Articles,Loadmore },
 components:{ DayReportList },
  computed: {
    ...mapState({
     
     // indexImg: ({globalVal}) => globalVal.indexImg,
     // tagList: ({tagList}) => tagList.items,
      options: ({options}) => options.item,
      dayReportList: ({dayReport}) => dayReport.dayReportList.DayReportList,
     // isMore: ({articleList}) => articleList.isMore,
      isFetching: ({dayReport}) => dayReport.isFetching      
    })
  },  
  created(){
    // if(this.indexImg === ''){
    //   this.getIndexImage()
    // }
    // if(this.tagList.length < 1){
    //   this.getTagList()
    // }
    if(this.dayReportList.length < 1){
      this.getDayReportList({options:this.options})
    }
  },
  methods:{
    ...mapActions([
      // 'getIndexImage',
      // 'getTagList',
      'changeOptions',
      'getDayReportList'
    ]),    
    // handleChange(options,isAdd=false){
    //   this.changeOptions(options)
    //   this.getDayReportList({options:this.options,isAdd:isAdd})
    // }
  }
}
</script>