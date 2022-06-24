<template>
    <div class="w-50 m-auto">
        <div class="p-2">
            <input class="form-control" type="email" v-model="user.email" placeholder="email">
        </div>
        <div class="p-2">
            <input class="form-control" type="password" v-model="user.password" placeholder="password">
        </div>
        <div class="p-2">
            <input class="btn btn-primary" @click.prevent="$store.dispatch('login', {
                email: user.email,
                password: user.password,
            })" type="submit">
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Login",

    mounted() {
        this.$store.commit('setUser', {
            email: null,
            password: null,
        })
    },

    computed: {
        ...mapGetters({
            user: 'user'
        })
    }
}
</script>

<style scoped>

</style>
