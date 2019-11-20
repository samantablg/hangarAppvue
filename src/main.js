import Vue from 'vue'
import { store } from './core/store/store';
import router from './core/router';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
