<template>
    <div class="w-50 m-auto mb-3 p-3">
        <div class="d-flex">
                <router-link class="me-3 p-2" :to="{ name: 'persons.index' }">People</router-link>
                <router-link v-if="accessToken" class="btn btn-success me-auto p-2" :to="{ name: 'persons.create' }">Create new</router-link>
                <router-link v-if="!accessToken" class="ms-auto me-3 p-2" :to="{ name: 'login.index' }">Login</router-link>
                <router-link v-if="!accessToken" class="btn btn-outline-primary p-2" :to="{ name: 'register.index' }">Register</router-link>
                <a class="ms-auto p-2" v-if="accessToken" href="#" @click.prevent="$store.dispatch('logout')">Logout</a>
        </div>
        <div>
            <router-view class="mt-3"></router-view>
        </div>
    </div>
</template>

<script>
import api from '../api';
import {mapGetters} from "vuex";
export default {
    name: "App",

    mounted() {
        this.$store.dispatch('getAccessToken')
    },

    updated() {
        this.$store.dispatch('getAccessToken')
    },

    computed: {
        ...mapGetters({
            accessToken: 'accessToken',
        })
    }
}
</script>

<style scoped>

</style>
