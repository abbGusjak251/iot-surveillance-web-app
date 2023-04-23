import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Register from '../views/RegisterPage.vue'
import Camera from '../views/CameraPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
