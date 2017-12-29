<template>

  <div>
    <div class="container-fluid main-box">
      <div class="row">     
        <div class="col-sm-7 col-sm-offset-3 main-content">     
			   <ul class="article-list list-unstyled clearfix">
				<li class="article-item" v-for="(project,index) in projectList"  :key="index" >		 
					<div>
						<p class="list-top">               
						<span class="time">{{ project.project_name}}</span>
						</p>
						<h4 class="title">
			 
						</h4>
					</div>
				</li>
		
				<li v-if="projectList.length < 1" class="no-content">正在大力回车...</li>
			</ul>
					
	      
        </div>
      </div>
    </div>
 
  </div>


	
</template>
 
 
<script>
 import { mapState,mapActions } from 'vuex'
 import moment from 'moment';
 export default { 
   computed: {
		...mapState({  
		      options: ({options}) => options.item,
		      projectList: ({project}) => { return project.projectList},
		      isFetching: ({project}) => project.isFetching      
		    }), 
		}, 
	created(){  
			if(this.projectList.length < 1){
				this.getProjectList({options:{deptid:'6'}})
			}
		},
 	methods : {  
		...mapActions([ 
			'changeOptions',
			'getProjectList'
		]) 
    }
 
}
</script>