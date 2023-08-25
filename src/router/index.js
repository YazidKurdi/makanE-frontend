import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/LandingPage.vue'
import LoginSignup from '../views/LoginSignup.vue'
import ProductPage from '../views/ProductPage.vue'
import Basket from '../views/Basket.vue'
import Search from '../views/Search.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/register',
    name: 'Register',
    component: LoginSignup,
    meta: { title: 'Register' }
  },
  {
    path: '/products/:productName',
    name: 'product',
    component: ProductPage,
    meta: { title: 'Product' }
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket,
    meta: { title: 'Basket' }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: { title: 'Search' }
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  const title = to.meta.title + ' | Not Hanini'
  document.title = title
})


export default router
