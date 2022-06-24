<template>
    <div class="w-50 m-auto" v-if="person">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="person.name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="person.age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="person.job" placeholder="job">
        </div>
        <div class="mb-3">
            <input @click.prevent="$store.dispatch('update', {
                id: person.id,
                name: person.name,
                age: person.age,
                job: person.job,
            })" type="submit" class="btn btn-primary" :disabled="!isDisabled" value="Update">
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Edit",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        ...mapGetters({
            person: "person",
            isDisabled: "isDisabled",
        })
    },
}
</script>

<style scoped>

</style>
