<template>
  <!-- <mt-search
     cancel-text="取消"
     placeholder="企业名称,纳税人识别号">
   </mt-search>-->

  <div >
    <div class="address_input">
      <input  @keyup="searchInput($event)" v-model="search" placeholder="企业名称,纳税人识别号">
    </div>
    <div id="main" style="display: none">
      <mt-index-list :height="475" :showIndicator="true">
        <mt-index-section index="A">
          <mt-radio
            align="left"
            :options="options1">
          </mt-radio>
          <span class="nsrsbh">5101071990072462610</span>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-radio
            align="left"
            :options="options1">
          </mt-radio>
          <span class="nsrsbh">5101071990072462610</span>
        </mt-index-section>
        <mt-index-section index="Z">
          <mt-radio
            align="left"
            :options="options1">
          </mt-radio>
          <span class="nsrsbh">5101071990072462610</span>
        </mt-index-section>
      </mt-index-list>
    </div>
    <div style="position: relative;bottom: -24px">
        <mt-cell style="color: dodgerblue; " title="已选择:" >
          <mt-button style="position: relative ; left: -20px"type="primary" size="small">确定</mt-button>
      </mt-cell>
    </div>
  </div>

</template>
<script scoped>
  export default{
    name:'address',
    beforeRouteEnter(to,from,next){
      next(vm => {
        vm.$store.commit('showNav', false);
      })
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('showNav', true);
      next();
    },
    data(){
      return {
        id:'selected',
        value1: []
      };
    },
    created() {
      this.options1 = ['阿里爸爸'];
    },
    methods: {
      hansClose(){
        this.$emit('addren',false);
      },
      searchInput: function() {
        alert("搜索");
        axios.post('/enterprise/querySxEnterprise',{
          nsrsbh:'510112774540924',
        })
          .then(function(res){
            console.log(res);
          })
          .catch(function(err){
            console.log(err);
          });

        //window.open(this.logoData[this.flag].searchSrc+this.search);
      },
    }
  }
</script>
<style scoped>
<style>
    ul{
      line-height: 0.75;
    }
    .nsrsbh{
      position: relative;top:-16px;left:52px;font-size: 5px;
      color: #969896;
    }

   .mint-indexsection-index{
     padding:0px;
     text-indent: 10px;
     line-height: 12px;}

  .mint-cell-text{position: relative ; left: 15px}

  .address_content .address_mage{background: #eee;padding:3px;}

  .address_choolse ul li{float: left;margin-right: 10px;}

  .address_input{text-align: center ;background-color: white}

  .address_input input{margin:10px auto;width: 90%;border-radius: 10px;border: 1px solid #eee;padding:6px;background: #eee;text-align: center}
</style>
