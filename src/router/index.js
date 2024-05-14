import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Form1View from '@/views/Form1View.vue'
import Form2View from '@/views/Form2View.vue'
import Form3View from '@/views/Form3View.vue'
import LoginCand from '@/views/LoginCand.vue'
import LoginEmp from '@/views/LoginEmp.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import SuccessView from '@/views/SuccessView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login/candidate',
    name: 'Login Candidato',
    component: LoginCand
  },
  {
    path: '/login/company',
    name: 'Login Empresa',
    component: LoginEmp
  },
  {
    path: '/cadastro',
    name: 'Formulario',
    component: Form1View
  },
  {
    path: '/cadastro2',
    name: 'Formulario2',
    component: Form2View
  },
  {
    path: '/cadastro3',
    name: 'Formulario3',
    component: Form3View
  },
  {
    path: '/admin',
    name: 'Painel Admin',
    component: AdminPanel
  },
  {
    path: '/success',
    name: 'successo',
    component: SuccessView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
