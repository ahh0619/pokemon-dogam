import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { DexMain } from "../styles/DexStyles";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handelAddPokemon = (pokemon) => {
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 추가된 포켓몬입니다.");
      return;
    }

    if (selectedPokemon.length > 5) {
      alert("최대 6개까지만 추가할 수 있습니다.");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const handleRemovePokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== id));
  };

  return (
    <DexMain>
      <Dashboard
        selectedPokemon={selectedPokemon}
        handleRemovePokemon={handleRemovePokemon}
      />
      <PokemonList
        selectedPokemon={selectedPokemon}
        handelAddPokemon={handelAddPokemon}
        handleRemovePokemon={handleRemovePokemon}
      />
    </DexMain>
  );
};

export default Dex;
