<template>
  <div class="task_form">
    <!--<mt-header title="填写表单">-->
      <!--<router-link to="/" slot="left">-->
        <!--<mt-button icon="back"></mt-button>-->
      <!--</router-link>-->
    <!--</mt-header>-->
    <mt-cell title="是否有营业执照" value="请选择" is-link @click.native="alertOption('a')">{{celvalue1}}</mt-cell>
    <mt-cell title="是否有卫生许可证"  value="请选择" is-link @click.native="alertOption('b')">{{celvalue2}}</mt-cell>
    <mt-cell title="是否有税务登记证"  value="请选择" is-link @click.native="alertOption('c')">{{celvalue3}}</mt-cell>
    <mt-cell title="是否有组织机构代码" value="请选择" is-link @click.native="alertOption('d')">{{celvalue4}}</mt-cell>
    <mt-cell title="附加内容" class="fujian">
      <i slot="icon" class="icon iconfont icon-post"></i>
    </mt-cell>
    <mt-cell title="已添加附件内容" value="请选择" is-link @click.native="alertOption('e')">{{celvalue5}}</mt-cell>
    <mt-cell title="上传有关下户企业的调查照片" class="fujian"></mt-cell>
    <mt-cell>
      <div slot="icon">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      </div>
    </mt-cell>
    <mt-field placeholder="输入其他内容" type="textarea" rows="4"></mt-field>
    <mt-button type="primary" size="large" @click.native="openConfirm">提 交</mt-button>

    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <mt-actionsheet :actions="actions2" v-model="sheetVisible2"></mt-actionsheet>
  </div>
</template>

<script type="text/javascript">
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'task_form',
    beforeRouteEnter(to,from,next){
      next(vm => {
        vm.$store.commit('showNav', false);
      })
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('showNav', true);
      next();
    },
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2 : [
          {
            name : '是',
            method : this.callBackMy
          },
          {
            name : '否',
            method :this.callBackBmy
          }
        ],
        celvalue:'',
        celvalue1:'请选择',
        celvalue2:'请选择',
        celvalue3:'请选择',
        celvalue4:'请选择',
        celvalue5:'请选择',
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      openConfirm() {
        MessageBox.alert('成功', '');
      },
      alertOption : function(value){
        this.sheetVisible2 = this.sheetVisible2 ? false : true;
        this.celvalue=value;
      },
      callBackMy : function(){
        var parameter=this.celvalue;
        if('a'==parameter){
          this.celvalue1='是';
        }else if('b'==parameter){
          this.celvalue2='是';
        }else if('c'==parameter){
          this.celvalue3='是';
        }else if('d'==parameter){
          this.celvalue4='是';
        }else if('e'==parameter){
          this.celvalue5='是';
        }
      },
      callBackBmy : function(){
        var parameter=this.celvalue;
        if('a'==parameter){
          this.celvalue1='否';
        }else if('b'==parameter){
          this.celvalue2='否';
        }else if('c'==parameter){
          this.celvalue3='否';
        }else if('d'==parameter){
          this.celvalue4='否';
        }else if('e'==parameter){
          this.celvalue5='否';
        }
      },
    },
  };
</script>
<style>
  .el-upload--picture-card{
    width:80px !important;
    height: 80px !important;
    line-height: 80px!important;
    margin: 5px!important;
  }
  .iconfont{
    font-size: 20px;
  }
  .fujian{
    margin-top: 12px;
  }
  .mint-button{
    border-radius: 0px;
  }
</style>

