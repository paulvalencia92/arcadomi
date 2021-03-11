import axios from "axios";
import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        videoconferences: []
    },
    getters: {},
    mutations: {
        ADD_VIDEO_CONFERENCE(state, videoconference) {
            state.videoconferences.push(videoconference);
        },
        SET_VIDEOCONFERENCES(state, videoconferences) {
            state.videoconferences = videoconferences;
        }
    },
    actions: {
        async getVideoConferences(context) {
            const response = await axios.get('/api/videoconferences');
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('SET_VIDEOCONFERENCES', response.data);
            return Promise.resolve(response.data);
        },
        async createVideoConference(context, videoconference) {
            const response = await axios.post('/api/videoconferences', videoconference);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "No ha podido guardar el recurso");
                return Promise.reject('error');
            }
            context.commit('ADD_VIDEO_CONFERENCE', response.data);
            return Promise.resolve(response.data);
        },

    },
};
