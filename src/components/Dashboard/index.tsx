import { IInventory } from "../../contexts/InventoryContext";
import { InfosTable } from "../InfosTable";
import { Container } from "./styles";
import { useInventory } from "../../hooks/useInventory";
import { DeleteInventoryModal } from "../ConfirmModal";
import { useState } from "react";

interface DashboardProps {
  onOpenDeleteInventoryModal: () => void;
}

export function Dashboard({ onOpenDeleteInventoryModal }: DashboardProps) {
  const [isDeleteInventoryModalOpen, setIsDeleteInventoryModalOpen] =
    useState(false);
  const [inventorySelected, setInventorySelected] = useState<IInventory | null>(
    null
  );
  const { deleteInventory } = useInventory();

  function handleDeleteInventory(inventory: IInventory) {
    setInventorySelected(inventory);
    setIsDeleteInventoryModalOpen(true);
  }

  function handleModalConfirmInventory() {
    deleteInventory(inventorySelected?.id);
    setIsDeleteInventoryModalOpen(false);
  }

  return (
    <Container>
      <DeleteInventoryModal
        isOpen={isDeleteInventoryModalOpen}
        onClickCancel={() => setIsDeleteInventoryModalOpen(false)}
        onClickConfirm={handleModalConfirmInventory}
        title="Excluir inventario?"
        message="Tem certeza que você deseja excluir este inventario?"
      />
      <InfosTable
        onOpenDeleteInventoryModal={onOpenDeleteInventoryModal}
        onClickDelete={handleDeleteInventory}
      />
    </Container>
  );
}
