import Vue from 'vue'
import Router from 'vue-router'

//import home from './routes/home'
//import dayreport from './routes/dayreport' 
const Home = () => import('@/modules/Home')
const Login = () => import('@/modules/Login')
const NotFound = ()=> import('@/modules/NotFound')
//const Root = () => import('@/modules/Root/')
const Layout = () => import('@/components/Layout')

Vue.use(Router)
 
 


const router = new Router({
  mode: 'history',
  // scrollBehavior: true,  
  routes: [
    {
      path: '/',
      name: 'layourt',
      component: Layout,
      children:[   
             {
          path: '/',
          name: 'home',
          component: Home,
          meta:{
            requiresAuth: true
          }
        },
         // {
        //   path: '/settings',
        //   name: 'settings',
        //   component: Settings,
        //   meta:{
        //     requiresAuth: true
        //   }
        // },
        {
          path: 'dayreport', 
          component: resolve=> require(['@/modules/DayReport'], resolve),
          children: [
              {
                path: '/',
                component: resolve => require(['@/modules/DayReport/List'], resolve)
              },
              {
                path: 'form/:id?',
                component: resolve => require(['@/modules/DayReport/Form'], resolve)
              }
          ]  
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        requiresNotAuth: true
      }      
    },
    
    {
      path: '*',
      component: NotFound
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