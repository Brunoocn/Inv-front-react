import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewInventoryModal: () => void;
}

export function Header({ onOpenNewInventoryModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Banco Pan" />
        <button type="button" onClick={onOpenNewInventoryModal}>
          Cadastrar inventario
        </button>
      </Content>
    </Container>
  );
}
