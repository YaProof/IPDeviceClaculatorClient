export default class Auth {
  #client;

  constructor(client) {
    this.#client = client;
  }

  sigin(login, password) {
    this.#client.sigin(login, password);
  }

  logout() {
    this.#client.logout();
  }
};
