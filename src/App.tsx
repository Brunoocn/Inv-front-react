import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";
import { InventoryProvider } from "./contexts/InventoryContext";
import { SignUp } from "./pages/SignUp";
import Modal from "react-modal";
import { ReactNode } from "react";
import { useAuth } from "./hooks/useAuth";

Modal.setAppElement("#root");

type PrivateProps = {
  children: ReactNode;
};

export function App() {
  const Private = ({ children }: PrivateProps) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
      return <Navigate to="/" />
    }

    return (
      <>
        {children}
      </>
    )
  }

  return (
    <InventoryProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Private><Home /></Private>} />
            <Route path="/criarconta" element={<SignUp />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </InventoryProvider>
  );
}

export default App;
