/**
 * Created by lsq on 2017/8/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  navBar:{
    toggle:true
  }
};
const getters = {
  navBar: state => state.navBar
};
const mutations = {
  showNav(state,flag){
    state.navBar.toggle = flag;
  }
};
const actions = {

};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
