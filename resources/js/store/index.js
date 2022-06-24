import Vue from "vue";
import Vuex from 'vuex';
import Person from './modules/person';
import User from './modules/user';


Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        Person,
        User
    }
})

