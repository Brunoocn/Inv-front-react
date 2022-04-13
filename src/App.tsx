import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";
import { InventoryProvider } from "./contexts/InventoryContext";

export function App() {
  return (
    <InventoryProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </InventoryProvider>
  );
}

export default App;
