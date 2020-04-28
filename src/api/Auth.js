export default class Auth {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async sigin(login, password) {
    this.#client.sigin(login, password);
  }

  async logout() {
    this.#client.logout();
  }
};
