import axios from 'axios'
import router from '@/router'
import { signIn, signUp, fetchUser } from '../action.type'
import { setResponse, setUser } from '../mutation.type'

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const getters = {}

const state = () => ({
    response: '',
    data: ''
})


const actions = {
    [signIn]({ commit }, payload) {
        commit(setResponse, '')
        commit(setResponse, 'loading.')
        instance.post('/api/signin',{
            email: payload.email,
            password: payload.password
        }).then(function(res){
            if(res.data.status){
                localStorage.setItem('token', res.data.msg.token);
                router.push({ name: "dashboard" })
                commit(setResponse, '')
            }else{
                commit(setResponse, res.data.msg)
                setTimeout(() => {
                    commit(setResponse, '')
                }, 3000);
            }
        }).catch(function(res){
            commit(setResponse, res)
        })
    },
    [signUp]({ commit }, payload) {
        commit(setResponse, 'loading')
        //axios send data
        console.log(payload);
    },
    [fetchUser]({commit}){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        instance.get('/profile', {headers:headers})
        .then(function(res){
            if (res.data.status) {
                commit(setUser, res.data.msg)
            }
        }).catch(function(res){
            console.log(res);
        })
    }
}

const mutations = {
    [setResponse](state, payload) {
        state.response = payload
    },
    [setUser](state, payload) {
        state.data = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}