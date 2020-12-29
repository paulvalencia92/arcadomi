import axios from "axios";

export default {
    namespaced: true,
    state: {
        users: []
    },
    getters: {},
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ATTACH_USER(state, user) {
            state.users.push(user);
        }
    },
    actions: {
        async createUser(context, userData) {
            const response = await axios.post('/api/users', userData);
            context.commit('ATTACH_USER',response.data);
        },
        async getUsers(context) {
            const response = await axios.get('/api/users');
            console.log(response.data)
            context.commit('SET_USERS',response.data);
        },

    },
};
