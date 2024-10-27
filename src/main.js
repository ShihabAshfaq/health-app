import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import store from './store'; // Import Vuex store
import router from './router'; // Import Vue Router

Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({
  store, // Vuex store must be added here
  router, // Vue Router must be added here
  vuetify,
  render: h => h(App),
}).$mount('#app');

Vue.mixin({
  created() {
    console.log('Vuex Store in Global Mixin:', this.$store);
  }
});
