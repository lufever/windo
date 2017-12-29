 export default {
  path: 'department', 
  component: resolve=> require(['@/modules/Department'], resolve),
  children: [
      {
        path: '/',
        component: resolve => require(['@/modules/Department/List'], resolve)
      }
  ]  
}
 