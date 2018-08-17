import webStorage from './storage.web';

let StorageLib = webStorage;

export function setStorageLib(lib) {
  StorageLib = lib;
}

class LocalStorage {
  setItem(key, data) {
    return StorageLib.setItem(key, JSON.stringify(data));
  }

  async getItem(...args) {
    try {
      const data = await StorageLib.getItem(...args);
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  async multiGet(keys) {
    try {
      const raw = await StorageLib.multiGet(keys);
      return raw.map(v => [v[0], JSON.parse(v[1])]);
    } catch (e) {
      throw e;
    }
  }

  async multiSet(keys) {
    try {
      return await StorageLib.multiSet(
        keys.map(v => [v[0], JSON.stringify(v[1])])
      );
    } catch (e) {
      throw e;
    }
  }

  async multiRemove(keys) {
    return StorageLib.multiRemove(keys);
  }

  removeItem(key) {
    return StorageLib.removeItem(key);
  }

  clear() {
    return StorageLib.clear();
  }
}

const instance = new LocalStorage();

export default instance;
