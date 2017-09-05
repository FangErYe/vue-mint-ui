<template>
  <div>
    <div class="headerAddress">
      <div class="address_input">
        <i class="iconfont icon-search" v-show="!search"></i>
        <input type="text" placeholder="搜索" v-model="search">
      </div>
      <!--这部分是全选按钮-->
      <div>
        <a class="mint-cell">
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <label class="mint-checklist-label">
                    <span class="mint-checkbox" >
                      <input type="checkbox" class="mint-checkbox-input"  @click="checkAllFun($event)">
                      <span class="mint-checkbox-core"></span>
                    </span>
                <span class="mint-checkbox-label margin_left">全选</span>
              </label>
            </div>
            <div class="mint-cell-value">
              <span></span></div>
          </div>
          <div class="mint-cell-right">
          </div>
        </a>
      </div>
      <!--这部分是通讯录列表-->
      <div  class='address_content'>
        <div class="address_parson">
          <ul>
            <li class="d_jump">
              <div class="address_mage" id="A"><span>A</span></div>
              <a class="mint-cell" v-for="el in options1">
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title">
                    <label class="mint-checklist-label">
                    <span class="mint-checkbox">
                      <input type="checkbox" class="mint-checkbox-input" @click="checkOne($event)" >
                      <span class="mint-checkbox-core"></span>
                    </span>
                      <span class="width_cicle margin_left">{{el}}</span>
                      <span class="mint-checkbox-label margin_left">{{el}}</span>
                    </label>
                  </div>
                  <div class="mint-cell-value">
                    <span></span></div>
                </div>
                <div class="mint-cell-right">
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage"><span>B</span></div>
              <a class="mint-cell" v-for="el in options1">
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title">
                    <label class="mint-checklist-label">
            <span class="mint-checkbox">
            <input type="checkbox" class="mint-checkbox-input"   :options="options1" @click="checkOne($event)">
            <span class="mint-checkbox-core"></span>
            </span>
                      <span class="width_cicle margin_left">{{el}}</span>
                      <span class="mint-checkbox-label margin_left">{{el}}</span>
                    </label>
                  </div>
                  <div class="mint-cell-value">
                    <span></span></div>
                </div>
                <div class="mint-cell-right">
                </div> <!----></a>
            </li>

          </ul>
          <!-- 链接字母-->
          <div class="address_href">
            <ul>
              <li @click="jump(1)">A</li><li @click="jump(2)">B</li><li @click="jump(3)">C</li>
              <li @click="jump(4)">D</li><li @click="jump(5)">E</li><li @click="jump(6)">F</li>
              <li @click="jump(7)">G</li><li @click="jump(8)">H</li><li @click="jump(9)">I</li>
              <li @click="jump(10)">J</li><li @click="jump(11)">K</li><li @click="jump(12)">L</li>
              <li @click="jump(13)">M</li><li @click="jump(14)">N</li><li @click="jump(15)">O</li>
              <li @click="jump(16)">P</li><li @click="jump(17)">Q</li><li @click="jump(18)">R</li>
              <li @click="jump(19)">S</li><li @click="jump(20)">T</li><li @click="jump(21)">U</li>
              <li @click="jump(22)">V</li><li @click="jump(23)">W</li><li @click="jump(24)">X</li>
              <li @click="jump(25)">Y</li><li @click="jump(26)">Z</li>
            </ul>
          </div>
          <div class="address_button" style="background-color: #f7f5f5;width: 100%;">
            <div style="float: left;margin-top: 12px;color: #2b9de2;margin-left: 15px;">
              <label>已选择：{{count_ry}}人</label>
            </div>
            <div>
              <el-button type="primary" style="float: right;padding: 10px 36px;margin: 6px">确定</el-button>
            </div>
          </div>
        </div>
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
        value1: [],
        search:'',
        count_ry:'0'
      };
    },
    created() {
      this.options1 = ['白羽','花都'];
    },
    mounted: function () {
      this.$nextTick(function () {
//        window.addEventListener('scroll', this.onScroll)
      })
    },
    loaderList(){


    },
    methods: {
      hansClose(){
        this.$emit('addren',false);
      },
      checkOne(ev){
          var flg_one = ev.target.checked;
          if(flg_one){
              this.count_ry++;
          }else{
              this.count_ry--;
          }
      },
      checkAllFun(ev){
        var flg = ev.target.checked;
        var checkInpAll = document.getElementsByClassName('mint-checkbox-input');
        for(var i=0;i<checkInpAll.length;i++){
          if(flg){
            checkInpAll[i].checked = true;
            this.count_ry = checkInpAll.length;
          }else{
            checkInpAll[i].checked = false;
            this.count_ry = 0;
          }
        }
      },
      jump (index) {
        let jump = document.querySelectorAll('.d_jump');
        let total = jump[index].offsetTop;
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        let step = total / 50;// 平滑滚动，时长500ms，每10ms一跳，共50跳
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;
          step = newTotal / 50;
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
      },
    }
  }
</script>
<style scoped>
 /* .address_content .address_button button{width: 50%;padding:15px;background: #F8F8F8;border: 0;border-right:1px solid #eee;color: #26a2ff}*/
  .address_content .address_button{background: #fff;position: fixed;bottom: 0;width: 80%;border-top: 1px solid #eee}
  /*.address_parson>ul{position: fixed;top:140px;bottom: 0;overflow: scroll;width:100%;}*/
  .address_parson .address_href ul li{color:#aaa;line-height: 1.2;text-align: center}
  .address_parson .address_href{  background:  transparent; position:static; filter:Alpha(opacity=50);padding-left:30px;padding-right:10px;overflow:scroll;z-index:3;position: fixed;top:15%;right:0px;bottom: 0;font-size: 12px;}
  .address_parson{position: relative;top:0;right:0;bottom: 0;overflow: scroll}
  .address_opatype{width: 100%;background: black;opacity: .6;position: fixed;z-index:2;top: 0;bottom: 0;left: 0;right: 0}
  .mint-cell-wrapper{padding: 0}
  .margin_left{margin-left: 10px;}
  .mint-tab-container{overflow: auto;position: static}
  .address_content .address_mage{background: #eee;padding-left:6px;}
  .address_header{padding: 5px;}
  .headerAddress{width: 100%;background: #fff;position: absolute;top:0;right:0;bottom:0;z-index: 2;}
  .width_cicle{font-size:10px;display:inline-block;width: 32px;height:30px;line-height:30px;text-align:center;background: #795da3;border-radius: 50%;color: #fff;padding: 3px;}
  .address_choolse{padding:5px;overflow:hidden;border-bottom: 1px solid #eee;padding-bottom: 10px;}
  .address_choolse ul li{float: left;margin-right: 10px;}
  .address_input{
    text-align: center;  color: #aaa
  }
  .address_input i{
    position: absolute;left: 40%;top:10px;font-size: 15px;
  }
  .address_input input{
    border:0;margin:10px auto;width: 90%;border-radius: 10px;
    padding:6px;background: #eee;text-align: center
  }
</style>
