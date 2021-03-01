import axios from "axios";

export default {
    namespaced: true,
    state: {
        roles: []
    },
    getters: {
        optionsRoles(state) {
            return state.roles.map(role => {
                return {text: role.title, value: role.name}
            })
        }
    },
    mutations: {
        SET_ROLES(state, roles) {
            state.roles = roles;
        },
    },
    actions: {
        async getRoles(context) {
            const response = await axios.get('/api/roles');
            context.commit('SET_ROLES', response.data);
        },

    },
};
