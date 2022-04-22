import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewInventoryModal } from "../../components/NewInventoryModal";

export function Home() {
  const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);
  const [isDeleteInventoryModalOpen, setIsDeleteInventoryModalOpen] =
    useState(false);

  function handleOpenInventoryModal() {
    setIsInventoryModalOpen(true);
  }

  function handleCloseInventoryModal() {
    setIsInventoryModalOpen(false);
  }

  function handleOpenDeleteInventoryModal() {
    setIsDeleteInventoryModalOpen(true);
  }

  return (
    <>
      <Header onOpenNewInventoryModal={handleOpenInventoryModal} />

      <Dashboard onOpenDeleteInventoryModal={handleOpenDeleteInventoryModal} />

      <NewInventoryModal
        isOpen={isInventoryModalOpen}
        onRequestClose={handleCloseInventoryModal}
      />
    </>
  );
}
