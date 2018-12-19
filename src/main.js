import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

Vue.config.productionTip = false

// store.commit('receiveMessages', [{id: 0}])

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
