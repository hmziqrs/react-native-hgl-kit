class WebStorage {
  getItem = localStorage.getItem;
  setItem = localStorage.setItem;
  removeItem = localStorage.removeItem;

  multiGet(keys) {
    return keys.map(key => [key, localStorage.getItem(key)]);
  }

  multiSet(keys) {
    keys.forEach(data => localStorage.setItem(data[0], data[1]));
    return true;
  }

  multiRemove(keys) {
    keys.forEach(key => localStorage.removeItem(key));
    return true;
  }

  clear() {
    return StorageLib.clear();
  }
}

const instance = new WebStorage();

export default instance;
