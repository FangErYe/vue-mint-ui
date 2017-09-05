<template>

  <div class="content_">
    <div class="address_opatype" @click="hansClose()">  </div>

    <div  class="headerAddress">
      <div class="address_header"><span class="blue">已选择：2人</span></div>
      <div class="address_choolse">
        <ul>
          <li>
            <div class="width_cicle">白羽</div>
          </li>
          <li><div class="width_cicle">summer</div></li>
        </ul>
      </div>
      <div class="address_input">
        <i class="iconfont icon-search" v-show="!search"></i>
        <input type="text" placeholder="搜索" v-model="search">
      </div>
      <div  class='address_content'>
        <div class="address_parson">
          <ul>
            <li class="d_jump">
              <div class="address_mage" id="A"><span>A</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="B"><span>B</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="C"><span>C</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="D"><span>D</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="E"><span>E</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="F"><span>F</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="G"><span>G</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="H"><span>H</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="I"><span>I</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="J"><span>J</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
            <li class="d_jump">
              <div class="address_mage" id="K"><span>K</span></div>
              <a class=" mint-cells" v-for="(el,index) in options1"><!---->
                <div class=" mint-cell-wrappers">
                  <div class="mint-cell-titles"><!---->
                    <label class="mint-checklist-labels">
                    <span class="mint-checkboxs" :class="{'backBlue':el.choolse}" @click.prevent="backgrd(el)" >
                      <input type="checkbox" class="mint-checkbox-inputs"  >
                      <span class="mint-checkbox-cores" >
                        <i class="iconfont icon-check"></i>
                      </span>
                    </span>
                      <span class="width_cicle margin_left">{{el.name}}</span>
                      <span class="mint-checkbox-labels margin_left">{{el.name}}</span>
                    </label>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="address_href">
            <ul>
              <li @click="jump(1)">A</li>
              <li @click="jump(2)">B</li>
              <li @click="jump(3)">C</li>
              <li @click="jump(4)">D</li>
              <li @click="jump(5)">E</li>
              <li @click="jump(6)">F</li>
              <li @click="jump(7)">G</li>
              <li @click="jump(8)">H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
              <li>X</li>
              <li>Y</li>
              <li>Z</li>
            </ul>
          </div>
          <div class="address_button">
            <button>重置</button><button>确定</button>
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
        options1 :[{name:'白羽',choolse:true},{name:'花都',choolse:false},{name:'花都',choolse:false}]
      };
    },
    created() {
    },
    mounted: function () {
      this.$nextTick(function () {
//        window.addEventListener('scroll', this.onScroll)
      })
    },
    methods: {
      hansClose(){
        this.$emit('addren',false);
      },
      jump (index) {
        let jump = document.querySelectorAll('.d_jump');
        let total = jump[index].offsetTop-35;
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
      backgrd (obj){
       obj.choolse = !obj.choolse
       console.log(obj.choolse);
      }
    }
  }
</script>

<style scoped>
  .content_{z-index: 1000}
  .mint-checklist-labels {  display: block;  padding: 0 10px;  }
  .mint-checkbox-inputs {  display: none;  }
  .mint-checkbox-labels {  vertical-align: middle;  }
  span.backBlue span.mint-checkbox-cores{background: #26a2ff}
  .mint-checkbox-cores i{color: #fff}
  .mint-checkbox-cores {  display: inline-block;  background-color: #fff;  border-radius: 100%;  border: 1px solid #ccc;  position: relative;  width: 20px;  height: 20px; line-height: 20px;text-align: center; vertical-align: middle;  }
  .mint-cell-titles{    -webkit-box-flex: 1;  flex: 1;}
  .mint-cell-wrappers{ background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);  background-size: 120% 1px;  background-repeat: no-repeat;  background-position: top left;  background-origin: content-box;  -ms-flex-align: center;  align-items: center;  box-sizing: border-box;  display: flex;  font-size: 16px;  line-height: 1;  min-height: inherit;  overflow: hidden;  width: 100%;}
  .mint-cells{  background-color: #fff;  box-sizing: border-box;  color: inherit;  min-height: 48px;  display: block;  overflow: hidden;  position: relative;  text-decoration: none;  }
  .address_content .address_button button{width: 50%;padding:15px;background: #F8F8F8;border: 0;border-right:1px solid #eee;color: #26a2ff}
  .address_content .address_button{background: #fff;position: fixed;bottom: 0;width: 80%;border-top: 1px solid #eee}
  /*.address_parson>ul{position: fixed;top:140px;bottom: 0;overflow: scroll;width:100%;}*/
  .address_parson .address_href ul li{color:#aaa;line-height: 1.2;text-align: center}
  .address_parson .address_href{  background:  transparent; position:static; filter:Alpha(opacity=50);padding-left:30px;padding-right:10px;overflow:scroll;z-index:3;position: fixed;top:15%;right:0px;bottom: 0;font-size: 12px;}
  .address_parson{position: relative;top:0;right:0;bottom: 0;overflow: scroll}
  .address_opatype{width: 100%;background: black;opacity: .6;position: fixed;z-index:2;top: 0;bottom: 0;left: 0;right: 0}
  .mint-cell-wrappers{padding: 0}
  .margin_left{margin-left: 10px;}
  div.mint-tab-container{overflow: auto;position: static}
  .address_content .address_mage{background: #eee;padding-left:6px;}
  .address_header{padding: 5px;}
/*.headerAddress{width: 80%;border: 1px solid #eee;background: #fff;position: fixed;top:0;right:0;bottom:0;z-index: 2;overflow: auto}*/
  .headerAddress{width: 80%;background: #fff;position: absolute;top:0;right:0;bottom:0;z-index: 2;}
  .width_cicle{font-size:10px;display:inline-block;width: 32px;height:30px;line-height:30px;text-align:center;background: #795da3;border-radius: 50%;color: #fff;padding: 3px;}
  .address_choolse{padding:5px;overflow:hidden;border-bottom: 1px solid #eee;padding-bottom: 10px;}
  .address_choolse ul li{float: left;margin-right: 10px;}
  .address_input{text-align: center;color: #aaa}
  .address_input i{position: absolute;left: 37%;top:97px;font-size: 15px;}
  .address_input input{border:0;margin:10px auto;width: 90%;border-radius: 10px;padding:6px;background: #eee;text-align: center}
</style>
