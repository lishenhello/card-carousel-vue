import Vue from "vue";
import App from "./App.vue";

import cardCarouselVue from '@/packages/index'
Vue.use(cardCarouselVue)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
