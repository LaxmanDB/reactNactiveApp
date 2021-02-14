import * as SecureStore from "expo-secure-store";

const key = "authToken";

export const getToken = async () => {
  let token;
  try {
    token = await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("UNABLE TO GET TOKEN");
  } finally {
    return token;
  }
};

export const setToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("FAILED TO STORE TOKEN");
  }
};

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("FAILED TO REMOVE TOKEN");
  }
};
