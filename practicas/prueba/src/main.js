import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootswatch/dist/solar/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import axios from 'axios';
import VueAxios from 'vue-axios';

//import 'bootswatch/dist/flatly/bootstrap.min.css'
createApp(App).use(router).use(VueAxios,axios).mount('#app')
