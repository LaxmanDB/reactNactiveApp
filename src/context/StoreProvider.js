import React, { useState, useContext } from "react";

const StoreContext = React.createContext();

export const useStore = () => {
  const { store, setStore } = useContext(StoreContext);

  function setData(key, data) {
    setStore({ ...store, [key]: data });
  }

  function getData(key) {
    return store[key];
  }

  function removeData(key) {
    const cloneStore = { ...store };
    delete cloneStore[key];
    setStore(cloneStore);
  }

  return { setData, getData, removeData, store };
};

export default function StoreProvider({ children }) {
  const [store, setStore] = useState({});

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
}
