// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import { isContext } from 'vm';

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  //全局状态
  state: {
    list: [],
  },
  getters: {

  },
  mutations: {
    increment(state, list) {
      // 变更状态
      state.list = list
    },
  },
  actions: {
    aaa(context) {
      axios.get('https://www.easy-mock.com/mock/5d29e339bfa10a353c952cae/home/cj?a=1')
        .then(function (res) {

          // increment(res.data.list)
          context.commit('increment', res.data.list)

        })
    },
    bbb(context, { username, password }) {
      axios.post('https://www.easy-mock.com/mock/5d29e339bfa10a353c952cae/home/dl', {
        username,
        password,
      })
    }

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
