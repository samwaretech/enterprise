import Vue from 'vue'
import Vuex from 'vuex'
import user from './modul/user.modul'
import data from './modul/data.modul'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    data
  }
})
