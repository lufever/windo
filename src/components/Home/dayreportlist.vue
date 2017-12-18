<template>
	<ul class="article-list list-unstyled clearfix">
		<li class="article-item" v-for="(dayInfo,index) in dayList"  :key="index" >		 
			<div>
				<p class="list-top">               
				<span class="time">{{ dayInfo.date}}</span>
				</p>
				<h4 class="title">
					<div v-if="dayInfo.report.reports_id!=null">
								<span class="">{{ dayInfo.report.state}}</span>
								<span class="hidden">{{ dayInfo.report.reports_id}}</span>
								<router-link           :to="{ name: 'article', params: {aid: dayInfo.report.reports_id } }"              class="link-title">					
								<pre>{{dayInfo.report.reports}} </pre>
	</router-link> 
						</div>
						<div v-else>
							<router-link  :to="{ name: 'article' }"              class="link-title">					
															<pre>{{dayInfo.report.reports}} </pre>
							</router-link> 	
						</div>
							


				</h4>
		
			</div>
		</li>
 
		 <li v-if="dayReportList.length < 1" class="no-content">正在大力回车...</li>
	</ul>
</template>

<script>
  import moment from 'moment';
	export default {
   props: ['dayReportList'],
 
   	computed: {
	  dayList () 
	  	  {
		var arr=Array(new Date().getDate()).fill(null).map((v,i)=> 			 new Date(new Date().setDate(new Date().getDate()-i) )	)
 	 	 
		  return  arr.map(d=> {
			return	{          
              date : moment(d).format("YYYY-MM-DD"),
              report : this.slotEvents( d)
				}
			}
			);
 
      }
    },
 	methods : {  
      slotEvents (d) {  
				console.log(this)
			let o=this.dayReportList.filter(report => 	{    return   moment(report.day).format("YYYY-MM-DD") ==	moment(d).format("YYYY-MM-DD") }		)
			return o.length>0?o[0]:{}; 
	  } 
    },
 
}
</script>