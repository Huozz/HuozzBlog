<template>
   <div style="min-height:600px" v-loading="loading">
      <el-card shadow="never" style="margin-height:400px">
         <div slot="header">
            <el-row>
               <el-col :span="12">
                  <span>{{blog.title}}</span>
               </el-col>
               <el-col :span="12">
                  <div style="text-align: center">
                     <el-button @click="goBack" icon="el-icon-back" style="padding: 3px 0" type="text">返回</el-button>
                     <el-button @click="goEdit" icon="el-icon-edit-outline" style="padding 3px 0" type="text">编辑</el-button>
                  </div>
               </el-col>
            </el-row>
         </div>
         <div style="font-size: 0.9 rem; line-height: 1.5; color:#606c71">
            发布于 {{this.blog.creationTime}}
            <br>
            更新于 {{this.blog.editTime}}
         </div>
         <div style="font-size: 1.1 rem; line-height: 15px; color:#303133; border-bottom: 1px solid #E4E7ED; padding: 5px 0px 5px 0px">
            <pre style="font-family: 微软雅黑">{{blog.description}}</pre>
         </div>
         <div class="mavon-editor">
            <mavon-editor v-html="blog.content"></mavon-editor>
         </div>

         <!-- <div v-html="blog.content" class="markdownbody" style="padding-top:20px"> </div> -->
      </el-card>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GistApi from '../../api/gist'
export default {
   data () {
      return {
         blog:{
            id: "",
            title:"",
            content:"",
            description:"",
            creationTime:"",
            editTime:""
         },
         loading: false
      };
   },

   components: {

   },

   computed: {
      ...mapGetters([
         'token'
      ])
   },

   mounted(){
      this.blog.id = this.$route.params.id
      this.loading = true
      GistApi.single(this.blog.id).then((response) =>{
         let result = response.data;
         console.log(result)
         for(let key in result.files){
            this.blog.title = key;
            this.blog.description = result.description;
            // console.log(result.files[key].content)
            // this.blog.content = this.$markdown(result.files[key].content)
            this.blog.content = result.files[key].content
            this.blog.creationTime = this.$util.utcToLocal(result.created_at);
            this.blog.editTime = this.$util.utcToLocal(result.updated_at);
            break
         }
      }).then(()=>{
         this.loading = false
      })
   },

 
   methods: {
      goEdit(){
         if(!this.token){
            this.$message({
               message: '请绑定有效token',
               type: 'warning'
            })
            return
         }
         this.$router.push('/user/blog/edit/'+this.blog.id)
      },
      goBack(){
         this.$router.go(-1)
      }
   }
}
</script>
<style lang='css' scoped>

</style>