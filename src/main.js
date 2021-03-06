import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import VueFormGenerator from 'vue-form-generator';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import Autocomplete from '@trevoreyre/autocomplete-vue';
import '@trevoreyre/autocomplete-vue/dist/style.css';

Vue.use(Autocomplete)

Vue.use(VueFormGenerator);

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
