import { useState } from "react";
import { Link } from "react-router-dom";
import { Background } from "../../components/Background";
import { InputForm } from "../../components/InputForm";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Background />
      <Title>Crie sua conta!</Title>
      <Container>
        <InputForm
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <InputForm
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <InputForm
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <InputForm
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirme a senha"
        />
      </Container>
    </>
  );
}
