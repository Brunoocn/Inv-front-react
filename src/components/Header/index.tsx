import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

// interface HeaderProps {
//   onOpenNewUserModal: () => void;
// }


export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Banco Pan" />
        <button type="button" >
          Cadastrar inventario
        </button>
      </Content>
    </Container>
  );
}