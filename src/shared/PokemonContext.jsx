import { createContext, useState } from "react";
import { toast } from "react-toastify";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handelAddPokemon = (pokemon) => {
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      toast.info("이미 추가된 포켓몬입니다.");
      return;
    }

    if (selectedPokemon.length > 5) {
      toast.info("최대 6개까지만 추가할 수 있습니다.");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const handleRemovePokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== id));
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, handelAddPokemon, handleRemovePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
