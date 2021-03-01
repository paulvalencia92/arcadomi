import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from "vuex-persist";

//*--------------------------------//
//           MODULOS              //
//-------------------------------//
import Auth from './Auth/index';
import Block from './Block/index';
import Ecommerce from './Ecommerce/index';
import Role from './Role/index';
import Setting from './Setting/index'
import User from './User/index';
import TypeUnits from './TypeUnit/index';
import Unit from './Unit';

import axios from "axios";


const vuexLocal = new VuexPersistence({
    store: window.localStorage,
    modules: ['Setting', 'Ecommerce', 'Auth', 'User', 'Role', 'Block', 'TypeUnits', 'Unit'],
});


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

let store;
export default store = new Vuex.Store({
    modules: {
        Setting,
        Ecommerce,
        Auth,
        User,
        Role,
        Block,
        TypeUnits,
        Unit
    },
    state: {
        errors: [],
    },
    mutations: {
        SET_ERRORS(state, errors) {
            const errorMessages = Object.values(errors);
            state.errors = errorMessages;
        },
        CLEAR_ERRORS(state) {
            state.errors = [];
        }
    },
    actions: {},
    getters: {
        errorsCollection(state) {
            let errors = [];
            state.errors.forEach(item => {
                item.forEach(i => {
                    errors.push(i);
                })
            });
            return errors;
        }
    },
    strict: debug,
    plugins: [vuexLocal.plugin]
})

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.Auth.access_token
