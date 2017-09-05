<template>
  <div style="width: 100%;">
    <mt-header title="表单">
    </mt-header>
    <mt-cell title="工商营业执照下户调查表" is-link class="biaodan_info">
      <img slot="icon" src="../../assets/images/form.png" width="20" height="20" class="biaodan_img">
      <span style="color: green"></span>
    </mt-cell>
    <mt-cell title="卫生许可证调查表" is-link  class="biaodan_info">
      <img slot="icon" src="../../assets/images/form.png" width="20" height="20" class="biaodan_img">
      <span style="color: green"></span>
    </mt-cell>
    <mt-cell title="组织结构代码证调查表" is-link class="biaodan_info">
      <img slot="icon" src="../../assets/images/form.png" width="20" height="20" class="biaodan_img">
      <span style="color: green"></span>
    </mt-cell>
    <mt-cell title="企业营业执照下户调查表" is-link class="biaodan_info">
      <img slot="icon" src="../../assets/images/form.png" width="20" height="20" class="biaodan_img">
      <span style="color: green"></span>
    </mt-cell>
  </div>
</template>
<script>
  import MtCell from "../../../node_modules/mint-ui/packages/cell/src/cell";
  export default{
    components: {MtCell},
    name:'biaodan',
    data(){
      return {msg:'abc'};
    },
    methods:{
      show:function () {
        alert(1)
      }
    }
  }
</script>
<style type="text/css">
  .biaodan_info{
    text-align: left;
  }
  .biaodan_img{
    margin-left: 8px;
  }
</style>
