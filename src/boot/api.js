import Vue from 'vue';
import Repositories from '../api/repositories';
import HTTPClient from '../libs/httpClient/httpClient';

const api = new Repositories(new HTTPClient());
Vue.prototype.$api = Object.freeze(api);
