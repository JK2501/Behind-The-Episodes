import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            selectedEpisodeId: 1,
            Filter: {},
        }
    },
    mutations: {
        setSelectedEpisodeId(state, id){
            state.selectedEpisodeId = id;
        },
        addFilterProperty(state, payload) {
            state.Filter[payload.key] = payload.value;
        },
        emptyFilterProperty(state, key){
            if (Array.isArray(state.Filter[key])) {
                state.Filter[key] = [];
            } else if (typeof state.Filter[key] === 'string') {
                state.Filter[key] = '';
            } else if (typeof state.Filter[key] === 'object' && state.Filter[key] != null){
                state.Filter[key] = {};
            }
        }
    }, 
});

export default store;