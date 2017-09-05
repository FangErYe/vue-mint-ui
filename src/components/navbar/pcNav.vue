<template>
  <div>
    <ul style="text-align: center;color: #fff;">
      <li  class="pc-navli" v-for="(item,index) in liState"
           @click="liToggle(index,item.to)"
           :class="{liActive:item.toggle}">
        <div class="icon-margin">
          <i class="icon iconfont icon-home fontsize" :class="item.class"></i>
        </div>
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'pcNav',
    data(){
      return{
        liState:[
          {class:'icon-home',text:'首页',toggle:true,to:'/'},
          {class:'icon-qr_code_light',text:'任务',toggle:false,to:'/task'},
          {class:'icon-rank',text:'统计',toggle:false,to:'/statistics'},
          {class:'icon-form',text:'表单',toggle:false,to:'/form'},
          {class:'icon-people',text:'我的',toggle:false,to:'/mine'}
        ]
      }
    },
    methods:{
      liToggle:function (index,url) { //li样式切换
        this.$router.replace(url);  //路由跳转
        this.liState.forEach(function (v,i) {
          v.toggle = (index === i)? true : false;
        })
      }
    }
  }
</script>
<style scoped>
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    height:75px;
    line-height:1.4em;
  }
  li:hover{
    background: #73c5ff;
  }
  .liActive{
    background: #73c5ff;
  }
  .fontsize{
    font-size: 22px;
  }
</style>
