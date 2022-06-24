import router from "./router";
import axios from "axios";

const api = axios.create()

api.interceptors.request.use(config => {
    let token = localStorage.getItem('access_token')
    if (token) {
        config.headers.authorization = `Bearer ${token}`
    }

    return config
}, error => {
    console.log(error);
})

api.interceptors.response.use(config => {
    let token = localStorage.getItem('access_token')

    if (token) {
        config.headers.authorization = `Bearer ${token}`
    }

    return config
}, error => {
    if (error.response.data.message === 'Token has expired') {
        return axios.post('/api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(response => {
            let token = response.data.access_token

            localStorage.setItem('access_token', token)

            error.config.headers.authorization = `Bearer ${token}`

            return api.request(error.config)
        })
    }

    if (error.response.status === 401) {
        router.push({name: 'login.index'})
    }
})

export default api
