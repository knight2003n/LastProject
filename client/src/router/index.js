import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

import AllTree from '@/components/Tree/AllTree'
import TreeCreate from '@/components/Tree/CreateTree'
import TreeEdit from '@/components/Tree/EditTree'
import TreeShow from '@/components/Tree/ShowTree'

import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'users-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    
    {
      path: '/tree',  
      name: 'tree',   
      component: AllTree  
    },
    {
      path: '/tree/create',  
      name: 'tree-create',   
      component: TreeCreate  
    },
    {
      path: '/tree/edit/:treeId',  
      name: 'tree-edit',  
      component: TreeEdit  
    },
    {
      path: '/tree/:treeId',  
      name: 'tree-show',   
      component: TreeShow  
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    
  ]
})
