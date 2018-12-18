import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
// import Routes from './routes'
import BootstrapVue from "bootstrap-vue";
import VueAgile from "vue-agile";
import vueSmoothScroll from "vue-smooth-scroll";
import VeeValidate from "vee-validate";
import VueSession from "vue-session";

import authService from "./services/authService";

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAgile);
Vue.use(vueSmoothScroll);
Vue.use(VeeValidate);
Vue.use(VueSession);

//Vue.http.options.crossOrigin = true
Vue.http.options.root = 'http://japankitty.halamix2.pl/api/';
Vue.http.options.emulateJSON = true;
//Vue.http.headers.common['Content-Type'] = 'application/json';

Vue.http.headers.common["Authorization"] = "Bearer " + authService.getToken();
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
//Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.http.options.emulateJSON = true;
//Vue.http.options.emulateHTTP = true;

//

Vue.config.productionTip = false;

new Vue({
  /* http: {
    root: 'http://localhost/api/',
    headers: {
      Authorization: authService.getToken()
    }
  },*/
  router,
  store,
  render: h => h(App)
}).$mount("#app");
