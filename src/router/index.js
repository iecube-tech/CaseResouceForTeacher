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
          path: '/course',
          name: 'course',
          component: () => import('@/views/course/index.vue'),
          meta: { title: '课程资源' },
          children: [
            {
              path: '/course_detail/:courseId',
              name: 'CourseDetail',
              component: () => import('@/views/course/courseDetail/index.vue'),
              hidden: true,
              meta: { title: '课程详情' }
            }
          ]
        },
        {
          path: '/mycourse',
          name: 'mycourse',
          component: () => import('@/views/course/mycourse/index.vue'),
          meta: { title: '我的课程' }
        },
        {
          path: '/applied_course/:courseId',
          name: 'AppliedCourse',
          component: () => import('@/views/course/appliedCourse/index.vue'),
          hidden: true,
          meta: { title: '应用课程' }
        },
        // {
        //   path: '/mycourse/coursemanage',
        //   name: 'teacherCourseManage',
        //   redirect: '/mycourse/coursemanage/createdcourse',
        //   component: () => import('@/views/teacherCourseManage/index.vue'),
        //   hidden: true,
        //   meta: { title: '课程管理', parentName: 'mycourse' },
        //   children: [
        //     {
        //       path: '/mycourse/coursemanage/createdcourse',
        //       name: 'CreateCourseList',
        //       component: () => import('@/views/teacherCourseManage/teacherCreateCourseList/index.vue'),
        //       meta: { title: '我创建的课程', parentName: 'mycourse' },
        //     },
        //     {
        //       path: '/mycourse/coursemanage/add',
        //       name: 'teacherAddCourse',
        //       component: () => import('@/views/teacherCourseManage/teacherEditCourse/index.vue'),
        //       meta: { title: '新建课程', parentName: 'CreateCourseList' },
        //     },
        //     {
        //       path: '/mycourse/coursemanage/modify/:courseId',
        //       name: 'teacherModifyCourse',
        //       component: () => import('@/views/teacherCourseManage/teacherEditCourse/index.vue'),
        //       meta: { title: '编辑课程', parentName: 'CreateCourseList' },
        //     },
        //     {
        //       path: '/mycourse/coursemanage/qb/:caseId',
        //       name: 'questionBankC',
        //       component: () => import('@/views/questionBank/index.vue'),
        //       meta: { title: '题库管理', parentName: 'CreateCourseList' }
        //     }
        //   ]
        // },
        {
          path: '/myresource',
          name: 'myresouce',
          meta: { title: '我的案例' },
          component: MyResouce,
        },
        // {
        //   path: '/myresource/casemanage',
        //   name: 'teacherCaseManage',
        //   redirect: '/myresource/casemanage/teachercreate',
        //   component: () => import('@/views/teacherCaseManage/index.vue'),
        //   hidden: true,
        //   meta: { title: '案例管理', parentName: 'myresouce' },
        //   children: [
        //     {
        //       path: '/myresource/casemanage/teachercreate',
        //       name: 'teacherCreateList',
        //       component: () => import('@/views/teacherCaseManage/teacherCreateCaseList/index.vue'),
        //       meta: { title: '我创建的案例', parentName: 'myresouce' },
        //     },
        //     {
        //       path: '/myresource/casemanage/add',
        //       name: 'teacherAddCase',
        //       component: () => import('@/views/teacherCaseManage/teacherEditCase/index.vue'),
        //       meta: { title: '新建案例', parentName: 'teacherCreateList' },
        //     },
        //     // {
        //     //   path: '/myresource/casemanage/modify/:caseId',
        //     //   name: 'teacherModifyCase',
        //     //   component: () => import('@/views/teacherCaseManage/teacherEditCase/index.vue'),
        //     //   meta: { title: '案例修改', parentName: 'teacherCreateList' }
        //     // },
        //     // {
        //     //   path: '/myresource/casemanage/qb/:caseId',
        //     //   name: 'questionBankR',
        //     //   component: () => import('@/views/questionBank/index.vue'),
        //     //   meta: { title: '题库管理', parentName: 'teacherCreateList' }
        //     // }
        //   ]
        // },
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
              path: ':projectId',
              component: ProjectDetail,
              hidden: true,
              meta: { title: '项目详情' },
              children: [
                {
                  path: '',
                  name: 'ProjectDetail',
                  component: () => import('@/views/projectDetail/projectDetail/index.vue'),
                  meta: { title: '项目信息', parentName: 'myproject' },
                },
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
                },
                {
                  path: 'duplicate_checking',
                  name: 'duplicateChecking',
                  component: () => import('@/views/projectDetail/duplicateChecking/index.vue'),
                  meta: { title: '报告查重', parentName: 'ProjectDetail' }
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
              redirect: 'c',
              component: analysisDetail,
              hidden: true,
              meta: { title: '项目数据信息', parentName: 'analysis' },
              children: [
                {
                  path: '/adetail/:projectId/c',
                  name: 'analysisDetailC',
                  component: () => import('@/views/analysis/analysisDetail/current/index.vue'),
                  meta: { title: '当前项目数据' }
                },
                {
                  path: '/adetail/:projectId/h',
                  name: 'analysisDetailH',
                  component: () => import('@/views/analysis/analysisDetail/history/index.vue'),
                  meta: { title: '案例历史数据' }
                }
              ]
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
              redirect: 's',
              component: suggestionDetail,
              hidden: true,
              meta: { title: '改进建议详情', parentName: "suggestion" },
              children: [
                {
                  path: '/sdetail/:projectId/s',
                  name: 'suggestionDetailS',
                  component: () => import('@/views/suggestion/suggestionDetail/studentSuggestion/index.vue'),
                  meta: { title: '学生' }
                },
                {
                  path: '/sdetail/:projectId/p',
                  name: 'suggestionDetailP',
                  component: () => import('@/views/suggestion/suggestionDetail/projectSuggestion/index.vue'),
                  meta: { title: '项目' }
                }
              ]
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
        },
      ]
    },
    {
      path: '/log-content',
      name: 'LogContent',
      component: () => import('@/components/logView/index.vue'),
      props: route => ({ url: decodeURIComponent(route.query.url) })
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/creation',
      name: 'creation',
      meta: { title: "创作中心" },
      component: () => import('@/views/creation/index.vue'),
      children: [
        {
          path: '',
          redirect: '/creation/case',
          name: 'creationIndex',
        },
        {
          path: '/creation/case',
          name: 'creationCase',
          meta: { title: '案例管理' },
          component: () => import("@/views/creation/case/index.vue"),
          children: [
            {
              path: '',
              name: 'creationCaseList',
              component: () => import('@/views/teacherCaseManage/teacherCreateCaseList/index.vue'),
              meta: { title: '案例列表' }
            },
            {
              path: '/creation/case/edit',
              name: 'creationCaseEdit',
              component: () => import('@/views/teacherCaseManage/teacherEditCase/index.vue'),
              meta: { title: '发布案例', parentName: 'creationCaseList' }
            },
            {
              path: '/creation/case/modify/:caseId',
              name: 'teacherModifyCase',
              component: () => import('@/views/teacherCaseManage/teacherEditCase/index.vue'),
              meta: { title: '案例修改', parentName: 'creationCaseList' }
            },
            {
              path: '/creation/case/qb/:caseId',
              name: 'questionBankR',
              component: () => import('@/views/questionBank/index.vue'),
              meta: { title: '题库管理', parentName: 'creationCaseList' }
            }
          ]
        },
        {
          path: '/creation/course',
          name: 'creationCourse',
          meta: { title: '课程管理' },
          component: () => import("@/views/creation/course/index.vue"),
          children: [
            {
              path: '',
              name: 'creationCourseList',
              component: () => import('@/views/teacherCourseManage/teacherCreateCourseList/index.vue'),
              meta: { title: '课程列表' }
            },
            {
              path: '/creation/course/edit',
              name: 'creationCourseEdit',
              component: () => import('@/views/teacherCourseManage/teacherEditCourse/index.vue'),
              meta: { title: '发布课程', parentName: 'creationCourseList' }
            },

            {
              path: '/creation/course/modify/:courseId',
              name: 'teacherModifyCourse',
              component: () => import('@/views/teacherCourseManage/teacherEditCourse/index.vue'),
              meta: { title: '编辑课程', parentName: 'creationCourseList' },
            },
            {
              path: '/creation/course/qb/:caseId',
              name: 'questionBankC',
              component: () => import('@/views/questionBank/index.vue'),
              meta: { title: '题库管理', parentName: 'creationCourseList' }
            },
            {
              path: '/creation/video',
              name: 'videoTest',
              component: () => import('@/v-Test/videoTest.vue'),
              meta: { title: '视频播放测试', parentName: 'videoTest' }
            }
          ]
        }
      ]
    }

  ]
})


export default router
