import axios from '@/axios'
import router from '@/router'
import {signIn, signUp} from '../action.type'
import {setResponse, setStatus, setUser} from '../mutation.type'

const state=()=>({
    response: '',
    status: ''
})

const getters = {}

const action = {
    [signIn]({ commit }, payload){
        commit(setResponse, 'loading')
        //axios senddata
    },
    [signUp]({ commit }, payload){
        commit(setResponse, 'loading')
        //axios send data
    }
}

const mutations = {
    [setResponse](state,payload){
        state.response = payload
    },
    [setStatus](state,payload){
        state.status = payload
    }
}

export default {
    state,
    getters,
    action,
    mutations
}