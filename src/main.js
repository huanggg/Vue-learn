import Vue from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import Aurora from '@aurora/core';
import store from './store';
import iHelp from '@aurora/ihelp';
import router from './router';
import auroraConfig from '@common/auroraGatewayConfig/aurora';
import AuroraService from '@aurora/service';
import '@aurora/ui/lib/theme-default/index.css';
import '@aurora/theme/base/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import locale from '@aurora/vue-locale';
import AUI3 from '@aurora/vue'
require('core-js');
import '@common/utils/index.js';
import auipulugin from './Auipulugin/index.js';
Vue.config.productionTip = false;
Vue.use(VueI18n);
Aurora.vue = Vue;
Aurora.ui3 = AUI3;
Aurora.service = new AuroraService({
  id: 'default',
  gateway: auroraConfig.gateway
});
Vue.use(auipulugin);
Aurora.boot(
  ({
    i18n
  }) => {
    Aurora.service.network.disableMock();
    const env = Aurora.service.base.getEnvInfoSync();
    const currentLanguage = env.currentLanguage;
    auroraConfig.ihelp.locale = currentLanguage;
    Vue.use(iHelp, auroraConfig.ihelp);
    const envlocale = Aurora.service.base.getEnvInfoSync().currentLanguage;
    localStorage.setItem('locale', JSON.stringify(i18n.locale));
    const vue = new Vue({
      el: '#app',
      store,
      i18n: locale.initI18n({
        VueI18n,
        i18n: {
          locale: envlocale,
          messages: {
            zh_CN: {
              ...i18n.messages.zh_CN
            },
            en_US: {
              ...i18n.messages.en_US
            }
          }
        }
      }),
      router,
      render: h => h(App),
      components: {
        App
      },
      template: '<App/>'
    });
    window.$vm = vue;

    return vue;
  },
  ({
    Setting
  }) => {
    Setting.haeResURL = auroraConfig.haeStaticResUrl;
    Setting.proxy = auroraConfig.proxy;
  }
);
