import axios from 'axios';

export default class HTTPClient {
  #tokenUrl;
  #refreshTokenUrl;
  #logoutUrl;

  constructor(options) {
    this.#tokenUrl = options?.tokenUrl ? options.tokenUrl : '/auth-token';
    this.#refreshTokenUrl = options?.refreshTokenUrl ? options.refreshTokenUrl : '/refresh-token';
    this.#logoutUrl = options?.logoutUrl ? options.logoutUrl : '/logout';
  }

  async signin(login, password) {
    console.log('signin', login, password);
  }

  async logout() {
    console.log('logout');
  }

  async get(url) {
    return axios.get(url);
  }

  async post(url, data) {
    return axios.post(url, data);
  }

  async put(url, data) {
    return axios.put(url, data);
  }

  async delete(url) {
    return axios.delete(url);
  }
};
