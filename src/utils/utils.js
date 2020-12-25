// 动态获取接口地址  Rac

export const getSeviserUrl = (data, type) => {
  // 子业务
  if (
    window.location.pathname === '/one/' ||
    window.location.pathname === '/finone/'
  ) {
    let originUrl = '';
    const originEnv = window.location.origin;
    if (
      originEnv === 'http://kwesit.huawei.com' ||
      window.location.href.indexOf('finance-one-sit') !== -1
    ) {
      //sit环境
      originUrl = 'http://kweweb-a3.huawei.com/fin/rac/czgw/';
      return conmonGetSeviserUrl(data, type, originUrl, true);
    } else if (
      originEnv === 'http://kweuat.huawei.com' ||
      window.location.href.indexOf('finance-one-uat') !== -1
    ) {
      //uat环境
      originUrl = 'http://kweweb-b4.huawei.com/fin/rac/czgw/';
      return conmonGetSeviserUrl(data, type, originUrl, true);
    } else if (
      originEnv === 'http://finance.huawei.com' ||
      originEnv === 'http://w3.huawei.com'
    ) {
      //prod环境
      originUrl = 'http://w3.huawei.com/fin/rac/czgw/';
      return conmonGetSeviserUrl(data, type, originUrl, true);
    } else {
      return '';
    }
  } else {
    const configEnv = true;
    // let configEnv = false
    if (configEnv) {
      // 发包后的地址
      const originUrl = window.location.origin + '/fin/rac/czgw/';
      return conmonGetSeviserUrl(data, type, originUrl, true);
    } else {
      // 本地联调
      const locationUrl = window.location.origin;
      return conmonGetSeviserUrl(data, type, locationUrl, false);
    }
  }
}
function conmonGetSeviserUrl(data, type, originUrl, setShow) {
  if (type === 'commonservice') {
    const bashUrl = '/fin/rac/commonservice';
    if (setShow) {
      const subServiceModule = 'com.huawei.fin.acc.rac.rca:racCommonService';
      return originUrl + subServiceModule + bashUrl + data;
    } else {
      return originUrl + bashUrl + data;
    }
  } else if (type === 'rac') {
    const bashUrl = '/fin/rac/ca';
    // 本地联调去掉 subServiceModule   上环境加上subServiceModule
    if (setShow) {
      const subServiceModule = 'com.huawei.fin.acc.rac.rca:serviceCostAnalysis';
      return originUrl + subServiceModule + bashUrl + data;
    } else {
      return originUrl + bashUrl + data;
    }
  } else if (type === 'rcr') {
    const bashUrl = '/fin/rac/scr';
    // 本地联调去掉 subServiceModule   上环境加上subServiceModule
    if (setShow) {
      const subServiceModule = 'com.huawei.fin.acc.rac.rcr:servicercr';
      return originUrl + subServiceModule + bashUrl + data;
    } else {
      return originUrl + bashUrl + data;
    }
  } else if (type === 'revenueCostRecongnition') {
    const bashUrl = '/fin/rac/rcr';
    // 本地联调去掉 subServiceModule   上环境加上subServiceModule
    if (setShow) {
      const subServiceModule =
        'com.huawei.fin.acc.rac.rcr:revenueCostRecognition';
      return originUrl + subServiceModule + bashUrl + data;
    } else {
      return originUrl + bashUrl + data;
    }
  } else if (type === 'basedata') {
    const bashUrl = '/fin/rac/basedata';
    if (setShow) {
      const subServiceModule = 'com.huawei.fin.acc.rac.rca:basedata';
      return originUrl + subServiceModule + bashUrl + data;
    } else {
      return originUrl + bashUrl + data;
    }
  } else if (type === 'pou') {
    const bashUrl = '/fin/rac/pou';
    if (setShow) {
      const subServiceModule = 'com.huawei.fin.acc.rac.pou:pouAnalysis';
      return originUrl + subServiceModule + bashUrl + data;
    } else {
      return originUrl + bashUrl + data;
    }
  } else if (type === 'xxljob') { // 定时任务
    const bashUrl = '/fin/hrcm/job';
    if (setShow) {
      const subServiceModule = 'com.huawei.fin.acc.rac.rcr:hrcmJob';
      return originUrl + subServiceModule + bashUrl + data;
    } else {
      return originUrl + bashUrl + data;
    }
  } else {
    return ''
  }
}
export const personalPermissions = (data) => {
  // liveapp 权限控制封装
  const personalPer = JSON.parse(
    sessionStorage.getItem('personalPermissCheck')
  );
  let permissions = false;
  personalPer.forEach(element => {
    if (element.includes(data)) {
      permissions = true;
    }
  });
  return permissions;
}
export const endWith = (str, separator) => {
  const reg = new RegExp(`${separator}$`);
  return reg.test(str);
};
//时间转换
export const timeFormTurn = (timestamp, fmt, isShow) => {   //this.$timeFormTurn(this.ruleForm.pouCreationDate, 'yyyy-MM-dd', false)
  if (!timestamp) return;
  if (typeof timestamp === 'number' && String(timestamp).length === 10) {
    timestamp = timestamp * 1000;
  }
  let time = '';
  if (isShow) {
    time = new Date(
      timestamp
        .split('.')[0]
        .replace(/-/g, '/')
        .replace('T', ' ')
    );
  } else {
    time = new Date(timestamp);
  }
  var o = {
    'M+': time.getMonth() + 1, //月份
    'd+': time.getDate(), //日
    'h+': time.getHours(), //小时
    'm+': time.getMinutes(), //分
    's+': time.getSeconds(), //秒
    'q+': Math.floor((time.getMonth() + 3) / 3), //季度
    S: time.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (time.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
}
// 深克隆
export const objDeepCopy = (data) => {
  const sourceCopy = data instanceof Array ? [] : {};
  for (const item in data) {
    if (!data[item]) {
      sourceCopy[item] = null;
    } else {
      sourceCopy[item] =
        typeof data[item] === 'object' ? objDeepCopy(data[item]) : data[item];
    }
  }
  return sourceCopy;
}
// 埋码操作
export const setHWA = ($service) => {
  var env = '';
  const originUrl = window.location.origin;
  const envInfo = $service.base.getEnvInfoSync();
  if (originUrl !== 'http://w3.huawei.com' || envInfo !== 'production') {
    env = 'beta';
  } else {
    env = 'pro';
  }
  // *******************************************************************************************************************
  //         env 代表埋码环境，值只能是: beta 或 pro
  //         env = 'beta';   // 代表beta环境
  //         env = 'pro';    // 代表生产环境
  // *******************************************************************************************************************
  // 埋码AppKey配置
  var hwaAppKeys = {
    env: env,
    appKeys: {
      beta: '42774c184dcd21df42eb26119dd01a1e', //从UEM的beta环境获取的埋码Key
      pro: 'a46e9242b9395fa5f66c0a606effefd8' //从UEM的生产环境获取的埋码Key
    },
    enable: true, //关闭UEM采集开关(可选,默认是开启的)
    channel: '', //埋码的频道标识符(可选),比如天幕平台埋码:DMAX
    ABVersion: 'A', //AB版本标识(可选),取值 A或者B;A代表A版本,B代表B版本
    platform: 'web' //埋码应用的运行平台(可选,默认是web), PC页面:web;we码程序:welink
  };
  // 采集器配置
  (function (h, w, f, t) {
    try {
      if (!h[t]) {
        h.GlobalHwaNamespace = h.GlobalHwaNamespace || [];
        h.GlobalHwaNamespace.push(t);
        h[t] = function () {
          (h[t].q = h[t].q || []).push(arguments);
        };
        h['trackerload'] = function () {
          (h[t].q = h[t].q && h[t].q.length ? h[t].q : []).unshift(arguments);
        };
        h[t].q = h[t].q || [];
      }
      var host =
        'pro' === f['env'] ?
          'hwa.his.huawei.com' :
          'beta' === f['env'] ?
            'hwa-beta.his.huawei.com' :
            '';
      var welinkHost = '';
      if ('welink' === f['platform']) {
        host =
          'pro' === f['env'] ?
            'w3m.huawei.com/mcloud/mag' :
            'beta' === f['env'] ?
              'mcloud-uat.huawei.com/mcloud/mag' :
              '';
        welinkHost = host + '/ProxyForText/hwa_trackload';
        h.hwahost = welinkHost;
        host = host + '/fg/ProxyForDownLoad/hwa_f';
      }
      h.aids = f;
      h.space = t;
      var iframe = w.createElement('iframe');
      (iframe.frameElement || iframe).style.cssText = 'display:none';
      iframe.src = 'javascript:false';
      iframe.id = 'hwa_f';
      var where = w.getElementsByTagName('script')[0];
      where.parentNode.insertBefore(iframe, where);
      var doc = iframe.contentWindow.document;
      var async = !(f['async'] == false) ? 'js.async=1;js.defer=\'defer\'' : '';
      var ts = new Date().getFullYear() + '' + new Date().getMonth() + '' + new Date().getDate();
      doc.open().write('<body onload="var js = document.createElement(\'script\'); ' + async + ';js.src = \'' + ("https:" == location.protocol ? "https://" : "http://") + host + '/dist/hwa_f.js?v=' + (ts) + '\';document.body.appendChild(js);">');
      doc.close();
      iframe.contentWindow.aids = f;
      iframe.contentWindow.space = t;
      iframe.contentWindow.hwahost = welinkHost;
    } catch (e) {
    }
  })(window, document, hwaAppKeys, 'hwa');
}
// 金额转换方法
export const toMoney = (money, n, returnFlag) => {
  if (returnFlag === 'credit') {
    if (money === 0) {
      if (n === undefined || n === null) {
        return money;
      }
      return '-0.000';
    }
    money = money * -1;
  }
  if (money === 0) {
    if (n === undefined || n === null) {
      return '0.000';
    } else {
      return '0.00';
    }
  }
  var val = new String(money).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(val[0])) {
    val[0] = val[0].replace(re, '$1,$2');
  }
  var zeroStr = '.' + (val[1] ? val[1] : '');
  // 需要补0的位数
  if (n === undefined || n === null) {
    // 如果不传参数n，则默认3位小数
    var zeroLength = 3 - (val[1] ? val[1].length : 0);
  } else {
    // 如果传参数n，则以n为准
    var zeroLength = n - (val[1] ? val[1].length : 0);
  }
  for (var i = 0; i < zeroLength; i++) {
    zeroStr += '0';
  }
  return n === 0 ? val[0] : val[0] + zeroStr;
}
// 校验查询条件是否全为空
export function isSearchNull(data) {
  let isAllNull = true;
  let newData = JSON.parse(JSON.stringify(data));
  if (newData.curPage) {
    newData.curPage = '';
  }
  if (newData.pageSize) {
    newData.pageSize = '';
  }
  for (let key in newData) {
    if (typeof newData[key] === 'object') {
      if (newData[key].length) {
        isAllNull = false;
      }
    } else {
      if (newData[key]) {
        isAllNull = false;
      }
    }
  }
  return isAllNull;
}
export const judgmentTime = (date1, date2) => {
  // 判断开始时间和结束时间是否合理
  let isDateReasonable = true;
  if (date1 !== '' && date2 !== '') {
    if (Number(date1) > Number(date2)) {
      isDateReasonable = false;
      return isDateReasonable; // 开始时间大于结束时间
    } else {
      isDateReasonable = true;
      return isDateReasonable; // 开始时间小于或等于结束时间
    }
  }
}


