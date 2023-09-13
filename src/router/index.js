import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/index.vue'
import HomeView from '@/views/layout/index.vue'
import Index from '@/views/index/index.vue'
import Resouce from '@/views/resource/index copy.vue'
import MyResouce from '@/views/myresource/index.vue'
import ResourceDetail from '@/views/resourceDetail/index.vue'
import MyProject from '@/views/myproject/index.vue'
import ProjectDetail from '@/views/projectDetail/index.vue'
import ProjectStudentDetail from '@/views/projectStudentDetail/index.vue'
import Analysis from '@/views/analysis/index.vue'
import Suggestion from '@/views/suggestion/index.vue'
import Account from '@/views/account/index.vue'
import Student from '@/views/student/index.vue'
import Device from '@/views/device/index.vue'
import AddProject from '@/views/addProject/index.vue'
import analysisDetail from '@/views/analysis/analysisDetail/index.vue'
import suggestionDetail from '@/views/suggestion/suggestionDetail/index.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '首页' },
      children: [
        {
          path: '',
          name: 'index',
          component: Index,
          meta: { title: '首页' },
          children: []
        },
        {
          path: '/resource',
          name: 'resource',
          component: Resouce,
          meta: { title: '项目案例' },
          children: [
            {
              path: '/resourse_detail/:resourceId',
              name: 'ResourceDetail',
              component: ResourceDetail,
              hidden: true,
              meta: { title: '案例详情' }
            },
          ]
        },
        {
          path: '/myresource',
          name: 'myresouce',
          meta: { title: '我的案例' },
          component: MyResouce,
        },
        {
          path: '/addproject/:resourceId',
          name: 'AddProject',
          component: AddProject,
          hidden: true,
          meta: { title: '发布项目' }
        },
        {
          path: '/myproject',
          name: 'myproject',
          meta: { title: '我的发布' },
          component: MyProject,
          children: [
            {
              path: 'project_detail/:projectId',
              name: 'ProjectDetail',
              component: ProjectDetail,
              hidden: true,
              meta: { title: '项目详情' },
              children: [
                {
                  path: 'project_student_detail/:studentId/:stepNum',
                  name: 'ProjectStudentDetail',
                  component: ProjectStudentDetail,
                  hidden: true,
                  meta: { title: '学生完成项目详情', parentName: 'ProjectDetail' },
                },
                {
                  path: 'project_student_detail/:studentId/:stepNum/mytag',
                  name: 'mytag',
                  component: () => import('@/views/mytag/index.vue'),
                  meta: { title: 'tag管理', parentName: 'ProjectStudentDetail' }
                }
              ]
            },
          ]
        },
        {
          path: '/analysis',
          name: 'analysis',
          meta: { title: '项目数据' },
          component: Analysis,
          children: [
            {
              path: '/adetail/:projectId',
              name: 'analysisDetail',
              component: analysisDetail,
              hidden: true,
              meta: { title: '项目数据信息' },
            },
          ]
        },
        {
          path: '/suggestion',
          name: 'suggestion',
          meta: { title: '改进建议' },
          component: Suggestion,
          children: [
            {
              path: '/sdetail/:projectId',
              name: 'suggestionDetail',
              component: suggestionDetail,
              hidden: true,
              meta: { title: '项目改进建议详情' },
            },
          ]
        },
        {
          path: '/account',
          name: 'account',
          meta: { title: '账户管理' },
          component: Account,
          children: [

          ]
        },
        {
          path: '/student',
          name: 'student',
          meta: { title: '学生管理' },
          component: Student,
          children: [

          ]
        },
        {
          path: '/device',
          name: 'device',
          meta: { title: '设备管理' },
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
