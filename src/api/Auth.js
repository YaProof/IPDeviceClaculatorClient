export default class Auth {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async signin(login, password) {
    this.#client.signin(login, password);
  }

  async logout() {
    this.#client.logout();
  }
};
