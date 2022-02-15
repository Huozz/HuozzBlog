<template>
   <div>
      <el-card shadow="never">
         <el-menu :default-active="active" @select="onSelect">
            <el-menu-item v-for="item in constantRouterMap" v-if="item.meta && item.meta.type=='user'" 
            :key="item.path"
            :index="item.path" style="text-align:left">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
         </el-menu>
      </el-card>
      <el-card shadow="never" style="margin-top:20px; text-align:center">
         <div v-if="!token">
            <el-tag type="danger">&nbsp;</el-tag> Token未绑定 &nbsp; &nbsp;
            <el-button type="text" @click="openTokenDialogue">绑定</el-button>
         </div>
         <div v-if="token">
            <el-tag type="success">&nbsp;</el-tag> Token已绑定 &nbsp; &nbsp;
            <el-button type="text" @click="cancel"> 取消</el-button>
         </div>
         
      </el-card>
      <token-dialogue ref="tokendialogue"></token-dialogue>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {constantRouterMap} from '../../../router'
import TokenDialogue from '../../common/TokenDialogue'
export default {
   data () {
      return {
         constantRouterMap,
         active:""
      };
   },

   components: {
      TokenDialogue
   },

   computed: {
      ...mapGetters([
         'token',
         'githubUsername'
      ])
   },

   methods: {
      onSelect(index){
         this.$router.push(index)
      },
      openTokenDialogue(){
         this.$refs.tokendialogue.open()
      },
      cancel(){
         this.$store.dispatch("CancleAuthentic")
      }
      
   }
}
</script>
<style lang='css' scoped>

</style>