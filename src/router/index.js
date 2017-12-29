import Vue from 'vue'
import Router from 'vue-router'
import home from './routes/home'
import dayreport from './routes/dayreport' 
import project from './routes/project' 
import department from './routes/department' 

const Login = () => import('@/modules/Login')
const NotFound = ()=> import('@/modules/NotFound')
const Root = () => import('@/modules/Root/')
const Layout = () => import('@/components/Layout')

Vue.use(Router)
 
 


const router = new Router({
 mode: 'history',
  // scrollBehavior: true,  


  routes: [
    {
      path: '/',
      component: Root,
      children: [
        {
          path: '/',
          component: Layout,
          children: [ 
            home,
            dayreport,
            project,
            department,
           ],
          // meta: {
          //   requiresAuth: true
          // }
        },
        {
          path: '/dayreport/form/:id?',
          component: resolve => require(['@/modules/DayReport/Form'], resolve)
        },
        {
          path: '/login',  
          component: Login    
        },     
        {
          path: '*',
          component: NotFound
        }        
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.goTop)) {
//     window.scroll(0, 0) 
//   }

//   // if (to.matched.some(record => record.meta.requiresAuth)) {
//   //   if (!isLogin()) {
//   //     return next({path: '/login'})
//   //   }
//   // }
//   // if (to.matched.some(record => record.meta.requiresNotAuth)) {
//   //   if (isLogin()) {
//   //     return next({path: '/'})
//   //   }
//   // }
//   next()
// })
export default router