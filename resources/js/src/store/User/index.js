import axios from "axios";

export default {
    namespaced: true,
    state: {

    },
    getters: {

    },
    mutations: {
        SET_USERS(state, data) {
            state = data;
        },
    },
    actions: {
        async createUser(context,userData) {
            const response = await axios.post('/api/users',userData);
            console.log(response.data)
        },

    },
};
