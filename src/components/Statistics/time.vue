<template>
    <div class="mt-header">
      <span class="start" is-link @click="open('picker1')" >起:{{time.start | date}}</span>
      <span class="end" is-link @click="open('picker2')" >止：{{time.end | date}}</span>
      <span class="parsen" @click="displayAddress()">人员 <i class="iconfont icon-people"></i></span>
      <mt-datetime-picker ref="picker1" type="date" v-model="value" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleChange1"></mt-datetime-picker>
      <mt-datetime-picker ref="picker2" type="date" v-model="value" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleChange2"></mt-datetime-picker>
    </div>
</template>
<script>
  export default{
    name:'time',
    data(){
      return {
        id:'selected',
        selected: '1',
        value: new Date(),
        endDate: new Date(),
        time:{start:new Date(),end:new Date()},
      };
    },
    methods: {
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      },
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange1(value) {
        this.time.start=value;
      },
      handleChange2(value) {
        this.time.end=value;
      },
      displayAddress(){
        this.$emit('addren',true);
      }
    }
  }
</script>
<style scoped>
  .mt-header{background:#fff;border-top:1px solid #eee;padding: 3px;padding-top: 6px;margin-top: 2px;}
  .mt-header .start{  display:inline-block;width: 33%;text-align: center }
  .mt-header .parsen{  border-left: 1px solid #aaa;padding-left: 20px;  }
  .mt-header .end{ display:inline-block; width: 33%;text-align: left;padding-right: 20px; text-align: center }
</style>
