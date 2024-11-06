import AppRouter from "./shared/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppRouter />;
      <ToastContainer />
    </>
  );
}

export default App;
