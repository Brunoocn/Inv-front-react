import { useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewUserModal } from "../../components/NewInventoryModal";

export function Home() {
  const [isNewInventoryModalOpen, setIsNewInventoryModalOpen] = useState(false);

  function handleOpenNewInventoryModal() {
    setIsNewInventoryModalOpen(true);
  }

  function handleCloseNewInventoryModal() {
    setIsNewInventoryModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewInventoryModal={handleOpenNewInventoryModal} />

      <Dashboard />

      <NewUserModal
        isOpen={isNewInventoryModalOpen}
        onRequestClose={handleCloseNewInventoryModal}
      />
    </>
  );
}
