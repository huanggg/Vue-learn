import Vue from 'vue'
import axios from './axios/axios.js'
import AuroraService from "@aurora/service";
const auroraService = new AuroraService({
    id: 'utilsIndex'
})
import {
    getSeviserUrl,
    timeFormTurn,
    endWith,
    isSearchNull,
    judgmentTime,
    setHWA,
    personalPermissions
} from '@common/utils/utils.js';
setHWA(auroraService);
Vue.prototype.$https = axios;
Vue.prototype.$getSeviserUrl = getSeviserUrl;
Vue.prototype.$timeFormTurn = timeFormTurn;
Vue.prototype.$isSearchNull = isSearchNull;
Vue.prototype.$judgmentTime = judgmentTime;
Vue.prototype.$endWith = endWith;
Vue.prototype.$personalPermissions = personalPermissions;


