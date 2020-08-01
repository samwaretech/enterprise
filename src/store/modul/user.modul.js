// import axios from 'axios'
// import router from '@/router'
import { signIn, signUp } from '../action.type'
import { setResponse, setStatus } from '../mutation.type'

const state = () => ({
    response: 'tes',
    status: ''
})

const getters = {}

const actions = {
    [signIn]({ commit }, payload) {
        commit(setResponse, 'loading.')
        commit(setResponse, payload)
    },
    [signUp]({ commit }, payload) {
        commit(setResponse, 'loading')
        //axios send data
        console.log(payload);
    }
}

const mutations = {
    [setResponse](state, payload) {
        state.response = payload
    },
    [setStatus](state, payload) {
        state.status = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}