import * as SecureStore from "expo-secure-store";
import { TOKEN } from "./constants";

const storage = {
  setItem: (key: string, value: string) => {
    return SecureStore.setItemAsync(key, value);
  },
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  removeItem: (key: string) => {
    return SecureStore.deleteItemAsync(key);
  },
  removeMulItem: (array: Array<string>) => {
    return Promise.all(array.map((item) => SecureStore.deleteItemAsync(item)));
  },
  destroy: () => {
    return Promise.all([TOKEN].map((item) => SecureStore.deleteItemAsync(item)));
  },
};

export default storage;
