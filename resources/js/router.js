import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: () => import('./components/User/Login'),
            name: 'main.index'
        },
        {
            path: '/login',
            component: () => import('./components/User/Login'),
            name: 'login.index'
        },
        {
            path: '/register',
            component: () => import('./components/User/Register'),
            name: 'register.index'
        },
        {
            path: '/logout',
            component: () => import('./components/User/Login'),
            name: 'logout.index'
        },
        {
            path: '/people',
            component: () => import('./components/Person/Index'),
            name: 'persons.index'
        },
        {
            path: '/people/create',
            component: () => import('./components/Person/Create'),
            name: 'persons.create'
        },
        {
            path: `/people/:id`,
            component: () => import('./components/Person/Show'),
            name: 'persons.show'
        },
        {
            path: '/people/:id/edit',
            component: () => import('./components/Person/Edit'),
            name: 'persons.edit'
        },
    ]
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'login.index' || to.name === 'register.index') {
            return next()
        } else {
            return next({
                name: 'login.index'
            })
        }
    }

    if (to.name === 'login.index' || to.name === 'register.index' && accessToken) {
        return next({
            name: 'persons.index'
        })
    }

    next()
})

export default router


