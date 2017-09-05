// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import promise from 'es6-promise'
promise.polyfill();//axios兼容ie
import axios from 'axios'  //ajax请求
// require('es6-promise').polyfill();
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/font_icon/iconfont.css'
import './assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store' //state管理
import './assets/common/reseteAjax.js' //ajax


Vue.prototype.$http = axios
Vue.use(MintUI)
Vue.use(ElementUI)

Vue.filter('date', function(input){
  var oDate = new Date(input);
  return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate();
});

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
