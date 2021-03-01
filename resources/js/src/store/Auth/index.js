import axios from "axios";
import store from "../index";

export default {
    namespaced: true,
    state: {
        access_token: null,
        user: null,
    },
    getters: {},
    mutations: {
        SET_USER_DATA(state, data) {
            state.access_token = data.access_token;
            state.user = data.user;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
        },
        CLEAR_USER_DATA(state, data) {
            state.access_token = null;
            state.user = null;
        },
    },
    actions: {
        async login(context, userData) {
            let data = {
                email: userData.email,
                password: userData.password
            }
            const response = await axios.post('/api/login', data).then(response => {
                if (response.status) {
                    context.commit('SET_USER_DATA', response.data);
                    return Promise.resolve('success');
                } else if (response.data.errors.length > 0) {
                    this.$refs.form.setErrors(response.data.errors);
                }
            }).finally(() => {
                    this.loading = false;
                });
        },
        async logout(context) {
            const response = await axios.post('/api/logout');
            context.commit('CLEAR_USER_DATA');
        },

    },
};
