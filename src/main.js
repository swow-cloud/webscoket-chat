import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'jquery'
import './assets/css/style.min.css'
import './assets/fonts/material-design-iconic-font.min.css'
import './assets/vendor/bootstrap-datepicker.min.css'


import VueSweetalert2 from 'vue-sweetalert2';
//main.js
import axios from "axios";

Vue.use(require('vue-wechat-title'))


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
    router,
    axios,
    render: h => h(App)
}).$mount('#app')

