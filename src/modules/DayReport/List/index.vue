<template>

  <div>
    <div class="container-fluid main-box">
      <div class="row">     
        <div class="col-sm-7 col-sm-offset-3 main-content">     
			   <ul class="article-list list-unstyled clearfix">
					 
				<li class="article-item" v-for="(dayInfo,index) in dayList"  :key="index" >		 
					<div>
						<p class="list-top">               
						<span class="time">{{ dayInfo.date}}</span>		<span v-if="dayInfo.isWeekday">累计</span>
						</p>
						<h4 class="title">
							<div v-if="dayInfo.report.reports_id!=null">
										<span class="">{{ dayInfo.report.state}}</span>			
										<span class="hidden">{{ dayInfo.report.reports_id}}</span>
										<router-link  :to="{ path: 'form/'+dayInfo.report.reports_id   }  "              class="link-title" append>					
										<pre>{{dayInfo.report.reports}} </pre>
										</router-link> 
				
								</div>
								<div v-else>
									<router-link  :to="{ path: 'form' }"  class="link-title" append>					
										<pre>{{dayInfo.report.reports}} </pre>
									</router-link> 	
								</div>
						</h4>
					</div>
				</li>
		
				<li v-if="dayReportList.length < 1" class="no-content">正在大力回车...</li>
			</ul>
					
	      
        </div>
      </div>
    </div>
 
  </div>


	
</template>
 
 
<script>
import { mapState,mapActions } from 'vuex'
import moment from 'moment';
import business from 'moment-business';
 export default { 
   computed: {
		     ...mapState({  
		      options: ({options}) => options.item,
		      dayReportList: ({dayReport}) => {  return dayReport.dayReportList},
		      isFetching: ({dayReport}) => dayReport.isFetching      
		    }),
				dayList () 
						{
						var arr=Array(new Date().getDate()).fill(null).map((v,i)=> 			 new Date(new Date().setDate(new Date().getDate()-i) )	)
						return  arr.map(d=> {
								return	{          
								isWeekday:business.isWeekDay(moment(d)),
								date : moment(d).format("YYYY-MM-DD"),
								report : this.slotEvents( d)
									}
							});
						}
		}, 
		created(){ 
			if(this.dayReportList.length < 1){
				this.getDayReportList({options:this.options})
			}
		},
 	methods : {  
		...mapActions([ 
			'changeOptions',
			'getDayReportList'
		]),
      slotEvents (d) {  		
			let o=this.dayReportList.filter(report => 	{    return   moment(report.day).format("YYYY-MM-DD") ==	moment(d).format("YYYY-MM-DD") }		)
			return o.length>0?o[0]:{}; 
	  } 
    }
 
}
</script>