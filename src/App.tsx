import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
  return (
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
  );
}

export default App;
