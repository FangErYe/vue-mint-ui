<template>
  <div class="forgotContent">

      <mt-header title="忘记密码" class="backgroud">
        <router-link to="/login" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    <div class="media">
      <div class="forgotForm">
        <p>请输入您的账号</p>
        <div class=" forgotInput">
          <input type="text"  placeholder="手机号" v-model="telphoneNumber"><br>
          <router-link :if="telphoneNumber" to="/resetPwd">
            <button>下一步</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'pwdChange',
    data(){
      return {
        id:'selected',
        telphoneNumber:''
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
  .forgotInput button{width: 93%;padding: 2px;color: #fff;background:  #26a2ff;height:42px;border: 0;border-radius: 5px;}
  .forgotInput input{padding:6px;border-radius:5px;border:0;height:30px;width: 90%;background: #eee;margin-bottom: 20px;}
  .forgotForm p{font-weight:500;margin-bottom:20px;text-align: center;margin-top: 30px;}
  .forgotContent .mint-header {font-weight:bold;font-size: 16px;background: #fff;color: black}
  .forgotContent{position: absolute;top:0;left: 0;bottom: 0;right: 0;overflow: scroll;background: #fff;}
</style>
