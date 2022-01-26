import Vue from 'vue'
import Vuex from 'vuex'
import configuration from './modules/configuration'
import users from './modules/users'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
        modules:{
            configuration,
            users
        },
        getters
    
})

export default store