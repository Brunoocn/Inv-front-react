import { useState } from "react";
import { Background } from "../../components/Background";
import { InputForm } from "../../components/InputForm";
import { Container } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Background />
      <Container>
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
          placeholder="Password"
        />
      </Container>
    </>
  );
}
