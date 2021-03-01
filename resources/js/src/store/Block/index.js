import {core} from "../../config/pluginInit";

export default {
    namespaced: true,
    state: {
        blocks: []
    },
    getters: {},
    mutations: {
        SET_BLOCKS(state, blocks) {
            state.blocks = blocks;
        },
        ADD_BLOCK(state, block) {
            state.blocks.push(block);
        },
        UPDATE_BLOCK(state, blockUpdated) {
            const index = state.blocks.findIndex(block => block.id == blockUpdated.id);
            state.blocks.splice(index, 1, blockUpdated);
        },
        REMOVE_BLOCK(state, blockId) {
            const index = state.blocks.findIndex(block => block.id == blockId);
            state.blocks.splice(index, 1);
        }
    },
    actions: {
        async getBlocks(context) {
            const response = await axios.get('/api/blocks');
            context.commit('SET_BLOCKS', response.data);
        },
        async createBlock(context, block) {
            const response = await axios.post('/api/blocks', block);

            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "Error");
                return Promise.reject('error');
            }
            context.commit('ADD_BLOCK', response.data);
            return Promise.resolve('success');
        },
        async updateBlock(context, block) {
            const response = await axios.put(`/api/blocks/${block.id}`, block);
            if (response.data.errors) {
                context.commit('SET_ERRORS', response.data.errors, {root: true});
                core.showSnackbar("error", "Error");
                return Promise.reject('error');
            }
            context.commit('UPDATE_BLOCK', response.data);
            return Promise.resolve('success');
        },

        async deleteBlock(context, blockId) {
            const response = await axios.delete(`/api/blocks/${blockId}`);
            if (response.status == 200){
                context.commit('REMOVE_BLOCK', response.data);
                return Promise.resolve('success');
            }

        }

    },
};
