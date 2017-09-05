<template>
  <div style="width: 100%;">
    <mt-header title="我的">
    </mt-header>
    <div style="height: 200px;background-color: #26a2ff;padding-top: 10px;margin-top: -1px;" align="center">
      <div class="div_img">
        <div style="overflow: hidden;height: 60px;width: 60px;
        border-radius: 50%;border: 1px solid white;
        display: flex;justify-content: center;align-items: center">
          <img src="../../assets/头像.jpg" style="width: 60px;height: 60px;margin:5px;">
        </div>
      </div>
      <div>
        <label style="color: white;font-size: large">陈欧</label>
      </div>
      <div class="div_msg" align="center">
        <div style="margin-top: 2%;">
          <div class="div_msg_info">
            <div>
              <span class="div_msg_info_span">154</span>
            </div>
            <div>
              <span class="div_msg_info_span_1">任务总数</span>
            </div>
          </div>
          <div class="div_msg_info">
            <div>
              <span class="div_msg_info_span">97</span>
            </div>
            <div>
              <span class="div_msg_info_span_1">已完成</span>
            </div>
          </div>
          <div class="div_msg_info">
            <div>
              <span class="div_msg_info_span">12</span>
            </div>
            <div>
              <span class="div_msg_info_span_1">未完成</span>
            </div>
          </div>
          <div class="div_msg_info">
            <div>
              <span class="div_msg_info_span">45</span>
            </div>
            <div>
              <span class="div_msg_info_span_1">已过期</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 50px;width: 100%;">
      <mt-cell title="帮助中心" is-link style="text-align: left">
        <i slot="icon" class="icon iconfont icon-question" style="font-size: 20px;color: #16B399"></i>
        <span style="color: green;"></span>
      </mt-cell>
    </div>
  </div>
</template>
<script>
  export default{
    name:'mine',
    data(){
      return {
          msg:'abc',
        radio:'1'
      }
    }
  }
</script>
<style type="text/css">
  .div_img{
   border: 1px white solid;
    height: 70px;width: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div_msg{
    background-color: white;
    border-radius: 12px;
    width: 90%;height: 45%;
    padding: 5px;line-height: 36px;
    margin-top: 17px;
  }
  .div_msg_info{
    width: 25%;float: left;
  }
  .div_msg_info_span{
    font-size: 20px
  }
  .div_msg_info_span_1{
    color: #DDDBDB
  }
  .mint-cell-text{
    position: absolute;margin-top: 2px;margin-left: 8px;
  }
  .icon-question{
    margin-left: 10px;
  }
</style>
