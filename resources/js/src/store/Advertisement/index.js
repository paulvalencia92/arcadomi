import axios from "axios";
import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        advertisements: [],
        advertisement: {},
        filter: {}
    },
    getters: {
        filteredAdvertisements(state) {
            let advertisements = state.advertisements;
            if (state.filter) {
                advertisements = advertisements.filter(item => item.advertisement_category_id == state.filter.id);
            }
            return advertisements;
        }
    },
    mutations: {
        SET_ADVERTISEMENTS(state, advertisements) {
            state.advertisements = advertisements;
        },
        ADD_ADVERTISEMENT(state, advertisement) {
            state.advertisements.push(advertisement);
        },
        UPDATE_ADVERTISEMENT(state, advertisement) {
            const index = state.advertisements.findIndex(item => item.id == advertisement.id);
            state.advertisement = advertisement;
            state.advertisements.splice(index, 1, advertisement);
        },
        DELETE_ADVERTISEMENT(state, advertisementId) {
            const index = state.advertisements.findIndex(item => item.id == advertisementId);
            state.advertisements.splice(index, 1);
        },
        SET_ADVERTISEMENT(state, advertisement) {
            state.advertisement = advertisement;
        },
        DELETE_COMMENT_ADVERTISEMENT(state, commentId) {
            const index = state.advertisement.comments.findIndex(item => item.id == commentId);
            state.advertisement.comments.splice(index, 1)
        },
        SET_FILTER(state, advertisementCategory) {
            state.filter = advertisementCategory;
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
            context.commit('SET_ADVERTISEMENT', advertisement);
        },
        async createComment(context, payload) {
            const response = await axios.post(`/api/advertisements-comments/${payload.advertisementId}`, {
                message: payload.message
            });
            context.commit('UPDATE_ADVERTISEMENT', response.data);
            return Promise.resolve();
        },
        async deleteCommentAdvertisement(context, commentId) {
            await axios.delete(`/api/advertisements-comments/${commentId}`);
            context.commit('DELETE_COMMENT_ADVERTISEMENT', commentId);
            return Promise.resolve();
        }

    },
};
