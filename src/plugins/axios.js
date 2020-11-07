import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'https://marvel-3e933.firebaseio.com';
axios.defaults.baseURL = 'https://marvel-fc282.firebaseio.com';

Vue.use({
  install() {
    Vue.prototype.$http = axios;
  },
});
