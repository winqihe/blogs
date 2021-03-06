import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogDetail from '../views/BlogDetail.vue'
import BlogEdit from '../views/BlogEdit.vue'


Vue.use(VueRouter)
  const routes = [  {
    path: '/',
    name: 'index',
    redirect:{name:Blogs}
  },
    {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },  {
      path: '/blog/add',
      name: 'BlogEdit',
      component: BlogEdit
    },  {
      path: '/blog/:blogId',
      name: 'BlogDetail',
      component: BlogDetail
    },  {
      path: '/blog/:blogId/edit',
      name: 'BlogEdit',
      component: BlogEdit
    },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
