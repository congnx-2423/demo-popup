import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import VueExcelEditor from 'vue-excel-editor'

Vue.use(VueExcelEditor)
new Vue({
  render: h => h(App),
}).$mount('#app')
