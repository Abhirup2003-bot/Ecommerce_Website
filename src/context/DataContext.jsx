import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    async function featchApiData() {
      const data = await fetch(url);
      const response = await data.json();
      setApiData(response.products);
    }
    featchApiData();
  }, []);

  return (
    <DataContext.Provider value={{ apiData, setApiData }}>
      {children}
    </DataContext.Provider>
  );
};
