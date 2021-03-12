import axios from "axios";
import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        advertisementCategories: []
    },
    getters: {
        optionsCategories(state) {
            return state.advertisementCategories.map(item => {
                return {text: item.name, value: item.id}
            })
        }
    },
    mutations: {
        SET_ADVERTISEMENT_CATEGORIES(state, advertisementCategories) {
            state.advertisementCategories = advertisementCategories;
        },
        ADD_ADVERTISEMENT_CATEGORY(state, advertisementCategory) {
            state.advertisementCategories.push(advertisementCategory);
        },
        UPDATE_ADVERTISEMENT_CATEGORY(state, advertisementCategory) {
            const index = state.advertisementCategories.findIndex(category => category.id == advertisementCategory.id);
            state.advertisementCategories.splice(index, 1, advertisementCategory);
        },
        DELETE_ADVERTISEMENT_CATEGORY(state, advertisementCategoryId) {
            const index = state.advertisementCategories.findIndex(category => category.id == advertisementCategoryId);
            state.advertisementCategories.splice(index, 1);
        },
    },
    actions: {
        async getAdvertisementCategories(context) {
            const response = await axios.get('/api/advertisement-categories');
            context.commit('SET_ADVERTISEMENT_CATEGORIES', response.data);
        },
        async createAdvertisementCategories(context, advertisementCategory) {
            const response = await axios.post('/api/advertisement-categories', advertisementCategory);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('ADD_ADVERTISEMENT_CATEGORY', response.data);
            return Promise.resolve();
        },
        async updateAdvertisementCategories(context, advertisementCategory) {
            advertisementCategory.append('_method', 'PUT')
            const response = await axios.post(`/api/advertisement-categories/${advertisementCategory.get('id')}`, advertisementCategory);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('UPDATE_ADVERTISEMENT_CATEGORY', response.data);
            return Promise.resolve();
        },
        async deleteAdvertisementCategories(context, advertisementCategoryId) {
            await axios.delete(`/api/advertisement-categories/${advertisementCategoryId}`);
            context.commit('DELETE_ADVERTISEMENT_CATEGORY', advertisementCategoryId);
            return Promise.resolve();
        },

    },
};
