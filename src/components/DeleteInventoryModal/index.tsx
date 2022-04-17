import Modal from "react-modal";

interface DeleteInventoryModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteInventoryModal({
  isOpen,
  onRequestClose,
}: DeleteInventoryModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-delete-content"
    >
      
    </Modal>
  );
}
