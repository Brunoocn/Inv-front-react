import { SetStateAction, useContext } from "react";
import { IInventory, InventoryContext } from "../contexts/InventoryContext";

interface InventoryContextData {
  inventorys: IInventory[];
  setInventorys: (props: SetStateAction<IInventory[]>) => void;
}

export function useInventory(): InventoryContextData {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useUser must be used within an InventoryProvider");
  }

  return context;
}
