import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewInventoryModal } from "../../components/NewInventoryModal";

export function Home() {
  const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);

  function handleOpenNewInventoryModal() {
    setIsInventoryModalOpen(true);
  }

  function handleCloseNewInventoryModal() {
    setIsInventoryModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewInventoryModal={handleOpenNewInventoryModal} />

      <Dashboard />

      <NewInventoryModal
        isOpen={isInventoryModalOpen}
        onRequestClose={handleCloseNewInventoryModal}
      />
    </>
  );
}
