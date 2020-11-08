import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'INSIRA AQUI SUA URL DO FIREBASE';

Vue.use({
  install() {
    Vue.prototype.$http = axios;
  },
});
