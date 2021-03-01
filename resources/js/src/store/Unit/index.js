import axios from "axios";
import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        units: [],
    },
    getters: {},
    mutations: {
        SET_UNITS(state, units) {
            state.units = units;
        },
        ADD_UNIT(state, unit) {
            state.units.push(unit);
        },
    },
    actions: {
        async getUnits(context) {
            const response = await axios.get('/api/units');
            context.commit('SET_UNITS', unit);
        },
        async createUnit(context, unit) {
            const response = await axios.post('/api/units', unit);


            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('ADD_UNIT', unit);
            return Promise.resolve(response.data);
        },

    },
};
