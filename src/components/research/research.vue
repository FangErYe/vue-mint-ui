<template>
  <div class="lz-search">
    <!--header组件-->
    <mt-header title="廉政调查">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="tab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">已评价</mt-tab-item>
        <mt-tab-item id="2">未评价</mt-tab-item>
      </mt-navbar>
    </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <!--已评价-->
        <mt-tab-container-item id="1">
          <el-row class="content-item mb10">
            <el-col :span="6" class="left-icon">
          <span class="icon">
            <i class="iconfont icon-activity" v-bind:style="{fontSize:'30px',color:'#4aa1da'}"></i>
          </span>
            </el-col>
            <el-col :span="18" class="right-text">
              <ul class="mb5">
                <li class="one">
                  <span>我发起的任务</span><br>
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
                <li class="fontColor">
                  <span>下户企业：</span>
                  <span>世纪中税</span>
                </li>
                <li class="fontColor">
                  <span>评分：</span>
                  <span style="color: #ffc027;">好评</span>
                </li>
              </ul>
              <div  class="t-r scan">
                <mt-button type="primary" size="small" plain>查看评价</mt-button>
              </div>
            </el-col>
          </el-row>
          <el-row class="content-item mb10">
            <el-col :span="6" class="left-icon">
          <span class="icon">
            <i class="iconfont icon-activity" v-bind:style="{fontSize:'30px',color:'#4aa1da'}"></i>
          </span>
            </el-col>
            <el-col :span="18" class="right-text">
              <ul class="mb5">
                <li class="one">
                  <span>我发起的任务</span><br>
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
                <li class="fontColor">
                  <span>下户企业：</span>
                  <span>世纪中税</span>
                </li>
                <li class="fontColor">
                  <span>评分：</span>
                  <span style="color: #ffc027;">好评</span>
                </li>
              </ul>
              <div  class="t-r scan">
                <mt-button type="primary" size="small" plain>查看评价</mt-button>
              </div>
            </el-col>
          </el-row>
        </mt-tab-container-item>
        <!--未评价-->
        <mt-tab-container-item id="2">
          <el-row class="content-item mb10">
            <el-col :span="6" class="left-icon">
          <span class="icon">
            <i class="iconfont icon-activity" v-bind:style="{fontSize:'30px',color:'#4aa1da'}"></i>
          </span>
            </el-col>
            <el-col :span="18" class="right-text">
              <ul>
                <li class="one">
                  <span>我发起的任务</span>
              <span class="state" >
                <i class="iconfont icon-jingbao"></i>
                超过10天</span><br>
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
            </el-col>
          </el-row>
          <el-row class="content-item mb10">
            <el-col :span="6" class="left-icon">
          <span class="icon">
            <i class="iconfont icon-activity" v-bind:style="{fontSize:'30px',color:'#4aa1da'}"></i>
          </span>
            </el-col>
            <el-col :span="18" class="right-text">
              <ul>
                <li class="one">
                  <span>我发起的任务</span>
              <span class="state">
                <i class="iconfont icon-favor"></i>
                对方未认领</span><br>
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
            </el-col>
          </el-row>
          <el-row class="content-item mb10">
            <el-col :span="6" class="left-icon">
          <span class="icon">
            <i class="iconfont icon-activity" v-bind:style="{fontSize:'30px',color:'#4aa1da'}"></i>
          </span>
            </el-col>
            <el-col :span="18" class="right-text">
              <ul>
                <li class="one">
                  <span>我发起的任务</span>
              <span class="state">
                <i class="iconfont icon-favor"></i>
                对方未认领</span><br>
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
            </el-col>
          </el-row>
        </mt-tab-container-item>
      </mt-tab-container>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return{
        selected:'1'
      }
    },
    beforeRouteEnter(to,from,next){
      next(vm => {
        vm.$store.commit('showNav', false);
      })
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('showNav', true);
      next();
    }
  }
</script>
<style scoped>
  div.tab{
    margin-bottom:2px;
  }
  .fontColor{
    color:#8d8d8d;
  }
  .content-title,.content-item{
    background-color: #fff;
  }
  .content-item{
    padding:10px 0;
  }
  .content-item .left-icon span.icon{
    text-align: center;
    display: block;
    width:40px;
    height:40px;
    line-height:40px;
    margin: 0 auto;
    border-radius: 6px;
    border:1px solid #e2e2e2;
    color: #ff7d5a;
  }
  .content-item .right-text{
    text-align: left;
    line-height:1.5em;
  }
  .content-item .right-text ul li.one{
    line-height:1.2em;
  }
  .right-text ul li.one small{
    color: #bebebe;
  }

  .right-text div.scan{
    border-top:1px solid #e2e2e2;
    padding-right:10px;
    padding-top: 5px;
  }
  .right-text ul li.one .state{
    display: inline-block;
    float: right;
    padding-right: 20px;
    color: #ff7d5a;
  }
</style>
