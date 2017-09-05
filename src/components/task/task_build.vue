<template >
  <div class="task_build" >
    <!--<mt-header title="新建任务">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
    </router-link>
    </mt-header>-->
    <mt-cell title="表单分类" is-link class="kongbai">
      <i slot="icon" class="icon iconfont icon-qr_code_light"></i>
    </mt-cell>
    <mt-field placeholder="任务标题" type="textarea" rows="4"></mt-field>
    <mt-cell title="附件" value="上传" class="kongbai">
      <i slot="icon" class="icon iconfont icon-fujian3"></i>
      <span class="yanse"><i slot="is-link" class="icon iconfont icon-shangchuan"></i>上传</span>
    </mt-cell>
      <!--<el-upload-->
        <!--class="upload-demo"-->
        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--:on-preview="handlePreview"-->
        <!--:on-remove="handleRemove"-->
        <!--:file-list="fileList">-->
        <!--<span class="uploadTitle"><i class="icon iconfont icon-fujian3"></i>附件</span>-->
        <!--<el-button size="small" class="yanse">点击上传</el-button>-->
        <!--&lt;!&ndash;<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>&ndash;&gt;-->
      <!--</el-upload>-->
    <mt-cell title="附加内容" @click.native="openAddContent">
      <i slot="icon" class="icon iconfont icon-post"></i>
      <span class="yanse"><i slot="is-link" class="icon iconfont icon-add"></i> 新增</span>
    </mt-cell>

    <div v-show="addContent" style="background-color:rgba(0,0,0,0.35);width: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index:99;">
      <div style="background-color: white;width:90%;height: 200px;border-radius: 10px;position: relative;margin: 35% auto 0;">
        <div>
          <div>
            <div style="padding:3px;"></div>
            <mt-field placeholder="附件内容" type="textarea" rows="5" v-show="addContent" style="margin:6px;border: 1px solid #f6f8fa"></mt-field>
          </div>
        </div>
        <div>
          <div style="margin-top: 15px;margin-left: 10%;">
            <mt-button type="default" style="height: 25%;width: 40%;border-radius: 20px" @click.native="closeAddContent">取 消</mt-button>
            <mt-button type="primary" style="height: 25%;width: 40%;border-radius: 20px" @click.native="saveAddContent">确 认</mt-button>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/task_qyxz">
    <mt-cell title="下户企业" class="kongbai1" is-link >
      <i slot="icon" class="icon iconfont icon-1124gaoloudasha"></i>
    </mt-cell>
    </router-link>
    <router-link to="/task_address">
    <mt-cell title="负责人" is-link>
      <i slot="icon" class="icon iconfont icon-friend"></i>
      <span><i slot="is-link" class="icon iconfont icon-roundadd" ></i></span>
    </mt-cell>
    </router-link>
    <!--<router-link to="/task_address">-->
    <mt-cell title="审核人" is-link>
      <i slot="icon" class="icon iconfont icon-friendfamous"></i>
      <span><i slot="is-link" class="icon iconfont icon-roundadd"></i></span>
    </mt-cell>
    <!--</router-link>-->
    <!--<router-link to="/address">-->
    <mt-cell title="抄送人" is-link>
      <i slot="icon" class="icon iconfont icon-people"></i>
      <span><i slot="is-link" class="icon iconfont icon-roundadd"></i></span>
    </mt-cell>
    <!--</router-link>-->
    <mt-cell title="发送方式">
      <i slot="icon" class="icon iconfont icon-icons64x6479"></i>
      <div>
        <el-checkbox-group v-model="checkList_fs">
          <el-checkbox label="站内" class="yanse"></el-checkbox>
          <el-checkbox label="短信" class="yanse"></el-checkbox>
        </el-checkbox-group>
      </div>
    </mt-cell>
    <mt-cell title="开始时间" is-link @click.native="open('picker1')">{{time.start | date }}
      <i slot="icon" class="icon iconfont icon-kaishishijian"></i>
    </mt-cell>
    <mt-datetime-picker
      ref="picker1"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange1">
    </mt-datetime-picker>
      <mt-cell title="截止时间" is-link @click.native="open('picker2')">{{time.end | date }}
        <i slot="icon" class="icon iconfont icon-jieshushijian1"></i>
      </mt-cell>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange2">
    </mt-datetime-picker>
      <mt-button type="primary" size="large" @click.native="distributeTasks">派发任务</mt-button>
  </div>
</template>

<script type="text/javascript">
  import address from '../Statistics/address.vue'
  import { Toast } from 'mint-ui';
  export default {
    name: 'task_build',
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      distributeTasks(){
        Toast({
          message: '派发成功',
          iconClass: 'mintui mintui-success'
        });
      },
      openAddContent(){
        this.addContent=true;
      },
      closeAddContent(){
        this.addContent=false;
      },
      saveAddContent(){
        Toast({
          message: '添加成功',
          iconClass: 'mintui mintui-success'
        });
      }
    },
    data() {
      return {
        value: new Date(),
        visible: false,
        time:{start:new Date(),end:new Date()},
        checkList_fs:[],
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
            name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        addContent:false,
      }},
    components:{
     'vm-address':address
    }
  };
</script>
<style scoped>
  .uploadTitle{
    float:left;
    margin: 6px;
  }
  .upload-demo div{
    background-color: #fff;
    border-top: 1px solid #f7f5f5;
    border-bottom: 1px solid #f7f5f5;
    height: 48px;
    display: list-item;
    text-align: right;
  }
  .el-upload button{
     border: 0;
  }
  .el-button--small {
    margin: 10px;
  }
  .el-upload-list__item:first-child {
    margin-top: 0px;
  }
  .el-upload-list__item{
    margin-top: 0px;
    padding-left: 20px;
  }
  .yanse{
    color: #26a2ff;
  }
  .iconfont{
    font-size: 20px;
  }
  .kongbai{
    margin-bottom: 10px;
  }
  .kongbai1{
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .mint-cell-wrapper{
    background-origin: padding-box;
  }
  .mint-cell:last-child{
    background-position:-132px 0px;;
  }
  .mint-button{
    border-radius:0px;
  }
</style>
