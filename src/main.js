import { createApp } from 'vue'
import {router} from './router'

import './style.scss'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowTurnUp, faList, faHouse, faEnvelope, faPhone, faComputer } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(
    faArrowTurnUp,
    faList,
    faHouse,
    faEnvelope,
    faPhone,
    faComputer,
    faInstagram,
    faLinkedin,
    )

import App from './App.vue'

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')




