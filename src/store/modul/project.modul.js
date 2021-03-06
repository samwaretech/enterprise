import axios from 'axios'
import { setResponse, setData, setDataAssetsAccount } from '../mutation.type'

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const state = () => ({
    response: '',
    status: '',
    data:{
        allProject: ''
    }
})

const getters = {}

const actions = {
    addProject({ commit, dispatch }, payload) {
        var data = {
            tittle  :   payload.tittle,
            service :   payload.service,
            status  :   payload.status,
            developer   :   payload.developer,
            cost    :   payload.cost,
            note    :   payload.note,
            project_manager : payload.project_manager
        }
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
          }

        instance.post('/api/data/addProject', data, {
            headers : headers
        }).then(function (res) {
            if (res.data.status) {
                dispatch('allProject')
                commit(setResponse, '')
                commit(setResponse, res.data.msg)
                setTimeout(() => {
                    commit(setResponse, '')
                }, 3000);
            } else {
                commit(setResponse, res.data.msg)
                setTimeout(() => {
                    commit(setResponse, '')
                }, 3000);
            }
        }).catch(function () {
            commit(setResponse, 'Server is off!')
        })
    },
    allProject({commit}){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        instance.get('/api/data/allProject',{ headers : headers })
        .then(function(res){
            commit(setData, res.data.msg)
        }).catch(function(){
            commit(setResponse, 'Server is off!')
            setTimeout(() => {
                commit(setResponse, '')
            }, 3000);
        })
    },
    deleteProject({commit, dispatch}, payload){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        instance.delete('/api/data/allproject/'+payload, {headers:headers})
        .then(function(res){
            dispatch('allProject')
            commit(setResponse, res.data.msg)
            setTimeout(() => {
                commit(setResponse, '')
            }, 3000);
        }).catch(function(){
            commit(setResponse, 'Server is off!')
            setTimeout(() => {
                commit(setResponse, '')
            }, 3000);
        })
    },
    editProject({commit, dispatch}, payload){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        commit(setResponse, '')
        instance.put('/api/data/allproject/'+payload.id_project, payload, {headers:headers})
        .then((res)=>{
            commit(setResponse, res.data.msg)
            dispatch('allProject')
            setTimeout(() => {
                commit(setResponse, '')
            }, 3000);
        }).catch(()=>{
            commit(setResponse, 'Server is off!')
            setTimeout(() => {
                commit(setResponse, '')
            }, 3000);
        })
    }
}

const mutations = {
    [setResponse](state, payload) {
        state.response = payload
    },
    [setData](state, payload) {
        state.data.allProject = payload
    },
    [setDataAssetsAccount](state, payload) {
        state.data.allAssetsAccount = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}