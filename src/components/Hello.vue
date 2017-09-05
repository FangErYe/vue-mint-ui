<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="index">
      <i class="icon iconfont icon-home"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="task">
      <img slot="icon" src="../assets/logo.png">
      任务
    </mt-tab-item>
    <mt-tab-item id="total">
      <img slot="icon" src="../assets/logo.png">
      统计
    </mt-tab-item>
    <mt-tab-item id="ticket">
      <img slot="icon" src="../assets/logo.png">
      表单
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
