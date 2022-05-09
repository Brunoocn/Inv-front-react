import { createContext, useState, useEffect, SetStateAction } from "react";
// import { useAuth } from "../hooks/useAuth";

export type IInventory = {
  id: any;
  user: string | null;
  place: string;
  volume: string;
  batch: string;
  quantity: string;
};

interface InventoryContextData {
  inventorys: IInventory[];
  pushInventory: (inventory: IInventory) => void;
  setInventorys: (props: SetStateAction<IInventory[]>) => void;
  deleteInventory: (inventoryId: any) => void;
  // getInventorys: () => IInventory[];
}

const KEYINVENTORYS = "listaInventorys";
export const InventoryContext = createContext({} as InventoryContextData);

export const InventoryProvider: React.FC = ({ children }) => {
  const [inventorys, setInventorys] = useState<IInventory[]>([]);
  // const { getUserEmail, getUserParams } = useAuth()


  useEffect(() => {
    const inventorysLocalStorage = localStorage.getItem(KEYINVENTORYS);
    if (inventorysLocalStorage === null) {
      setInventorys([]);
    } else {
      const inventorysObject = JSON.parse(inventorysLocalStorage);
      setInventorys(inventorysObject);
    }
  }, []);


  // function getInventorys() {
  //   const userEmail = getUserParams();
  //   return inventorys.filter((inventory) => inventory.user === userEmail.email)
  // }

  function pushInventory(inventory: IInventory) {
    // const userEmail = getUserParams();
    // inventory.user = userEmail.email;
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

  function deleteInventory(inventoryId: any) {
    if (inventoryId === undefined) {
      return;
    }
    const inventory = inventorys.find(
      (inventory) => inventory.id === inventoryId
    );
    if (inventory === null) {
      return;
    } else {
      const inventorysLocalStorage = localStorage.getItem(KEYINVENTORYS);
      if (inventorysLocalStorage === null) {
        return;
      }
      const inventorysArray = JSON.parse(inventorysLocalStorage);
      const inventoryLocalStorage = inventorysArray.find(
        (inventory: IInventory) => inventory.id === inventoryId
      );
      if (inventoryLocalStorage === null) {
        return;
      }
      const index = inventorysArray.indexOf(inventoryLocalStorage);
      inventorysArray.splice(index, 1);
      localStorage.setItem(KEYINVENTORYS, JSON.stringify(inventorysArray));
      setInventorys(inventorysArray);
    }
  }

  return (
    <InventoryContext.Provider
      value={{
        inventorys,
        pushInventory,
        setInventorys,
        deleteInventory,
        // getInventorys
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
