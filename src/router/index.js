import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import i18n from '@/i18n'

Vue.use(VueRouter)

const children = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: `login`,
    name: 'Login',
    component: () => import('@/Views/Login.vue')
  },
  {
    path: `register`,
    name: 'Register',
    component: () => import('@/Views/Register.vue')
  },
  {
    path: `profiles/:nick`,
    name: 'Profile',
    component: () => import('@/Views/Profile.vue')
  },
  {
    path: `chats/:id`,
    name: 'Chat',
    component: () => import('@/Views/Chat.vue')
  },
  {
    path: `groups/:chatId`,
    name: 'GroupChat',
    component: () => import('@/Views/GroupChat.vue')
  },
  {
    path: 'search',
    name: 'Search',
    component: () => import('@/Views/Search.vue')
  },
  {
    path: `users`,
    name: 'Users',
    component: () => import('@/Views/Users.vue')
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view')}
      },
      children
    },
  ]
})

export default router
