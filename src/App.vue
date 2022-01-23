<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Test></Test>
    <div>从configuration.json中读取的gitHub用户名是{{githubUsername}}</div>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components:{
    Test
  },
  created(){
    this.$store.dispatch("Init")
  },

  computed:{
    ...mapGetters([
      'githubUsername'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
