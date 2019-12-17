import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import api from "./api";
import store from "./store";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(api);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
