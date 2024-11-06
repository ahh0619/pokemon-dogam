import AppRouter from "./shared/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PokemonProvider } from "./shared/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
      <ToastContainer />
    </PokemonProvider>
  );
}

export default App;
