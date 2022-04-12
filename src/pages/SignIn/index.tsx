import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../../components/Background";
import { InputForm } from "../../components/InputForm";
import { Title } from "../../components/Title";
import { Container } from "./styles";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function validateForm() {
    if (email && password) {
      const data = {
        email,
        password,
      };
      const res = await signIn(data);
      if (res) {
        navigate("/home");
      }
    } else {
      toast.error("Está faltando algumas informações.");
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Background />
      <Title>Sign In</Title>
      <Container onSubmit={handleSubmit}>
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

        <button type="submit" onClick={validateForm}>
          Sign In
        </button>
      </Container>
    </>
  );
}
