<template>
    <div class="w-50 m-auto">
        <div class="p-2">
            <input class="form-control" type="text" v-model="user.name" placeholder="name">
        </div>
        <div class="p-2">
            <input class="form-control" type="email" v-model="user.email" placeholder="email">
        </div>
        <div class="p-2">
            <input class="form-control" type="password" v-model="user.password" placeholder="password">
        </div>
        <div class="p-2">
            <input class="form-control" type="password" v-model="user.password_confirmation" placeholder="password confirmation">
        </div>
        <div class="p-2">
            <input class="btn btn-primary" type="submit" @click.prevent="$store.dispatch('register', {
                name: user.name,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation,
            })">
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Register",

    mounted() {
        this.$store.commit('setUser', { name: null, email: null, password: null, password_confirmation: null })
    },

    computed: {
        ...mapGetters({
            user: 'user',
        })
    }
}
</script>

<style scoped>

</style>
