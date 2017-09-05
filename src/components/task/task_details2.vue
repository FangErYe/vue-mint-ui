<template>
  <div class="task_details2">
    <!--<mt-header title="详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>-->
    <div class="mint-cell-wrapper mint-content">
      <div class="mint-cell-title">
        <span class="icon-dh spanIcon"><i class="iconfont icon-activity"></i></span>
        <div class="divFloat">
          <span class="mint-cell-text yanse"><span>我发起的任务</span><span class="jingxingzhong">进行中</span></span>
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
    <router-link to="/task_form">
    <mt-cell title="企业营业执照下户调查表" class="fujian" is-link>
      <i slot="icon" class="icon iconfont icon-form"></i>
    </mt-cell>
    </router-link>
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

    <!--退回原因部分-->
    <div class="returnContent">
      <ul>
        <li>
          <div class="returnReason">
            <i slot="icon" class="icon iconfont icon-tuihuo"></i>
          </div>
          <div style="position: relative;padding-left: 70px;padding-top: 20px;">
            <label>调查结果不详细，需重新上传资料。</label><br>
            <label style="color:#b1b0b5;">{{new Date()|date }}</label>
          </div>
        </li>
        <li>
          <div class="returnReason">
            <i slot="icon" class="icon iconfont icon-tuihuo"></i>
          </div>
          <div style="position: relative;padding-left: 70px;padding-top: 20px;">
            <label>调查结果不详细，需重新上传资料。</label><br>
            <label style="color:#b1b0b5;">{{new Date()|date }}</label>
          </div>
        </li>
      </ul>
    </div>

    <div class="fujian">
      <el-button @click.native="clickAudited" class="cuiban">
        <i class="icon iconfont icon-shenhetongguo"></i>审核通过
      </el-button>
      <router-link to="/task_reason">
      <el-button @click.native="toReturnReason" class="shanchu">
        <i class="icon iconfont icon-huitui"></i>退回
      </el-button>
      </router-link>
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
    name: 'task_details2',
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
      clickAudited() {
        Toast({
          message: '审核通过',
          iconClass: 'mintui mintui-success'
        });
      },
      toReturnReason(){
//        MessageBox.alert('删除成功','');
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
    margin-top: 12px;
  }
  .icon-dh i{
    color: #26a2ff;
    font-size: 40px
  }
  .icon-dh span{
    /*color: #FF7D5B;*/
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
    /*color: #26a2ff;*/
  }
  .el-button {
    font-size: 18px;
    border: 0px;
  }
  .cuiban{
    width: 50%;
    border-top: solid 1px rgb(241, 241, 241);
    color: #795da3;
    border-radius: 0px;
  }
  .shanchu{
    width: 50%;
    float: right;
    margin-right: -1px;
    margin-top: 1px;
    color: #795da3;
    border-radius: 0px;
  }
  .jingxingzhong{
    float: right;padding-right: 5px;padding-top: 5px;
  }
  .returnContent li{
    height: 70px;
  }
  .returnReason{
    height: 70px;
    width: 1px;
    background-color: #ccc8c8;
    margin-left: 50px;
    float: left;
  }
  .returnReason i{
    /*position: absolute;*/
    margin-top: 25px;
    margin-left: -12px;
    font-size: 25px;
    color: rgb(0, 171, 255);
    display: inline-block;
    line-height: 25px;
    height: 25px;
    background-color: rgb(249, 248, 2466)
  }
</style>
