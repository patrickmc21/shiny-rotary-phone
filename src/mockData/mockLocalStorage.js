class LocalStorage {
  constructor() {
    this.store = {};
  }

  setItem(key, string) {
    this.store[key] = string;
    this.length++;
  }

  getItem(key) {
    return this.store[key];
  }

  clear() {
    this.store = {};
  }
}

export default LocalStorage;