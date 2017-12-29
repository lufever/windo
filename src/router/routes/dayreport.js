 export default {
  path: 'dayreport', 
  component: resolve=> require(['@/modules/DayReport'], resolve),
  children: [
      {
        path: '/',
        component: resolve => require(['@/modules/DayReport/List'], resolve)
      }
  ]  
}
 