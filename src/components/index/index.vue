<template>
  <div class="index" >
    <!--移动端头部-->
    <div  class="index-header">
      <!--背景图-->
      <div class="bg-picture">
        <!--<img src="../../assets/images/banner.png" style="height: 100%;width: 100%;">-->
      </div>
      <!--新建任务按钮-->
      <router-link to="/task_build">
        <button class="new-task">
          <i class="iconfont icon-add" v-bind:style="{color:'#38adff'}"></i>
          <span>新建任务</span>
        </button>
      </router-link>
    </div>
    <!--pc端头部-->
    <div class="pcHeader">
      <el-row>
        <el-col :span="2">
          <i class=" iconfont icon-home "></i>
          <span>首页</span>
        </el-col>
        <el-col :span="4" :offset="18">
          <router-link to="/task_build">
            <button>
              <i class="iconfont icon-add"></i>
              <span>新建任务</span>
            </button>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <!--廉政调查及事项-->
    <el-row >
        <el-col :xs="24" :sm="24" :md="14">
          <el-row class="navbtn-wrap">
            <el-col :span="8" class="navbtn-item navbtn-item1">
              <div class="item-title">
                <i class="iconfont icon-remind"></i>
                <a class="item-title">待办事项<span class="symbol"></span></a>
                <!--<el-badge is-dot class="item">我收到的</el-badge>-->
              </div>
              <div class="item-count">
                <b>16</b>
                <small>项</small>
              </div>
            </el-col>
            <el-col :span="8" class="navbtn-item navbtn-item2">
              <div class="item-title">
                <i class="iconfont icon-post"></i>
                <a class="item-title">待领事项</a>
              </div>
              <div class="item-count">
                <b>22</b>
                <small>项</small>
              </div>
            </el-col>
            <el-col :span="8" class="navbtn-item navbtn-item3">
              <div class="item-title">
                <i class="iconfont icon-time"></i>
                <a class="item-title">待我审核</a>
              </div>
              <div class="item-count">
                <b>41</b>
                <small>项</small>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="9">
          <el-row class="evalute-total">
            <el-col :span="8" class="left">
              <router-link to="/research">
                <span class="icon" >
                  <i class="iconfont icon-dangfenglianzhengjianshe" v-bind:style="{fontSize:'30px'}"></i>
                </span>
                <span>廉政调查</span>
              </router-link>
            </el-col>
            <el-col :span="16" class="right">
              <el-row class="one row-item">
                <el-col :span="12">
                  <span class="one">已评价</span>
                </el-col>
                <el-col :span="12">
                  <span class="t-l">112</span>
                </el-col>
              </el-row>
              <el-row class="row-item">
                <el-col :span="12">
                  <span class="one">未评价</span>
                </el-col>
                <el-col :span="12">
                  <span class="t-l">78</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    <!--内容列表-->
    <div class="navbtn-item-content ">
      <div class="content-title">
        <h4>最新事项</h4>
      </div>
      <el-row class="content-item mb10">
        <el-col :span="6" class="left-icon">
          <span class="icon">
            <i class="iconfont icon-duihua" v-bind:style="{fontSize:'30px'}"></i>
          </span>
        </el-col>
        <el-col :span="18" class="right-text">
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
    </div>
  </div>
</template>
<script>
  export default{
    name:'index',
    data(){
      return {
        id:'index',
        content_active:'content_1'
      };
    },
    created(){
      this.$http('/tiket/principal/queryTaskByStatus',{
        params:{
          principal_user_id:1
        }
      })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err)
        })

    }
  }
</script>
<style scoped>
  i{
    font-size: 16px;
  }
  .index{
    text-align: center;
    width:100%;
    padding-bottom:60px;
  }
  .fontColor{
    color:#8d8d8d;
  }
  /*移动端头部样式*/
  .index-header{
    position: relative;
    padding-bottom: 50px;
    background: #fff;
    /*margin-bottom: 10px;*/
  }
  .bg-picture{
    height:120px;
    width:100%;
    background: #00f url('../../assets/images/banner.png') no-repeat;
    -webkit-background-size: cover;
    background-size:cover;
  }
  /*pc端头部样式*/
  .pcHeader{
    display: none;
    box-sizing: border-box;
    padding:11px 2px;
    background: #fff;
    box-shadow:5px 0 4px #c3adad;
    /*margin-bottom:10px;*/
    margin:0 -22px 10px;
  }
  .pcHeader button{
    color: #38adff;
    padding:4px 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background: #fff;
    border:1px solid #e2e2e2;
    cursor: pointer;
  }
  /*统计按钮样式-start*/
  .navbtn-wrap{
    box-sizing:border-box;
    background-color: #fff;
    margin-bottom:10px;

  }
  .navbtn-item{
    padding:10px 0 14px;
    background-color: #fff;
  }
  .navbtn-item .item-title{
    display: inline-block;
    position: relative;
  }
  .navbtn-item .item-title .symbol{
    display: inline-block;
    width: 6px;
    height:6px;
    border-radius: 50%;
    position: absolute;
    right: -2px;
    top:4px;
    background: #ff5d32;
  }
  .navbtn-item b{
    font-size:16px;
  }
  .navbtn-item1{
    /*background-color: #38adff;*/
    border-right:1px solid #e2e2e2;
  }
  .navbtn-item2{
    /*background-color: #fec860;*/
    border-right:1px solid #e2e2e2;
  }
  .navbtn-item1 i{
    color: #00a2ff;
  }
  .navbtn-item2 i{
    color: #ffa23f;
  }
  .navbtn-item3 i{
    color: #ffcc00;
  }
  /*统计按钮样式-end*/

  /*新建任务按钮样式*/
  button.new-task{
    width:65%;
    padding:12px 0;
    border-radius:28px;
    border:none;
    position: absolute;
    top:100px;
    left:0;
    right:0;
    margin:auto;
    z-index:99;
    background-color: #fff;
    box-shadow:0 5px 5px #f7f7f7;
  }
  /*廉政调查统计样式-start*/
  .evalute-total{
    background-color: #fff;
    margin-bottom:10px;
  }
  .evalute-total .left{
    /*flex: 1;*/
    padding:8px 0;
    border-right:1px solid #e2e2e2;
  }
  .evalute-total .left span.icon{
    display:block;
    width:40px;
    height:40px;
    line-height:40px;
    border-radius:40%;
    background-color: #25c1ff;
    color: #fff;
    margin:0 auto;
  }
  .evalute-total .right>div span{
    display: inline-block;
    width: 50%;
    padding-left: 30px;
  }
  .evalute-total .right>div.one{
    border-bottom:1px solid #e2e2e2;
  }
  .evalute-total .right>div.row-item{
    padding:7px 5px;
  }
  /*廉政调查统计样式-end*/

  /*主题内容样式*/
  .content-title,.content-item{
    background-color: #fff;
  }
  .content-title h4{
    text-align: left;
    padding: 10px 10px;
    border-bottom: 1px solid #e2e2e2;
    font-weight:500;
    font-size:16px;
  }
  .content-item{
    padding:10px 0;
  }
  .content-item .left-icon span.icon{
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
    line-height:2em;
  }
  .content-item .right-text ul li.one{
    line-height:1.5em;
  }
  .right-text ul li.one small{
    color: #bebebe;
  }
  .right-text ul li.one .state{
    display: inline-block;
    float: right;
    padding-right: 20px;
    color: #38adff;
  }
  /*媒体查询*/
  @media screen and (min-width: 992px){
    .el-col-md-9{
      float: right;
    }
    .pcHeader{
      display: block;
    }
    .index-header{
      display: none;
    }
  }
</style>

