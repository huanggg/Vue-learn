
module.exports = {
  ihelp: {
    appId: 'M004640',
    env: 'http://w3.huawei.com'
  },
  uem: {
    env: "beta",
    appKey: "42774c184dcd21df42eb26119dd01a1e"
  },

  contextPath: "/",
  haeStaticResUrl: "//r-beta.hw3static.com/s/haefrontend/lst/",
  appStaticResUrl: '',
  proxy: '',
  gateway: {
    // 子业务配置信息
    'x-app-id': 'com.huawei.fin.acc.rac.rca',
    'x-sub-app-id': 'baseData',
    'context': '/fin/rac/basedata',
    // 'x-app-id': 'com.huawei.fin.acc.rac.rca',
    // 'x-sub-app-id': 'rcrCommonService',
    // 'context': '/rac/commonservice',
    // 公共服务配置信息
    'x-multi-consumer-appid': 'com.huawei.fin.acc.rac.rca',
    'x-multi-consumer-sub-appid': 'racCommonService',
    'x-multi-consumer-context': '/fin/rac/commonservice',
    // 网关地址
    // 'MsaGatewayAddress': 'http://kweweb-b4.huawei.com/fin/rac/czgw/'
    // 'MsaGatewayAddress': 'http://kwedev.huawei.com/fin/rac/czgw/'
    // 'MsaGatewayAddress': 'http://w3.huawei.com/fin/rac/czgw/'
    'MsaGatewayAddress': 'http://kweweb-a3.huawei.com/fin/rac/czgw/'
    // 'servlet/upload': {
    //   'x-app-id': 'com.huawei.fin.acc.rac.rca',
    //   'x-sub-app-id': 'costAnalysis',
    //   'context': '/rac/ca',
    // },
  }
  // gateway: {
  //   // 子业务配置信息
  //   'x-app-id': 'com.huawei.fin.acc.rac.rca',
  //   'x-sub-app-id': 'costAnalysis',
  //   'context': '/rac/ca',

  //   // 公共服务配置信息
  //   'x-multi-consumer-appid': 'com.huawei.fin.acc.rac.rcr',
  //   'x-multi-consumer-sub-appid': 'rcrCommonservice',
  //   'x-multi-consumer-context': '/rac/commonservice',
  //   // 网关地址
  //   'MsaGatewayAddress': 'http://cxw.huawei.com:8005/rac/czgw/',
  // 'servlet/upload': {
  //   'x-app-id': 'com.huawei.fin.acc.rac.rca',
  //   'x-sub-app-id': 'costAnalysis',
  //   'context': '/rac/ca'
  // }
  // }
}
