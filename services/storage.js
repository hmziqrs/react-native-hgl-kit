import { AsyncStorage } from 'react-native';

let StorageLib = AsyncStorage;

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

  multiSet(keys) {
    return StorageLib.multiSet(keys.map(v => [v[0], JSON.stringify(v[1])]));
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

export const storage = new LocalStorage();

export default storage;
