import Vue from 'vue';
import Repositories from '../api/repositories';
// import HTTPClient from '../libs/httpClient/httpClient';
import LocalClient from '../libs/localClient/localClient';

const api = new Repositories(new LocalClient());
Vue.prototype.$api = Object.freeze(api);
