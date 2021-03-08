import axios from "axios";
import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        roles: [],
        abilities: []
    },
    getters: {
        optionsRoles(state) {
            let roles = [];
            state.roles.filter(role => {
                if (['super-admin', 'admin', 'propietario'].includes(role.name)) {
                    roles.push({text: role.title, value: role.name})
                }
            });
            return roles;
        },
        optionsContact(state) {
            let roles = [];
            state.roles.filter(role => {
                if (!['super-admin', 'admin'].includes(role.name)) {
                    roles.push({text: role.title, value: role.name})
                }
            });
            return roles;
        }
    },
    mutations: {
        SET_ROLES(state, roles) {
            state.roles = roles;
        },
        SET_ABILITIES(state, abilities) {
            state.abilities = abilities;
        },
        ADD_ROLE(state, rol) {
            state.roles.push(rol);
        },
        UPDATE_ROLE(state, roleUpdated) {
            const index = state.roles.findIndex(role => role.id == roleUpdated.id);
            state.roles.splice(index, 1, roleUpdated);
        }
    },
    actions: {
        async getRoles(context) {
            const response = await axios.get('/api/roles');
            context.commit('SET_ROLES', response.data);
        },

        async createRole(context, role) {
            const response = await axios.post(`/api/roles`, role);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('ADD_ROLE', response.data);
            return Promise.resolve('success');
        },

        async updateRole(context, role) {
            const response = await axios.put(`/api/roles/${role.id}`, role);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('UPDATE_ROLE', response.data);
            return Promise.resolve('success');
        },

        async getAbilities(context) {
            const response = await axios.get('/api/roles-abilities');
            context.commit('SET_ABILITIES', response.data);
        },

    },
};
