import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export async function setItem(key: string, value: string) {
  try {
    return await useAsyncStorage(key).setItem(value, (err) => {
      if (err) {
        console.log("setItem fail");
      } else {
        console.log("setItem success");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getItem(key: string) {
  try {
    return await useAsyncStorage(key).getItem();
  } catch (error) {
    console.log(error);
  }
}

export async function removeItem(key: string) {
  try {
    return await useAsyncStorage(key).removeItem((err) => {
      if (err) {
        console.log("removeItem fail");
      } else {
        console.log("removeItem success");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
