import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/axios';

Vue.config.productionTip = false;
Vue.use('bootstrap');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
