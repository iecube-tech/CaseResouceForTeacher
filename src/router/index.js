import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/index.vue'
import HomeView from '@/views/layout/index.vue'
import Index from '@/views/index/index.vue'
import Resouce from '@/views/resource/index.vue'
import MyResouce from '@/views/myresource/index.vue'
import MyProject from '@/views/myproject/index.vue'
import Analysis from '@/views/analysis/index.vue'
import Suggestion from '@/views/suggestion/index.vue'
import Account from '@/views/account/index.vue'
import Student from '@/views/student/index.vue'
import Device from '@/views/device/index.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'index',
          component: Index,
          children: [
            {
              path: ''
            }
          ]
        },
        {
          path: '/resource',
          name: 'resource',
          component: Resouce,
          children: [

          ]
        },
        {
          path: '/myresource',
          name: 'myresouce',
          component: MyResouce,
          children: [

          ]
        },
        {
          path: '/myproject',
          name: 'myproject',
          component: MyProject,
          children: [

          ]
        },
        {
          path: '/analysis',
          name: 'analysis',
          component: Analysis,
          children: [

          ]
        },
        {
          path: '/suggestion',
          name: 'suggestion',
          component: Suggestion,
          children: [

          ]
        },
        {
          path: '/account',
          name: 'account',
          component: Account,
          children: [

          ]
        },
        {
          path: '/student',
          name: 'student',
          component: Student,
          children: [

          ]
        },
        {
          path: '/device',
          name: 'device',
          component: Device,
          children: [

          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
