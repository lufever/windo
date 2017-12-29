<template>

  <div>
    <div class="container-fluid main-box">
      <div class="row">     
        <div class="col-sm-7 col-sm-offset-3 main-content">     
			   <ul class="article-list list-unstyled clearfix">
				<li class="article-item" v-for="(employee,index) in employeeList"  :key="index" >		 
					<div>
						<p class="list-top">          
								<img class="avatar" v-lazy="'/assets/' + employee.img"    width="60px" height="60px"/>    
						<span class="time">{{ employee.employee}}</span>
						</p>
						<h4 class="title">
	
						</h4>
					</div>
				</li>
		
				<li v-if="employeeList.length < 1" class="no-content">正在大力回车...</li>
			</ul>
					
	      
        </div>
      </div>
    </div>
 
  </div>


	
</template>

 
<script>
import Vue from 'vue'
 import { mapState,mapActions } from 'vuex'
 import moment from 'moment';
 import VueLazyload from 'vue-lazyload'

 Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/avatar.png'),
  loading: require('@/assets/images/avatar.png'),
  attempt: 1
})

 export default { 
   computed: {
		     ...mapState({  
		      options: ({options}) => options.item,
		      employeeList: ({employee}) => { employee.employeeList.map(e=>{console.log(e.img)}); return employee.employeeList},
		      isFetching: ({employee}) => employee.isFetching      
		    }),	 
		},
 
		created(){ 
			if(this.employeeList.length < 1){
				this.getEmployeeList({options:{deptid:'6'}})
			}
		},
 	methods : {  
		...mapActions([ 
			'changeOptions',
			'getEmployeeList'
		])
 
    }
 
}
</script>

<style>
 .avatar{
	border: 2px solid transparent;   
    border-radius: 50%;
    box-sizing: border-box;
} 
</style>