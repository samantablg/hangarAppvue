import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
import auth from './modules/auth';
import hangars from './modules/hangars';
import products from './modules/products';

export const store = new Vuex.Store({
    modules: {
        auth,
        hangars,
        products
    },
    mutations: {
        SET_HANGARS(state, hangars) {
            state.hangars = hangars;
        },
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        AUTH_SUCCESS(state, token) {
            state.auth.status = 'success';
            state.auth.token = token;
        },
        LOGOUT(state) {
            state.auth.token = '',
                state.auth.status = ''
        },
        AUTH_ERROR(state) {
            state.auth.status = 'error'
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                axios({ url: 'http://localhost:8888/authenticate', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                        commit('AUTH_SUCCESS', token);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('AUTH_ERROR')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('LOGOUT')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
        loadHangars({ commit }) {
            return new Promise((resolve, reject) => {
                axios({
                        url: 'http://localhost:8888/api/hangars',
                        method: 'GET'
                    })
                    .then(resp => {
                        let hangars = resp.data;
                        commit('SET_HANGARS', hangars);
                        resolve(resp);
                    })
                    .catch(err => {
                        reject(err);
                    });
            })
        },
        loadProducts({ commit }) {
            return new Promise((resolve, reject) => {
                axios({
                        url: 'http://localhost:8888/api/productsExtended',
                        method: 'GET'
                    })
                    .then(resp => {
                        let products = resp.data;
                        commit('SET_PRODUCTS', products);
                        resolve(resp);
                    })
                    .catch(err => {
                        reject(err);
                    });
            })
        }
    },
    getters: {
        productsOfShop: (state) => state.products.filter(product => product.price != 0 && product.hangars.length > 0),
        isLoggedIn: (state) => !(state.auth.token == ''),
        authStatus: (state) => state.auth.status
    }
})
