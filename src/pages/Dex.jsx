import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { DexMain } from "../styles/DexStyles";

const Dex = () => {
  return (
    <DexMain>
      <Dashboard />
      <PokemonList />
    </DexMain>
  );
};

export default Dex;
