import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入js
import './assets/js/flexible.min.js'
Vue.config.productionTip = false
//js-cookie
import jsCookie from 'js-cookie';
Vue.prototype.$jsCookie = jsCookie;
//api
import * as api from './api';
Vue.prototype.$api = api;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
