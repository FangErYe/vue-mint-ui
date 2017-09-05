<template>
  <div class="task_details">
    <!--<mt-header title="详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>-->
    <div class="mint-cell-wrapper mint-content">
      <div class="mint-cell-title">
        <span class="icon-dh spanIcon"><i class="icon iconfont icon-duihua"></i></span>
        <div class="divFloat">
          <span class="mint-cell-text">我收到的任务</span>
          <span class="mint-cell-label yanse">2017-08-10</span>
        </div>
      </div>
      <div class="mint-cell-value">
      </div>
    </div>
    <!--<mt-cell title="我收到的任务" label="2017-08-10">-->
      <!--<span class="icon-dh" slot="icon"><i slot="icon" class="icon iconfont icon-duihua"></i></span>-->
    <!--</mt-cell>-->
    <mt-cell title="表单分类" value="企业营业执照下户调查">
      <i slot="icon" class="icon iconfont icon-qr_code_light"></i>
    </mt-cell>
    <mt-field placeholder="企业营业执照下户调查" type="textarea" rows="4"></mt-field>
    <mt-cell title="附件(1)">
      <i slot="icon" class="icon iconfont icon-fujian3"></i>
    </mt-cell>
    <mt-cell class="tupian" title="IMG_1293.JPG" value="查看" is-link @click.native="viewPicture">
      <img slot="icon" src="../../assets/头像.jpg" style="height: 25px;width: 25px"></img>
    </mt-cell>
    <mt-cell title="下户企业" class="fujian" value="世纪中税软件系统有限公司">
      <i slot="icon" class="icon iconfont icon-home"></i>
    </mt-cell>
    <mt-cell title="纳税人识别号" value="5109023824929842"></mt-cell>
    <mt-cell title="法人电话" value="13509479494"></mt-cell>
    <mt-cell title="财务电话" value="15100000000"></mt-cell>
    <mt-cell title="办税人员电话" value="15100000000"></mt-cell>
    <mt-cell title="地址" value="成都永丰路15号"></mt-cell>
    <mt-cell title="负责人" class="fujian">
      <i slot="icon" class="icon iconfont icon-friend"></i>
      <div class="ciclir">芳哈</div>&nbsp;
      <div class="ciclir">哈儿</div>&nbsp;
      <div>2人</div>
    </mt-cell>
    <mt-cell title="审核人">
      <i slot="icon" class="icon iconfont icon-friendfamous"></i>
      <div class="ciclir">哈儿</div>&nbsp;
      <div>1人</div>
    </mt-cell>
    <mt-cell title="抄送人">
      <i slot="icon" class="icon iconfont icon-people"></i>
      <div class="ciclir">哈儿</div>&nbsp;
      <div>1人</div>
    </mt-cell>
    <mt-cell  title="发送方式">
      <i slot="icon" class="icon iconfont icon-icons64x6479"></i>
      <el-checkbox-group v-model="checkList_fs">
        <el-checkbox label="站内" class="yanse"></el-checkbox>
        <el-checkbox label="短信" class="yanse"></el-checkbox>
      </el-checkbox-group>
    </mt-cell >
    <mt-cell title="开始时间" @click.native="open('picker1')">{{time.start | date }}
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
    <mt-cell title="截止时间" @click.native="open('picker2')">{{time.end | date }}
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
    <mt-button type="primary" size="large" @click.native="openConfirm">
      <i class="icon iconfont icon-favor_light"></i>认领任务
    </mt-button>

    <div v-show="open_message" style="background-color:rgba(0,0,0,0.35);width: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index:2">
      <div style="background-color: white;width: 82%;height: 55%;border-radius: 10px;position: relative;margin: 40% auto 0;">
        <div style="position: absolute;top: -24%;right: 2%;">
          <i slot="icon" class="icon iconfont icon-roundclose" style="color: white;font-size: 2em;" @click="closeConfirm"></i>
          <div style="height: 100px;width: 2px;background: white;margin: -13px auto 0;"></div>
        </div>
        <div>
          <img src="../../assets/图层-5.png" style="width: 97%;margin:5px;">
        </div>
        <div>
          <span style="margin-left: 10%;">是否通知纳税人？</span>
          <div style="margin-top: 5px;margin-left: 10%;">
            <el-checkbox-group v-model="checkList_fs">
              <el-checkbox label="站内"></el-checkbox>
              <el-checkbox label="短信"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 5px;margin-left: 10%;">
            <el-checkbox-group v-model="checkList_ry">
              <el-checkbox label="法人"></el-checkbox>
              <el-checkbox label="财务"></el-checkbox>
              <el-checkbox label="办税人员"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 15px;margin-left: 10%;">
            <mt-button type="default" style="height: 25%;width: 40%;border-radius: 20px" @click.native="promptToast">暂 不</mt-button>
            <mt-button type="primary" style="height: 25%;width: 40%;border-radius: 20px" @click.native="promptToast">确 认</mt-button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="open_imge" style="background-color:rgba(0,0,0,0.35);width: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 5;">
      <div style="background-color: white;width:90%;height: 65%;border-radius: 10px;position: relative;margin: 30% auto 0;">
        <div style="position: absolute;right: 4%;">
          <i slot="icon" class="icon iconfont icon-roundclose" style="color: white;font-size: 2em;" @click="closeImge"></i>
        </div>
        <div>
          <img src="../../assets/头像.jpg" style="width: 96%;margin:6px;">
        </div>
        <div>
          <div style="margin-left: 10%;">
            爱在这里...
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script type="text/javascript">
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default {
    name: 'task_details',
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
        this.time.start = value;
      },
      handleChange2(value) {
        this.time.end = value;
      },
      openConfirm() {
        this.open_message=true;
      },
      promptToast() {
//      MessageBox.alert('认领成功','');
        Toast({
          message: '认领成功',
          iconClass: 'mintui mintui-success'
        });
        this.open_message=false;
      },
      closeConfirm(){
        this.open_message=false;
      },
      viewPicture(){
        this.open_imge=true;
      },
      closeImge(){
        this.open_imge=false;
      }
    },
    data() {
      return {
        value: new Date(),
        visible: false,
        time:{start:new Date(),end:new Date()},
        open_message:false,
        open_imge:false,
        checkList_ry:['法人'],
        checkList_fs:['站内']
      }}
  };
</script>
<style scoped>
  .yanse{
    color: #26a2ff;
  }
  .iconfont{
    font-size: 20px;
  }
  .fujian{
    /*border-bottom: 12px solid #f6f8fa;*/
    margin-top: 12px;
  }
  .icon-dh i{
    color: #FF7D5B;
    font-size: 40px
  }
  .icon-dh span{
    color: #FF7D5B;
    font-size: 20px
  }
  .ciclir{
    width: 40px;
    height:40px;
    border: 1px solid #eee;
    background-color:#26a2ff;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
  .mint-content{
    background: #fff;
    padding: 5px;
  }
  .spanIcon{
    border: 1px solid #eee;
    padding:2px;
    display: inline-block;
    float: left;
    margin-right: 10px;
    margin-left: 5px;
    border-radius: 8px;
  }
  .divFloat{
    margin-top: 5px;
  }
  .divFloat span{
    line-height: 22px;
    margin-top: -2px;
    margin-bottom: 3px;
  }
  .divFloat .mint-cell-text{
    font-size: 16px;
    color: #FF7D5B;
  }
  .mint-cell-wrapper{
    background-origin: padding-box;
  }
  .mint-cell:last-child{
    background-position:-132px 0px;;
  }
</style>
