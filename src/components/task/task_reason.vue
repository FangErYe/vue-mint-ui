<template>
  <div >
    <div id="input">
    <mt-field  type="textarea"  rows="7" placeholder="请输入退回原因..." v-model="reason"></mt-field>
    </div>
      <el-row style="margin-top:20px">
      <el-col  :xs=" {span: 22, offset: 1}">
        <mt-button type="primary" size="large" >提 交</mt-button></el-col>
      <el-col  :xs=" {span: 1, offset: 0}"></el-col>
    </el-row >
  </div>
</template>

<script>
  export default {
    name: 'task_reason',
    beforeRouteEnter(to,from,next){
      next(vm => {
        vm.$store.commit('showNav', false);
      })
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('showNav', true);
      next();
    },
    data () {
      return {
        msg: '任务退回原因',
        reason:'请输入退回原因'
      }
    },
    watch:{
      reason:function (new_param,old_param) {
        console.log('new_param: %s, old_param: %s', new_param, old_param)
      }
    }
  }
</script>

<style scoped>
  .fontsize{
    font-size: 20px;
    margin-right: 10px
  }
  #input{

  }
</style>
