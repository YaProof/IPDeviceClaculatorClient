import Auth from './Auth';
import Components from './Components';

export default class Repositories {
  auth;
  components;
  
  constructor(client) {
    this.auth = new Auth(client);
    this.components = new Components(client);
  }
};
