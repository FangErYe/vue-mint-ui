<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="/" class="font-color">
      <div class="icon-margin"><i class="icon iconfont icon-home fontsize"></i></div>
      首页
    </mt-tab-item>
    <mt-tab-item id="/task" class="font-color">
      <div class="icon-margin"><i class="icon iconfont icon-qr_code_light fontsize"></i></div>
      任务
    </mt-tab-item>
    <mt-tab-item id="/statistics" class="font-color">
      <div class="icon-margin"><i class="icon iconfont icon-rank fontsize"></i></div>
      统计
    </mt-tab-item>
    <mt-tab-item id="/form" class="font-color">
      <div class="icon-margin"><i class="icon iconfont icon-form fontsize"></i></div>
      表单
    </mt-tab-item>
    <mt-tab-item id="/mine" class="font-color">
      <div class="icon-margin"><i class="icon iconfont icon-people fontsize"></i></div>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    name: 'navbar',
    data () {
      return {selected: '/'}
    },
    methods:{

    },
    created(){
      this.selected = location.hash.slice(1)
    },
    watch: {
      selected: function (val, oldVal) {
        this.$router.replace(val);
      }
    }
  }
</script>
<style scoped>
  i{
    font-size: 22px;
  }
  .font-color{
    color: #989898
  }
  .icon-margin{
    margin-bottom: 2px;
  }
</style>
