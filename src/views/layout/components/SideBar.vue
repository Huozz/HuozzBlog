<template>
   <div>
      <el-card>
         <el-menu :default-active="active" @select="onSelect">
            <el-menu-item v-for="item in constantRouterMap" v-if="item.meta && item.meta.type=='user'" 
            :key="item.path"
            :index="item.path">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>

            </el-menu-item>
         </el-menu>
      </el-card>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {constantRouterMap} from '../../../router'
export default {
   data () {
      return {
         constantRouterMap
      };
   },

   components: {},

   computed: {
      ...mapGetters([
         'githubUsername'
      ])
   },

   methods: {
      onSelect(index){
         this.$router.push(index)
      }
   }
}
</script>
<style lang='css' scoped>

</style>