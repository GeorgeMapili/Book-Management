import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store/index'

import VueSweetalert2 from 'vue-sweetalert2';
window.Swal = require('sweetalert2');
Vue.use(VueSweetalert2);

import utils from './helpers/utilities';
Vue.prototype.$utils = utils;

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
