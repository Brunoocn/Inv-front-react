import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import { SignOutButton } from "../SignOutButton";

interface HeaderProps {
  onOpenNewInventoryModal: () => void;
}

export function Header({ onOpenNewInventoryModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Banco Pan" />
        <div>
          <button type="button" onClick={onOpenNewInventoryModal}>
            Cadastrar inventario
          </button>
          <SignOutButton />
        </div>
      </Content>
    </Container>
  );
}
