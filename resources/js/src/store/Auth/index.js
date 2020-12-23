import axios from "axios";

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
        // async register(userData) {
        //     return axios.post(process.env.MIX_SENTRY_DSN_API + 'api/register', userData)
        // },
        async logout(context) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.access_token}`;
            const response = await axios.post('/api/logout');
            context.commit('CLEAR_USER_DATA');
        },

    },
};
