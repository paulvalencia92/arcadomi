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
    },
    actions: {
        async getRoles(context) {
            const response = await axios.get('/api/roles');
            context.commit('SET_ROLES', response.data);
        },

    },
};
