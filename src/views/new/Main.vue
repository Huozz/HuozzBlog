<template>
    <!-- newMain -->
   <div>我是NewMain</div>
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
         console.log("result",result)
         if(!result || result.length==0){
            this.loading = false
            return
         }
         
         // for (let key in result[0].files){
         //    this.blog.id = result[0]['id']
         //    break
         // }
         // GistApi.single
      })

   }
}
</script>
<style lang='css' scoped>

</style>