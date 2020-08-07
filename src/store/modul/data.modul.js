import axios from 'axios'
import { addProject, allProject, deleteProject } from '../action.type'
import { setResponse, setData } from '../mutation.type'

const state = () => ({
    response: '',
    status: '',
    data:{
        allProject: ''
    }
})

const getters = {}

const actions = {
    [addProject]({ commit }, payload) {
        var data = {
            tittle  :   payload.tittle,
            service :   payload.service,
            status  :   payload.status,
            developer   :   payload.developer,
            cost    :   payload.cost,
            note    :   payload.note
        }
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
          }

        axios.post('http://localhost:3000/api/data/addProject', data, {
            headers : headers
        }).then(function (res) {
            if (res.data.status) {
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
    [allProject]({commit}){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        axios.get('http://localhost:3000/api/data/allProject',{ headers : headers })
        .then(function(res){
            commit(setData, res.data.msg)
        }).catch(function(){
            commit(setResponse, 'Server is off!')
        })
    },
    [deleteProject]({commit}, payload){
        const headers = {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        axios.delete('http://localhost:3000/api/data/allproject/'+payload, {headers:headers})
        .then(function(res){
            commit(setResponse, res.data.msg)
        }).catch(function(){
            commit(setResponse, 'Server is off!')
        })
    }
}

const mutations = {
    [setResponse](state, payload) {
        state.response = payload
    },
    [setData](state, payload) {
        state.data.allProject = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}