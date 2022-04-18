import { createContext, ReactNode } from "react";
import { api } from "../services/api";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInProps {
  email: string;
  password: string;
}

type SignInCredentials = {
  email: string;
  password: string;
};

type RegisterCredentials = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<boolean>;
  register(credentials: RegisterCredentials): Promise<boolean>;
  signOut: () => void;
  getUserParams: () => void;
  clearUserParams: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  async function register({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) {
    let request = { name, email, password, confirmPassword };
    const res = await api.post("user/register", request);
    return res.status === 200;
  }

  async function signIn({ email, password }: SignInProps) {
    let request = { email, password };
    const res = await api.post("token", request);
    if (res.status === 200) {
      localStorage.setItem("user-params", res.data.data);
      return true;
    }
    return false;
  }

  async function signOut() {
    localStorage.clear();
    localStorage.removeItem("user-params");
  }

  function getUserParams() {
    const userParams = localStorage.getItem("user-params");
    if (userParams) return JSON.parse(userParams);
  }

  function clearUserParams() {
    localStorage.removeItem("user-params");
  }

  return (
    <AuthContext.Provider
      value={{ signIn, register, signOut, getUserParams, clearUserParams }}
    >
      {children}
    </AuthContext.Provider>
  );
}
