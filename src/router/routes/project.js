 export default {
  path: 'project', 
  component: resolve=> require(['@/modules/Project'], resolve),
  children: [
      {
        path: '/',
        component: resolve => require(['@/modules/Project/List'], resolve)
      }
  ]  
}
 