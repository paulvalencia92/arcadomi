import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";
import Setting from './Setting/index'
import Ecommerce from './Ecommerce/index'
import Auth from './Auth/index'
import User from './User/index'
import axios from "axios";


const vuexLocal = new VuexPersistence({
    store: window.localStorage,
    modules: ['Setting', 'Ecommerce', 'Auth', 'User'],
});


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

let store;

export default store = new Vuex.Store({
    modules: {
        Setting,
        Ecommerce,
        Auth,
        User
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    strict: debug,
    plugins: [vuexLocal.plugin]
})

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.Auth.access_token;

