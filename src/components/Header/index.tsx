import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import logoutImg from "../../assets/logout.svg";

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
          <button className="logout-btn">
            <img src={logoutImg} alt="logout" />
          </button>
        </div>
      </Content>
    </Container>
  );
}
