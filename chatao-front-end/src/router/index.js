import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import ChatsHomeView from '../views/ChatsHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginView
    },
    {
      path: '/signup',
      component: SignUpView
    },
    {
      path: '/chats',
      component: ChatsHomeView
    }
  ]
})

export default router
