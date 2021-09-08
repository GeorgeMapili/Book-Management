    import Vue from 'vue'
    import Vuex from 'vuex'
    import repository from "../api/repository";

    Vue.use(Vuex);

    export default new Vuex.Store({
    modules: {
        auth: {
        state: {
            user: localStorage.user ? JSON.parse(localStorage.getItem('user')) : null
        },

        getters: {
            user: state => state.user,
            authenticated: state => state.user !== null,
        },

        mutations: {
            SET_USER(state, user) {
            state.user = user;
            }
        },

        actions: {
            async login({ commit }, user) {
            await repository.createSession();
            const { data } = await repository.login(user);
            commit('SET_USER', data)

            localStorage.user = JSON.stringify(data);
            },

            async logout({ commit }) {
                await repository.logout();
                commit('SET_USER', null);
                localStorage.removeItem('user');
            },

            async createBook({ commit }, book){
                await repository.createBook(book)
            }
        }
        }
    }
    });