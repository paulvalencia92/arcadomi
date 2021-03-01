import axios from "axios";
import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        userList: [],
        user: {}
    },
    getters: {
        optionsRolePropietario(state) {
            const propietarios = [];
            state.userList.filter(user => {
                if (user.role == 'propietario') {
                    propietarios.push({text: user.fullname, value: user.id});
                }
            });
            return propietarios;
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.userList = users;
        },
        ADD_USER(state, user) {
            state.userList.push(user);
        },
        REMOVE_USER(state, id) {
            const index = state.userList.findIndex(user => user.id == id);
            state.userList.splice(index, 1);
        }
    },
    actions: {
        async createUser(context, userData) {

            const response = await axios.post('/api/users', userData);

            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('ADD_USER', response.data);
        },
        async getUsers(context) {
            const response = await axios.get('/api/users');
            context.commit('SET_USERS', response.data);
        },
        async updateUser(context, userData) {
            const response = await axios.post(`/api/users/${userData.get('id')}`, userData);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            return Promise.resolve('success');
        },
        async deleteUser(context, id) {
            const response = await axios.delete(`/api/users/${id}`);
            context.commit('REMOVE_USER', id);
            return Promise.resolve('success deleted');
        },

        async findUser(context, id) {
            const user = await context.state.userList.find(user => user.id == id);
            return Promise.resolve(user);
        }

    },
};
