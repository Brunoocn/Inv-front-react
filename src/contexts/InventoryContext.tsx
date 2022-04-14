import { SetStateAction, createContext, useState, useEffect } from "react";

export type IInventory = {
  id: number;
  place: string;
  volume: string;
  batch: string;
  quantity: string;
};

interface InventoryContextData {
  inventorys: IInventory[];
  setInventorys: (props: SetStateAction<IInventory[]>) => void;
}

export const InventoryContext = createContext({} as InventoryContextData);

export const InventoryProvider: React.FC = ({ children }) => {
  const [inventorys, setInventorys] = useState<IInventory[]>([]);

  useEffect(() => {
    console.log("rodou useeffect");
    if (inventorys.length !== 0) {
      localStorage.setItem("listaInventorys", JSON.stringify(inventorys));
    } else if (inventorys.length === 0) {
      localStorage.setItem("listaInventorys", JSON.stringify(inventorys));
    }
  });

  function getInventorys() {
    if (
      localStorage.getItem("listaInventorys") !== "[]" &&
      localStorage.getItem("listaInventorys")
    ) {
      setInventorys(JSON.parse(localStorage.getItem("listaUsers") || "[]"));
    }
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    getInventorys();
  });

  return (
    <InventoryContext.Provider
      value={{
        inventorys,
        setInventorys,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
