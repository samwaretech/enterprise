import axios from 'axios'
import router from '@/router'
import { signIn, signUp } from '../action.type'
import { setResponse, setStatus } from '../mutation.type'

const state = () => ({
    response: '',
    status: ''
})

const getters = {}

const actions = {
    [signIn]({ commit }, payload) {
        commit(setResponse, '')
        commit(setResponse, 'loading.')
        axios.post('http://localhost:3000/api/signin',{
            email: payload.email,
            password: payload.password
        }).then(function(res){
            if(res.data.status){
                localStorage.setItem('token', res.data.msg.token);
                router.push({ name: "dashboard" })
                commit(setResponse, '')
            }else{
                commit(setResponse, res.data.msg)
            }
        }).catch(function(res){
            commit(setResponse, res)
        })
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