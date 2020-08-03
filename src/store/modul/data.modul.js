import axios from 'axios'
import { addProject } from '../action.type'
import { setResponse, setStatus } from '../mutation.type'

const state = () => ({
    response: '',
    status: ''
})

const getters = {}

const actions = {
    [addProject]({ commit }, payload) {
        commit(setResponse, 'tes')

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
            } else {
                commit(setResponse, res.data.msg)
            }
        }).catch(function (res) {
            commit(setResponse, res)
        })
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