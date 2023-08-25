import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import { createPinia } from 'pinia'



import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLocationDot,faAngleDown,faUser,faSearch,faArrowRight,faArrowLeft,faMinus,faPlus,faShoppingBag,faShippingFast,faCoins,faTimesCircle } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faLocationDot,faAngleDown,faUser,faSearch,faArrowRight,faArrowLeft,faMinus,faPlus, faShoppingBag,faShippingFast,faCoins,faTimesCircle)

axios.defaults.baseURL = "http://127.0.0.1:8000"

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

