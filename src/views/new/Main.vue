<template>
    <!-- newMain,最近更新是gistapi返回的list第一个元素 -->
   <div style="min-heighr:600px" v-loading="loading">
      <el-card shadow="never" style="min-height: 400px" v-if="blog.id" >
         <div slot="header" style="text-align:left">
            <span>{{blog.title}}</span>
         </div>
         <div style="font-size:0.9rem; 
               line-height:1.5; 
               color: #606c71;
               text-align: left;
               " >
            创建{{blog.createTime}}
            <br>
            更新{{blog.updateTime}}
         </div>
         <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 35px 0px 5px 0px; text-align:left">
            {{blog.description}}
         </div>
         <!-- <div v-html="blog.content" class="markdown-body" style="padding-top:40px" ></div> -->
      </el-card>
      <el-card shadow="never" style="margin-bottom: 40px padding: 20px 0px 20px 0px text-align:center" v-if="!blog.id">
         <font style="font-size: 30px; color: #ddddd">
            <b>没有更新</b>
         </font>
      </el-card>
   </div>

</template>

<script>
import GistApi from '../../api/gist'
export default {
   name: 'NewMain',
   data () {
      return {
         query: {
            page: 1,
            pageSize: 1
         },
         loading: false,
         blog: {
            id: "",
            title: "",
            content: "",
            description: "",
            createTime: "",
            updateTime: ""
         }
      };
   },

   components: {},

   computed: {},

   methods: {},

   mounted(){
      this.loading = true
      GistApi.list(this.query).then((response) => {
         let result = response.data
         if(!result || result.length==0){
            this.loading = false
            return
         }
         // 由于list中没有博文的content，因此再请求single获取该博文详细内容
         this.blog.id = result[0]['id']
         GistApi.single(this.blog.id).then((response)=>{
            this.result = response.data
            for(let key in result[0].files){
               this.blog.description = result[0]['description']
               this.blog.title = key
               this.blog.content = result[0].files[key]['content']
               this.blog.createTime = this.$util.utcToLocal(result[0].created_at)
               this.blog.updateTime = this.$util.utcToLocal(result[0].updated_at)
               break
            }
         }).then(()=>{
            this.loading = false
         })
      })
   }
}
</script>
<style lang='css' scoped>

</style>