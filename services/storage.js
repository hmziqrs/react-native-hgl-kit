import { AsyncStorage } from 'react-native';

class LocalStorage {
  setItem(key, data) {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  }

  async getItem(...args) {
    try {
      const data = await AsyncStorage.getItem(...args);
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  async multiGet(keys) {
    try {
      const raw = await AsyncStorage.multiGet(keys);
      return raw.map(v => [v[0], JSON.parse(v[1])]);
    } catch (e) {
      throw e;
    }
  }

  async multiSet(keys) {
    try {
      return await AsyncStorage.multiSet(
        keys.map(v => [v[0], JSON.stringify(v[1])])
      );
    } catch (e) {
      throw e;
    }
  }

  async multiRemove(keys) {
    return AsyncStorage.multiRemove(keys);
  }

  removeItem(key) {
    return AsyncStorage.removeItem(key);
  }

  clear() {
    return AsyncStorage.clear();
  }
}

const instance = new LocalStorage();

export default instance;
