// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from '../src/router'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router : VueRouter,
  template: '<App/>'
})
