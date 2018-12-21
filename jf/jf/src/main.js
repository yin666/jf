// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/styles/common.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import util from './assets/js/util.js'
Vue.use(VueAxios, axios)
Vue.prototype.util = util;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
