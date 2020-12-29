import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import VueFormGenerator from 'vue-form-generator';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';

Vue.use(VueFormGenerator);

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
