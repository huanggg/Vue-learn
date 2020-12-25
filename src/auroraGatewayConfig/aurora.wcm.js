module.exports = {
  ihelp: {
    appId: 'M004640',
    env: 'http://w3.huawei.com'
  },
  uem: {
    env: 'wcm',
    appKey: '42774c184dcd21df42eb26119dd01a1e'
  },

  contextPath: './{wcm_domain_url}/s/{wcm_domain_env}/rac/portal/lst/',
  haeStaticResUrl: '//r.hw3static.com/s/haefrontend/lst/',
  appStaticResUrl: './{wcm_domain_url}/s/lst/',
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
    'MsaGatewayAddress': '{wcm_domain_gateway}'
  },
}
