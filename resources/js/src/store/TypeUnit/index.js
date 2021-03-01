import axios from "axios";

export default {
    namespaced: true,
    state: {
        typeUnits: [],
    },
    getters: {
        optionsTypeUnits(state) {
            return state.typeUnits.map(role => {
                return {text: role.name, value: role.id}
            })
        }
    },
    mutations: {
        SET_TYPE_UNITS(state, typeUnits) {
            state.typeUnits = typeUnits;
        },
    },
    actions: {
        async getTypeUnits(context) {
            const response = await axios.get('/api/type-units');
            context.commit('SET_TYPE_UNITS', response.data);
        },

    },
};
