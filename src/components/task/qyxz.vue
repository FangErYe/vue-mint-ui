<template>
  <!-- <mt-search
     cancel-text="取消"
     placeholder="企业名称,纳税人识别号">
   </mt-search>-->
  <div>
    <div class="address_input">
      <input type="text" placeholder="企业名称,纳税人识别号">
    </div>
    <div>
      <mt-index-list :height="480" :showIndicator="true">
        <mt-index-section index="A">
          <mt-checklist
            v-model="value1"
            :options="options1">
          </mt-checklist>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-checklist
            v-model="value1"
            :options="options1">
          </mt-checklist>
        </mt-index-section>
        <mt-index-section index="Z">
          <mt-checklist
            v-model="value1"
            :options="options1">
          </mt-checklist>
        </mt-index-section>
      </mt-index-list>
    </div>
    <div >
        <mt-cell style="color: dodgerblue; " title="已选择:" >
          <mt-button style="position: relative ; left: -20px"type="primary" size="small">确定</mt-button>
      </mt-cell>
    </div>
  </div>
  </div>

</template>
<script>
  export default{
    name:'address',
    data(){
      return {
        id:'selected',
        value1: []
      };
    },
    created() {
      this.options1 = ['阿里爸爸','腾讯妹妹'];
    },
    methods: {
      hansClose(){
        this.$emit('addren',false);
      }
    }
  }
</script>
<style>

   .mint-indexsection-index{
     text-indent: 15px;}

  .mint-cell-text{position: relative ; left: 15px}

  .address_content .address_mage{background: #eee;padding:3px;}

  .address_choolse ul li{float: left;margin-right: 10px;}

  .address_input{text-align: center}

  .address_input input{margin:10px auto;width: 90%;border-radius: 10px;border: 1px solid #eee;padding:6px;background: #eee;text-align: center}
</style>
