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
}

export default LocalStorage;