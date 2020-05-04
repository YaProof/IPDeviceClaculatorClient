export default class Components {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getMotherboard() {
    return this.#client.get('/motherboard');
  }

  async getRAM() {
    return this.#client.get('/ram');
  }

  async appendRAM(data) {
    return this.#client.post('/ram', data);
  }
};