export default class Components {
  #client;

  constructor(client) {
    this.#client = client;
  }

  getMotherboard() {
    this.#client.get('/motherboard');
  }

  getRAM() {
    this.#client.get('/ram');
  }
};