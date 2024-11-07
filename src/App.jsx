import { Provider } from "react-redux";
import AppRouter from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PokemonStore from "./redux/PokemonStore";

function App() {
  return (
    <Provider store={PokemonStore}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  );
}

export default App;
