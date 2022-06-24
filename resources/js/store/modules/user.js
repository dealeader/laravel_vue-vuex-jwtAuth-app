import router from "../../router";
import api from "../../api";

const state = {
    user: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
    },
    accessToken: null,
}

const getters = {
    user: () => state.user,
    accessToken: () => state.accessToken,
}

const actions = {
    register({}, data) {
        axios.post('/api/users', {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
        }).then(response => {
            localStorage.setItem('access_token', response.data.access_token)
            router.push({ name: 'persons.index' })
        }).catch(error => {
            console.log(error.response);
        })
    },
    login({}, data) {
        axios.post('/api/auth/login', {
            email: data.email,
            password: data.password,
        }).then(response => {
            localStorage.setItem('access_token', response.data.access_token)
            router.push({ name: 'persons.index'})
        })
    },
    logout() {
        api.post('/api/auth/logout').then(response => {
            localStorage.removeItem('access_token')
            router.push({ name: 'login.index' })
        })
    },
    getAccessToken({commit}) {
         commit('setAccessToken', localStorage.getItem('access_token'))
    },
}

const mutations = {
    setUser(state, user) {
        state.user = user
    },
    setAccessToken(state, accessToken) {
        state.accessToken = accessToken
    }
}


export default {
    state, getters, mutations, actions
}
