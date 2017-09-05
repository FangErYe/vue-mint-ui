<template>
    <div class="page-navbar">
      <!--<div class="marginBottom">-->
        <!--&lt;!&ndash;<mt-header fixed title="统计"></mt-header>&ndash;&gt;-->
      <!--</div>-->
      <mt-header title="统计">
        <!--<router-link to="/" slot="left">-->
          <!--<mt-button icon="back"></mt-button>-->
        <!--</router-link>-->
      </mt-header>
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">进展统计</mt-tab-item>
        <mt-tab-item id="2">归档统计</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <v-time v-on:addren="addrenFun"></v-time>
          <v-header v-on:addren="addrenFun"></v-header>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <v-time v-on:addren="addrenFun"></v-time>
          <v-archiveContent v-on:addren="addrenFun"></v-archiveContent>
        </mt-tab-container-item>
      </mt-tab-container>
      <transition name="fade" :duration="1000"  mode="in-out">
       <v-address v-on:addren="addrenFun" v-show="addren"></v-address>
      </transition >
    </div>
</template>
<script>
  import header from './header.vue'
  import address from './address.vue'
  import time from './time.vue'
  import archiveContent from './archiveContent.vue'
  export default{
    name:'statistics',
    data(){
      return {
        id:'selected',
        selected: '1',
        addren:false
      };
  },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      addrenFun:function (res) {
        this.addren = res;
      },
      handlestartChange(value) {
        this.time.start = value;
        //this.show = true;
      },
      handleendChange(value) {
        this.time.end = value;
        //this.show = true;
      }
    },
    components:{
      'v-header':header,'v-address':address,'v-archiveContent':archiveContent,'v-time':time
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .mt-picker{margin-top: 3px;padding:5px;background: #fff; border-top: 1px solid #eee;}
  .mint-navbar .mint-tab-item{padding: 13px 0;}
</style>
