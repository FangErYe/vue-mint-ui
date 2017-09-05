<template>
  <div class="task_table">
    <mt-header title="表单">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="工商营业执照下户调查表" is-link>
      <i slot="icon" class="icon iconfont icon-form"></i>
    </mt-cell>
    <mt-cell title="卫生许可证调查表" is-link>
      <i slot="icon" class="icon iconfont icon-form"></i>
    </mt-cell>
    <mt-cell title="组织机构代码调查表" is-link>
      <i slot="icon" class="icon iconfont icon-form"></i>
    </mt-cell>
    <mt-cell title="企业营业执照下户调查表" is-link>
      <i slot="icon" class="icon iconfont icon-form"></i>
    </mt-cell>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'task_table',
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

    },
    data() {
      return {

      }}
  };
</script>
<style scoped>

</style>

