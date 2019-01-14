import Vue from "vue";
import './plugins/fontawesome'
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import VueAgile from "vue-agile";
import vueSmoothScroll from "vue-smooth-scroll";
import VeeValidate from "vee-validate";
import VueSession from "vue-session";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faGooglePlus, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import authService from "./services/authService";

library.add(faFacebook, faTwitter, faGooglePlus, faLinkedin, faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAgile);
Vue.use(vueSmoothScroll);
Vue.use(VeeValidate);
Vue.use(VueSession);

//Vue.http.options.crossOrigin = true
Vue.http.options.root = "http://dev.japankitty.halamix2.pl/api/v1/";
Vue.http.options.emulateJSON = true;
Vue.http.headers.common["Authorization"] = "Bearer " + authService.getToken();
//Vue.http.headers.common['Content-Type'] = 'application/json';
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
//Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Vue.http.options.emulateJSON = true;
//Vue.http.options.emulateHTTP = true;

//

Vue.config.productionTip = false;

new Vue({
  http: {
    root: "http://dev.japankitty.halamix2.pl/api/v1/",
    headers: {
      Authorization: "Bearer " + authService.getToken()
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
