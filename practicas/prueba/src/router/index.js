import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nuestrasnoticias',
    name: "Noticias",
    component: () => import('../views/Noticias.vue')
  },

  {
    path: '/Publicaciones',
    name: "Publicacion",
    component: () => import('../views/Publicacion.vue')
  },
  
  {
    path: '/TeoremadePitagoras',
    name: "Pitagoras",
    component: () => import('../views/Pitagoras.vue')
  },
  {
    path: '/cliente',
    name: "Cliente",
    component: () => import('../views/Cliente.vue')
  },
  {
    path: '/producto',
    name: "Producto",
    component: () => import('../views/Producto.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
