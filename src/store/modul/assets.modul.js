import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const state = () => ({
    response: '',
    status: '',
    data: ''
})

const getters = {}

const actions = {
    fetch({commit}){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        instance.get('/api/data/assets/all_account',{ headers : headers })
        .then(function(res){
            commit('setData', res.data.msg)
        }).catch(function(){
            commit('setResponse', 'Server is off!')
            setTimeout(() => {
                commit('setResponse', '')
            }, 3000);
        })
    },
    add({ commit, dispatch }, payload) {
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
          }

        instance.post('/api/data/assets/account', payload, {
            headers : headers
        }).then(function (res) {
            if (res.data.status) {
                dispatch('fetch')
                commit('setResponse', '')
                commit('setResponse', res.data.msg)
                setTimeout(() => {
                    commit('setResponse', '')
                }, 3000);
            } else {
                commit('setResponse', res.data.msg)
                setTimeout(() => {
                    commit('setResponse', '')
                }, 3000);
            }
        }).catch(function () {
            commit('setResponse', 'Server is off!')
            setTimeout(() => {
                commit('setResponse', '')
            }, 3000);
        })
    },
    update({commit, dispatch}, payload){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        commit('setResponse', '')
        instance.put('/api/data/assets/account/'+payload.id_assets_account, payload, {headers:headers})
        .then((res)=>{
            commit('setResponse', res.data.msg)
            dispatch('fetch')
            setTimeout(() => {
                commit('setResponse', '')
            }, 3000);
        }).catch(()=>{
            commit('setResponse', 'Server is off!')
            setTimeout(() => {
                commit('setResponse', '')
            }, 3000);
        })
    },
    del({commit, dispatch}, payload){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        instance.delete('/api/data/assets/account/'+payload, {headers:headers})
        .then(function(res){
            dispatch('fetch')
            commit('setResponse', res.data.msg)
            setTimeout(() => {
                commit('setResponse', '')
            }, 3000);
        }).catch(function(){
            commit('setResponse', 'Server is off!')
            setTimeout(() => {
                commit('setResponse', '')
            }, 3000);
        })
    },
}

const mutations = {
    setResponse(state, payload) {
        state.response = payload
    },
    setData(state, payload) {
        state.data = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}