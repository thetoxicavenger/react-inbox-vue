const state = {
    all: []
}

const getters = {
    count: (state, getters, rootState) => state.all.length
}

const actions = {
    async loadMessages({ commit }) {
        try {
            const res = await fetch("http://localhost:8082/api/messages")
            const messages = await res.json()
            commit('receiveMessages', messages)
        } catch (e) {
            console.error(e)
        }
    }
}

const mutations = {
    receiveMessages(state, messages) {
        state.all.push(...messages)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}