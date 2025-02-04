/**
 * Created by summer on 2017/8/17.
 */
/**
 * http配置
 */
import qs from 'qs';
import axios from 'axios'
import {MessageBox, Indicator } from 'mint-ui';
import router from '../../router'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'webchat';
// http请求拦截器
axios.interceptors.request.use(config => {
  Indicator.open({
    text: '',
    spinnerType: 'fading-circle'
  });
  config.data = qs.stringify(config.data);
  return config
}, error => {
  loadinginstace.close()
  MessageBox('提示', '加载超时');
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  Indicator.close();
  if(data.data.code == 888){
    router.push('/login');
  }
  return data
}, error => {
  Indicator.close();
  MessageBox('提示', '加载失败');
  return Promise.reject(error)
})

export default axios
