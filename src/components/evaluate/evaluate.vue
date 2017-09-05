<template>
  <div id="evaluate">
    <div v-on:click = "alertOption" id="option">
      <mt-cell id="mtcell"
        is-link>
        <p slot="title" style="float:left">对此次调查是否满意</p>
        <span style="color: #7F8C8D">{{celvalue}}</span>
      </mt-cell>
    </div>

<mt-field placeholder="请输入评价内容" type="textarea" rows="5"></mt-field>

<div  id="fwpj">
  <el-row >
    <el-col  :xs=" {span: 8, offset: 0}" style="text-align: left;margin-left:10px">服务评分</el-col>
    <el-col  :xs=" {span: 5, offset: 0}"><span class="pingjia"><i class="icon iconfont icon-smile fontsize"></i>好评</span></el-col>
    <el-col  :xs=" {span: 5, offset: 0}"><span class="pingjia"><i class="icon iconfont icon-zhongping-copy fontsize"></i>中评</span></el-col>
    <el-col  :xs=" {span: 5, offset: 0}"><span class="pingjia"><i class="icon iconfont icon-cry fontsize"></i>差评</span></el-col>
    <el-col  :xs=" {span: 1, offset: 0}"></el-col>
  </el-row>
</div>

<el-row style="margin-top:20px">
  <el-col  :xs=" {span: 22, offset: 1}"><mt-button type="primary" size="large" >提交</mt-button></el-col>
  <el-col  :xs=" {span: 1, offset: 0}"></el-col>
</el-row >

<mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'evaluate',
  data () {
    return {
      actions : [
        {
          name : '满意',
          method : this.callBackMy
        },
        {
          name : '不满意',
          method :this.callBackBmy
        }
      ],
      sheetVisible : false,
      celvalue : "请选择",
      introduction : '',
    }
  },
  methods : {
    alertOption : function(){
      this.sheetVisible = this.sheetVisible ? false : true
    },
    callBackMy : function(){
        this.celvalue='满意';
    },
    callBackBmy : function(){
        this.celvalue='不满意';
    },
  }
}
</script>
<style scoped>
#option{
  margin-bottom: 10px
}
/*#tijiao{
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  width: 93%
}*/
#fwpj{
  margin-top: 2px;
  background-color: #fff;
  line-height: 40px
}
.fontsize{
  font-size: 20px;
  margin-right: 10px
}
.pingjia{
  text-align: left;
  font-size: 10px;
  margin-right: 10px
}
.pingjia-div{
  width: 100%;
  padding-right: 10%
}

</style>
