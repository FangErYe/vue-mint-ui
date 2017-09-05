<template>
  <div id="main">
    <div class="page-tabbar">
      <div class="mint-tab-container page-tabbar-container">
        <div class="mint-tab-container-wrap">
          <!--首页组件-->
          <v-index v-show="'index' == selected"></v-index>
          <div class="mint-tab-container-item" v-show="'task' == selected">
            <v-taskIndex></v-taskIndex>
          </div>
          <div class="mint-tab-container-item" v-show="'statistics' == selected">
            <v-statistics></v-statistics>
          </div>
          <biaodan v-show="'form' == selected"></biaodan>
          <mine v-show="'mine' == selected"></mine>
        </div>
      </div>
    </div>
    <!--底部导航组件-->
    <v-navbar v-on:selected="callBack"></v-navbar>
  </div>
</template>
<script>
  import navbar from '../navbar/navbar.vue'
  import index from '../index/index.vue'
  import biaodan from '../form/form.vue'
  import mine from '../mine/mine.vue'
  import statistics from '../Statistics/statistics.vue'
  import mainIndex from '../index/index.vue'
  import taskIndex from '../task/taskIndex.vue'
  export default {
    name: 'main',
    data (){
      return {selected: 'index'}
    },
    methods:{
      callBack : function(res){//事件处理函数,子组件将值传回在这里接收
        this.selected = res;
      }
    },
    components:{
      'v-navbar':navbar,'v-index':mainIndex,'v-statistics':statistics,'v-taskIndex': taskIndex,
      biaodan,mine
    }
  }
</script>
<style>
  .mint-tab-container{
    padding-bottom:80px;
  }
</style>
