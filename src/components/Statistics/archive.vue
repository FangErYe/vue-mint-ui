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
    <div class="progress_selected ">
      <span>任务分类：</span>
      <select v-model="selected">
        <option>工商营业执照下户调查表</option>
        <option>卫生许可证调查表</option>
        <option>组织机构代码证调查表</option>
        <option>企业营业执照下户调查表</option>
      </select>
    </div>
    <div class="progress_content">
      <div class="content-item mt">
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
      <div class="content-item mt">
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
    name:'archive',
    data(){
      return {
        id:'selected',
        selected:''
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
  .progress_selected span{color: #aaa}
  .progress_selected select{width: 70%;border:0}
  .progress_header,.progress_selected{background: #fff;padding:10px;margin-bottom: 2px;}
  .progress_content .content-item{background-color: #fff;}
  .content-title h4{text-align:left;padding:10px 10px;border-bottom:1px solid #e2e2e2;font-weight:500;font-size:16px;}
  .content-item{display:flex;flex-direction:row;padding:10px 0;}
  .content-item .left-icon{flex:1;}
  .content-item .left-icon span.icon{display:block;width:40px;height:40px;line-height:40px;margin:0 auto;border-radius:6px;border:1px solid #e2e2e2;color: #ff7d5a;}
  .content-item .right-text{flex:4;text-align: left;line-height:2em;}
  .content-item .right-text ul li.one{line-height:1.5em;}
  .right-text ul li.one small{color: #bebebe;}
  .right-text ul li.one .state{display: inline-block;float: right;padding-right: 20px;color: #38adff;}
</style>
