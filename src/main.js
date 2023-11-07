import { createApp } from 'vue'
import {router} from './router'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App.vue'

createApp(App).use(router).mount('#app')
