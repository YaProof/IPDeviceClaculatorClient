export default class Components {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getMotherboard() {
    this.#client.get('/motherboard');
  }

  async getRAM() {
    this.#client.get('/ram');
  }
};