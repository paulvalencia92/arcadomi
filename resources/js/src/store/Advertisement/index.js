import axios from "axios";
import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        advertisements: [],
    },
    getters: {},
    mutations: {
        SET_ADVERTISEMENTS(state, advertisements) {
            state.advertisements = advertisements;
        },
        ADD_ADVERTISEMENT(state, advertisement) {
            state.advertisements.push(advertisement);
        },
        UPDATE_ADVERTISEMENT(state, advertisement) {
            const index = state.advertisements.findIndex(item => item.id == advertisement.id);
            state.advertisements.splice(index, 1, advertisement);
        },
        DELETE_ADVERTISEMENT(state, advertisementId) {
            const index = state.advertisements.findIndex(item => item.id == advertisementId);
            state.advertisements.splice(index, 1);
        },
    },
    actions: {
        async getAdvertisements(context) {
            const response = await axios.get('/api/advertisements');
            context.commit('SET_ADVERTISEMENTS', response.data);
        },
        async getPublishedAdvertisements(context) {
            const response = await axios.get('/api/advertisements-published');
            context.commit('SET_ADVERTISEMENTS', response.data);
        },
        async createAdvertisement(context, advertisement) {
            const response = await axios.post('/api/advertisements', advertisement);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No se ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('ADD_ADVERTISEMENT', response.data);
            return Promise.resolve();
        },
        async updateAdvertisement(context, advertisement) {
            advertisement.append('_method', 'PUT');
            const response = await axios.post(`/api/advertisements/${advertisement.get('id')}`, advertisement);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No se ha podido actualizar el recurso");
                return Promise.reject('error');
            }
            context.commit('UPDATE_ADVERTISEMENT', response.data);
            return Promise.resolve();
        },
        async deleteAdvertisement(context, advertisementId) {
            await axios.delete(`/api/advertisements/${advertisementId}`);
            context.commit('DELETE_ADVERTISEMENT', advertisementId);
            return Promise.resolve();
        },
        async toggleStatus(context, advertisement) {
            const response = await axios.patch(`/api/advertisements-toggle-status/${advertisement.id}`);
            context.commit('UPDATE_ADVERTISEMENT', response.data);
            return Promise.resolve(response.data.is_published);
        },
        async findArvertisement(context, advertisementId) {
            const advertisement = context.state.advertisements.find(item => item.id == advertisementId);
            return Promise.resolve(advertisement);
        }

    },
};
