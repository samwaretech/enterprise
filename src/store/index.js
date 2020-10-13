import Vue from 'vue'
import Vuex from 'vuex'
import user from './modul/user.modul'
import project from './modul/project.modul'
import assets from './modul/assets.modul'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    project,
    assets
  }
})
