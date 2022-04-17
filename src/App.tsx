import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";
import { InventoryProvider } from "./contexts/InventoryContext";
import { SignUp } from "./pages/SignUp";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function App() {
  return (
    <InventoryProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/criarconta" element={<SignUp />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </InventoryProvider>
  );
}

export default App;
