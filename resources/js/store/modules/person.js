import router from "../../router";
import api from "../../api";

const state = {
    person: {
        name: null,
        age: null,
        job: null,
    },
    people: null,
}

const getters = {
    person: () => state.person,
    people: () => state.people,
    isDisabled: () => state.person.name && state.person.age && state.person.job,
}

const actions = {
    getPerson({commit}, id) {
        api.get(`/api/auth/people/${id}`).then(response => {
            commit('setPerson', response.data.data)
        }).catch(error => {
            console.log(error.response)
        })
    },
    getPeople({commit}) {
        api.get('/api/auth/people').then(response => {
            commit('setPeople', response.data.data)
        }).catch(error => {
            console.log(error.response)
        })
    },
    deletePerson({dispatch}, id) {
        api.delete(`/api/auth/people/${id}`).then(response => {
            dispatch('getPeople')
        }).catch(error => {
            console.log(error.response)
        })
    },
    store({}, data) {
        api.post('/api/auth/people', {
            name: data.name,
            age: data.age,
            job: data.job,
        }).then(response => {
            router.push({name: 'persons.index'})
        }).catch(error => {
            console.log(error.response);
        })
    },
    update({}, data) {
        api.patch(`/api/auth/people/${data.id}`, {
            name: data.name,
            age: data.age,
            job: data.job,
        }).then(response => {
            router.push({name: 'persons.index'})
        }).catch(error => {
            console.log(error.response)
        })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    },
}

export default {
    state, getters, mutations, actions
}
