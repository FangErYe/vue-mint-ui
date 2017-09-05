<template>
  <div class="forgotContent">
    <mt-header title="重置密码" class="backgroud">
      <router-link to="/pwdChange" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="media">
      <div class="forgotForm">
        <div class="headerSpan">验证您的手机号并创建新密码</div>
        <p>18465421535</p>
        <div class=" forgotInput">
          <input type="text" placeholder="短信验证码" class="inputPwd"><button class="submitMessge">发送验证码</button>
          <input type="text"  placeholder="新密码"><br>
          <button class="submit">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'resetPwd',
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

<style  scoped>
  .forgotInput{text-align: center}
  .forgotInput button:hover{background: #2EA0E3}
  .forgotInput button.submitMessge{width: 30%;padding: 2px;color: #fff;background:  #26a2ff;height:42px;border: 0;border-radius:0 5px 5px 0;}
  .forgotInput button.submit{width: 88%;padding: 2px;color: #fff;background:  #26a2ff;height:42px;border: 0;border-radius: 5px;}
  .forgotInput input{padding:6px;border-radius:5px;border:0;height:30px;width: 85%;background: #eee;margin-bottom: 20px;}
  .forgotForm input.inputPwd{padding:6px;border-radius:5px 0 0 5px;border:0;height:30px;width: 55%;background: #eee;margin-bottom: 20px;}
  .forgotForm .headerSpan{font-weight:500;margin-bottom:20px;text-align: center;margin-top: 30px;}
  .forgotForm p{text-align: center;font-weight: bold;font-size: 20px;margin-bottom: 10px;}
  .forgotContent .mint-header {font-weight:bold;font-size: 16px;background: #fff;color: black}
  .forgotContent{position: absolute;top:0;left: 0;bottom: 0;right: 0;overflow: scroll;background: #fff;}
</style>
