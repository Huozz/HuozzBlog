import Vue from 'vue'
import Vuex from 'vuex'
import configuration from './modules/configuration'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
        modules:{
            configuration,
        },
        getters
    
})

export default store