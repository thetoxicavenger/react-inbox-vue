import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
//https://github.com/nijat13/Vue-Vuex-Boilerplate
Vue.use(Vuex)

const state = {
    messages: []
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

store.dispatch('addMessages')

export default store