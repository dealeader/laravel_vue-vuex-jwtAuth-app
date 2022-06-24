<template>
    <div v-if="people">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <th scope="row">{{ person.id }}</th>
                    <td><router-link
                        :to="{
                        name: 'persons.show',
                        params: { id: person.id }}"
                    >
                        {{ person.name }}
                    </router-link></td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link
                            class="btn btn-outline-success"
                            :to="{
                            name: 'persons.edit',
                            params: {
                                id: person.id
                            }
                        }">
                            Edit
                        </router-link>
                        <a
                            class="btn btn-outline-danger"
                            @click.prevent="$store.dispatch('deletePerson', person.id)"
                            href="">
                            Delete
                        </a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Index",

    mounted() {
        this.$store.dispatch('getPeople')
    },

    computed: {
        ...mapGetters({
            people: 'people',
        })
    },
}
</script>

<style scoped>

</style>
