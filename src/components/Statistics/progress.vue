<template>
  <div>
    <mt-header title="统计">
      <router-link to="/statistics" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
     <div class="progress_header blod">
       <span>铁铁-归档统计（323）</span>
     </div>
    <div class="progress_content">
      <div class="content-item mb10">
        <div class="left-icon">
          <span class="icon">
            <i class="iconfont icon-duihua" v-bind:style="{fontSize:'30px'}"></i>
          </span>
        </div>
        <div class="right-text">
          <ul>
            <li class="one">
              <span>我收到的任务</span>
              <span class="state">进行中</span><br>
              <small>2017-08-01</small>
            </li>
            <li>
              <span>企业营业执照等信息下户调查</span>
            </li>
            <li class="fontColor">
              <span>截止时间：</span>
              <span>8月4日  周五</span>
            </li>
            <li class="fontColor">
              <span>负责人：</span>
              <span>铁铁</span>
            </li>
            <li class="fontColor">
              <span>审核人：</span>
              <span>铁铁</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-item mb10">
        <div class="left-icon">
          <span class="icon">
            <i class="iconfont icon-duihua" v-bind:style="{fontSize:'30px'}"></i>
          </span>
        </div>
        <div class="right-text">
          <ul>
            <li class="one">
              <span>我收到的任务</span>
              <span class="state">进行中</span><br>
              <small>2017-08-01</small>
            </li>
            <li>
              <span>企业营业执照等信息下户调查</span>
            </li>
            <li class="fontColor">
              <span>截止时间：</span>
              <span>8月4日  周五</span>
            </li>
            <li class="fontColor">
              <span>负责人：</span>
              <span>铁铁</span>
            </li>
            <li class="fontColor">
              <span>审核人：</span>
              <span>铁铁</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'progress',
    data(){
      return {
        id:'selected'
      };
    },
    beforeRouteEnter(to,from,next){
      next(vm => {
        vm.$store.commit('showNav', false);
      })
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('showNav', true);
      next();
    },
    methods: {

    }
  }
</script>
<style scoped>
.progress_header{background: #fff;padding:10px;border-bottom: 1px solid #eee}
.progress_content{overflow: hidden}
.content-title h4{text-align:left;padding:10px 10px;border-bottom:1px solid #e2e2e2;font-weight:500;font-size:16px;}
.content-item{background-color: #fff;display:flex;flex-direction:row;padding:10px 0;}
.content-item .left-icon{flex:1;}
.content-item .left-icon span.icon{text-align:center;display:block;width:40px;height:40px;line-height:40px;margin:0 auto;border-radius:6px;border:1px solid #e2e2e2;color: #ff7d5a;}
.content-item .right-text{flex:4;text-align: left;line-height:2em;}
.content-item .right-text ul li.one{line-height:1.5em;}
.right-text ul li.one small{color: #bebebe;}
.right-text ul li.one .state{display: inline-block;float: right;padding-right: 20px;color: #38adff;}
</style>
