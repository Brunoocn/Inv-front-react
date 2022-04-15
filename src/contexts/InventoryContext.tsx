import { createContext, useState, useEffect } from "react";

export type IInventory = {
  id: number;
  place: string;
  volume: string;
  batch: string;
  quantity: string;
};

interface InventoryContextData {
  inventorys: IInventory[];
  pushInventory: (inventory: IInventory) => void;
}

const KEYINVENTORYS = "listaInventorys";
export const InventoryContext = createContext({} as InventoryContextData);

export const InventoryProvider: React.FC = ({ children }) => {
  const [inventorys, setInventorys] = useState<IInventory[]>([]);

  useEffect(() => {
    const inventorysLocalStorage = localStorage.getItem(KEYINVENTORYS);
    if (inventorysLocalStorage === null) {
      setInventorys([]);
    } else {
      const inventorysObject = JSON.parse(inventorysLocalStorage);
      setInventorys(inventorysObject);
    }
  }, []);

  function pushInventory(inventory: IInventory) {
    const inventorysLocalStorage = localStorage.getItem(KEYINVENTORYS);

    if (inventorysLocalStorage === null) {
      localStorage.setItem(KEYINVENTORYS, JSON.stringify([inventory]));
      setInventorys([inventory]);
    } else {
      const inventorysArrayObject = JSON.parse(inventorysLocalStorage);
      inventorysArrayObject.push(inventory);
      localStorage.setItem(
        KEYINVENTORYS,
        JSON.stringify(inventorysArrayObject)
      );
      setInventorys(inventorysArrayObject);
    }
  }

  return (
    <InventoryContext.Provider
      value={{
        inventorys,
        pushInventory,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
