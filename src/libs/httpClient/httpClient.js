import axios from 'axios';
import Fingerprint2 from 'fingerprintjs2';
import jwtDecode from 'jwt-decode';

const t = async () => {

};

const timeIsUp = (token) => {
  return !!token;
}

export default class HTTPClient {
  #tokenUrl;
  #refreshTokenUrl;
  #logoutUrl;

  #fingerprint;
  #accessToken;
  #parseAccessToken;

  #setFingerprint = () => {
    const setHash = function (components) {
      var values = components.map(function (component) { return component.value });
      this.#fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
      this.isAuth();
    }

    const fingerprintCallBack = function () {
      Fingerprint2.get(setHash.bind(this));
    }

    if (window.requestIdleCallback) {
      requestIdleCallback(fingerprintCallBack.bind(this))
    } else {
      setTimeout(ingerprintCallBack.bind(this), 500)
    }
  };

  constructor(options) {
    axios.defaults.baseURL = '/';
    axios.defaults.headers['Content-Type'] = 'application/json';

    this.#tokenUrl = options?.tokenUrl ? options.tokenUrl : '/auth-token';
    this.#refreshTokenUrl = options?.refreshTokenUrl ? options.refreshTokenUrl : '/refresh-token';
    this.#logoutUrl = options?.logoutUrl ? options.logoutUrl : '/logout';
    this.#setFingerprint();
  }

  async signin(login, password) {
    console.log('signin', this.#fingerprint)
    try {
      const resp = await axios.post(this.#tokenUrl, {
        login,
        password,
        fingerprint: this.#fingerprint
      });

      if (resp.data?.accessToken) {
        this.#accessToken = resp.data.accessToken;
        this.#parseAccessToken = jwtDecode(this.#accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.#accessToken}`;
      }
      return resp.status;
    } catch (error) {
      return error.response.status;
    }
  }

  async logout() {
    axios.get(this.#logoutUrl);
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

  async isAuth() {
    try {
      if (!this.#parseAccessToken || timeIsUp(this.#parseAccessToken)) {
        const resp = await axios.post(this.#refreshTokenUrl, {
          fingerprint: this.#fingerprint
        });
  
        if (resp.data?.accessToken) {
          this.#accessToken = resp.data.accessToken;
          this.#parseAccessToken = jwtDecode(this.#accessToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.#accessToken}`;
        }
        return resp.status;
      }
      return 200;
    } catch (error) {
      return error.response?.status ? error.response.status : 401;
    }
  }
};
