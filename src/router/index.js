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
import { ElMessage } from 'element-plus'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('@/views/index/redirect.vue')
    },
    {
      path: '/t',
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
          path: 'resource',
          name: 'resource',
          component: Resouce,
          meta: { title: '项目案例' },
          children: [
            {
              path: 'resourse_detail/:resourceId',
              name: 'ResourceDetail',
              component: ResourceDetail,
              hidden: true,
              meta: { title: '项目详情' }
            },
          ]
        },
        {
          path: 'myresource',
          name: 'myresouce',
          meta: { title: '我的项目' },
          component: MyResouce,
          children: [
            {
              path: 'resourse_detail/:resourceId',
              name: 'MyResourceDetail',
              component: ResourceDetail,
              hidden: true,
              meta: { title: '项目详情' }
            },
          ]
        },
        {
          path: 'course',
          name: 'course',
          component: () => import('@/views/course/index.vue'),
          meta: { title: '课程资源' },
          children: [
            {
              path: 'course_detail/:courseId',
              name: 'CourseDetail',
              component: () => import('@/views/course/courseDetail/index.vue'),
              hidden: true,
              meta: { title: '课程详情', scrollTo: window.location.hash }
            }
          ]
        },
        {
          path: 'mycourse',
          name: 'mycourse',
          component: () => import('@/views/course/mycourse/index.vue'),
          meta: { title: '我的课程' },
          children: [
            {
              path: 'course_detail/:courseId',
              name: 'MyCourseDetail',
              component: () => import('@/views/course/courseDetail/index.vue'),
              hidden: true,
              meta: { title: '课程详情', scrollTo: window.location.hash }
            }
          ]
        },
        {
          path: 'applied_course/:courseId',
          name: 'AppliedCourse',
          component: () => import('@/views/course/appliedCourse/index.vue'),
          hidden: true,
          meta: { title: '应用课程' }
        },
        {
          path: 'addproject/:resourceId',
          name: 'AddProject',
          component: AddProject,
          hidden: true,
          meta: { title: '发布' }
        },
        {
          path: 'myproject',
          name: 'myproject',
          meta: { title: '我的发布' },
          component: MyProject,
          children: [
            {
              path: ':projectId',
              component: ProjectDetail,
              hidden: true,
              meta: { title: '发布详情' },
              children: [
                {
                  path: '',
                  name: 'ProjectDetail',
                  component: () => import('@/views/projectDetail/projectDetail/index.vue'),
                  meta: { title: '基本信息', parentName: 'myproject' },
                },
                {
                  path: 'add_student',
                  name: 'ProjectAddStudent',
                  component: () => import('@/views/projectDetail/projectDetail/index.vue'),
                  meta: { title: '基本信息', parentName: 'ProjectDetail' },
                },
                {
                  path: 'student_compare',
                  name: 'projectLogCompare',
                  component: () => import('@/views/projectDetail/projectLogCompare/index.vue'),
                  hidden: true,
                  meta: { title: '学生仪器操作概览', parentName: 'ProjectDetail' }

                },
                {
                  path: 'project_student_detail/:studentId/:stepNum',
                  name: 'ProjectStudentDetail',
                  component: ProjectStudentDetail,
                  hidden: true,
                  meta: { title: '学生完成详情', parentName: 'ProjectDetail' },
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
          path: 'mp',
          name: 'manageProject',
          meta: { title: '发布管理' },
          component: () => import('@/views/myproject/manage/index.vue'),
        },
        {
          path: 'analysis',
          name: 'analysis',
          meta: { title: '数据分析' },
          component: Analysis,
          children: [
            {
              path: '/adetail/:projectId',
              name: 'analysisDetail',
              redirect: 'c',
              component: analysisDetail,
              hidden: true,
              meta: { title: '详细信息', parentName: 'analysis' },
              children: [
                {
                  path: '/adetail/:projectId/c',
                  name: 'analysisDetailC',
                  component: () => import('@/views/analysis/analysisDetail/current/index.vue'),
                  meta: { title: '当前数据' }
                },
                {
                  path: '/adetail/:projectId/h',
                  name: 'analysisDetailH',
                  component: () => import('@/views/analysis/analysisDetail/history/index.vue'),
                  meta: { title: '全局数据' }
                }
              ]
            },
          ]
        },
        {
          path: 'suggestion',
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
          path: 'account',
          name: 'account',
          meta: { title: '账户管理' },
          component: Account,
          children: [

          ]
        },
        {
          path: 'student',
          name: 'student',
          meta: { title: '学生管理' },
          component: Student,
          children: [

          ]
        },
        {
          path: 'device',
          name: 'device',
          meta: { title: '设备管理' },
          component: Device,
          children: [
            {
              path: '',
              name: 'deviceList',
              component: () => import('@/views/device/list/index.vue'),
              meta: { title: '设备列表' }
            }
          ]
        },
        {
          path: "download",
          name: "resourceDownload",
          meta: { title: "资源下载" },
          component: () => import('@/views/downloadResource/index.vue')
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
      meta: { title: "创作中心", auth: ["CR", "CRD"] },
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
          ]
        },
        {
          path: '/creation/mdc',
          name: 'creationMdCourse',
          meta: { title: 'MD课程管理' },
          component: () => import("@/views/creation/mdCourse/index.vue"),
          children: [
            {
              path: '',
              name: 'creationMdCourseList',
              component: () => import('@/views/teacherMdCourseManage/teacherCreateMdCourseList/index.vue'),
              meta: { title: 'MD课程列表' }
            },
            {
              path: '/creation/mdc/edit',
              name: 'creationMdCourseEdit',
              component: () => import('@/views/teacherMdCourseManage/teacherEditMdCourse/index.vue'),
              meta: { title: '发布MD课程', parentName: 'creationMdCourseList' }
            },
            {
              path: '/creation/mdc/modify/:courseId',
              name: 'teacherModifyMdCourse',
              component: () => import('@/views/teacherMdCourseManage/teacherEditMdCourse/index.vue'),
              meta: { title: '编辑MD课程', parentName: 'creationMdCourseList' },
            },
            {
              path: '/creation/mdc/qb/:caseId',
              name: 'questionBankMd',
              component: () => import('@/views/questionBank/index.vue'),
              meta: { title: '题库管理', parentName: 'creationMdCourseList' }
            },
          ]
        }
      ]
    },
    {
      path: '/md',
      name: 'markdown',
      meta: { title: "指导书", auth: ["MD", "MDD"] },
      component: () => import("@/views/doc_md/index.vue"),
      children: [
        {
          path: '',
          name: 'markdownIndex',
          component: () => import("@/views/doc_md/children/welcomeIndex.vue")
        },
        {
          path: '/md/detail/:chapterId',
          name: 'markdownDetail',
          meta: { title: "详情", scrollTo: window.location.hash },
          component: () => import('@/views/doc_md/children/contentDetail.vue')
        },
        {
          path: '/md/edit/:chapterId',
          name: 'markdownEdit',
          meta: { title: "内容编辑" },
          component: () => import('@/views/doc_md/children/contentEdit.vue')
        },
        {
          path: '/md/answer/edit/:chapterId',
          name: 'markdownAnswerEdit',
          meta: { title: "参考答案编辑" },
          component: () => import('@/views/doc_md/children/contentAnswerEdit.vue')
        }
      ]
    },
    {
      path: '/proc',
      name: 'elaborateMarkdown',
      meta: { title: "精品指导书" },
      component: () => import('@/views/e-md/index/index.vue'),
      children: [
      ]
    },
    {
      path: '/ls',
      name: 'lishiMap',
      meta: { title: '理实映射', auth: ["LS"] },
      component: () => import('@/views/lishiMap/index.vue'),
      children: [
        {
          path: ':id',
          name: 'MapDetail',
          meta: { title: 'Map详情' },
          component: () => import('@/views/lishiMap/child/index.vue')
        }
      ]
    },
    {
      path: '/readover/mdoc/:projectId/:pstId',
      name: 'MdocReadover',
      meta: { title: "学生报告批阅" },
      component: () => import('@/views/projectMdDocReadover/readover.vue')
    },
    {
      path: '/imenu',
      name: 'IMenu',
      component: () => import('@/views/IMenu/index.vue')
    },
    {
      path: '/user_group',
      name: 'userGroup',
      meta: { title: '用户组', auth: ["UG"] },
      component: () => import('@/views/userGroup/index.vue'),
      redirect: '/user_group/list',
      children: [
        {
          path: 'list',
          name: 'userGroupList',
          meta: { title: '用户组列表' },
          component: () => import('@/views/userGroup/groupList/index.vue')
        },
        {
          path: 'auth/:id',
          name: 'userGroupAuth',
          meta: { title: '权限及用户', parentName: 'userGroupList' },
          component: () => import('@/views/userGroup/auth/index.vue')
        }
      ]
    },
    {
      path: '/testp',
      name: 'test',
      meta: { title: '页面开发预览' },
      component: () => import('@/views/projectStudentDetail/DeviceLogVisualization/index.vue')
    }

  ]
})

function containsAny(arr1, arr2) {
  return arr2.some(element => arr1.includes(element));
}

// 在导航前保存滚动位置
router.beforeEach((to, from, next) => {

  const toNeedAuth = to.meta.auth
  if (toNeedAuth) {
    let userAuth = localStorage.getItem("auth")
    console.log(userAuth)
    console.log(toNeedAuth)
    if (!containsAny(userAuth, toNeedAuth)) {
      ElMessage.error("无权访问")
      setTimeout(() => { router.go(-1) }, 3)
      return
    }
  }

  window.scrollTo(0, 0); // 每次导航前滚动到页面顶部
  if (from.meta.savedPosition) { // 将保存的位置传递给下一条路由
    to.meta.parentPosition = {
      x: from.meta.savedPosition.x,
      y: from.meta.savedPosition.y
    }
  }
  if (from.meta.parentPosition) {
    if (from.meta.parentName == to.name) {
      to.meta.position = {
        x: from.meta.parentPosition.x,
        y: from.meta.parentPosition.y,
      }
    }
  }
  next();
});

export default router
