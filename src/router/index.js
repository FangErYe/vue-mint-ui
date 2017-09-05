import Vue from 'vue'
import Router from 'vue-router'

import evaluate from '@/components/evaluate/evaluate'

import Index from '@/components/index/index'
import taskIndex from '@/components/task/taskIndex.vue'
import biaodan from '@/components/form/form.vue'
import mine from '@/components/mine/mine.vue'

import task_build from '@/components/task/task_build'
import task_details from '@/components/task/task_details'
import task_details1 from '@/components/task/task_details1'
import task_details2 from '@/components/task/task_details2'
import task_form from '@/components/task/task_form'
import task_table from '@/components/task/task_table'
import task_address from '@/components/task/task_address'
import task_qyxz from  '@/components/task/task_qyxz'
import task_reason from '@/components/task/task_reason'

import statistics from '@/components/Statistics/statistics'
import Main from '@/components/app/appMain'
import Research from '@/components/research/research'
import progress from '@/components/Statistics/progress'
import archive from '@/components/Statistics/archive'
import login from '@/components/login/login'
import pwdChange from '@/components/login/pwdChange'
import resetPwd from '@/components/login/resetPwd'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate
    },
    {
      path: '/task_reason',
      name: 'task_reason',
      component: task_reason
    },
    {
      path: '/task_qyxz',
      name: 'task_qyxz',
      component: task_qyxz
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {  //首页
      path: '/',
      name: 'index',
      component: Index
    },
    {  //任务首页
      path: '/task',
      name: 'taskIndex',
      component: taskIndex
    },
    {  //表单
      path:'/form',
      name:'biaodan',
      component:biaodan
    },
    {  //我的
      path:'/mine',
      name:'mine',
      component:mine
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },{
      path: '/research',
      name: 'research',
      component: Research
    },{
      path: '/progress',
      name: 'progress',
      component: progress
    },{
      path: '/archive',
      name: 'archive',
      component: archive
    },{
      path: '/task_build',
      name: 'task_build',
      component: task_build
    },{
      path: '/task_details',
      name: 'task_details',
      component: task_details
    },{
      path: '/task_details1',
      name: 'task_details1',
      component: task_details1
    },{
      path: '/task_details2',
      name: 'task_details2',
      component: task_details2
    },{
      path: '/task_table',
      name: 'task_table',
      component: task_table
    },{
      path: '/task_form',
      name: 'task_form',
      component: task_form
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/pwdChange',
      name: 'pwdChange',
      component: pwdChange
    },{
      path: '/resetPwd',
      name: 'resetPwd',
      component: resetPwd
    },{
      path: '/task_address',
      name: 'task_address',
      component: task_address
    }
  ]
})

