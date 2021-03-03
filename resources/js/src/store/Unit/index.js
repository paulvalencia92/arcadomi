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
        UPDATE_UNIT(state, unitUpdated) {
            const index = state.units.findIndex(unit => unit.id == unitUpdated.id);
            state.units.splice(index, 1, unitUpdated);
        },
        REMOVE_UNIT(state, unitId) {
            const index = state.units.findIndex(unit => unit.id == unitId);
            state.units.splice(index, 1);
        }
    },
    actions: {
        async getUnits(context) {
            const response = await axios.get('/api/units');
            context.commit('SET_UNITS', response.data);
        },
        async createUnit(context, unit) {
            const response = await axios.post('/api/units', unit);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }

            context.commit('ADD_UNIT', response.data);
            return Promise.resolve(response.data);
        },

        async updateUnit(context, unit) {
            const response = await axios.put(`/api/units/${unit.id}`, unit);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido actualizar el recurso");
                return Promise.reject('error');
            }
            context.commit('UPDATE_UNIT', unit);
            return Promise.resolve(response.data);
        },
        async deleteUnit(context, unitId) {
            const response = await axios.delete(`/api/units/${unitId}`);
            context.commit('REMOVE_UNIT', unitId);
            return Promise.resolve('deleted success');
        },

        async createContactForUnit(context, user) {
            const response = await axios.post('/api/units/contact', user);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido actualizar el recurso");
                return Promise.reject('error');
            }
            return Promise.resolve(response.data);
        }

    },
};
