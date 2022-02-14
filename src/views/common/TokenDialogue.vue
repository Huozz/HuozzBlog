<template>
<!-- 绑定token的弹出窗口 -->
   <div>
       <el-dialog title="绑定Token" :visible.sync="show">
           <el-form :model="tokenFormData" ref="tokenForm">
               <el-form-item label="gitHub">
                   {{githubUsername}}
               </el-form-item>
               <el-form-item label="Token" prop="token" :rules="[{required: true, message:'请输入要绑定的token', trigger:'blur'}]">
                   <el-input v-model="tokenFormData.token" placeholder="Token"></el-input>
               </el-form-item>
           </el-form>
           <span slot="footer">
               <el-button @click="show=false">取消</el-button>
               <el-button @click="onSubmit" type="primary">确认</el-button>
           </span>
       </el-dialog>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   data () {
      return {
          show: false,
          tokenFormData:{
              token:""
          },
          // 确认成功后窗口关闭的function
          closeFunc: null
      };
   },

   computed: {
       ...mapGetters([
           'githubUsername'
       ])
   },

   methods: {
       open(){
           this.show = true
       },
       onSubmit(){
           this.$refs["tokenForm"].validate((valid)=>{
               if(valid){
                   this.$store.dispatch("Authentic",this.tokenFormData.token)
               }
           })
           this.show=false
       }
   }

}
</script>
<style lang='css' scoped>

</style>