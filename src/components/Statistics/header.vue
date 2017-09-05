<template>
    <div class="mt-picker">
      <div class="mt-table">
        <table>
          <thead>
          <tr>
            <td>负责人</td>
            <td>未完成</td>
            <td>未过期</td>
            <td>已过期</td>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td class="blod" >summer</td>
              <td ><router-link to="/progress" class="blue">58</router-link></td>
              <td class="blue"><router-link to="/progress" class="green">75</router-link></td>
              <td class="red"><router-link to="/progress" class="red">46856</router-link></td>
            </tr>
            <tr>
              <td class="blod">summer</td>
              <td ><router-link to="/progress" class="blue">58</router-link></td>
              <td class="blue"><router-link to="/progress" class="green">75</router-link></td>
              <td class="red"><router-link to="/progress" class="red">46856</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
  export default{
    name:'header',
    data(){
      return {
        id:'selected',
      };
    },
    methods: {

    }
  }
</script>
<style scoped>
  .mint-tab-item-label{font-size: 15px;}
  .mt-picker{  margin-top: 10px;padding:0px;background: #fff; border-top: 1px solid #eee;  }
  .mt-table{margin-top: 5px;padding-top: 5px;}
  .mt-table table{width: 100%;border-spacing: 0px;}
  .mt-table table thead tr td{padding:3px;margin:0;width: 25%;text-align: center;font-weight: bold;border-bottom: 1px solid #eee}
  .mt-table table tbody tr td{padding:6px;border-bottom: 1px solid #eee;text-align: center}
</style>
