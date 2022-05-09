import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";
import { InventoryProvider } from "./contexts/InventoryContext";
import Modal from "react-modal";
import { RoutesComponent } from "./components/RoutesComponent";

Modal.setAppElement("#root");


export function App() {

  return (
    <InventoryProvider>
      <AuthProvider>
        <Toaster />
        <RoutesComponent />
        <GlobalStyle />
      </AuthProvider>
    </InventoryProvider>
  );
}

export default App;
