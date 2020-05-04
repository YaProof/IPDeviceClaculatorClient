import dbData from './dbData';

const AUTH = 'auth';

const DB_NAME = 'device';
const DB_VERSION = 1;
let DB;

const initDB = async () => {
  return new Promise((resolve, reject) => {
    if (DB) {
      return resolve(DB);
    }
    const conn = window.indexedDB.open(DB_NAME, DB_VERSION);

    conn.onerror = err => {
      console.error("Error", err);
      reject(err);
    };

    conn.onblocked = () => {
      alert('База данных была изменена, пожалуста, перезагрузите страницу.');
    };
    
    conn.onsuccess = event => {
      DB = event.target.result;

      DB.onversionchange = () => {
        DB.close();
        alert('База данных устарела, пожалуста, перезагрузите страницу.');
      };

      resolve(DB);
    };

    conn.onupgradeneeded = event => {
      let db = event.target.result;

      for (let key in dbData) {
        if (!db.objectStoreNames.contains(key)) {
          db.createObjectStore(key, { keyPath: dbData[key].key });
          const store = event.target.transaction.objectStore(key);
          // store.createIndex('test', 'test', { unique:false });
          dbData[key].data.forEach(t => store.add(t));
        }
      }
    };
  });
};

// Test local storage has not yet been implemented backend
export default class LocalClient {
  #isAuth = false;
  #db;
  
  constructor () {
    initDB().then(r => this.#db = r);
    this.#isAuth = localStorage.getItem(AUTH) || false;
  }

  async signin(login, password) {
    this.#isAuth = login === password;
    localStorage.setItem(AUTH, this.#isAuth);
    return this.#isAuth ? 200 : 401;
  }

  async logout() {
    this.#isAuth = false;
    localStorage.removeItem(AUTH);
  }

  async get(url) {
    const arr = url.split('/');
    if (arr.length > 1) {
      const storeName = arr[1];
      if (this.#db.objectStoreNames.contains(storeName)) {
        return new Promise(resolve => {
          const objects = [];
          let trans = this.#db.transaction([storeName], 'readonly');
          trans.oncomplete = () => {
            resolve(objects);
          }
          const store = trans.objectStore(storeName);
          if (arr.length === 2) { // get all
            store.openCursor().onsuccess = e => {
              const cursor = e.target.result;
              if (cursor) {
                objects.push(cursor.value);
                cursor.continue();
              }
            }
          } else {
            store.get(+arr[2]).onsuccess = e => {
              resolve(e.target.result);
            }
          }
        })
      }
    }
    
    return 500;
  }

  async post(url, data) {
    const arr = url.split('/');
    if (data && arr.length > 1) {
      const storeName = arr[1];
      if (this.#db.objectStoreNames.contains(storeName)) {
        return new Promise(resolve => {
          let trans = this.#db.transaction(storeName, 'readwrite');
          trans.oncomplete = () => {
            resolve(200);
          }
          const store = trans.objectStore(storeName);
          store.getAll().onsuccess = e => {
            const max = Math.max(...e.target.result.map(v => v.id));
            data.id = max === -Infinity ? 1 : max + 1;
            store.add(data);
          }
        })
      }
    }
    return 500;
  }

  async put(url, data) {
    return undefined;
  }

  async delete(url) {
    return undefined;
  }

  async isAuth() {
    return this.#isAuth;
  }
}
