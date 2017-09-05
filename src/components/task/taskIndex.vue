<template>
  <div id="taskIndex" style="padding-bottom: 60px">
    <mt-header title="任务">
    </mt-header>
      <mt-search v-model="value" v-show="search"></mt-search>
    <!--搜索框-->
    <div v-on:click="handleIconClick" v-show="search ? false:true">
      <el-row style="margin-top:5px">
      <el-col  :xs=" {span: 22, offset: 1}" :md = "{span: 24, offset: 0}">
        <el-input
        placeholder="请输入内容"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
      </el-col>
  </el-row >

    </div>


      <!--选项-->
      <div class="selectOuter" v-show="search ? false:true" >
          <div class="selectPanl">
            <el-row>
              <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}" class="selected"><span >全部</span></el-col>
              <div class="selectedAll">
                <div class="selectedChildren">
                  <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}" ><span >我收到的</span></el-col>
                  <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}" ><span>我发起的</span></el-col>
                  <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}"><span>待我审核</span></el-col>
                </div>
                </div>
            </el-row >
          </div>

        <div class="selectPanl" >
          <el-row >
            <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}" class="selected"><span >全部</span></el-col>
            <div class="selectedAll" >
              <div class="selectedChildren">
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}" ><span >我收到的</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}" ><span>我发起的</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}"><span>待我审核</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}" ><span>我发起的</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 5, offset: 1}"><span>待我审核</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 3, offset: 1}" ><span >已过期</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 3, offset: 1}" ><span>进行中</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 3, offset: 1}"><span>未开始</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 3, offset: 1}"><span>已审核</span></el-col>
                <el-col  :xs=" {span: 5, offset: 1}" :md = "{span: 3, offset: 1}"><span>待审核</span></el-col>
              </div>
            </div>
          </el-row >
        </div>
        </div>

          <!--任务面板列表-->

          <div class="taskList" v-show="search ? false:true">
            <el-row  style="background-color:#f7f5f5">

              <div class="divContent">
              <el-col :xs="24" >
              <el-card class="box-card" :body-style="{ padding: '10px' }">
                <el-row >
                  <router-link to="/task_details">
                  <el-col :xs="4" :sm="3">
                    <div class="iconContent">
                       <span class="icon-dh">
                      <i class="iconfont icon-duihua" ></i>
                    </span>
                    </div>
                  </el-col>

                <el-col :xs="{span:19,offset:1}" :sm="{span:19,offset:1}" >
                    <div class="headerSpan">
                      <span style="color:#64A4D4;float:right;margin-right:5px">进行中</span>
                      <div  class="content">
                        我收到的任务
                      </div>
                    </div>
                    <div class="fontColor">
                      2017-08-09
                    </div>
                    <div  class="content">
                      <b>
                        企业营业执照等信息
                      </b>
                    </div>
                    <div >
                      截止时间：2017-01-01
                    </div>
                    <div >
                      负责人：哈哈
                    </div>
                    <div >
                      审核人：吼吼
                    </div>

              </el-col>
            </router-link>
              </el-row >
              </el-card>
              </el-col>
              </div>

              <div class="divContent">
                <el-col :xs="24" >
                  <el-card class="box-card" :body-style="{ padding: '10px' }">
                    <el-row >
                      <router-link to="/task_details1">
                      <el-col :xs="4" :sm="3">
                        <div class="iconContent">
                          <span class="icon-hq">
                             <i class="iconfont icon-activity" ></i>
                          </span>
                        </div>
                      </el-col>
                      <el-col :xs="{span:19,offset:1}" :sm="{span:19,offset:1}" >
                        <div class="headerSpan">
                          <span style="color:#A0D675;float:right;margin-right:5px">已审核</span>
                          <div  class="content">
                            我发起的任务
                          </div>
                        </div>
                        <div class="fontColor">
                          2017-08-09
                        </div>
                        <div  class="content">
                          <b>
                            企业营业执照等信息
                          </b>
                        </div>
                        <div >
                          截止时间：2017-01-01
                        </div>
                        <div >
                          负责人：哈哈
                        </div>
                        <div >
                          审核人：吼吼
                        </div>

                      </el-col>
                      </router-link>
                    </el-row >
                  </el-card>
                </el-col>
              </div>

              <div class="divContent">
                <el-col :xs="24" >
                  <el-card class="box-card" :body-style="{ padding: '10px' }">
                    <el-row >
                      <router-link to="/task_details2">
                        <el-col :xs="4" :sm="3" >
                          <div class="iconContent">
                       <span class="icon-hq">
                      <i class="iconfont icon-activity" ></i>
                    </span>
                          </div>
                        </el-col>
                        <el-col :xs="{span:19,offset:1}" :sm="{span:19,offset:1}" >
                          <div class="headerSpan">
                            <span style="color:#A0D675;float:right;margin-right:5px">已审核</span>
                            <div  class="content">
                              我发起的任务
                            </div>
                          </div>
                          <div class="fontColor">
                            2017-08-09
                          </div>
                          <div  class="content">
                            <b>
                              企业营业执照等信息
                            </b>
                          </div>
                          <div >
                            截止时间：2017-01-01
                          </div>
                          <div >
                            负责人：哈哈
                          </div>
                          <div >
                            审核人：吼吼
                          </div>

                        </el-col>
                      </router-link>
                    </el-row >
                  </el-card>
                </el-col>
              </div>

          </el-row>
          </div>
    </div>
</template>

<script>
export default {
  name: 'taskIndex',
  data () {
    return {
      value : "",
      search : false,
      input2:""
    }
  },
  methods : {
    handleIconClick:function(){
      this.search = true;
    }
  }
}
</script>

<style scoped>
  #taskIndex{margin-bottom: 50px;}
  ::-webkit-scrollbar {display: none;  }
  div.selectedAll div.selectedChildren{width: 400%;}
  div.selectedAll div.selectedChildren div{width: 60px;margin-left: 10px;float: left}
  div.selectedAll{width:70%;height:25px;margin-left: 25%; overFlow-x: scroll ;overFlow-y: hidden ; }
  div.taskList div.divContent>div{margin-top: 10px;}
  div.taskList div.headerSpan div.content{margin-top: 0}
  div.taskList div.fontColor{padding:0;margin-top:0;color: #aaa;font-size: 10px;}
  .taskList div.iconContent{height:35px;line-height:35px;margin-top:5px;width:35px;border: 1px solid #eee;padding: 2px;margin-left: 10%;text-align: center;border-radius: 5px;}
  div.taskList div[data-v-032e85d7]{margin-top: 0px;}
.selectOuter{
  margin-top: 10px
}
.selectPanl{
  background-color: #fff;
  text-align: center;
  padding: 10px 0px;
}
.selected{
  background-color: #F6F7FB;
  color: #5DA8DD;  border-radius:5px;
}
  @media only screen and (min-width: 500px) {
    .selectOuter{width: 100%;margin: 0 auto;margin-top: 10px;}
    .divContent>div{margin-left: 0;margin-right: 30px;}
  }
.taskList div{
  background-color: #fff;
  margin-top: 10px;
  text-align: left;
  color: #818181
}
/*.taskList .content{
  color: black;
}*/
/*.icon-hq{
  padding: 5px;
  border: 1px solid  red;
}*/
.icon-hq i {
  color: #38ACFF;
  font-size: 30px;
}
.icon-dh i{
  color: #FF7D5B;  font-size: 30px
}
.box-card{
  border: 0;
  border-radius:0px;
  box-shadow: 0 0 0 0;
}
div .el-row{
  margin-top: 0
}
.el-card__body{
  margin-top: 0
}

</style>
