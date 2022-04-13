import {
  SetStateAction,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

export type IInventory = {
  id: number;
  place: string;
  volume: number;
  batch: string;
  quantity: number;
};

interface InventoryContextData {
  inventorys: IInventory[];
  setInventorys: (props: SetStateAction<IInventory[]>) => void;
}

const InventoryContext = createContext({} as InventoryContextData);

const InventoryProvider: React.FC = ({ children }) => {
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

function useInventory(): InventoryContextData {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useUser must be used within an InventoryProvider");
  }

  return context;
}

export { InventoryProvider, useInventory };
