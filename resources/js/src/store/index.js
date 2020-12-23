import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";
import Setting from './Setting/index'
import Ecommerce from './Ecommerce/index'
import Auth from './Auth/index'

const vuexLocal = new VuexPersistence({
    store: window.localStorage,
    modules: ['Setting','Ecommerce','Auth'],
});


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Setting,
        Ecommerce,
        Auth
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    strict: debug,
    plugins: [vuexLocal.plugin]
})
