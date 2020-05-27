import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Nosotros from '../views/Nosotros.vue';
import Persona from '../views/Persona.vue';
import Perfil from '../views/Perfil.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/inicio','/home','/principio','/index']
  },
  {
    path: '/persona/:name',
    name: 'Persona',
    component: Persona,
    children: [
      {
        path: '/pefil',
        component: Perfil,
        name: 'Perfil'
      }
    ]
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/quienes-somos',
    redirect: '/nosotros'
  },
  {
    path: '/informacion',
    redirect: {name: 'Nosotros'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
