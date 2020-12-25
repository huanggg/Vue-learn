/* jshint esversion: 6 */
import AuroraService from '@aurora/service';
import Vue from 'vue';
import auroraConfig from './auroraGatewayConfig/aurora';
const auroraService = new AuroraService({
  id: 'axiosIndex',
  Vue,
  gateway: auroraConfig.gateway
});
auroraService
  .boot(({ }) => { }).then(res => {
    //解决aui框架网络拦截不起效问题
  });
//添加请求拦截器
auroraService.network.interceptors.request.use(function (config) {
  //在发送请求之前做某事
  return config;
}, function (error) {
  //请求错误时做些事
  return Promise.reject(error);
});
//添加响应拦截器
auroraService.network.interceptors.response.use(function (response) {
  //对响应数据做些事
  return response;
}, function (error) {
  if (error.response.data.httpCode === '401') {
    alert(error.response.data.message);
  }
  //请求错误时做些事
  return Promise.reject(error);
});
export default (url, data = {}, method = 'get') => {
  if (method === 'get') {
    return auroraService.network.get(url, data);
  } else if (method === 'put') {
    return auroraService.network.put(url, data);
  } else if (method === 'post') {
    return auroraService.network.post(url, data);
  } else {
    return ''
  }
}





