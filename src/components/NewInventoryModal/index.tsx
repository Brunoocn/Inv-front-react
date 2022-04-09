import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

// import toast from "react-hot-toast";
interface NewUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose }: NewUserModalProps) {
  const [place, setPlace] = useState("");
  const [volume, setVolume] = useState("");
  const [batch, setBatch] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleCreateNewUser(event: FormEvent) {
    event.preventDefault();
  }

  // function validateForm() {
  //   if (name && cpf && email && phone) {
  //     setUsers([
  //       ...users,
  //       {
  //         id: Math.floor(Math.random() * (1000000 - 1) + 1),
  //         name,
  //         cpf,
  //         email,
  //         phone,
  //       },
  //     ]);
  //     onRequestClose();
  //   } else {
  //     toast.error("Está faltando algumas informações.");
  //   }
  // }

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
        <h2>Cadastrar usuário</h2>
        <input
          placeholder="Nome"
          value={place}
          onChange={(event) => setPlace(event.target.value)}
        />
        <input
          placeholder="Volume"
          type="text"
          value={volume}
          onChange={(event) => setVolume(event.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          value={batch}
          onChange={(event) => setBatch(event.target.value)}
        />
        <input
          placeholder="Quantidade"
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
