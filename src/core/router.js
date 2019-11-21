import Home from '../components/Home.vue';
import Hangars from '../components/Hangars';
import Products from '../components/Products.vue';
import Shop from '../components/Shop.vue'
import Login from '../components/Login.vue';
import VueRouter from 'vue-router';
import { store } from './store/store.js';

// planos de destinos con las rutas
export const routes = [

    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    { path: '/login', component: Login },
    {
        path: '/hangars',
        component: Hangars,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/products',
        component: Products,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/shop',
        component: Shop,
        meta: {
            requiresAuth: true
        }
    },
    { path: '*', redirect: '/' }
];

const router = new VueRouter({
    mode: 'history', // hay que poner eso porque por defecto vue utiliza las rutas así -> www.blablabla.com/#/loquesea
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router;
