import { FormEvent, useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";

import closeImg from "../../assets/close.svg";

import { useInventory } from "../../hooks/useInventory";
import { Container } from "./styles";

interface NewInventoryModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewInventoryModal({
  isOpen,
  onRequestClose,
}: NewInventoryModalProps) {
  const { pushInventory } = useInventory();
  const [place, setPlace] = useState("");
  const [volume, setVolume] = useState("");
  const [batch, setBatch] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleCreateNewUser(event: FormEvent) {
    event.preventDefault();
  }

  async function validateForm() {
    if (place && volume && batch && quantity) {
      await pushInventory({
        id: Math.floor(Math.random() * (1000000 - 1) + 1),
        user: null,
        place,
        volume,
        batch,
        quantity,
      });

      setPlace("");
      setVolume("");
      setBatch("");
      setQuantity("");
      onRequestClose();
    } else {
      toast.error("Está faltando algumas informações.");
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewUser}>
        <h2>Cadastrar Inventario</h2>
        <input
          placeholder="Local"
          value={place}
          onChange={(event) => setPlace(event.target.value)}
        />
        <input
          placeholder="Volume"
          type="number"
          value={volume}
          onChange={(event) => setVolume(event.target.value)}
        />
        <input
          placeholder="Lote"
          type="text"
          value={batch}
          onChange={(event) => setBatch(event.target.value)}
        />
        <input
          placeholder="Quantidade"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <button type="submit" onClick={validateForm}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
