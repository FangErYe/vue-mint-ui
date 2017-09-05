<template>
  <div id="app">
    <el-row style="height: 100%">
      <el-col :md="1" style="background: #36a8fe;height: 100%;position: fixed;top: 0;left: 0;">
          <pc-nav></pc-nav>
      </el-col>
      <el-col :md="{span:23, offset:1}" >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
    <!--<router-view></router-view>-->
    <nav-bar v-if="navBar.toggle" class="mbNav"></nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import Navbar from './components/navbar/navbar.vue'
  import pcNav from './components/navbar/pcNav.vue'
  import { mapGetters } from 'vuex'
  export default{
    name:'app',
    computed:{
      ...mapGetters(['navBar'])
    },
    components: {
      'nav-bar':Navbar,'pc-nav':pcNav
    }
  }
</script>

<style>
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
.el-col-md-1{
  display: none;
}
  @media screen and (min-width: 992px){
    .el-col-md-1{
      display: block;
    }
    .el-col-md-23{
      padding:0 22px;
      /*float: right;*/
    }
    .mbNav{
      display: none;
    }
  }
</style>
