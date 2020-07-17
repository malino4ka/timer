// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/reset.css'
// import iconsPause from 'vue-material-design-icons/Pause.vue';
// import iconsDelete from 'vue-material-design-icons/Delete.vue';
import 'vue-material-design-icons/styles.css';


Vue.config.productionTip = false
// Vue.component('pause', iconsPause);
// Vue.component('delete', iconsDelete);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
