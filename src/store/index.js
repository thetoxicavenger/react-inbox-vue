import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'

//https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        messages   
    },
    strict: debug
})

export default store